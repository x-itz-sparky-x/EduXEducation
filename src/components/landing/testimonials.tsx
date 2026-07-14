"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    course: "Financial Market Fundamentals",
    rating: 5,
    review:
      "EduXEducation completely transformed my understanding of financial markets. The structured approach, combined with real-world case studies, made complex concepts incredibly easy to grasp. I went from zero knowledge to confidently analyzing markets within weeks.",
    initials: "AS",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Priya Patel",
    course: "Technical Analysis Mastery",
    rating: 5,
    review:
      "The Technical Analysis course is phenomenal. The mentors break down every concept with clarity, and the practice assignments really solidify your learning. The lifetime access means I can revisit lessons whenever I need a refresher.",
    initials: "PP",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    name: "Rahul Verma",
    course: "Risk Management Strategies",
    rating: 5,
    review:
      "Risk management was always my weak point until I took this course. The frameworks taught here are practical and immediately applicable. The community support is outstanding — always someone ready to help and discuss strategies.",
    initials: "RV",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    name: "Sneha Iyer",
    course: "Trading Psychology",
    rating: 5,
    review:
      "This course changed my entire mindset. Understanding psychology was the missing piece in my education. The instructors are empathetic, knowledgeable, and truly care about student outcomes. Best investment I've ever made in myself.",
    initials: "SI",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    name: "Karan Mehta",
    course: "Capital Management",
    rating: 5,
    review:
      "The Capital Management module is incredibly well-structured. From position sizing to portfolio allocation — every topic is covered with depth and precision. I now have a systematic approach to managing my capital effectively.",
    initials: "KM",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "Ananya Reddy",
    course: "Price Action Masterclass",
    rating: 5,
    review:
      "The Price Action Masterclass is world-class. The depth of content, the quality of video production, and the mentor support are all exceptional. I've recommended EduXEducation to everyone in my network. Truly a premium experience.",
    initials: "AR",
    gradient: "from-cyan-500 to-blue-600",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const current = testimonials[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary-400 mb-3">
            Student Stories
          </p>
          <h2 className="section-heading mb-4">
            What Our{" "}
            <span className="gradient-text-purple">Students Say</span>
          </h2>
          <p className="section-subheading">
            Real experiences from real learners who transformed their
            understanding of financial markets.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="glass-card p-8 sm:p-12"
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote
                    size={40}
                    className="text-primary/30"
                    fill="rgba(124, 58, 237, 0.1)"
                  />
                </div>

                {/* Review */}
                <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 italic">
                  &ldquo;{current.review}&rdquo;
                </p>

                {/* Student Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${current.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                  >
                    {current.initials}
                  </div>

                  <div>
                    <h4 className="font-display font-semibold text-white text-base">
                      {current.name}
                    </h4>
                    <p className="text-sm text-muted">{current.course}</p>
                    {/* Stars */}
                    <div className="flex items-center gap-0.5 mt-1">
                      {Array.from({ length: current.rating }).map((_, i) => (
                        <span
                          key={i}
                          className="text-amber-400 text-sm"
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
