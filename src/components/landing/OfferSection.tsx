"use client";

import { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import UpsellModal from './UpsellModal';
import { Check, X } from 'lucide-react';

export default function OfferSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <UpsellModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
            <section id="oferta" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-headline text-3xl md:text-5xl font-bold text-center text-red-900 mb-12">Escolha a Melhor Opção para o Seu Natal</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                        
                        {/* CARD 1: BÁSICO */}
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all relative flex flex-col">
                            <div className="bg-gray-100 text-gray-600 text-center py-3 font-bold uppercase tracking-widest text-sm">
                                PLANO BÁSICO
                            </div>
                            <div className="p-8 text-center flex-grow flex flex-col">
                                <h3 className="font-headline text-xl font-bold mb-2 text-gray-800">100 Receitas de Natal</h3>
                                <p className="text-gray-400 line-through mb-1">De R$ 47,00</p>
                                <div className="flex items-center justify-center gap-2 mb-6">
                                    <span className="text-gray-600">Por</span>
                                    <span className="text-4xl font-extrabold text-gray-800">R$ 9,90</span>
                                </div>
                                
                                <ul className="text-left space-y-3 mb-8 text-sm text-gray-600 flex-grow">
                                    <li className="flex items-center gap-2"><Check className="text-green-500 w-4 h-4" /> 100 Receitas Testadas</li>
                                    <li className="flex items-center gap-2"><Check className="text-green-500 w-4 h-4" /> Acesso Vitalício</li>
                                    <li className="flex items-center gap-2"><Check className="text-green-500 w-4 h-4" /> Acesso no Celular e PC</li>
                                    <li className="flex items-center gap-2 opacity-50"><X className="text-gray-400 w-4 h-4" /> Bônus Exclusivos de Drinks</li>
                                    <li className="flex items-center gap-2 opacity-50"><X className="text-gray-400 w-4 h-4" /> Guia de Sobremesas Gourmet</li>
                                </ul>

                                <Button onClick={() => setIsModalOpen(true)} className="w-full bg-gray-200 text-gray-700 font-bold py-4 h-auto rounded-xl shadow-sm hover:bg-gray-300 transition-colors uppercase text-lg">
                                    QUERO ESSE
                                </Button>
                            </div>
                        </div>

                        {/* CARD 2: PREMIUM */}
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-red-600 relative transform md:-translate-y-6 flex flex-col ring-4 ring-amber-400 ring-offset-4 z-10">
                            <div className="christmas-gradient text-white text-center py-4 font-bold uppercase tracking-widest text-sm shadow-md">
                                PLANO PREMIUM
                            </div>
                            <div className="p-8 text-center flex-grow flex flex-col bg-red-50">
                                <h3 className="font-headline text-2xl font-bold mb-2 text-red-900">100 Receitas de Natal + Bônus</h3>
                                <p className="text-red-400 line-through mb-1">De R$ 97,00</p>
                                <div className="flex items-center justify-center gap-2 mb-6">
                                    <span className="text-red-800 text-lg">Por</span>
                                    <span className="text-6xl font-extrabold text-red-600 drop-shadow-sm">R$ 19,90</span>
                                </div>
                                
                                <ul className="text-left space-y-3 mb-8 font-medium text-gray-700 flex-grow">
                                    <li className="flex items-center gap-2"><span className="bg-green-600 text-white p-0.5 rounded-full flex items-center justify-center shadow-sm"><Check className="w-3 h-3"/></span> <strong>100 Receitas de Natal</strong></li>
                                    <li className="flex items-center gap-2"><span className="bg-green-600 text-white p-0.5 rounded-full flex items-center justify-center shadow-sm"><Check className="w-3 h-3"/></span> Acesso Vitalício</li>
                                    <li className="flex items-center gap-2"><span className="bg-green-600 text-white p-0.5 rounded-full flex items-center justify-center shadow-sm"><Check className="w-3 h-3"/></span> <span className="text-red-700 font-bold">+ Bônus:</span> Guia de Drinks Natalinos</li>
                                    <li className="flex items-center gap-2"><span className="bg-green-600 text-white p-0.5 rounded-full flex items-center justify-center shadow-sm"><Check className="w-3 h-3"/></span> <span className="text-red-700 font-bold">+ Bônus:</span> Sobremesas Gourmet</li>
                                </ul>

                                <button className={cn("btn-gold w-full text-red-950 font-extrabold text-xl py-5 rounded-xl shadow-xl uppercase animate-pulse transform hover:scale-105 transition-transform")}>
                                    QUERO ESSE
                                </button>
                                
                                <p className="text-xs text-red-500 mt-4 font-semibold uppercase [text-shadow:0_0_8px_rgba(220,38,38,0.7)]">MAIS VENDIDO NAS ÚLTIMAS 24H</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                       
                    </div>
                </div>
            </section>
        </>
    );
}
