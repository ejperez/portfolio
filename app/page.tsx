"use client";

import { useState, useEffect } from "react";
import Nav from "@/components/nav";
import Header from "@/components/header";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contacts from "@/components/contact";

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      <Nav />

      {/* Background that follows mouse position */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.1), transparent 0%)`,
        }}
      />

      <div className="relative z-10">
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
}
