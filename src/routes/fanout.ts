import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { generateFanoutQueries } from '../services/fanout';

const router = Router();

// Validation schema
const FanoutRequestSchema = z.object({
  main_query: z.string().min(1, 'main_query is required and cannot be empty'),
  domain: z.string().optional(),
  max_fanouts: z.number().int().positive().max(20).optional().default(10),
  provider: z.enum(['chatgpt', 'gemini', 'perplexity', 'all']).optional().default('chatgpt'),
});

router.post('/fanout', async (req: Request, res: Response) => {
  try {
    // Validate request body
    const validatedData = FanoutRequestSchema.parse(req.body);

    const { main_query, domain, max_fanouts, provider } = validatedData;

    // Generate fanout queries
    const result = await generateFanoutQueries(main_query, domain, max_fanouts, provider);

    res.json(result);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation error',
        details: error.errors,
      });
    }

    console.error('Error in /api/fanout:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

export default router;


