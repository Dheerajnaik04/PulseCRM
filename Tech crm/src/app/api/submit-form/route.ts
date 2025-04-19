import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

type FormData = {
  fullName: string;
  email: string;
  companyName: string;
  phoneNumber: string;
  jobTitle: string;
  companySize: string;
  message: string;
};

// Path to our "database" file
const DB_PATH = path.join(process.cwd(), 'data', 'submissions.json');

// Ensure the data directory exists
const ensureDirectoryExists = (dirPath: string) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// Read existing submissions or initialize with empty array
const readSubmissions = (): FormData[] => {
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

// Write submissions to file
const writeSubmissions = (submissions: FormData[]) => {
  ensureDirectoryExists(path.dirname(DB_PATH));
  fs.writeFileSync(DB_PATH, JSON.stringify(submissions, null, 2), 'utf8');
};

export async function POST(request: Request) {
  try {
    // Parse the request body
    const formData: FormData = await request.json();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.companyName || !formData.companySize) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Read existing submissions
    const submissions = readSubmissions();
    
    // Add timestamp to submission
    const submissionWithTimestamp = {
      ...formData,
      timestamp: new Date().toISOString(),
    };
    
    // Add new submission
    submissions.push(submissionWithTimestamp);
    
    // Save submissions to file
    writeSubmissions(submissions);
    
    console.log('Form submission saved:', submissionWithTimestamp);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process form submission' 
      },
      { status: 500 }
    );
  }
} 