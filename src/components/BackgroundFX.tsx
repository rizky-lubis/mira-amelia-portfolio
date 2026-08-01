import React from 'react';

const PARTICLES = Array.from({ length: 28 }, (_, i) => {
  const size = i % 5 === 0 ? 6 : 3;
  return {
    left: `${(i * 37) % 100}%`,
    top: `${(i * 53) % 100}%`,
    size,
    duration: `${14 + (i % 6) * 4}s`,
    delay: `${(i % 8) * 1.6}s`,
    opacity: 0.15 + (i % 4) * 0.08,
  };
});

const SYMBOLS = ['✦', '✧', '·', '•'];

export const BackgroundFX: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
      <div className="absolute inset-0 bg-[#FAFAFA]" />

      <div className="fx-orb absolute -top-40 -left-40 w-[34rem] h-[34rem] rounded-full bg-[#EDEDEF] blur-3xl" />
      <div className="fx-orb fx-orb-slow absolute top-1/3 -right-48 w-[30rem] h-[30rem] rounded-full bg-[#F2F2F4] blur-3xl" />
      <div className="fx-orb fx-orb-reverse absolute -bottom-48 left-1/4 w-[28rem] h-[28rem] rounded-full bg-[#EDEDEF] blur-3xl" />

      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="fx-particle absolute rounded-full bg-[#4A4E69]"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}

      {SYMBOLS.map((s, i) => (
        <span
          key={`sym-${i}`}
          className="fx-particle absolute text-[#8B8B95] select-none"
          style={{
            left: `${(i * 41 + 12) % 100}%`,
            top: `${(i * 67 + 8) % 100}%`,
            fontSize: i % 2 === 0 ? 20 : 14,
            opacity: 0.1 + (i % 3) * 0.07,
            animationDuration: `${20 + i * 5}s`,
            animationDelay: `${i * 2.5}s`,
          }}
        >
          {s}
        </span>
      ))}
    </div>
  );
};
