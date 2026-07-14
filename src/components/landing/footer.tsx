"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Mail,
  ArrowRight,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "About Us", href: "#" },
    { label: "Courses", href: "#courses" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Free Resources", href: "#" },
    { label: "Community", href: "#" },
    { label: "Events", href: "#" },
    { label: "Help Center", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative border-t border-white/[0.06]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              {/* Logo */}
              <a href="#" className="flex items-center gap-2.5 mb-5">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary-400">
                  <GraduationCap size={20} className="text-white" />
                </div>
                <span className="font-display text-xl font-bold text-white">
                  Edu<span className="text-primary">X</span>Education
                </span>
              </a>

              <p className="text-sm text-muted leading-relaxed mb-6 max-w-sm">
                EduXEducation is a premium financial education platform
                committed to empowering learners with structured knowledge,
                expert mentorship, and real-world skills for lasting success.
              </p>

              {/* Newsletter */}
              <div>
                <p className="text-sm font-medium text-white mb-3">
                  Subscribe to our newsletter
                </p>
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                    />
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder:text-muted/60 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all duration-200"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary hover:bg-primary-600 flex items-center justify-center transition-colors duration-200"
                    aria-label="Subscribe"
                  >
                    <ArrowRight size={16} className="text-white" />
                  </button>
                </form>
                {subscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-emerald-400 mt-2"
                  >
                    ✓ Subscribed successfully!
                  </motion.p>
                )}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="lg:col-span-2">
                <h4 className="font-display font-semibold text-white text-sm mb-4">
                  {title}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Column */}
            <div className="lg:col-span-2">
              <h4 className="font-display font-semibold text-white text-sm mb-4">
                Connect
              </h4>
              <div className="space-y-3 mb-6">
                <p className="text-sm text-muted">
                  support@eduxeducation.com
                </p>
                <p className="text-sm text-muted">
                  Mon – Sat, 10 AM – 7 PM IST
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-muted hover:text-white hover:border-primary/30 hover:bg-primary/10 transition-all duration-200"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} EduXEducation. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-xs text-muted hover:text-white transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-xs text-muted hover:text-white transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-xs text-muted hover:text-white transition-colors"
              >
                Refunds
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
