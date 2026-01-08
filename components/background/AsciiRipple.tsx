'use client';

import { useEffect, useState } from 'react';

// Generate a grid pattern that flows and animates
const generateFrame = (offset: number, width: number = 80, height: number = 40) => {
  const chars = [' ', '·', '░', '▒', '▓', '█'];
  let frame = '';
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // Create flowing, organic patterns
      const wave1 = Math.sin((x * 0.1) + (y * 0.15) + offset * 0.1) * 0.5 + 0.5;
      const wave2 = Math.sin((x * 0.08) - (y * 0.12) + offset * 0.15) * 0.5 + 0.5;
      const wave3 = Math.sin(Math.sqrt(x * x + y * y) * 0.1 - offset * 0.2) * 0.5 + 0.5;
      
      // Combine waves for organic flow
      const intensity = (wave1 * 0.4 + wave2 * 0.3 + wave3 * 0.3);
      
      // Create flowing tendrils and clusters
      const distFromCenter = Math.sqrt(
        Math.pow(x - width * 0.6, 2) + Math.pow(y - height * 0.4, 2)
      );
      const radialWave = Math.sin(distFromCenter * 0.15 - offset * 0.25) * 0.5 + 0.5;
      
      const finalIntensity = intensity * 0.7 + radialWave * 0.3;
      
      // Map intensity to character
      const charIndex = Math.floor(finalIntensity * chars.length);
      const char = chars[Math.min(charIndex, chars.length - 1)];
      
      frame += char;
    }
    frame += '\n';
  }
  
  return frame;
};

export function AsciiRipple() {
  const [frameIndex, setFrameIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 80, height: 40 });

  useEffect(() => {
    // Calculate grid dimensions based on viewport
    // Use conservative character size estimates to ensure full coverage
    const updateDimensions = () => {
      // At 6px font size, characters are approximately 3.6px wide and 6px tall
      // Use smaller estimates to generate more characters for full coverage
      const charWidth = 3.5;
      const charHeight = 6;
      // Add 20% buffer to ensure full coverage, especially at edges
      const width = Math.ceil((window.innerWidth / charWidth) * 1.2);
      const height = Math.ceil((window.innerHeight / charHeight) * 1.2);
      setDimensions({ width, height });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => prev + 1);
    }, 100); // Smooth animation at 10fps

    return () => clearInterval(interval);
  }, []);

  const currentFrame = generateFrame(frameIndex, dimensions.width, dimensions.height);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-10">
      <pre
        className="absolute inset-0 h-screen w-screen select-none font-mono text-[6px] leading-[1] text-gray-400 opacity-[0.15] transition-opacity duration-300 sm:text-[7px]"
        style={{
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
          whiteSpace: 'pre',
          margin: 0,
          padding: 0,
          display: 'block',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        {currentFrame}
      </pre>
    </div>
  );
}

