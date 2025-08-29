import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ShieldCheck, Video, Users, Calendar, Gift } from 'lucide-react';

const whatsIncluded = [
  { icon: <Video className="w-5 h-5 text-primary" />, text: 'Acesso vitalício ao curso por rank (Bronze ao SSL)' },
  { icon: <Check className="w-5 h-5 text-primary" />, text: '50+ drills com códigos e progressões' },
  { icon: <Users className="w-5 h-5 text-primary" />, text: 'Acesso à comunidade exclusiva no Discord' },
  { icon: <Calendar className="w-5 h-5 text-primary" />, text: '2 reviews de replay em grupo por mês' },
  { icon: <Gift className="w-5 h-5 text-primary" />, text: 'Todas as futuras atualizações de conteúdo' }
];

const bonuses = [
  { text: 'Biblioteca de Calls e Comunicação Rápida' },
  { text: 'VOD Pack com análises do DIAZ' },
  { text: 'Calendário de Reviews e Eventos da Comunidade' }
];

export default function Offer() {
  return (
    <section id="oferta" className="py-16 sm:py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-card/80 backdrop-blur-sm border-2 border-accent shadow-2xl shadow-accent/10">
          <CardHeader className="text-center p-8">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-foreground">
              Sua Vaga no Pro Sprint System
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Acesso imediato a todo o sistema para você começar a subir de rank hoje.
            </p>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-foreground">O que você recebe:</h3>
                <ul className="space-y-3">
                  {whatsIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                    <h3 className="font-bold text-lg text-foreground">Bônus Exclusivos:</h3>
                    <ul className="space-y-3 mt-3">
                      {bonuses.map((bonus, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <Gift className="w-5 h-5 text-accent mt-1"/>
                            <span>{bonus.text}</span>
                        </li>
                      ))}
                    </ul>
                </div>
              </div>

              <div className="bg-background/50 rounded-lg p-6 flex flex-col items-center justify-center text-center border border-dashed">
                <ShieldCheck className="w-16 h-16 text-accent" />
                <h3 className="mt-4 text-xl font-bold text-foreground">Garantia Incondicional de 30 Dias</h3>
                <p className="mt-2 text-muted-foreground">
                  Nossa promessa é simples: siga o método por 22 minutos por dia e suba pelo menos 1 rank completo em 30 dias. Se não acontecer, nós devolvemos 100% do seu dinheiro. O risco é todo nosso.
                </p>
              </div>
            </div>
            <div className="mt-10 text-center">
              <p className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">R$ 297</p>
              <p className="text-muted-foreground">ou 12x de R$ 28,94</p>
              <Button size="lg" className="mt-6 w-full max-w-md mx-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg h-14 shadow-lg shadow-accent/20 transform hover:scale-105 transition-transform">
                Garantir minha vaga e começar agora
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
