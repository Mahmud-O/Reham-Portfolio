"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";

const projects = [
  {
    title: "FinTrack Pro",
    category: "Flutter — Mobile & Web",
    description: "A comprehensive personal finance app with real-time stock tracking, budget management, and AI-powered investment insights built with Flutter.",
    tags: ["Flutter", "Dart", "Provider", "Charts"],
    gradient: "linear-gradient(135deg, rgba(217,70,239,0.2), rgba(168,85,247,0.2))",
    stats: "2M+ Downloads",
  },
  {
    title: "FoodieHub",
    category: "Flutter — Mobile",
    description: "Food delivery platform with real-time order tracking, restaurant management dashboard, and ML-based recommendations.",
    tags: ["Flutter", "Dart", "Firebase", "Maps SDK"],
    gradient: "linear-gradient(135deg, rgba(249,115,22,0.2), rgba(245,158,11,0.2))",
    stats: "500K+ Users",
  },
  {
    title: "MediCare+",
    category: "Cross-Platform — Flutter",
    description: "Telemedicine app featuring video consultations, prescription management, and health record tracking with end-to-end encryption.",
    tags: ["Flutter", "Dart", "WebRTC", "HL7 FHIR"],
    gradient: "linear-gradient(135deg, rgba(16,185,129,0.2), rgba(20,184,166,0.2))",
    stats: "4.9★ Rating",
  },
  {
    title: "FitPulse",
    category: "Flutter & Wearables",
    description: "Fitness tracking app with Apple Watch/WearOS integration via Flutter plugins, workout analytics, and social fitness challenges.",
    tags: ["Flutter", "Dart", "HealthKit", "Wear OS"],
    gradient: "linear-gradient(135deg, rgba(6,182,212,0.2), rgba(59,130,246,0.2))",
    stats: "1M+ Active Users",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CaseStudies() {
  return (
    <section id="projects" style={{ padding: "96px 0", position: "relative" }}>
      {/* Background accent */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", background: "rgba(217,70,239,0.05)", borderRadius: "50%", filter: "blur(200px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <p style={{ fontSize: "12px", color: "#D946EF", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, marginBottom: "12px" }}>
            Portfolio
          </p>
          <h2 style={{ fontSize: "clamp(28px, 3vw, 36px)", fontWeight: 700, color: "#f8fafc" }}>
            Featured Case Studies
          </h2>
          <p style={{ color: "#94a3b8", marginTop: "16px", maxWidth: "640px", margin: "16px auto 0", lineHeight: 1.7 }}>
            A curated selection of projects that showcase my approach to mobile development — from concept to App Store.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid-projects"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "16px",
                background: "#141625",
                border: "1px solid rgba(255,255,255,0.05)",
                transition: "border-color 0.3s",
                cursor: "pointer",
              }}
            >
              {/* Gradient header */}
              <div style={{
                height: "192px",
                background: project.gradient,
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Abstract pattern */}
                <div style={{ position: "absolute", inset: 0, opacity: 0.3 }}>
                  <div style={{ position: "absolute", top: "16px", right: "16px", width: "128px", height: "128px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", transform: "rotate(12deg)" }} />
                  <div style={{ position: "absolute", bottom: "16px", left: "16px", width: "96px", height: "96px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "50%" }} />
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%) rotate(45deg)", width: "64px", height: "64px", background: "rgba(255,255,255,0.05)", borderRadius: "8px" }} />
                </div>

                {/* Stats badge */}
                <div style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  padding: "4px 12px",
                  borderRadius: "999px",
                  background: "rgba(0,0,0,0.3)",
                  backdropFilter: "blur(8px)",
                  fontSize: "12px",
                  color: "white",
                  fontWeight: 500,
                }}>
                  {project.stats}
                </div>

                {/* Hover overlay with buttons */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  opacity: 0,
                  background: "rgba(0,0,0,0.2)",
                  transition: "opacity 0.3s",
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                >
                  <button style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(4px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "none",
                    cursor: "pointer",
                  }}>
                    <ExternalLink size={18} color="white" />
                  </button>
                  <button style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(4px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "none",
                    cursor: "pointer",
                  }}>
                    <GitBranch size={18} color="white" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "24px" }}>
                <p style={{ fontSize: "11px", color: "#D946EF", fontWeight: 500, marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {project.category}
                </p>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#f8fafc", marginBottom: "12px" }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.7, marginBottom: "16px" }}>
                  {project.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "4px 12px",
                        fontSize: "12px",
                        borderRadius: "999px",
                        background: "rgba(255,255,255,0.05)",
                        color: "#94a3b8",
                        border: "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
