import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

// Gemini API Key from environment variable
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

if (!GEMINI_API_KEY) {
  console.warn('⚠️  GEMINI_API_KEY environment variable is not set');
}

export const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export const GEMINI_MODEL = 'gemini-pro'; // Gemini Pro - Stable model

