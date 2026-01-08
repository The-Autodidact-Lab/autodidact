'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import to avoid SSR issues
const ForceGraph2D = dynamic(() => import('react-force-graph-2d').then((mod) => mod.default), {
  ssr: false,
}) as any;

interface GraphNode {
  id: string;
  label: string;
  tags: string[];
  color: string;
  path: string;
}

interface GraphLink {
  source: string;
  target: string;
}

interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
  legend?: Array<{ tag: string; color: string }>;
}

interface ObsidianGraphProps {
  onLegendData?: (legend: Array<{ tag: string; color: string }>) => void;
}

export function ObsidianGraph({ onLegendData }: ObsidianGraphProps) {
  const [graphData, setGraphData] = useState<GraphData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const graphRef = useRef<any>(null);

  useEffect(() => {
    async function fetchGraphData() {
      try {
        const response = await fetch('/api/graph-data');
        if (!response.ok) {
          throw new Error('Failed to fetch graph data');
        }
        const data: GraphData = await response.json();
        setGraphData(data);
        if (data.legend && onLegendData) {
          onLegendData(data.legend);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        console.error('Error fetching graph data:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchGraphData();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-white">
        <div className="text-gray-600">Loading graph...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-white">
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (!graphData) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-white">
        <div className="text-gray-600">No graph data available</div>
      </div>
    );
  }

  // Helper function to mute/desaturate colors
  const muteColor = (hex: string): string => {
    // Convert hex to RGB
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    // Desaturate by mixing with gray (40% gray, 60% original)
    const mutedR = Math.round(r * 0.6 + 200 * 0.4);
    const mutedG = Math.round(g * 0.6 + 200 * 0.4);
    const mutedB = Math.round(b * 0.6 + 200 * 0.4);
    
    // Add slight transparency for softer appearance
    return `rgba(${mutedR}, ${mutedG}, ${mutedB}, 0.75)`;
  };

  return (
    <div className="h-screen w-full bg-white">
      <ForceGraph2D
        ref={graphRef}
        graphData={graphData}
        nodeLabel={(node: any) => {
          const graphNode = node as GraphNode;
          return `${graphNode.label}${graphNode.tags.length > 0 ? `\nTags: ${graphNode.tags.join(', ')}` : ''}`;
        }}
        nodeColor={(node: any) => muteColor((node as GraphNode).color)}
        nodeVal={(node: any) => {
          // Smaller, more uniform node sizes for minimalist look
          const graphNode = node as GraphNode;
          const linkCount = graphData.links.filter(
            (link) => link.source === graphNode.id || link.target === graphNode.id
          ).length;
          return Math.max(2.5, Math.min(5, 3 + linkCount * 0.2));
        }}
        linkColor={() => 'rgba(150, 150, 150, 0.3)'}
        linkWidth={0.8}
        linkDirectionalArrowLength={3}
        linkDirectionalArrowRelPos={1}
        linkCurvature={0.05}
        cooldownTicks={150}
        onEngineStop={() => {
          if (graphRef.current && graphRef.current.zoomToFit) {
            setTimeout(() => {
              graphRef.current.zoomToFit(400, 30);
            }, 100);
          }
        }}
        d3VelocityDecay={0.3}
        d3AlphaDecay={0.0228}
        d3Force={(forceSimulation: any) => {
          // Increase spacing between nodes
          forceSimulation.force('link')?.distance((link: any) => 180);
          forceSimulation.force('charge')?.strength(-400);
          forceSimulation.force('center', null);
        }}
      />
    </div>
  );
}

