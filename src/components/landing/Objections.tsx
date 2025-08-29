import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const objections = [
  {
    question: "Não tenho tempo para treinar por horas.",
    answer: "O método Pro Sprint foi feito para você. São 22 minutos por dia. O foco é na intensidade e na qualidade do treino, não na quantidade. Temos ganhos por rank documentados com essa rotina curta."
  },
  {
    question: "A solo queue me segura, meus companheiros são ruins.",
    answer: "Nosso sistema foca em decisões que independem de comunicação. Você vai aprender a ler o jogo, se posicionar melhor e tomar decisões que te dão vantagem mesmo com companheiros aleatórios. Ensinamos adaptações para duo/trio, mas o core é para solo queue."
  },
  {
    question: "Já tentei de tudo no YouTube e nada funciona.",
    answer: "YouTube oferece conteúdo solto e desorganizado. O Pro Sprint é um método sequencial com progressões lógicas, checklists e, o mais importante, revisão profissional. É um sistema completo, não uma playlist de vídeos."
  },
  {
    question: "Preciso de mecânicas avançadas como flip reset para subir de rank.",
    answer: "Não. Consistência e decisão são 90% do caminho até o Grand Champion. O método foca nisso primeiro. As micro-mecânicas necessárias para cada rank são introduzidas progressivamente, sem sobrecarregar."
  },
  {
    question: "Não tenho certeza se isso realmente funciona. Cadê as provas?",
    answer: "Temos uma seção inteira dedicada a isso. Apresentamos prints, clipes e resultados recentes de MMR e winrate, todos datados e verificados. Acreditamos em transparência total."
  }
]

export default function Objections() {
  return (
    <section id="objecoes" className="py-16 sm:py-24 bg-background/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-foreground">
            Sem tempo? Jogando sozinho?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Respostas diretas para as maiores objeções que te impedem de evoluir.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {objections.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-bold text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
