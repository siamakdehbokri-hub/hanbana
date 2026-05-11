import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { randomUUID } from "crypto";
import bcrypt from "bcrypt";
import { PrismaService } from "../common/prisma.service";

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService, private readonly jwt: JwtService) {}

  async signup(input: { email: string; password: string; username: string }) {
    const passwordHash = await bcrypt.hash(input.password, 12);
    const user = await this.prisma.user.create({
      data: { email: input.email, username: input.username, passwordHash }
    });
    return this.issueTokens(user.id, user.email, user.role);
  }

  async signin(input: { email: string; password: string }) {
    const user = await this.prisma.user.findUnique({ where: { email: input.email } });
    if (!user || !(await bcrypt.compare(input.password, user.passwordHash ?? ""))) throw new UnauthorizedException();
    return this.issueTokens(user.id, user.email, user.role);
  }

  async refresh(refreshToken: string) {
    const payload = await this.jwt.verifyAsync(refreshToken, { secret: process.env.JWT_REFRESH_SECRET ?? "dev-refresh" });
    return this.issueTokens(payload.sub, payload.email, payload.role);
  }

  async forgotPassword(email: string) {
    await this.prisma.passwordReset.create({ data: { email, token: randomUUID(), expiresAt: new Date(Date.now() + 1000 * 60 * 30) } });
    return { ok: true };
  }

  private async issueTokens(userId: string, email: string, role: string) {
    const payload = { sub: userId, email, role };
    return {
      accessToken: await this.jwt.signAsync(payload),
      refreshToken: await this.jwt.signAsync(payload, { secret: process.env.JWT_REFRESH_SECRET ?? "dev-refresh", expiresIn: "30d" })
    };
  }
}
