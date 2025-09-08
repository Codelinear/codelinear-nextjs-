"use client";

import { useRef, useEffect, useState } from "react";

export default function SandAnimation() {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 }); // offscreen initially
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [attractMode, setAttractMode] = useState(true);

  const sandColors = [
    "#D2B48C",
    "#DEB887",
    "#F4A460",
    "#CD853F",
    "#D2691E",
    "#C4A484",
  ];

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Init basic sand particles
    const numParticles = 3000;
    particlesRef.current = Array.from({ length: numParticles }, () => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      vx: 0,
      vy: 0,
      size: Math.random() * 2 + 1,
      color: sandColors[Math.floor(Math.random() * sandColors.length)],
    }));

    const influenceRadius = 100;
    const maxForce = 0.5;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < influenceRadius && dist > 0) {
          const force = ((influenceRadius - dist) / influenceRadius) * maxForce;
          const angle = Math.atan2(dy, dx);

          if (attractMode) {
            p.vx += Math.cos(angle) * force;
            p.vy += Math.sin(angle) * force;
          } else {
            p.vx -= Math.cos(angle) * force;
            p.vy -= Math.sin(angle) * force;
          }
        }

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Dampen movement
        p.vx *= 0.9;
        p.vy *= 0.9;

        // Draw particle
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleClick = () => {
      setAttractMode((prev) => !prev);
    };

    animate();
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleClick);

    return () => {
      cancelAnimationFrame(animationRef.current);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleClick);
    };
  }, [dimensions, attractMode]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-auto"
      />

      <div className="absolute top-4 left-4 text-white bg-black bg-opacity-50 p-4 rounded-lg z-10">
        <h2 className="text-xl font-bold mb-2">Floating Sand Particles</h2>
        <p className="text-sm mb-1">
          Move cursor to {attractMode ? "attract" : "repel"} particles
        </p>
        <p className="text-xs opacity-75">Click to toggle attract/repel mode</p>
        <div
          className={`text-xs mt-2 px-2 py-1 rounded ${
            attractMode ? "bg-green-600" : "bg-red-600"
          }`}
        >
          Mode: {attractMode ? "ATTRACT" : "REPEL"}
        </div>
      </div>
    </div>
  );
}
