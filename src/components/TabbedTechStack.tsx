"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Apple, Smartphone, Paintbrush, Database, Hammer, Plane, Glasses, Cog, Bot, Puzzle, Archive, Box, Link, Flame, Activity, Palette, Feather, Code, Target, Book, CircleDashed, Rocket, GitBranch } from "lucide-react";

const tabs = [
  {
    id: "ios",
    label: "iOS",
    techs: [
      { name: "Swift", icon: <Apple />, bg: "rgba(249,115,22,0.15)" },
      { name: "SwiftUI", icon: <Smartphone />, bg: "rgba(59,130,246,0.15)" },
      { name: "UIKit", icon: <Paintbrush />, bg: "rgba(168,85,247,0.15)" },
      { name: "Core Data", icon: <Database />, bg: "rgba(34,197,94,0.15)" },
      { name: "Xcode", icon: <Hammer />, bg: "rgba(6,182,212,0.15)" },
      { name: "TestFlight", icon: <Plane />, bg: "rgba(99,102,241,0.15)" },
      { name: "ARKit", icon: <Glasses />, bg: "rgba(236,72,153,0.15)" },
      { name: "Metal", icon: <Cog />, bg: "rgba(100,116,139,0.15)" },
    ],
  },
  {
    id: "android",
    label: "Android",
    techs: [
      { name: "Kotlin", icon: <Bot />, bg: "rgba(139,92,246,0.15)" },
      { name: "Jetpack Compose", icon: <Puzzle />, bg: "rgba(34,197,94,0.15)" },
      { name: "Room DB", icon: <Archive />, bg: "rgba(245,158,11,0.15)" },
      { name: "Gradle", icon: <Box />, bg: "rgba(20,184,166,0.15)" },
      { name: "Retrofit", icon: <Link />, bg: "rgba(59,130,246,0.15)" },
      { name: "Firebase", icon: <Flame />, bg: "rgba(249,115,22,0.15)" },
      { name: "Hilt", icon: <Activity />, bg: "rgba(239,68,68,0.15)" },
      { name: "Material 3", icon: <Palette />, bg: "rgba(168,85,247,0.15)" },
    ],
  },
  {
    id: "cross",
    label: "Cross-Platform",
    techs: [
      { name: "Flutter", icon: <Feather />, bg: "rgba(14,165,233,0.15)" },
      { name: "React Native", icon: <Code />, bg: "rgba(6,182,212,0.15)" },
      { name: "Dart", icon: <Target />, bg: "rgba(59,130,246,0.15)" },
      { name: "TypeScript", icon: <Book />, bg: "rgba(37,99,235,0.15)" },
      { name: "GraphQL", icon: <CircleDashed />, bg: "rgba(236,72,153,0.15)" },
      { name: "CI/CD", icon: <Rocket />, bg: "rgba(34,197,94,0.15)" },
      { name: "Figma", icon: <Paintbrush />, bg: "rgba(217,70,239,0.15)" },
      { name: "Git", icon: <GitBranch />, bg: "rgba(249,115,22,0.15)" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: { opacity: 1, scale: 1, y: 0 },
};

export default function TabbedTechStack() {
  const [activeTab, setActiveTab] = useState("cross");
  const activeTechs = tabs.find((t) => t.id === activeTab)?.techs || [];

  return (
    <section id="tech" style={{ padding: "96px 0", position: "relative" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <p style={{ fontSize: "12px", color: "#D946EF", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, marginBottom: "12px" }}>
            Expertise
          </p>
          <h2 style={{ fontSize: "clamp(28px, 3vw, 36px)", fontWeight: 700, color: "#f8fafc" }}>
            Tech Stack & Tools
          </h2>
        </motion.div>

        {/* Tabs */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "48px" }}>
          <div style={{
            display: "inline-flex",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "999px",
            padding: "4px",
            border: "1px solid rgba(255,255,255,0.05)",
          }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  position: "relative",
                  padding: "10px 24px",
                  fontSize: "14px",
                  fontWeight: 500,
                  borderRadius: "999px",
                  border: "none",
                  cursor: "pointer",
                  background: activeTab === tab.id ? "rgba(217,70,239,0.15)" : "transparent",
                  color: activeTab === tab.id ? "white" : "#94a3b8",
                  transition: "all 0.3s",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid-tech"
          >
            {activeTechs.map((tech, i) => (
              <motion.div
                key={`${activeTab}-${tech.name}`}
                variants={itemVariants}
                className="glass"
                style={{
                  borderRadius: "16px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  cursor: "default",
                  transition: "background 0.3s",
                  ...(i === 0 ? { gridColumn: "span 2", gridRow: "span 2", padding: "40px" } : {}),
                }}
              >
                <div style={{
                  width: i === 0 ? "64px" : "56px",
                  height: i === 0 ? "64px" : "56px",
                  borderRadius: "12px",
                  background: tech.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: i === 0 ? "28px" : "24px",
                  transition: "transform 0.3s",
                }}>
                  {tech.icon}
                </div>
                <span style={{
                  fontSize: i === 0 ? "16px" : "14px",
                  fontWeight: 500,
                  color: "#cbd5e1",
                }}>
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
