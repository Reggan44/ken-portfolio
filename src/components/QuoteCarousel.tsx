"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, MessageSquare } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Kennedy's ability to take complex hardware specs and deliver reliable ESP32 FreeRTOS firmware with cellular GSM telemetry for Cargo-Care was outstanding. Real-time accuracy and zero system crashes.",
    author: "Technical Lead",
    role: "Logistics & Fleet Telemetry Solutions",
    tag: "— WHAT COLLABORATORS SAY",
  },
  {
    id: 2,
    quote:
      "The Oppie-Box multi-phase power metering board was designed with exceptional attention to high-voltage isolation, precision sensing, and seamless Azure Cloud edge processing integration.",
    author: "Senior Systems Architect",
    role: "Industrial Renewable Energy Labs",
    tag: "— HARDWARE VALIDATION REVIEW",
  },
  {
    id: 3,
    quote:
      "Safe Safari winning 1st place in Kenya & East Africa before advancing as a Global Finalist at YESIST12 in Malaysia is proof of Kennedy's technical brilliance and creative engineering leadership.",
    author: "Competition Panel Judge",
    role: "Global YESIST12 Finals (Malaysia)",
    tag: "— INTERNATIONAL AWARD CITATION",
  },
];

export function QuoteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-14 px-6 md:px-12 bg-white text-zinc-900 rounded-3xl my-12 border border-zinc-200/80 shadow-md relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        {/* Header Badge */}
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#783fc6]/10 text-[#783fc6] text-xs font-mono font-bold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{current.tag}</span>
          </div>

          {/* Circular Navigation Buttons (< / >) */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="w-10 h-10 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-800 flex items-center justify-center hover:bg-[#783fc6] hover:text-white hover:border-[#783fc6] transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="w-10 h-10 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-800 flex items-center justify-center hover:bg-[#783fc6] hover:text-white hover:border-[#783fc6] transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quote Content */}
        <div className="space-y-4">
          <Quote className="w-8 h-8 text-[#783fc6] opacity-70" />
          <p className="text-xl sm:text-2xl font-serif leading-relaxed text-zinc-900 italic">
            "{current.quote}"
          </p>

          <div className="pt-2">
            <div className="text-sm font-bold text-zinc-900 font-mono">
              {current.author}
            </div>
            <div className="text-xs text-zinc-500 font-mono">
              {current.role}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center gap-1.5 pt-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentIndex
                  ? "w-8 bg-[#783fc6]"
                  : "w-2 bg-zinc-200 hover:bg-zinc-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
