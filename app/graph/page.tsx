'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Map } from 'lucide-react';
import { ObsidianGraph } from '@/components/graph/ObsidianGraph';

export default function GraphPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [legendData, setLegendData] = useState<Array<{ tag: string; color: string }>>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full">
      <ObsidianGraph onLegendData={setLegendData} />
      
      {/* Back to home button */}
      <Link
        href="/"
        className={`group absolute left-4 top-4 z-50 flex items-center gap-2 rounded-full bg-white/20 px-4 py-2.5 text-sm font-medium text-gray-800 backdrop-blur-md transition-all duration-500 hover:bg-white/30 hover:shadow-lg ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : '-translate-y-2 opacity-0 pointer-events-none'
        }`}
        style={{
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
        }}
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
        <span>Back to home</span>
      </Link>

      {/* Legend - Map of the Garden */}
      {legendData.length > 0 && (
        <div
          className={`absolute bottom-4 right-4 z-50 rounded-2xl bg-white/20 p-4 backdrop-blur-md transition-all duration-500 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-2 opacity-0 pointer-events-none'
          }`}
          style={{
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
            maxWidth: '280px',
          }}
        >
          <div className="mb-3 flex items-center gap-2">
            <Map className="h-4 w-4 text-gray-800" />
            <h3 className="text-sm font-semibold text-gray-800">Map of the Garden</h3>
          </div>
          <div className="space-y-2">
            {legendData.map((item) => (
              <div
                key={item.tag}
                className="flex items-center gap-3 text-xs text-gray-700"
              >
                <div
                  className="h-3 w-3 shrink-0 rounded-full"
                  style={{
                    backgroundColor: item.color,
                    boxShadow: `0 0 0 1px ${item.color}`,
                  }}
                />
                <span className="capitalize">{item.tag}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

