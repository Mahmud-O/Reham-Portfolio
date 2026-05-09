"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

const codeLines = [
  { text: "// FinTrack Pro — Real-time Portfolio Tracker", type: "comment" },
  { text: "import 'package:flutter/material.dart';", type: "keyword-import" },
  { text: "import 'package:provider/provider.dart';", type: "keyword-import" },
  { text: "", type: "blank" },
  { text: "class PortfolioView extends StatefulWidget {", type: "class-decl" },
  { text: "  const PortfolioView({super.key});", type: "constructor" },
  { text: "", type: "blank" },
  { text: "  @override", type: "annotation" },
  { text: "  State<PortfolioView> createState() => _PortfolioViewState();", type: "method" },
  { text: "}", type: "normal" },
  { text: "", type: "blank" },
  { text: "class _PortfolioViewState extends State<PortfolioView> {", type: "class-decl" },
  { text: "  @override", type: "annotation" },
  { text: "  void initState() {", type: "method" },
  { text: "    super.initState();", type: "call" },
  { text: "    Future.microtask(", type: "call" },
  { text: "      () => context.read<PortfolioViewModel>().loadData()", type: "call" },
  { text: "    );", type: "normal" },
  { text: "  }", type: "normal" },
  { text: "", type: "blank" },
  { text: "  @override", type: "annotation" },
  { text: "  Widget build(BuildContext context) {", type: "method" },
  { text: "    return Scaffold(", type: "view" },
  { text: "      appBar: AppBar(title: const Text('Portfolio')),", type: "view" },
  { text: "      body: Consumer<PortfolioViewModel>(", type: "view" },
  { text: "        builder: (context, viewModel, child) {", type: "closure" },
  { text: "          if (viewModel.isLoading) {", type: "condition" },
  { text: "            return const Center(child: CircularProgressIndicator());", type: "view" },
  { text: "          }", type: "normal" },
  { text: "          return CustomScrollView(", type: "view" },
  { text: "            slivers: [", type: "view" },
  { text: "              SliverToBoxAdapter(", type: "view" },
  { text: "                child: BalanceCard(", type: "call" },
  { text: "                  total: viewModel.totalBalance,", type: "arg" },
  { text: "                  change: viewModel.dayChange,", type: "arg" },
  { text: "                ),", type: "normal" },
  { text: "              ),", type: "normal" },
  { text: "            ],", type: "normal" },
  { text: "          );", type: "normal" },
  { text: "        },", type: "normal" },
  { text: "      ),", type: "normal" },
  { text: "    );", type: "normal" },
  { text: "  }", type: "normal" },
  { text: "}", type: "normal" },
];

const rawCode = codeLines.map((l) => l.text).join("\n");

function colorize(text: string, type: string): React.ReactNode {
  if (type === "comment") {
    return <span style={{ color: "#4ade80", opacity: 0.7 }}>{text}</span>;
  }

  // Tokenize and color the line
  const parts: React.ReactNode[] = [];
  const remaining = text;
  let key = 0;

  const keywords = /\b(import|class|extends|const|override|super|void|if|return|final)\b/g;
  const types =
    /\b(StatefulWidget|State|PortfolioView|Future|BuildContext|Scaffold|AppBar|Text|Consumer|PortfolioViewModel|Center|CircularProgressIndicator|CustomScrollView|SliverToBoxAdapter|BalanceCard|SliverPadding|EdgeInsets|SliverList|AssetRow|Widget)\b/g;
  const dotProps =
    /\.(key|microtask|read|loadData|isLoading|totalBalance|dayChange|all|builder|length|holdings|initState)\b/g;
  const strings = /'[^']*'/g;
  const annotations = /@override\b/g;

  // Simple approach: highlight keywords inline
  const tokens: { start: number; end: number; color: string; text: string }[] = [];

  let m;
  while ((m = keywords.exec(remaining)) !== null) {
    tokens.push({ start: m.index, end: m.index + m[0].length, color: "#D946EF", text: m[0] });
  }
  while ((m = types.exec(remaining)) !== null) {
    tokens.push({ start: m.index, end: m.index + m[0].length, color: "#F97316", text: m[0] });
  }
  while ((m = dotProps.exec(remaining)) !== null) {
    tokens.push({
      start: m.index,
      end: m.index + m[0].length,
      color: "#60a5fa",
      text: m[0],
    });
  }
  while ((m = strings.exec(remaining)) !== null) {
    tokens.push({ start: m.index, end: m.index + m[0].length, color: "#fbbf24", text: m[0] });
  }
  while ((m = annotations.exec(remaining)) !== null) {
    tokens.push({ start: m.index, end: m.index + m[0].length, color: "#38bdf8", text: m[0] });
  }

  // Sort tokens by position
  tokens.sort((a, b) => a.start - b.start);

  // Remove overlaps
  const filtered: typeof tokens = [];
  let lastEnd = 0;
  for (const tok of tokens) {
    if (tok.start >= lastEnd) {
      filtered.push(tok);
      lastEnd = tok.end;
    }
  }

  // Build output
  let cursor = 0;
  for (const tok of filtered) {
    if (tok.start > cursor) {
      parts.push(
        <span key={key++} style={{ color: "#cbd5e1" }}>
          {remaining.slice(cursor, tok.start)}
        </span>
      );
    }
    parts.push(
      <span key={key++} style={{ color: tok.color }}>
        {tok.text}
      </span>
    );
    cursor = tok.end;
  }
  if (cursor < remaining.length) {
    parts.push(
      <span key={key++} style={{ color: "#cbd5e1" }}>
        {remaining.slice(cursor)}
      </span>
    );
  }

  return <>{parts}</>;
}

export default function CodeSnippet() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(rawCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: "896px", margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "#D946EF",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 600,
              marginBottom: "12px",
            }}
          >
            Code Quality
          </p>
          <h2 style={{ fontSize: "clamp(28px, 3vw, 36px)", fontWeight: 700, color: "#f8fafc" }}>
            Clean. Readable. Maintainable.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="terminal"
        >
          {/* Terminal header */}
          <div
            className="terminal-header"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <div className="terminal-dot" style={{ background: "#ef4444" }} />
              <div className="terminal-dot" style={{ background: "#eab308" }} />
              <div className="terminal-dot" style={{ background: "#22c55e" }} />
              <span style={{ marginLeft: "12px", fontSize: "12px", color: "#64748b" }}>
                portfolio_view.dart
              </span>
            </div>
            <button
              onClick={handleCopy}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: copied ? "#4ade80" : "#64748b",
                fontSize: "12px",
                transition: "color 0.3s",
              }}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          {/* Code body */}
          <div
            style={{
              padding: "24px 16px",
              overflow: "auto",
              fontFamily: "'Fira Code', 'SF Mono', 'Monaco', 'Menlo', monospace",
              maxHeight: "480px",
            }}
          >
            {codeLines.map((line, idx) => (
              <div key={idx} style={{ display: "flex", lineHeight: "24px", minHeight: "24px" }}>
                <span
                  style={{
                    width: "40px",
                    textAlign: "right",
                    paddingRight: "16px",
                    color: "#4b5563",
                    userSelect: "none",
                    flexShrink: 0,
                    fontSize: "13px",
                  }}
                >
                  {idx + 1}
                </span>
                <span style={{ flex: 1, fontSize: "13px", whiteSpace: "pre" }}>
                  {line.text ? colorize(line.text, line.type) : " "}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
