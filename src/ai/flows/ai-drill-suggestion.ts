'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting Rocket League training drills based on replay analysis.
 *
 * - suggestDrills - A function that takes replay analysis as input and suggests relevant training drills.
 * - AIDrillSuggestionInput - The input type for the suggestDrills function.
 * - AIDrillSuggestionOutput - The return type for the suggestDrills function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIDrillSuggestionInputSchema = z.object({
  replayAnalysis: z
    .string()
    .describe(
      'A detailed analysis of a Rocket League replay, including identified strengths and weaknesses.'
    ),
  playerRank: z.string().describe('The player rank, e.g. Diamond, Champion, GC.'),
});

export type AIDrillSuggestionInput = z.infer<typeof AIDrillSuggestionInputSchema>;

const AIDrillSuggestionOutputSchema = z.object({
  suggestedDrills: z
    .array(z.string())
    .describe(
      'A list of relevant training drills with codes and descriptions, tailored to the replay analysis and player rank.'
    ),
  reasoning:
    z.string()
    .describe(
      'The AI reasoning behind suggesting these specific drills, linking them to the identified strengths and weaknesses in the replay analysis.'
    ),
});

export type AIDrillSuggestionOutput = z.infer<typeof AIDrillSuggestionOutputSchema>;

export async function suggestDrills(
  input: AIDrillSuggestionInput
): Promise<AIDrillSuggestionOutput> {
  return aiDrillSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiDrillSuggestionPrompt',
  input: {schema: AIDrillSuggestionInputSchema},
  output: {schema: AIDrillSuggestionOutputSchema},
  prompt: `You are an expert Rocket League coach, skilled at analyzing replays and recommending training drills to improve player performance. You have access to a vast library of training packs and drills.\n\nGiven the following replay analysis and the player's rank, suggest a list of relevant training drills with codes and descriptions. Explain your reasoning, linking the drills to the identified strengths and weaknesses.\n\nReplay Analysis:\n{{replayAnalysis}}\n\nPlayer Rank:\n{{playerRank}}\n\nEnsure the suggested drills are appropriate for the player's rank. Provide the drills with codes and descriptions and explain how each drill helps address the identified weaknesses and capitalize on the strengths.\n\nOutput the suggested drills and the reasoning in a structured format. `,
});

const aiDrillSuggestionFlow = ai.defineFlow(
  {
    name: 'aiDrillSuggestionFlow',
    inputSchema: AIDrillSuggestionInputSchema,
    outputSchema: AIDrillSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
