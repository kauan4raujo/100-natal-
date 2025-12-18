import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="christmas-gradient py-20 px-6 text-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">Pronta para transformar seu Natal?</h2>
        <p className="text-xl text-red-100 mb-10">
          Por menos de R$ 10,00 (o preço de um cafezinho), você garante uma ceia memorável, sem estresse e com elogios de toda a família.
        </p>
        <Link href="#oferta" className="btn-gold inline-block w-full md:w-auto text-red-950 font-extrabold text-2xl px-12 py-6 rounded-2xl shadow-2xl uppercase">
          Comprar Agora por R$ 9,90
        </Link>
        <p className="mt-10 text-sm text-red-300">
          © 2025 - 100 Receitas de Natal • Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
