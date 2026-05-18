"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  stats: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "My Stock",
    category: "Flutter — Mobile & Web",
    description:
      "My Stock is a robust warehouse and inventory management application developed natively for Android using Kotlin. Designed with high performance and scalable architecture in mind, the app empowers businesses to efficiently track stock levels, manage supplier and customer data, and seamlessly monitor the lifecycle of goods.",
    tags: ["Flutter", "Dart", "Provider", "Charts"],
    image: "/my-stock.png",
    stats: "2M+ Downloads",
    gradient: "linear-gradient(135deg, rgba(217,70,239,0.2), rgba(168,85,247,0.2))",
  },
  {
    title: "Abaya Luxe",
    category: "Flutter — Mobile",
    description:
      "Abaya Luxe is a premium, multi-page e-commerce mobile application dedicated to luxury Arab and Gulf abayas",
    tags: ["Flutter", "Dart", "Firebase", "Maps SDK"],
    image: "/train-station-trip.png",
    stats: "500K+ Users",
    gradient: "linear-gradient(135deg, rgba(249,115,22,0.2), rgba(245,158,11,0.2))",
  },
  {
    title: "Juice & Shakes Menu App UI",
    category: "Cross-Platform — Flutter",
    description:
      "A sleek and modern Menu App UI built with Flutter, focusing on Clean Code and component Reusability. The design features an elegant food/drink catalog with floating asset images using staggered stacks and smooth scrolling behaviors.",
    tags: ["Flutter", "Dart", "WebRTC", "HL7 FHIR"],
    image: "/juice-shakes-menu.png",
    stats: "4.9★ Rating",
    gradient: "linear-gradient(135deg, rgba(16,185,129,0.2), rgba(20,184,166,0.2))",
  },
  {
    title: "Azkar",
    category: "Flutter — Mobile",
    description:
      "A beautifully designed Islamic Azkar application built with Flutter, offering daily remembrances, morning and evening supplications, and prayer-related adhkar with a clean, intuitive interface.",
    tags: ["Flutter", "Dart", "Firebase", "Arabic RTL"],
    image: "/azkar.png",
    stats: "100K+ Downloads",
    gradient: "linear-gradient(135deg, rgba(6,182,212,0.2), rgba(59,130,246,0.2))",
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

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-2xl bg-[#141625] border border-white/5 transition-colors hover:border-white/10 cursor-pointer"
    >
      {/* Image header */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{ background: project.gradient }}
        />

        {/* Stats badge */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-medium">
          {project.stats}
        </div>

        {/* Hover overlay with buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-100">
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-none cursor-pointer hover:bg-white/30 transition-colors">
            <ExternalLink size={18} color="white" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-none cursor-pointer hover:bg-white/30 transition-colors">
            <GitBranch size={18} color="white" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-[11px] text-fuchsia-500 font-medium mb-2 uppercase tracking-wider">
          {project.category}
        </p>
        <h3 className="text-xl font-bold text-slate-50 mb-3">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-white/5 text-slate-400 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs text-fuchsia-500 uppercase tracking-widest font-semibold mb-3">
            Portfolio
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-50">
            Featured Case Studies
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            A curated selection of projects that showcase my approach to mobile development — from concept to App Store.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
