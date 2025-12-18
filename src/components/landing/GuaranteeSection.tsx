import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function GuaranteeSection() {
    const guaranteeSealImage = PlaceHolderImages.find(p => p.id === 'guarantee-seal');

    return (
        <section className="py-12 px-6">
            <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-amber-50 p-8 rounded-3xl border border-amber-200">
                {guaranteeSealImage && (
                    <Image 
                        src={guaranteeSealImage.imageUrl} 
                        alt={guaranteeSealImage.description}
                        width={96}
                        height={96}
                        data-ai-hint={guaranteeSealImage.imageHint}
                        className="w-24 h-24"
                    />
                )}
                <div>
                    <h3 className="font-headline text-xl font-bold text-amber-900 mb-2">Risco Zero para você</h3>
                    <p className="text-amber-800 text-sm">
                        Garantimos a qualidade do nosso guia. Se em 7 dias você não gostar das receitas, basta pedir o reembolso. Simples e sem burocracia.
                    </p>
                </div>
            </div>
        </section>
    );
}
