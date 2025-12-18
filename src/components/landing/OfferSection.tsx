"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import UpsellModal from './UpsellModal';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function OfferSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <UpsellModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
            <section id="oferta" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-headline text-3xl md:text-5xl font-bold text-center text-red-900 mb-12">Escolha a Melhor Opção para o Seu Natal</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        
                        {/* CARD 1: BÁSICO */}
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all relative flex flex-col">
                            <div className="bg-gray-100 text-gray-600 text-center py-3 font-bold uppercase tracking-widest text-sm">
                                🔹 PLANO BÁSICO – ESSENCIAL DA CEIA
                            </div>
                            <div className="p-8 text-center flex-grow flex flex-col">
                                <p className="text-gray-400 line-through mb-1">De R$ 47,00</p>
                                <div className="flex items-center justify-center gap-2 mb-6">
                                    <span className="text-gray-800">👉 Por apenas</span>
                                    <span className="text-4xl font-extrabold text-gray-800">R$ 9,90</span>
                                </div>
                                
                                <ul className="text-left space-y-3 mb-8 text-sm text-gray-600 flex-grow">
                                    <li className="flex items-start gap-2"><Check className="text-green-500 w-4 h-4 mt-1 shrink-0" /> 100 Receitas de Natal Testadas e Aprovadas</li>
                                    <li className="flex items-start gap-2"><Check className="text-green-500 w-4 h-4 mt-1 shrink-0" /> Entradas, pratos principais e acompanhamentos</li>
                                    <li className="flex items-start gap-2"><Check className="text-green-500 w-4 h-4 mt-1 shrink-0" /> Receitas simples e fáceis de preparar</li>
                                    <li className="flex items-start gap-2"><Check className="text-green-500 w-4 h-4 mt-1 shrink-0" /> Acesso vitalício (use todo Natal)</li>
                                    <li className="flex items-start gap-2"><Check className="text-green-500 w-4 h-4 mt-1 shrink-0" /> Acesso imediato no celular, tablet ou PC</li>
                                </ul>

                                <p className="text-sm text-gray-700 font-medium mb-6">👉 Ideal para quem quer montar uma ceia completa gastando pouco</p>

                                <Button onClick={() => setIsModalOpen(true)} className="w-full bg-gray-200 text-gray-700 font-bold py-4 h-auto rounded-xl shadow-sm hover:bg-gray-300 transition-colors uppercase text-lg mt-auto">
                                    QUERO ESSE PLANO
                                </Button>
                            </div>
                        </div>

                        {/* CARD 2: PREMIUM */}
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-red-600 relative flex flex-col ring-4 ring-amber-400 ring-offset-4 z-10">
                             <div className="christmas-gradient text-white text-center py-4 font-bold uppercase tracking-widest text-sm shadow-md">
                                ⭐ PLANO PREMIUM – CEIA COMPLETA + EXPERIÊNCIA GOURMET
                            </div>
                             <p className="text-center bg-red-600 py-1 text-red-100 text-xs font-bold uppercase" style={{ color: 'red', textShadow: '0 0 10px red' }}>
                                🔥 MAIS VENDIDO NAS ÚLTIMAS 24H
                            </p>
                            <div className="p-8 text-center flex-grow flex flex-col bg-red-50">
                                <p className="text-red-400 line-through mb-1">De R$ 97,00</p>
                                <div className="flex items-center justify-center gap-2 mb-6">
                                    <span className="text-red-800 text-lg">👉 Por apenas</span>
                                    <span className="text-6xl font-extrabold text-red-600 drop-shadow-sm">R$ 19,90</span>
                                </div>
                                
                                <p className="text-gray-700 mb-6">Tudo do Plano Básico, + conteúdos exclusivos que transformam sua ceia em uma experiência inesquecível 👇</p>

                                <div className="text-left bg-white p-4 rounded-xl border border-red-100">
                                    <h4 className="font-bold text-gray-800 mb-3">🎁 O QUE VOCÊ LEVA NO PREMIUM:</h4>
                                    <ul className="text-left space-y-2 mb-4 font-medium text-gray-700">
                                        <li className="flex items-start gap-2">✔️ 100 Receitas de Natal Testadas</li>
                                        <li className="flex items-start gap-2">✔️ Acesso vitalício (para sempre)</li>
                                    </ul>
                                    <h4 className="font-bold text-gray-800 mb-3">🎁 BÔNUS EXCLUSIVOS (SÓ NO PREMIUM):</h4>
                                    <ul className="text-left space-y-3 mb-4 font-medium text-gray-700">
                                      <li className="flex flex-col">
                                        <div className="flex items-start gap-2">
                                          <span className="text-xl">🥂</span>
                                          <div>
                                            <span className="font-bold">Guia Completo de Drinks Natalinos</span>
                                            <p className="text-xs text-gray-500">– Drinks alcoólicos e sem álcool</p>
                                            <p className="text-xs text-gray-500">– Receitas fáceis e elegantes para impressionar</p>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="flex flex-col">
                                        <div className="flex items-start gap-2">
                                          <span className="text-xl">🍰</span>
                                          <div>
                                            <span className="font-bold">Guia de Sobremesas Gourmet de Natal</span>
                                            <p className="text-xs text-gray-500">– Doces sofisticados e lucrativos</p>
                                            <p className="text-xs text-gray-500">– Sobremesas que encantam convidados e clientes</p>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="flex flex-col">
                                        <div className="flex items-start gap-2">
                                          <span className="text-xl">🎄</span>
                                          <div>
                                            <span className="font-bold">Planejamento da Ceia Perfeita</span>
                                            <p className="text-xs text-gray-500">– Combinação ideal de pratos, drinks e sobremesas</p>
                                            <p className="text-xs text-gray-500">– Evite desperdício e economize dinheiro</p>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                </div>
                                
                                <div className="bg-red-100 border border-red-200 rounded-lg p-2 mt-4 text-center">
                                    <p className="text-xs text-red-700">💰 Valor total dos bônus: <span className="line-through">R$ 79,00</span></p>
                                    <p className="text-sm font-bold text-red-800">💥 Hoje você paga apenas R$ 19,90</p>
                                </div>

                                <p className="text-sm text-gray-700 font-medium my-6">👉 Pelo valor de menos de 2 cafés, você garante a ceia mais completa do Natal</p>

                                <Link href="https://pay.kiwify.com.br/YHc9Roa" target="_blank" className={cn("btn-gold w-full text-red-950 font-extrabold text-xl py-5 rounded-xl shadow-xl uppercase animate-pulse transform hover:scale-105 transition-transform inline-block text-center")}>
                                    QUERO O PLANO PREMIUM AGORA
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
