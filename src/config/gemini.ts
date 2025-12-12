import { GoogleGenerativeAI } from '@google/generative-ai';

// Gemini API Key
const GEMINI_API_KEY = 'AIzaSyA6UMYfz7ZYFbJa-pK6F5X8MHMYP9MsPNU';

export const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export const GEMINI_MODEL = 'gemini-1.5-flash'; // Gemini 1.5 Flash - Fast and efficient model

