"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserPlus } from "lucide-react";

export default function RegisterPage() {
  const handleGoogleSignup = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-8 sm:p-10 w-full"
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 border border-primary/20 mb-4 shadow-glow">
          <UserPlus size={24} className="text-primary-300" />
        </div>
        <h1 className="font-display text-3xl font-bold text-white mb-2">
          Create an Account
        </h1>
        <p className="text-muted text-sm">Start your premium financial education.</p>
      </div>

      <div className="space-y-6">
        <Button
          variant="secondary"
          className="w-full h-12 relative border-white/10 hover:border-primary/50 group"
          onClick={handleGoogleSignup}
        >
          <div className="absolute left-4">
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
          </div>
          <span className="font-medium text-white/90">Sign up with Google</span>
        </Button>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="terms"
            className="mt-1 flex-shrink-0 appearance-none w-4 h-4 rounded-sm border border-white/20 bg-white/5 checked:bg-primary checked:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors cursor-pointer relative checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:text-[10px] checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
            defaultChecked
          />
          <label htmlFor="terms" className="text-xs text-muted leading-relaxed">
            By creating an account, I agree to the{" "}
            <Link href="#" className="text-primary-300 hover:underline">Terms of Service</Link>
            {" "}and{" "}
            <Link href="#" className="text-primary-300 hover:underline">Privacy Policy</Link>.
          </label>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-muted">
        <p>
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary-300 hover:text-primary-400 font-medium transition-colors"
          >
            Log in
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
