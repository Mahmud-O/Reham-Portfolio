"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Zap, Target } from "lucide-react";
import Image from "next/image";
import logo from "../assets/profile.jpeg";
export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "96px",
        paddingBottom: "64px",
        overflow: "hidden",
      }}
    >
      {/* Background glow effects */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "-128px",
          width: "384px",
          height: "384px",
          background: "rgba(217, 70, 239, 0.1)",
          borderRadius: "50%",
          filter: "blur(128px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          right: "-128px",
          width: "384px",
          height: "384px",
          background: "rgba(249, 115, 22, 0.1)",
          borderRadius: "50%",
          filter: "blur(128px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", width: "100%" }}>
        <div className="hero-flex">
          {/* Left Content */}
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                fontSize: "14px",
                color: "#94a3b8",
                marginBottom: "24px",
              }}
            >
              <span className="pulse-dot" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
              Open to new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "24px",
                color: "#f8fafc",
              }}
            >
              Engineering{" "}
              <span className="gradient-text">Elegant Mobile</span>{" "}
              Experiences
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="hero-desc"
              style={{
                fontSize: "18px",
                color: "#94a3b8",
                maxWidth: "560px",
                marginBottom: "32px",
                lineHeight: 1.7,
              }}
            >
              Senior Mobile Developer with 5+ years crafting high-performance
              apps with Flutter. I turn complex problems into seamless,
              beautiful cross-platform experiences that millions love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="hero-ctas"
            >
              <a
                href="#projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  borderRadius: "999px",
                  background: "linear-gradient(135deg, #D946EF, #F97316)",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "14px",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
              >
                View My Work
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#cbd5e1",
                  fontWeight: 600,
                  fontSize: "14px",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
              >
                <Download size={16} />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Image + Phone */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div style={{ position: "relative", width: "340px", height: "420px" }}>
              {/* Gradient border wrapper for image */}
              <div
                className="gradient-border"
                style={{
                  width: "280px",
                  height: "360px",
                  filter: "drop-shadow(0 10px 40px rgba(217,70,239,0.3))",
                }}
              >
                <div style={{ width: "100%", height: "100%", borderRadius: "14px", overflow: "hidden", background: "#141625" }}>
                  <Image
                    src={logo}
                    alt="Reham - Mobile App Developer"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
              </div>

              {/* Phone Frame - overlapping bottom right */}
              <motion.div
                style={{
                  position: "absolute",
                  bottom: "-24px",
                  right: "-16px",
                  zIndex: 10,
                  transform: "rotate(8deg)",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
              >
                <div className="phone-frame">
                  <div className="phone-screen">
                    {/* Mini app UI inside phone */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ width: "32px", height: "4px", borderRadius: "2px", background: "rgba(217,70,239,0.6)" }} />
                      <div style={{ width: "48px", height: "6px", borderRadius: "3px", background: "rgba(255,255,255,0.2)" }} />
                      <div style={{ width: "100%", height: "56px", borderRadius: "8px", background: "linear-gradient(135deg, rgba(217,70,239,0.2), rgba(249,115,22,0.2))", border: "1px solid rgba(255,255,255,0.05)", marginTop: "12px" }} />
                      <div style={{ display: "flex", gap: "6px", marginTop: "8px" }}>
                        <div style={{ flex: 1, height: "40px", borderRadius: "6px", background: "rgba(255,255,255,0.05)" }} />
                        <div style={{ flex: 1, height: "40px", borderRadius: "6px", background: "rgba(255,255,255,0.05)" }} />
                      </div>
                      <div style={{ width: "100%", height: "32px", borderRadius: "6px", background: "linear-gradient(135deg, rgba(217,70,239,0.4), rgba(249,115,22,0.4))", marginTop: "8px" }} />
                      <div style={{ display: "flex", gap: "4px", marginTop: "8px" }}>
                        <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
                        <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
                        <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                style={{ position: "absolute", left: "-24px", top: "33%", zIndex: 10 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                <div className="glass" style={{ padding: "8px 12px", borderRadius: "12px", fontSize: "12px", fontWeight: 500, display: "flex", alignItems: "center", gap: "8px" }}>
                  <Zap size={14} color="#D946EF" />
                  <span style={{ color: "#cbd5e1" }}>Flutter Expert</span>
                </div>
              </motion.div>

              <motion.div
                style={{ position: "absolute", right: "-40px", top: "32px", zIndex: 10 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                <div className="glass" style={{ padding: "8px 12px", borderRadius: "12px", fontSize: "12px", fontWeight: 500, display: "flex", alignItems: "center", gap: "8px" }}>
                  <Target size={14} color="#F97316" />
                  <span style={{ color: "#cbd5e1" }}>10M+ Users</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
