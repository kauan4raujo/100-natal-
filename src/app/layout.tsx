import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Snowfall from '@/components/landing/Snowfall';
import Script from 'next/script';

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
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3743813399261754');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="font-body text-gray-900 overflow-x-hidden relative">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=3743813399261754&ev=PageView&noscript=1"
          />
        </noscript>
        <Snowfall />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
