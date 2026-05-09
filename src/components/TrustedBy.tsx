"use client";

import { motion } from "framer-motion";

const logos = [
  "TechCorp",
  "AppVenture",
  "MobileFirst",
  "CloudSync",
  "DataFlow",
  "NexGen",
  "PulseAI",
  "SwiftLabs",
  "DevGrid",
  "AppForge",
];

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div
      style={{
        flexShrink: 0,
        margin: "0 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "40px",
        padding: "0 24px",
        opacity: 0.4,
        filter: "grayscale(1)",
        transition: "opacity 0.3s",
      }}
    >
      <span
        style={{
          fontSize: "18px",
          fontWeight: 700,
          color: "#64748b",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          userSelect: "none",
        }}
      >
        {name}
      </span>
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section style={{ padding: "64px 0", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: "32px" }}
      >
        <p style={{ fontSize: "12px", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500 }}>
          Trusted By Industry Leaders
        </p>
      </motion.div>

      {/* Marquee Container */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Fade edges */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "96px", background: "linear-gradient(to right, #0B0D17, transparent)", zIndex: 10, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "96px", background: "linear-gradient(to left, #0B0D17, transparent)", zIndex: 10, pointerEvents: "none" }} />

        <div className="animate-marquee" style={{ display: "flex" }}>
          {[...logos, ...logos].map((logo, i) => (
            <LogoPlaceholder key={`${logo}-${i}`} name={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
