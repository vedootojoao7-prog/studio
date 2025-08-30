import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <>
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 text-center bg-gradient-to-b from-background to-background/90 overflow-hidden">
        <div className="container mx-auto px-4 z-10">
          <Badge variant="outline" className="border-primary/50 text-primary mb-4 py-1.5 px-4 rounded-full">
            Método Pro Sprint DIAZ
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-foreground max-w-4xl mx-auto">
            Do Platina ao Grand Champion em 30 dias com a rotina de <span className="text-primary">22 minutos</span> do pro da Complexity.
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Treinos curtos e focados, validados por um pro player, que transformam sua tomada de decisão e consistência em vitórias de verdade sem precisar de um grind infinito.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base shadow-lg shadow-accent/20 transform hover:scale-105 transition-transform rounded-full">
              <Link href="#oferta">Começar agora</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-2 font-bold text-base rounded-full">
              <Link href="#provas">Ver provas por rank</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              Validado por Pro
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              Blocos de 22' por rank
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              Garantia de 30 dias
            </div>
          </div>

          <div className="relative mt-16 max-w-5xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 rounded-3xl border-2 border-primary/20 shadow-2xl shadow-primary/10 overflow-hidden">
              <Image 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClOHV7gbTsCR9JFeNZX_fj_ud768VvFm4KA&s"
                alt="Mockup do curso DiazRL em desktop e mobile"
                width={1200}
                height={675}
                className="object-cover"
                data-ai-hint="esports course"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
