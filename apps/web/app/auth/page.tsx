import { Chrome, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AuthPage() {
  return (
    <div className="grid min-h-dvh place-items-center px-4 py-10 sm:px-8 lg:px-10">
      <div className="glass w-full max-w-md rounded-[2rem] p-6">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-habana-green text-2xl font-black text-black">H</div>
          <h1 className="text-3xl font-black">Welcome to HABANA</h1>
          <p className="mt-2 text-sm text-white/55">Sign in for playlists, offline music, recommendations, and creator tools.</p>
        </div>
        <div className="space-y-3">
          <input className="h-12 w-full rounded-2xl border border-white/10 bg-white/8 px-4 outline-none focus:border-habana-green" placeholder="Email or username" />
          <input className="h-12 w-full rounded-2xl border border-white/10 bg-white/8 px-4 outline-none focus:border-habana-green" placeholder="Password" type="password" />
          <Button variant="primary" className="w-full"><Mail className="h-4 w-4" /> Sign In</Button>
          <Button className="w-full"><Chrome className="h-4 w-4" /> Continue with Google</Button>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 text-center text-sm text-white/55">
          <a href="#" className="hover:text-white">Create account</a>
          <a href="#" className="hover:text-white">Forgot password</a>
        </div>
        <div className="mt-6 flex items-start gap-3 rounded-2xl bg-habana-green/10 p-4 text-sm text-white/65"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-habana-green" /> JWT sessions, refresh token rotation, email verification, and OAuth are modeled in the API.</div>
      </div>
    </div>
  );
}
