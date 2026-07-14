import React from "react";
import { Particles } from "@/components/landing/particles";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <Particles />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary-400/[0.08] rounded-full blur-[100px] animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[140px]" />
      </div>
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Navbar Minimal */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-20">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary-400 transition-shadow duration-300 group-hover:shadow-glow">
            <GraduationCap size={20} className="text-white" />
          </div>
          <span className="font-display text-xl font-bold text-white">
            Edu<span className="text-primary">X</span>Education
          </span>
        </Link>
      </div>

      <div className="relative z-10 w-full max-w-md px-4 sm:px-6">{children}</div>
    </div>
  );
}
