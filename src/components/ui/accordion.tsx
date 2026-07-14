"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Accordion Root ───────────────────────── */
interface AccordionProps {
  children: React.ReactNode;
  className?: string;
  type?: "single" | "multiple";
}

interface AccordionContextType {
  openItems: string[];
  toggle: (value: string) => void;
  type: "single" | "multiple";
}

const AccordionContext = React.createContext<AccordionContextType>({
  openItems: [],
  toggle: () => {},
  type: "single",
});

function Accordion({ children, className, type = "single" }: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggle = (value: string) => {
    if (type === "single") {
      setOpenItems((prev) =>
        prev.includes(value) ? [] : [value]
      );
    } else {
      setOpenItems((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggle, type }}>
      <div className={cn("space-y-3", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

/* ─── Accordion Item ───────────────────────── */
interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

const AccordionItemContext = React.createContext<{
  value: string;
  isOpen: boolean;
}>({
  value: "",
  isOpen: false,
});

function AccordionItem({ children, value, className }: AccordionItemProps) {
  const { openItems } = React.useContext(AccordionContext);
  const isOpen = openItems.includes(value);

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div
        className={cn(
          "rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-all duration-300",
          isOpen && "border-primary/20 bg-white/[0.04]",
          className
        )}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

/* ─── Accordion Trigger ────────────────────── */
interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  const { toggle } = React.useContext(AccordionContext);
  const { value, isOpen } = React.useContext(AccordionItemContext);

  return (
    <button
      onClick={() => toggle(value)}
      className={cn(
        "flex w-full items-center justify-between px-6 py-5 text-left text-base font-medium text-white/90 transition-colors duration-200 hover:text-white",
        className
      )}
    >
      <span className="pr-4">{children}</span>
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex-shrink-0 text-primary"
      >
        <ChevronDown size={20} />
      </motion.span>
    </button>
  );
}

/* ─── Accordion Content ────────────────────── */
interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

function AccordionContent({ children, className }: AccordionContentProps) {
  const { isOpen } = React.useContext(AccordionItemContext);

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-hidden"
        >
          <div className={cn("px-6 pb-5 text-sm text-muted leading-relaxed", className)}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
