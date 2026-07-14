"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary-600/10 to-primary-800/20" />
          <div className="absolute inset-0 dot-pattern opacity-20" />

          {/* Glow orbs */}
          <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-primary-400/[0.15] rounded-full blur-[80px]" />

          {/* Border */}
          <div className="absolute inset-0 rounded-3xl border border-primary/20" />

          {/* Content */}
          <div className="relative px-8 py-16 sm:px-16 sm:py-24 text-center">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 border border-primary/20 mb-8"
            >
              <Sparkles size={28} className="text-primary-300" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 max-w-2xl mx-auto leading-tight"
            >
              Start Your Learning Journey{" "}
              <span className="gradient-text-purple">Today</span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Join thousands of learners building their future with structured
              financial education. Your transformation starts with a single
              step.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                variant="primary"
                size="xl"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                className="shadow-glow"
              >
                Join EduXEducation
              </Button>
              <Button variant="outline" size="xl">
                View Programs
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
