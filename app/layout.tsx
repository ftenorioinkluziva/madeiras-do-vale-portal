import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
//import Image from "next/image";
import PlaceholderImage from "./components/PlaceholderImage";

// Configuração da fonte Modern Warfare
const modernWarfare = localFont({
  src: './fonts/ModernWarfare.woff2', // Ajuste o caminho conforme necessário
  variable: '--font-modern-warfare',
});

// Usando Inter como alternativa para SF Pro Display
import { Inter } from 'next/font/google';

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

export const metadata: Metadata = {
  title: {
    default: "Madeiras do Vale - Eucalipto Tratado de Qualidade",
    template: "%s | Madeiras do Vale"
  },
  description: "Madeiras do Vale oferece eucalipto tratado de alta qualidade para construção e paisagismo. Soluções sustentáveis e duráveis para seus projetos.",
  keywords: ["eucalipto tratado", "madeira para construção", "paisagismo", "sustentabilidade"],
  authors: [{ name: "Madeiras do Vale" }],
  creator: "Madeiras do Vale",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.madeirasdovale.com.br",
    siteName: "Madeiras do Vale",
    images: [
      {
        url: "/images/og-image.jpg", // Certifique-se de criar esta imagem
        width: 1200,
        height: 630,
        alt: "Madeiras do Vale - Eucalipto Tratado"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@madeirasdovale", // Se tiver conta no Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${modernWarfare.variable} ${inter.variable} antialiased bg-stone-50 min-h-screen flex flex-col`}>
        <header>
          <nav className="bg-brand-brown-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <Link href="/" className="flex-shrink-0">
                  <PlaceholderImage 
                    width={64} 
                    height={32} 
                    text="Logo" 
                    className="h-8 w-8" />
                  </Link>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-brand-green-dark">Home</Link>
                      <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-brand-green-dark">About Us</Link>
                      <Link href="/products" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-brand-green-dark">Products</Link>
                      <Link href="/portfolio" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-brand-green-dark">Portfolio</Link>
                      <Link href="/get-quote" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-brand-green-dark">Get a Quote</Link>
                      <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-brand-green-dark">Contact Us</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-brand-brown-dark text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Madeiras do Vale</h3>
                <p>Quality eucalyptus wood solutions for your projects.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="hover:text-brand-green-light">Home</Link></li>
                  <li><Link href="/about" className="hover:text-brand-green-light">About Us</Link></li>
                  <li><Link href="/products" className="hover:text-brand-green-light">Products</Link></li>
                  <li><Link href="/get-quote" className="hover:text-brand-green-light">Get a Quote</Link></li>
                  <li><Link href="/contact" className="hover:text-brand-green-light">Contact Us</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p>123 Eucalyptus Road, São Paulo, Brazil</p>
                <p>Phone: +55 (11) 1234-5678</p>
                <p>Email: info@madeirasdovale.com</p>
              </div>
            </div>
            <div className="mt-8 border-t border-brand-brown-light pt-8 text-center">
              <p>&copy; {new Date().getFullYear()} Madeiras do Vale. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}