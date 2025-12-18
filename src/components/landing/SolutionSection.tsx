import { Check } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const benefits = [
    'Receitas fáceis para quem não é profissional',
    'Ingredientes simples que você encontra em qualquer mercado',
    'Organização por categorias para facilitar sua escolha',
];

export default function SolutionSection() {
    const dinnerImage = PlaceHolderImages.find(p => p.id === 'christmas-dinner-table');
    return (
        <section className="py-20 px-6 bg-red-900 text-white card-pattern">
            <div className="max-w-5xl mx-auto grid md:grid-rows-1 md:grid-cols-2 items-center gap-12">
                <div>
                    <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">A Solução Completa para o seu Natal</h2>
                    <p className="text-xl text-red-100 mb-8">
                        Reunimos 100 receitas cuidadosamente selecionadas para transformar sua ceia em um evento inesquecível, prático e econômico.
                    </p>
                    <ul className="space-y-4">
                        {benefits.map((benefit, index) => (
                             <li key={index} className="flex items-center gap-3">
                                <span className="bg-amber-400 p-1 rounded-full text-red-900 flex items-center justify-center">
                                    <Check className="w-4 h-4" strokeWidth={3} />
                                </span>
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white/5">
                    {dinnerImage && (
                         <Image 
                            src={dinnerImage.imageUrl} 
                            alt={dinnerImage.description} 
                            width={600}
                            height={600}
                            data-ai-hint={dinnerImage.imageHint}
                            className="w-full h-full object-cover" 
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
