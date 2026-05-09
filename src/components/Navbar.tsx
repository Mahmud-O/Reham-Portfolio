"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        backgroundColor: scrolled ? "rgba(11, 13, 23, 0.8)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "16px 24px" }}
      >
        {/* Logo */}
        <a href="#" className="gradient-text" style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.02em", textDecoration: "none" }}>
          Reham
          <span style={{ color: "#94a3b8", fontWeight: 300 }}>.dev</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: "32px" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: "14px",
                color: "#94a3b8",
                textDecoration: "none",
                transition: "color 0.2s",
                position: "relative",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f8fafc")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Availability Badge + CTA */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 12px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              fontSize: "12px",
              color: "#cbd5e1",
            }}
          >
            <span className="pulse-dot" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
            Available for Q3
          </div>
          <a
            href="#contact"
            style={{
              padding: "10px 20px",
              fontSize: "14px",
              fontWeight: 600,
              borderRadius: "999px",
              background: "linear-gradient(135deg, #D946EF, #F97316)",
              color: "white",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          style={{ color: "#cbd5e1", background: "none", border: "none", cursor: "pointer" }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
            style={{
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              background: "rgba(11, 13, 23, 0.95)",
              borderTop: "1px solid rgba(255,255,255,0.05)",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "18px", transition: "color 0.2s" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "8px", fontSize: "12px", color: "#94a3b8" }}>
                <span className="pulse-dot" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
                Available for Q3
              </div>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                style={{
                  marginTop: "8px",
                  width: "100%",
                  textAlign: "center",
                  padding: "14px 20px",
                  fontSize: "14px",
                  fontWeight: 600,
                  borderRadius: "999px",
                  background: "linear-gradient(135deg, #D946EF, #F97316)",
                  color: "white",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
