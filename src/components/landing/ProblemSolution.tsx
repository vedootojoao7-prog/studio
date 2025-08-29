import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, TrendingDown, TrendingUp, Zap, Target } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section id="mecanismo" className="py-16 sm:py-24 bg-background/95">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          <Card className="bg-card/50 border-destructive/30 rounded-2xl transform hover:-translate-y-2 transition-transform duration-300">
            <CardHeader>
              <div className="mx-auto bg-destructive/10 p-3 rounded-full w-fit">
                <TrendingDown className="h-8 w-8 text-destructive" />
              </div>
              <CardTitle className="mt-4 !text-2xl font-bold tracking-tight">Problema</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                “Treino cego de ranked reforça maus hábitos: <span className="text-foreground font-medium">overcommit</span>, <span className="text-foreground font-medium">tilt</span>, e <span className="text-foreground font-medium">first touch</span> inconsistente.”
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-primary bg-primary/5 rounded-2xl transform hover:-translate-y-2 transition-transform duration-300">
            <CardHeader>
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                <BrainCircuit className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-4 !text-2xl font-bold tracking-tight">Mecanismo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                “Pro Sprint System: <span className="text-foreground font-medium">First Touch</span> → <span className="text-foreground font-medium">Decisão sob Pressão</span> → <span className="text-foreground font-medium">Recover/Kickoff</span> em blocos de 22'.”
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-green-500/30 rounded-2xl transform hover:-translate-y-2 transition-transform duration-300">
            <CardHeader>
              <div className="mx-auto bg-green-500/10 p-3 rounded-full w-fit">
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
              <CardTitle className="mt-4 !text-2xl font-bold tracking-tight">Payoff</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                “Decisões mais limpas, menos erros não forçados, e <span className="text-foreground font-medium">winrate e MMR</span> estáveis.”
              </p>
            </CardContent>
          </Card>

        </div>
        <div className="mt-12 flex justify-center items-center gap-4 md:gap-8 text-foreground font-bold text-lg p-4 rounded-full bg-card border">
            <div className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-green-500" />
                <span>MMR ↑</span>
            </div>
             <div className="flex items-center gap-2">
                <TrendingDown className="h-6 w-6 text-destructive" />
                <span>Tilt ↓</span>
            </div>
             <div className="flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                <span>Consistência ↑</span>
            </div>
        </div>
      </div>
    </section>
  );
}
