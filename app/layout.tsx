"use client";

import { Inter } from 'next/font/google';
import { useState } from "react";
import localFont from "next/font/local";
import "./globals.css";
import NavigationComponent from "./components/NavigationComponent";

// Configuração da fonte Modern Warfare
const modernWarfare = localFont({
  src: './fonts/ModernWarfare.woff2', // Ajuste o caminho conforme necessário
  variable: '--font-modern-warfare',
});


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sf-pro-display',
});

/* const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); */


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <html lang="pt-BR">
      <body className={`${modernWarfare.variable} ${inter.variable} antialiased bg-stone-50 min-h-screen flex flex-col`}>
        <NavigationComponent 
          isOpen={mobileMenuOpen} 
          setIsOpen={setMobileMenuOpen} 
        />

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-brand-brown-dark text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Madeiras do Vale</h3>
                <p>Soluções em madeira de eucalipto para seus projetos.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="hover:text-brand-green-light">Início</a></li>
                  <li><a href="/about" className="hover:text-brand-green-light">Sobre Nós</a></li>
                  <li><a href="/products" className="hover:text-brand-green-light">Produtos</a></li>
                  <li><a href="/get-quote" className="hover:text-brand-green-light">Orçamento</a></li>
                  <li><a href="/contact" className="hover:text-brand-green-light">Contato</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contato</h3>
                <p>Rua do Eucalipto, 123 - São Paulo, SP</p>
                <p>Telefone: (11) 1234-5678</p>
                <p>Email: contato@madeirasdovale.com</p>
              </div>
            </div>
            <div className="mt-8 border-t border-brand-brown-light pt-8 text-center">
              <p>&copy; {new Date().getFullYear()} Madeiras do Vale. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}