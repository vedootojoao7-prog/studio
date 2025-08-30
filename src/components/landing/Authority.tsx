import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Award, ExternalLink, Milestone } from 'lucide-react';
import Link from 'next/link';

const timelineEvents = [
  {
    icon: <Milestone className="h-5 w-5 text-primary" />,
    title: 'Único BR na Complexity',
    description: 'Entrou para a Complexity aos 16 anos, competindo no mais alto nível norte-americano.',
    link: '#',
    source: 'Fonte Oficial',
  },
  {
    icon: <Award className="h-5 w-5 text-primary" />,
    title: 'US$55.433+ em Prêmios',
    description: 'Resultados expressivos em torneios de elite, comprovando sua consistência.',
    link: '#',
    source: 'Liquipedia',
  },
  {
    icon: <Milestone className="h-5 w-5 text-primary" />,
    title: 'Migração para os EUA',
    description: 'Dominando nos servidores NA mesmo com 90ms de ping, focando em decisão e leitura de jogo.',
    link: '#',
    source: 'Fonte Oficial',
  },
];

export default function Authority() {
  return (
    <section id="autoridade" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-foreground">
            Guiado por um Profissional de Verdade
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            O método foi desenvolvido e validado por DIAZ, pro player da Complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="md:col-span-2">
            <Card className="overflow-hidden border-2 border-primary/20 rounded-3xl">
              <CardContent className="p-0">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClOHV7gbTsCR9JFeNZX_fj_ud768VvFm4KA&s"
                  alt="Foto do DIAZ, pro player de Rocket League"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                  data-ai-hint="esports player"
                />
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-2xl font-bold tracking-tight text-primary">DIAZ (Complexity)</h3>
            <p className="mt-4 text-lg text-foreground">
              Único brasileiro na Complexity, DIAZ se destacou no cenário norte-americano aos 16 anos, acumulando mais de US$55.433 em prêmios. Sua jornada é marcada pela superação, como a famosa "narrativa dos 90ms", onde dominava nos servidores americanos mesmo jogando do Brasil, provando que decisão e leitura de jogo superam limitações técnicas.
            </p>
            <div className="mt-8 space-y-6">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 bg-primary/10 p-3 rounded-full">
                    {event.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{event.title}</h4>
                    <p className="text-muted-foreground">{event.description}</p>
                    <Link href={event.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-1 mt-1 group">
                      {event.source} <ExternalLink className="h-3 w-3 opacity-70 group-hover:opacity-100 transition" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
