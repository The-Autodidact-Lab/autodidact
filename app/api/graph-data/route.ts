import { promises as fs } from 'fs';
import { join } from 'path';

// Read from pre-generated JSON file
const GRAPH_DATA_PATH = join(process.cwd(), 'data', 'graph-data.json');

interface GraphData {
  nodes: Array<{
    id: string;
    label: string;
    tags: string[];
    color: string;
    path: string;
  }>;
  links: Array<{
    source: string;
    target: string;
  }>;
  legend: Array<{ tag: string; color: string }>;
}

export async function GET(): Promise<Response> {
  try {
    // Read the pre-generated graph data JSON file
    const fileContent = await fs.readFile(GRAPH_DATA_PATH, 'utf-8');
    const graphData: GraphData = JSON.parse(fileContent);
    
    return Response.json(graphData);
  } catch (error) {
    console.error('Error reading graph data:', error);
    return Response.json(
      { 
        error: 'Failed to load graph data. Please run "npm run export-graph" to generate the graph data file.',
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    );
  }
}

