import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-gray-900/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-tighter text-primary">
              DiazRL
            </h3>
            <p className="text-muted-foreground">O caminho mais rápido para o seu próximo rank no Rocket League.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-foreground">Navegação</h4>
            <ul className="space-y-1">
              <li><Link href="#provas" className="text-muted-foreground hover:text-primary transition">Provas</Link></li>
              <li><Link href="#conteudo" className="text-muted-foreground hover:text-primary transition">O que vem no curso</Link></li>
              <li><Link href="#oferta" className="text-muted-foreground hover:text-primary transition">Oferta</Link></li>
              <li><Link href="#faq" className="text-muted-foreground hover:text-primary transition">FAQ</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
             <h4 className="font-bold text-foreground">Pronto para começar?</h4>
             <Button size="lg" className="w-full max-w-xs mx-auto md:mx-0 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base">
                Começar agora
              </Button>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DiazRL. Todos os direitos reservados.</p>
          <p className="mt-2 max-w-3xl mx-auto">
            Disclaimer: Resultados podem variar. As provas apresentadas são de alunos reais, mas seu progresso depende da sua dedicação ao método. Provas auditáveis no perfil Liquipedia do DIAZ e posts oficiais da Complexity.
          </p>
          <div className="mt-4 space-x-4">
            <Link href="#" className="hover:text-primary transition">Termos de Serviço</Link>
            <Link href="#" className="hover:text-primary transition">Política de Privacidade</Link>
            <Link href="#" className="hover:text-primary transition">Suporte</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
