import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Link from 'next/link';

const ranks = [
  {
    name: 'Bronze / Prata / Ouro',
    value: 'bronze-gold',
    before: {
      rank: 'Ouro 2',
      mmr: 720,
      winrate: '45%',
      clip: 'https://picsum.photos/600/400',
      aiHint: 'game screenshot'
    },
    after: {
      rank: 'Platina 1',
      mmr: 850,
      winrate: '62%',
      clip: 'https://picsum.photos/600/400',
      aiHint: 'gameplay video'
    },
    change: 'Quick wins na primeira semana com progressões simples.',
    duration: '14 dias'
  },
  {
    name: 'Platina / Diamante',
    value: 'plat-diamond',
    before: {
      rank: 'Diamante 1',
      mmr: 1080,
      winrate: '51%',
      clip: 'https://picsum.photos/600/400',
      aiHint: 'gameplay video'
    },
    after: {
      rank: 'Campeão 1',
      mmr: 1250,
      winrate: '58%',
      clip: 'https://picsum.photos/600/400',
      aiHint: 'game screenshot'
    },
    change: 'De overcommit para holds inteligentes e consistência.',
    duration: '30 dias'
  },
  {
    name: 'Champion / GC',
    value: 'champ-gc',
    before: {
      rank: 'GC 1',
      mmr: 1515,
      winrate: '53%',
      clip: 'https://picsum.photos/600/400',
      aiHint: 'gameplay video'
    },
    after: {
      rank: 'GC 2',
      mmr: 1680,
      winrate: '65%',
      clip: 'https://picsum.photos/600/400',
      aiHint: 'game screenshot'
    },
    change: 'Frameworks táticos e meta reading para dominar o lobby.',
    duration: '30 dias'
  },
  {
    name: 'GC → SSL',
    value: 'gc-ssl',
    before: {
      rank: 'GC 3',
      mmr: 1800,
      winrate: '55%',
      clip: 'https://picsum.photos/600/400',
      aiHint: 'game screenshot'
    },
    after: {
      rank: 'SSL',
      mmr: 1950,
      winrate: '68%',
      clip: 'https://picsum.photos/600/400',
      aiHint: 'gameplay video'
    },
    change: 'Preparação de série, VODs avançados e rotinas mentais.',
    duration: '45 dias'
  },
];

export default function RankProof() {
  return (
    <section id="provas" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-foreground">
            Provas Reais, Resultados por Rank
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Veja a transformação de jogadores como você, aplicando 22 minutos por dia.
          </p>
        </div>

        <Tabs defaultValue="plat-diamond" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
            {ranks.map(rank => (
              <TabsTrigger key={rank.value} value={rank.value} className="py-2.5">{rank.name}</TabsTrigger>
            ))}
          </TabsList>
          
          {ranks.map(rank => (
            <TabsContent key={rank.value} value={rank.value} className="mt-8">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>Transformação: {rank.name}</CardTitle>
                  <CardDescription>Aplicando 22 min/dia por {rank.duration}.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="space-y-4">
                      <h3 className="font-bold text-lg text-center text-muted-foreground">Antes</h3>
                      <div className="relative aspect-video rounded-lg overflow-hidden border">
                        <Image src={rank.before.clip} alt={`Clipe antes - ${rank.name}`} width={600} height={400} className="object-cover" data-ai-hint={rank.before.aiHint} />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <PlayCircle className="w-16 h-16 text-white/70" />
                        </div>
                      </div>
                      <div className="flex justify-around text-center">
                        <div><p className="font-bold text-xl">{rank.before.rank}</p><p className="text-sm text-muted-foreground">Rank</p></div>
                        <div><p className="font-bold text-xl">{rank.before.mmr}</p><p className="text-sm text-muted-foreground">MMR</p></div>
                        <div><p className="font-bold text-xl">{rank.before.winrate}</p><p className="text-sm text-muted-foreground">Winrate</p></div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-bold text-lg text-center text-primary">Depois</h3>
                      <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-primary">
                        <Image src={rank.after.clip} alt={`Clipe depois - ${rank.name}`} width={600} height={400} className="object-cover" data-ai-hint={rank.after.aiHint}/>
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <PlayCircle className="w-16 h-16 text-white/70" />
                        </div>
                      </div>
                      <div className="flex justify-around text-center">
                        <div><p className="font-bold text-xl text-primary">{rank.after.rank}</p><p className="text-sm text-muted-foreground">Rank</p></div>
                        <div><p className="font-bold text-xl text-primary">{rank.after.mmr}</p><p className="text-sm text-muted-foreground">MMR</p></div>
                        <div><p className="font-bold text-xl text-primary">{rank.after.winrate}</p><p className="text-sm text-muted-foreground">Winrate</p></div>
                      </div>
                    </div>
                  </div>
                   <div className="mt-6 bg-primary/10 p-4 rounded-md text-center">
                      <p className="font-medium text-primary"><span className="font-bold">Mudança-chave:</span> {rank.change}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full md:w-auto ml-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                    <Link href="#oferta">
                      Ver rotina do seu rank <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
