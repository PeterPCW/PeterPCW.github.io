import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 150 + Math.random() * 100);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative inline-block ${className}`}>
      <span
        className="relative z-10 inline-block"
        style={{
          transform: isGlitching ? `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)` : 'none'
        }}
      >
        {text}
      </span>
      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0 -z-10 text-red-500 opacity-70"
            style={{
              transform: `translate(${Math.random() * 4 - 2}px, 0)`
            }}
          >
            {text}
          </span>
          <span
            className="absolute top-0 left-0 -z-10 text-cyan-500 opacity-70"
            style={{
              transform: `translate(${Math.random() * 4 - 2}px, 0)`
            }}
          >
            {text}
          </span>
        </>
      )}
    </div>
  );
}
