import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Users, Gamepad2, FileText } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: 'Mais de 50 Drills por Rank',
    description: 'Códigos e progressões para treinar o que seu rank precisa, do básico às jogadas aéreas mais complexas.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClOHV7gbTsCR9JFeNZX_fj_ud768VvFm4KA&s',
    aiHint: 'game training'
  },
  {
    icon: <Gamepad2 className="w-8 h-8 text-primary" />,
    title: 'Modelos de Decisão',
    description: 'Aprenda a pensar como um pro: quando pressionar, como se portar sendo o segundo homem e como gerenciar seu boost.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClOHV7gbTsCR9JFeNZX_fj_ud768VvFm4KA&s',
    aiHint: 'strategy session'
  },
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: 'Planilhas e Checklists',
    description: 'Acompanhe seu progresso com planilhas e checklists práticos para usar durante as partidas.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClOHV7gbTsCR9JFeNZX_fj_ud768VvFm4KA&s',
    aiHint: 'progress tracker'
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Comunidade e Análises',
    description: 'Receba 2 análises de replay por mês e tenha acesso a uma comunidade exclusiva no Discord para tirar dúvidas.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClOHV7gbTsCR9JFeNZX_fj_ud768VvFm4KA&s',
    aiHint: 'online community'
  },
];

export default function CourseContents() {
  return (
    <section id="conteudo" className="py-16 sm:py-24 bg-background/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-foreground">
            O Arsenal Completo para sua Evolução
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Tudo o que você recebe ao entrar para o Pro Sprint System.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 rounded-2xl">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="p-3 bg-primary/10 rounded-full">{feature.icon}</div>
                <CardTitle className="text-lg font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{feature.description}</p>
                <div className="mt-4 aspect-video rounded-xl overflow-hidden border">
                    <Image 
                        src={feature.image}
                        alt={`Mockup de ${feature.title}`}
                        width={400}
                        height={300}
                        className="object-cover w-full h-full"
                        data-ai-hint={feature.aiHint}
                    />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
