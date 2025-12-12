import { GoogleGenerativeAI } from '@google/generative-ai';

// Gemini API Key
const GEMINI_API_KEY = 'AIzaSyA6UMYfz7ZYFbJa-pK6F5X8MHMYP9MsPNU';

export const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export const GEMINI_MODEL = 'gemini-2.0-flash-exp'; // Latest Gemini 2.5 Flash model

