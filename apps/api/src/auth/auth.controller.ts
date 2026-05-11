import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post("signup")
  signup(@Body() body: { email: string; password: string; username: string }) {
    return this.auth.signup(body);
  }

  @Post("signin")
  signin(@Body() body: { email: string; password: string }) {
    return this.auth.signin(body);
  }

  @Post("refresh")
  refresh(@Body() body: { refreshToken: string }) {
    return this.auth.refresh(body.refreshToken);
  }

  @Post("forgot-password")
  forgotPassword(@Body() body: { email: string }) {
    return this.auth.forgotPassword(body.email);
  }

  @Get("google")
  googleLogin() {
    return { redirect: "/api/v1/auth/google/callback" };
  }
}
