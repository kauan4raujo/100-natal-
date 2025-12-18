import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';

export default function Header() {
    const mockupImage = PlaceHolderImages.find(p => p.id === 'recipe-book-mockup');

    return (
        <header className="christmas-gradient text-white relative py-16 px-6 overflow-hidden border-b-8 border-christmas-green">
            <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
                <svg width="200" height="200" viewBox="0 0 100 100" fill="white">
                    <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" />
                </svg>
            </div>
            
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <span className="inline-block bg-christmas-green px-4 py-1 rounded-full text-sm font-semibold mb-6 border-2 border-amber-400 tracking-wide uppercase shadow-lg">
                    🎄 Guia Exclusivo 2025
                </span>
                <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
                    A Ceia de Natal Perfeita, <span className="gold-text">Sem Estresse</span> e Gastando Pouco
                </h1>
                <p className="text-lg md:text-xl text-white font-medium mb-10 max-w-2xl mx-auto drop-shadow-sm">
                    100 receitas testadas e aprovadas para encantar sua família e amigos neste Natal com praticidade e economia.
                </p>

                <div className="relative inline-block mb-10">
                    <div className="absolute -inset-4 bg-white/30 blur-3xl rounded-full"></div>
                    {mockupImage && (
                        <Image 
                            src={mockupImage.imageUrl} 
                            alt={mockupImage.description} 
                            width={448}
                            height={448}
                            priority
                            data-ai-hint={mockupImage.imageHint}
                            className="relative rounded-2xl shadow-2xl border-4 border-amber-400 w-full max-w-md mx-auto"
                        />
                    )}
                    <div className="absolute -bottom-4 -right-4 md:-right-8 bg-christmas-green text-white p-4 rounded-full shadow-xl font-bold transform rotate-12 border-2 border-amber-400 flex flex-col items-center justify-center w-24 h-24">
                        <span className="text-xs font-normal">APENAS</span>
                        <span className="text-xl">R$ 9,90</span>
                    </div>
                </div>

                <div className="mt-4">
                    <Link href="#oferta" className="btn-gold inline-block w-full md:w-auto font-extrabold text-xl px-10 py-5 rounded-xl shadow-lg uppercase tracking-tight">
                        Quero as 100 Receitas por R$ 9,90
                    </Link>
                    <p className="mt-6 flex items-center justify-center gap-2 text-sm text-white font-medium shadow-black drop-shadow-md">
                        <CheckCircle2 className="w-5 h-5 text-amber-300" />
                        Acesso vitalício • Receba agora no seu e-mail
                    </p>
                </div>
            </div>
        </header>
    );
}
