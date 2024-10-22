
import React from 'react';
import { Menu, X } from 'lucide-react';
//import Link from 'next/link';
import Image from 'next/image';

interface NavigationComponentProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const NavigationComponent: React.FC<NavigationComponentProps> = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { label: 'Início', href: '/' },
    { label: 'Sobre', href: '/about' },
    { label: 'Produtos', href: '/products' },
    { label: 'Portfólio', href: '/portfolio' },
    { label: 'Orçamento', href: '/get-quote' },
    { label: 'Contato', href: '/contact' }
  ];

  return (
    <nav className="bg-brand-brown-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
            <Image
                    src="https://i.ibb.co/pbFcDXd/LOGO-PRINCIPAL-02.png"
                    alt="Logo"
                    width={96}
                    height={32}
                    className="h-8 w-auto"
                  />
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-brand-green-dark transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-brand-green-dark focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-green-dark"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationComponent;