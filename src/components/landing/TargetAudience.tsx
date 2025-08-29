import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const audiences = [
  {
    rank: 'Platina / Diamante',
    points: [
      'Ganha consistência para sair do "sobe e desce".',
      'Rotina curta que se encaixa na sua vida.',
      'Elimina o overcommit e a falta de boost.',
    ],
  },
  {
    rank: 'Champion / GC',
    points: [
      'Aprende frameworks táticos para ler o meta.',
      'Usa checklists para decisões em tempo real.',
      'Transforma mecânicas em vitórias consistentes.',
    ],
  },
  {
    rank: 'GC → SSL',
    points: [
      'Prepara-se para séries e torneios.',
      'Acesso a VOD reviews de nível profissional.',
      'Desenvolve rotinas mentais para alta performance.',
    ],
  },
  {
    rank: 'Bronze / Prata / Ouro',
    points: [
      '"Quick wins" para ver resultado na primeira semana.',
      'Progressões simples para não se sentir perdido.',
      'Foco nos fundamentos que realmente importam.',
    ],
  },
];

export default function TargetAudience() {
  return (
    <section id="para-quem-e" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-foreground">
            Para quem é o Pro Sprint System?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Encontre seu rank e veja como o método vai te ajudar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-primary">{audience.rank}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {audience.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
