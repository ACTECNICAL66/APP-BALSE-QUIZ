import React from 'react';

interface AuroraBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
}

export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({ intensity = 'high' }) => {
  const opacityMap = {
    low: 0.3,
    medium: 0.5,
    high: 0.7
  };
  const opacity = opacityMap[intensity];

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden="true">
      {/* Deep Space Base Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#0a1628_0%,#040810_50%,#000000_100%)]" />
      
      {/* Aurora Orb 1 - Emerald (Top Left) */}
      <div
        className="absolute rounded-full blur-[120px] animate-aurora-1"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(88, 204, 2, 0.55) 0%, rgba(20, 83, 45, 0) 70%)',
          top: '-10%',
          left: '-10%',
          opacity
        }}
      />

      {/* Aurora Orb 2 - Cyan (Center Right) */}
      <div
        className="absolute rounded-full blur-[140px] animate-aurora-2"
        style={{
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(28, 176, 246, 0.45) 0%, rgba(3, 105, 161, 0) 70%)',
          top: '20%',
          right: '-8%',
          opacity
        }}
      />

      {/* Aurora Orb 3 - Purple (Bottom Center) */}
      <div
        className="absolute rounded-full blur-[160px] animate-aurora-3"
        style={{
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(206, 130, 255, 0.45) 0%, rgba(88, 28, 135, 0) 70%)',
          bottom: '-15%',
          left: '25%',
          opacity
        }}
      />

      {/* Aurora Orb 4 - Gold (Bottom Right) */}
      <div
        className="absolute rounded-full blur-[130px] animate-aurora-4"
        style={{
          width: '480px',
          height: '480px',
          background: 'radial-gradient(circle, rgba(255, 200, 0, 0.35) 0%, rgba(120, 53, 15, 0) 70%)',
          bottom: '5%',
          right: '10%',
          opacity
        }}
      />

      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating Dust Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-float-particle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 15 + 10}s`
            }}
          />
        ))}
      </div>

      {/* Top Noise Texture for depth */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
};
