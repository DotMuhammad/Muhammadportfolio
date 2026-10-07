import React, { useEffect, useState } from 'react';

export const AnimatedBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Deep Obsidian background base */}
      <div className="absolute inset-0 bg-[#05070c]" />

      {/* Grid pattern overlay with smooth radial mask */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" 
      />

      {/* Ambient gradient orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px]" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]" />
      <div className="absolute -bottom-20 left-1/3 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-[150px]" />

      {/* Interactive mouse spotlight for desktop */}
      {isMounted && (
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] transition-transform duration-200 ease-out hidden md:block"
          style={{
            transform: `translate3d(${mousePosition.x - 300}px, ${mousePosition.y - 300}px, 0)`,
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, rgba(99, 102, 241, 0.02) 50%, transparent 70%)',
          }}
        />
      )}

      {/* Subtle top horizontal hairline gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    </div>
  );
};
