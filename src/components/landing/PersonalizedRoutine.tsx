'use client';

import { useState, useTransition } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { personalizedTrainingRoutine } from '@/ai/flows/personalized-training-routine';
import { useToast } from "@/hooks/use-toast"
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles } from 'lucide-react';

const ranks = [
  'Bronze',
  'Silver',
  'Gold',
  'Platinum',
  'Diamond',
  'Champion',
  'Grand Champion',
] as const;

const FormSchema = z.object({
  rank: z.enum(ranks, {
    required_error: "Por favor, selecione seu rank.",
  }),
})

export default function PersonalizedRoutine() {
  const [routine, setRoutine] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    startTransition(async () => {
      setRoutine(null);
      try {
        const result = await personalizedTrainingRoutine({ rank: data.rank });
        setRoutine(result.routine);
      } catch (error) {
        console.error(error);
        toast({
          variant: "destructive",
          title: "Erro ao gerar rotina",
          description: "Ocorreu um problema ao se comunicar com a IA. Tente novamente mais tarde.",
        })
      }
    });
  }

  const renderRoutine = () => {
    if (!routine) return null;

    return routine.split('\n')
      .filter(line => line.trim() !== '')
      .map((line, index) => {
        const match = line.match(/^(\d+\.)\s*(.*)/);
        if (match) {
          return (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0 text-primary font-bold w-6 text-right">{match[1]}</div>
              <p className="flex-1 text-muted-foreground">{match[2]}</p>
            </div>
          );
        }
        return <p key={index} className="ml-9 text-muted-foreground">{line}</p>;
      });
  };

  return (
    <section id="rotina-personalizada" className="py-16 sm:py-24 bg-background/95">
      <div ref={ref} className={cn("container mx-auto px-4 transition-all duration-500", inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-foreground">
            Experimente a Rotina de 22 Minutos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Selecione seu rank e nossa IA criará um aquecimento focado, uma amostra grátis do Pro Sprint System.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <Card className="border-border rounded-2xl">
            <CardHeader>
              <CardTitle>Gere sua Rotina de Aquecimento</CardTitle>
              <CardDescription>É grátis e leva menos de 30 segundos.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="rank"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Seu Rank Atual no Rocket League</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-full">
                              <SelectValue placeholder="Selecione seu rank..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {ranks.map(rank => (
                              <SelectItem key={rank} value={rank}>{rank}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isPending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-12 text-base rounded-full">
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Gerando...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Gerar Rotina Gratuita
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <Card className="bg-card min-h-[360px] flex flex-col border-primary/20 shadow-lg shadow-primary/5 rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Sparkles />
                Sua Rotina Personalizada
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex items-center justify-center p-6">
              {isPending && (
                <div className="flex flex-col items-center justify-center text-center text-muted-foreground space-y-4">
                   <Loader2 className="h-10 w-10 animate-spin text-primary" />
                   <p className="font-medium">Ajustando os drills para você...</p>
                </div>
              )}
              {routine && !isPending && (
                <div className="space-y-4 w-full h-full overflow-y-auto">
                  {renderRoutine()}
                </div>
              )}
              {!routine && !isPending && (
                <div className="text-muted-foreground text-center p-8 space-y-4">
                  <div className="mx-auto w-fit rounded-full bg-primary/10 p-4">
                    <Sparkles className="h-8 w-8 text-primary"/>
                  </div>
                  <p>Sua rotina de aquecimento de 22 minutos aparecerá aqui.</p>
                </div>
              )}
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
