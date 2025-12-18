import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-6 right-6 md:hidden z-50">
      <Link href="#oferta" className="bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce" aria-label="Ir para a oferta">
        <ShoppingCart className="w-6 h-6" />
      </Link>
    </div>
  );
}
