import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'Como acesso o curso? Funciona em PC e console?',
    answer: 'Sim! O acesso é imediato após a compra pela nossa plataforma. Os códigos de treino e conceitos funcionam em todas as plataformas (PC, PlayStation, Xbox, Switch). Incluímos um guia de setup para encontrar os treinos.'
  },
  {
    question: 'Preciso mesmo de apenas 22 minutos por dia?',
    answer: 'Sim. O método Pro Sprint foi desenhado para maximizar o ganho com o mínimo de tempo. São 22 minutos de treino focado e de alta intensidade, que trazem mais resultado que horas de treino aleatório. A consistência diária é a chave.'
  },
  {
    question: 'Preciso ter um duo ou trio para o método funcionar?',
    answer: 'Não. O foco do sistema é em desenvolver sua capacidade de decisão individual, que funciona e te faz subir de rank mesmo jogando solo queue. Você aprenderá a ler o jogo e se adaptar a qualquer companheiro de equipe.'
  },
  {
    question: 'Em quanto tempo vejo evolução no meu jogo?',
    answer: 'Seguindo a rotina de 22 minutos por dia, a maioria dos jogadores reporta uma melhora notável na consistência e tomada de decisão em 14 a 30 dias. As provas por rank que mostramos são de jogadores reais nesse período.'
  },
  {
    question: 'Qual a diferença para vídeos no YouTube ou pacotes de treino gratuitos?',
    answer: 'O Pro Sprint System é um método sequencial com progressão lógica, e não conteúdo solto. Além dos drills, você recebe frameworks de decisão, checklists e, o mais importante, revisão de profissional para corrigir seus erros. É um sistema completo, não apenas uma lista de treinos.'
  }
];

export default function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-foreground">
            Dúvidas Frequentes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Respostas diretas para as perguntas mais comuns.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
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
