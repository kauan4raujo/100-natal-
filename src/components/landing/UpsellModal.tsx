"use client";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Check, X } from "lucide-react";
import Link from "next/link";

type UpsellModalProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

export default function UpsellModal({ isOpen, onOpenChange }: UpsellModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-transparent border-none shadow-none p-4 max-w-md w-full !rounded-3xl">
        <div className="bg-white rounded-3xl relative overflow-hidden shadow-2xl">
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
            aria-label="Fechar modal"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="bg-red-600 text-white p-5 text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 mb-2 animate-pulse">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="font-headline text-xl font-bold uppercase tracking-wide">
              Atenção: Oferta Especial!
            </h3>
            <p className="text-red-100 mt-1 font-medium text-sm">
              O plano básico custa R$9,90. Que tal levar muito mais por um pouco mais?
            </p>
          </div>

          <div className="p-6 text-center bg-gradient-to-b from-white to-amber-50">
            <p className="text-gray-600 mb-4 text-base">
              Por uma pequena diferença, libere os bônus exclusivos e transforme seu Natal!
            </p>

            <div className="border-2 border-dashed border-red-300 bg-white p-4 rounded-2xl mb-5 relative">
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                Oferta Única
              </span>
              <h4 className="font-headline text-lg font-bold text-gray-800 mb-1">
                Leve o Pacote PREMIUM Completo
              </h4>
              <p className="text-gray-400 text-xs mb-1">
                De <span className="line-through">R$ 97,00</span> por apenas:
              </p>
              <div className="text-4xl font-extrabold text-green-600 mb-1">
                R$ 11,90
              </div>
              <p className="text-xs text-red-500 font-bold animate-pulse">
                ⚡ Desconto válido apenas agora
              </p>
            </div>

            <ul className="text-left text-sm text-gray-600 space-y-2 mb-6 bg-gray-50 p-4 rounded-xl">
              <li className="flex items-center gap-2">
                <Check className="text-green-500 w-4 h-4" /> <strong>100 Receitas de Natal</strong>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500 w-4 h-4" /> + Guia de Drinks Natalinos
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500 w-4 h-4" /> + Sobremesas Gourmet
              </li>
            </ul>

            <Button asChild className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-extrabold text-lg py-3 h-auto rounded-xl shadow-lg transform transition hover:scale-105">
              <Link href="https://pay.kiwify.com.br/eur9Yyk" target="_blank">
                QUERO APROVEITAR POR R$ 11,90
              </Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="mt-4 text-gray-400 text-xs hover:text-gray-600 underline"
            >
              <Link href="https://pay.kiwify.com.br/VkzciNS" target="_blank">
                Não, obrigado. Quero apenas o básico por R$9,90.
              </Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
