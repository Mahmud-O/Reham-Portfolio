"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechCorp",
    text: "Reham delivered our cross-platform app ahead of schedule with exceptional code quality. Her understanding of Flutter's widget tree resulted in a blazing fast 60fps experience.",
    rating: 5,
  },
  {
    name: "Marcus Rivera",
    role: "Product Manager, AppVenture",
    text: "Working with Reham was a game-changer. She transformed our single-platform apps into a unified Flutter codebase, reducing maintenance time by 60% and ensuring feature parity.",
    rating: 5,
  },
  {
    name: "Aisha Patel",
    role: "Founder, MobileFirst",
    text: "Reham's expertise in Dart and Flutter helped us launch on iOS, Android, and Web simultaneously, saving us months of development time and significant costs.",
    rating: 5,
  },
  {
    name: "James O'Brien",
    role: "VP Engineering, DataFlow",
    text: "Her attention to detail in UI/UX implementation is remarkable. Every custom animation, every sliver transition — pixel perfect. Our Flutter app has never looked or felt this native.",
    rating: 5,
  },
  {
    name: "Luna Martinez",
    role: "Design Lead, NexGen",
    text: "As a designer, I appreciate developers who truly care about bringing designs to life. Reham goes above and beyond with Flutter's animation engine to ensure every detail is implemented perfectly.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "96px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px" }}
        >
          <div>
            <p style={{ fontSize: "12px", color: "#D946EF", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, marginBottom: "12px" }}>
              Testimonials
            </p>
            <h2 style={{ fontSize: "clamp(28px, 3vw, 36px)", fontWeight: 700, color: "#f8fafc" }}>
              Client Love Letters
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Infinite marquee container */}
      <div
        style={{
          display: "flex",
          overflow: "hidden",
          width: "100%",
          paddingBottom: "16px",
        }}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
          style={{
            display: "flex",
            gap: "24px",
            width: "max-content",
            paddingLeft: "24px",
          }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="glass"
              style={{
                borderRadius: "16px",
                padding: "32px",
                width: "340px",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "4px" }}>
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} size={14} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>

              {/* Quote */}
              <p style={{ fontSize: "15px", color: "#cbd5e1", lineHeight: 1.7, flex: 1 }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "50%",
                  background: "linear-gradient(135deg, #D946EF, #F97316)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, fontSize: "16px", color: "white",
                }}>
                  {t.name[0]}
                </div>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: 600, color: "#f8fafc" }}>{t.name}</p>
                  <p style={{ fontSize: "12px", color: "#64748b" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
