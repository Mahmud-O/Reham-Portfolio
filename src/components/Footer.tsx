"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const Github = ({ size = 18, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 18, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socials = [
  { name: "GitHub", icon: Github, href: "https://github.com/Reham-gamal777" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/reham-gamal1/" },

  { name: "Email", icon: Mail, href: "mailto:rehamg675@gmail.com" },
];

const contactInfo = [
  { icon: Mail, label: "rehamg675@gmail.com" },
  { icon: MapPin, label: "cairo, Egypt" },
  { icon: Phone, label: "+201032902078" },
];

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer
      id="contact"
      style={{
        position: "relative",
        paddingTop: "96px",
        paddingBottom: "32px",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "800px",
        height: "400px",
        background: "radial-gradient(ellipse, rgba(217,70,239,0.08), transparent)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Large CTA text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <h2
            className="gradient-text"
            style={{
              fontSize: "clamp(40px, 8vw, 96px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
            }}
          >
            Let&apos;s Collaborate
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "18px", marginTop: "20px", maxWidth: "560px", margin: "20px auto 0" }}>
            Have an idea? Let&apos;s build something extraordinary together.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid-contact">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#f8fafc", marginBottom: "24px" }}>
              Get in Touch
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "rgba(255,255,255,0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <Icon size={18} color="#D946EF" />
                    </div>
                    <span style={{ fontSize: "15px", color: "#cbd5e1" }}>{info.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "12px" }}>
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "linear-gradient(135deg, rgba(217,70,239,0.2), rgba(249,115,22,0.2))";
                      e.currentTarget.style.borderColor = "rgba(217,70,239,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    }}
                    aria-label={social.name}
                  >
                    <Icon size={18} color="#94a3b8" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass"
            style={{ borderRadius: "16px", padding: "32px", display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div>
              <label style={{ display: "block", fontSize: "13px", color: "#94a3b8", marginBottom: "8px", fontWeight: 500 }}>
                Your Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  color: "#f8fafc",
                  fontSize: "14px",
                  outline: "none",
                  transition: "border-color 0.3s",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(217,70,239,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                placeholder="Reham Gamal"
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "13px", color: "#94a3b8", marginBottom: "8px", fontWeight: 500 }}>
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  color: "#f8fafc",
                  fontSize: "14px",
                  outline: "none",
                  transition: "border-color 0.3s",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(217,70,239,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                placeholder="rehamg675@gmail.com"
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "13px", color: "#94a3b8", marginBottom: "8px", fontWeight: 500 }}>
                Your Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  color: "#f8fafc",
                  fontSize: "14px",
                  outline: "none",
                  transition: "border-color 0.3s",
                  resize: "vertical",
                  boxSizing: "border-box",
                  fontFamily: "inherit",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(217,70,239,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                width: "100%",
                padding: "14px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #D946EF, #F97316)",
                color: "white",
                fontWeight: 600,
                fontSize: "14px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              Send Message
              <Send size={16} />
            </button>
          </motion.form>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom" style={{
          marginTop: "64px",
          paddingTop: "24px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}>
          <p style={{ fontSize: "13px", color: "#475569" }}>
            © 2025 Reham. Crafted with ❤️ and a lot of ☕
          </p>
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "13px",
              color: "#64748b",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            Back to top
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>


    </footer>
  );
}
