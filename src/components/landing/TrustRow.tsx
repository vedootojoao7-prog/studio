import Link from "next/link";

const ComplexityLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto text-foreground" viewBox="0 0 250 100" fill="currentColor">
      <path d="M83.4,25.3c-11.4,0-20.6,9.2-20.6,20.6s9.2,20.6,20.6,20.6c7.3,0,13.7-3.8,17.4-9.5l-13.6-7.8c-1.3,2.4-3.9,4-6.8,4
        c-4.2,0-7.7-3.4-7.7-7.7s3.4-7.7,7.7-7.7c2.9,0,5.5,1.6,6.8,4l13.6-7.8C97.1,29.1,90.7,25.3,83.4,25.3z"/>
      <path d="M49.6,0C22.2,0,0,22.2,0,49.6s22.2,49.6,49.6,49.6s49.6-22.2,49.6-49.6S77,0,49.6,0z M49.6,83.4
        c-18.7,0-33.8-15.1-33.8-33.8S30.9,15.8,49.6,15.8s33.8,15.1,33.8,33.8S68.3,83.4,49.6,83.4z"/>
      <polygon points="208.7,46.1 190,56.3 190,35.8"/>
      <path d="M171.3,0l-37.5,65L171.3,100l37.5-35L171.3,0z M171.3,80.3L149.5,43.7l21.8-36.6l21.8,36.6L171.3,80.3z"/>
    </svg>
)

const LiquipediaLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto text-foreground" viewBox="0 0 40 40" fill="currentColor">
        <path d="M20 0C9.1 0 0 9.1 0 20s9.1 20 20 20 20-9.1 20-20S30.9 0 20 0zm0 38C10.1 38 2 29.9 2 20S10.1 2 20 2s18 8.1 18 18-8.1 18-18 18z"/>
        <path d="M25.7 13.3c-.6-1-1.6-1.8-2.8-2.3-1.2-.5-2.6-.8-4.1-.8h-5.4v19.1h2.5V25.1h2.8c1.5 0 2.9-.2 4.1-.7 1.2-.5 2.2-1.2 3-2.1.8-.9 1.4-2 1.7-3.2.3-1.2.5-2.5.5-3.9s-.2-2.6-.5-3.8c-.2-.9-.6-1.8-1.1-2.5zM26 21.1c-.2.8-.5 1.5-1 2s-1.1.9-1.8 1.2c-1.5.6-3.4.9-5.6.9h-2.8v-9.6h2.9c2 0 3.7.3 5.1.8 1.4.5 2.4 1.4 3.1 2.5.5.8.8 1.8.8 2.9s-.2 2.1-.6 2.9z"/>
    </svg>
)


export default function TrustRow() {
    return (
        <div className="py-8 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider text-center md:text-left">
                        Perfis oficiais e resultados verificáveis
                    </p>
                    <div className="flex items-center gap-8">
                        <Link href="#" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                            <ComplexityLogo />
                        </Link>
                         <Link href="#" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                            <LiquipediaLogo />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
