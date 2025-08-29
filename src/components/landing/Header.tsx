'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tighter text-primary">
            DiazRL
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#provas" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Provas
          </Link>
          <Link href="#conteudo" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Conteúdo
          </Link>
          <Link href="#oferta" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Garantia
          </Link>
          <Link href="#faq" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
            <Link href="#oferta">Começar agora</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
