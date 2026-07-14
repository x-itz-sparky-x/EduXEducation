"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Particles } from "./particles";
import {
  ArrowRight,
  Play,
  BookOpen,
  GraduationCap,
  Award,
  Lightbulb,
  Monitor,
  BarChart3,
} from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <Particles />
        {/* Purple gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary-400/[0.08] rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[140px]" />
      </div>

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-300 text-sm font-medium mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-300" />
              </span>
              Trusted by 10,000+ Learners Worldwide
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
            >
              Learn Future-Ready{" "}
              <span className="gradient-text-purple">Financial Skills</span>{" "}
              with Confidence
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-muted leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
            >
              Master financial education through structured learning paths,
              expert guidance, practical case studies, and lifetime access to
              premium educational resources.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="primary"
                size="xl"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                className="group"
              >
                Explore Programs
              </Button>
              <Button
                variant="secondary"
                size="xl"
                icon={<Play size={18} className="ml-0.5" />}
              >
                Start Learning
              </Button>
            </motion.div>

            {/* Social proof mini */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex items-center gap-4 mt-10 justify-center lg:justify-start"
            >
              {/* Avatar stack */}
              <div className="flex -space-x-3">
                {[
                  "bg-gradient-to-br from-violet-400 to-purple-600",
                  "bg-gradient-to-br from-fuchsia-400 to-purple-600",
                  "bg-gradient-to-br from-indigo-400 to-purple-600",
                  "bg-gradient-to-br from-purple-400 to-violet-600",
                  "bg-gradient-to-br from-pink-400 to-purple-600",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full ${bg} border-2 border-background flex items-center justify-center text-xs font-bold text-white`}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-amber-400">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="text-muted">
                  Rated <span className="text-white font-medium">4.9/5</span> by students
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: 3D Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main illustration container */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Glow behind */}
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] animate-pulse-slow" />

                {/* Central element - Dashboard mockup */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.08] backdrop-blur-xl shadow-2xl overflow-hidden"
                >
                  {/* Top bar */}
                  <div className="flex items-center gap-2 p-4 border-b border-white/[0.06]">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                      <div className="w-3 h-3 rounded-full bg-green-400/60" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="h-5 bg-white/[0.06] rounded-lg w-2/3 mx-auto" />
                    </div>
                  </div>

                  {/* Content mockup */}
                  <div className="p-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                        <BarChart3 size={18} className="text-primary-300" />
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-white/10 rounded-full w-3/4 mb-1.5" />
                        <div className="h-2 bg-white/[0.05] rounded-full w-1/2" />
                      </div>
                    </div>

                    {/* Progress bars */}
                    <div className="space-y-3 mt-4">
                      {[75, 60, 90, 45].map((width, i) => (
                        <div key={i}>
                          <div className="flex justify-between mb-1">
                            <div className="h-2 bg-white/10 rounded w-20" />
                            <div className="h-2 bg-white/10 rounded w-8" />
                          </div>
                          <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${width}%` }}
                              transition={{ duration: 1.5, delay: 0.8 + i * 0.2, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-primary to-primary-400 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Mini cards */}
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      {[
                        { label: "Completed", value: "24", color: "from-emerald-500/20 to-emerald-500/5" },
                        { label: "In Progress", value: "8", color: "from-primary/20 to-primary/5" },
                      ].map((item) => (
                        <div key={item.label} className={`p-3 rounded-xl bg-gradient-to-br ${item.color} border border-white/[0.06]`}>
                          <p className="text-xl font-bold text-white">{item.value}</p>
                          <p className="text-[10px] text-muted mt-0.5">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -top-2 right-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-primary-400/20 border border-primary/20 flex items-center justify-center shadow-glow backdrop-blur-sm"
                >
                  <GraduationCap size={28} className="text-primary-300" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-2 left-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/20 flex items-center justify-center backdrop-blur-sm"
                >
                  <Award size={24} className="text-emerald-400" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="absolute top-1/4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 flex items-center justify-center backdrop-blur-sm"
                >
                  <Lightbulb size={20} className="text-amber-400" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0], x: [0, -5, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute bottom-1/4 -right-2 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20 flex items-center justify-center backdrop-blur-sm"
                >
                  <BookOpen size={20} className="text-blue-400" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute top-2 left-1/4 w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-600/10 border border-pink-500/20 flex items-center justify-center backdrop-blur-sm"
                >
                  <Monitor size={16} className="text-pink-400" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
