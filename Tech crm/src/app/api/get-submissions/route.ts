import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Path to our "database" file
const DB_PATH = path.join(process.cwd(), 'data', 'submissions.json');

// Read existing submissions or initialize with empty array
const readSubmissions = () => {
  try {
    if (fs.existsSync(DB_PATH)) {
      const data = fs.readFileSync(DB_PATH, 'utf8');
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('Error reading submissions file:', error);
    return [];
  }
};

export async function GET() {
  try {
    const submissions = readSubmissions();
    
    return NextResponse.json(
      { 
        success: true, 
        submissions 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error retrieving submissions:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to retrieve submissions' 
      },
      { status: 500 }
    );
  }
} 