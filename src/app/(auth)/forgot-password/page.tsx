"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { KeyRound, ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
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
          <KeyRound size={24} className="text-primary-300" />
        </div>
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
          Reset Password
        </h1>
        <p className="text-muted text-sm">
          Enter your email and we&apos;ll send you a link to reset your password.
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 px-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-muted/60 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all"
            />
          </div>
          <Button type="submit" variant="primary" className="w-full h-12 shadow-glow">
            Send Reset Link
          </Button>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center"
        >
          <p className="text-emerald-400 text-sm font-medium mb-1">
            Check your inbox!
          </p>
          <p className="text-emerald-500/80 text-xs">
            We&apos;ve sent a password reset link to {email}
          </p>
        </motion.div>
      )}

      <div className="mt-8 text-center text-sm">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          Back to login
        </Link>
      </div>
    </motion.div>
  );
}
