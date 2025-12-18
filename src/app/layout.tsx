import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Snowfall from '@/components/landing/Snowfall';

export const metadata: Metadata = {
  title: '100 Receitas para a Ceia de Natal - Apenas R$ 9,90',
  description: 'A Ceia de Natal Perfeita, Sem Estresse e Gastando Pouco. 100 receitas testadas e aprovadas para encantar sua família e amigos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body text-gray-900 overflow-x-hidden relative">
        <Snowfall />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
