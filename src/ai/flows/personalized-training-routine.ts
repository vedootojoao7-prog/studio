'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a personalized 22-minute Rocket League training routine based on the user's rank.
 *
 * - personalizedTrainingRoutine - A function that generates the training routine.
 * - PersonalizedTrainingRoutineInput - The input type for the personalizedTrainingRoutine function.
 * - PersonalizedTrainingRoutineOutput - The return type for the personalizedTrainingRoutine function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedTrainingRoutineInputSchema = z.object({
  rank: z
    .enum([
      'Bronze',
      'Silver',
      'Gold',
      'Platinum',
      'Diamond',
      'Champion',
      'Grand Champion',
    ])
    .describe('The Rocket League rank of the player (Bronze, Silver, Gold, Platinum, Diamond, Champion, Grand Champion).'),
});
export type PersonalizedTrainingRoutineInput = z.infer<
  typeof PersonalizedTrainingRoutineInputSchema
>;

const PersonalizedTrainingRoutineOutputSchema = z.object({
  routine: z
    .string()
    .describe(
      'A personalized 22-minute Rocket League training routine tailored to the specified rank.'
    ),
});
export type PersonalizedTrainingRoutineOutput = z.infer<
  typeof PersonalizedTrainingRoutineOutputSchema
>;

export async function personalizedTrainingRoutine(
  input: PersonalizedTrainingRoutineInput
): Promise<PersonalizedTrainingRoutineOutput> {
  return personalizedTrainingRoutineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedTrainingRoutinePrompt',
  input: {schema: PersonalizedTrainingRoutineInputSchema},
  output: {schema: PersonalizedTrainingRoutineOutputSchema},
  prompt: `Você é um expert em treinamento de Rocket League. Gere uma rotina de treinamento concisa de 22 minutos, adaptada para um jogador da seguinte patente: {{{rank}}}.

A rotina deve se concentrar em melhorar a tomada de decisão, a consistência e as habilidades fundamentais relevantes para essa patente. Forneça etapas acionáveis e exercícios que o jogador possa implementar imediatamente.

A rotina deve estar em Português BR e conter jargões de nicho do Rocket League, como \"hard stuck\", \"tilt\", \"overcommit\", \"first touch\".

A rotina deve focar em:\n- Primeiro toque\n- Tomada de decisão sob pressão\n- Padrões de recuperação/Kickoff\nNão inclua uma introdução ou conclusão. Apenas forneça a lista numerada de instruções. Seja breve e conciso. Máximo de 5 itens.
`,
});

const personalizedTrainingRoutineFlow = ai.defineFlow(
  {
    name: 'personalizedTrainingRoutineFlow',
    inputSchema: PersonalizedTrainingRoutineInputSchema,
    outputSchema: PersonalizedTrainingRoutineOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
