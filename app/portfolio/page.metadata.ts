import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Portfólio | Madeiras do Vale - Projetos em Eucalipto Tratado",
  description: "Explore nossa galeria de projetos realizados com eucalipto tratado. Veja como a Madeiras do Vale transforma ideias em realidade, desde estruturas residenciais até projetos paisagísticos.",
  openGraph: {
    title: "Portfólio de Projetos - Madeiras do Vale",
    description: "Descubra a versatilidade e qualidade do eucalipto tratado através de nossos projetos concluídos. Inspiração e excelência em cada estrutura.",
    images: [
      {
        url: "/images/portfolio-overview.jpg", // Substitua pelo caminho real da imagem
        width: 1200,
        height: 630,
        alt: "Galeria de Projetos Madeiras do Vale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio de Projetos em Eucalipto Tratado - Madeiras do Vale",
    description: "Veja nossa coleção de projetos realizados e inspire-se para sua próxima construção ou paisagismo com eucalipto tratado.",
    images: ["/images/portfolio-overview.jpg"], // Substitua pelo caminho real da imagem
  },
  keywords: ["portfólio", "projetos em eucalipto", "construções em madeira", "paisagismo", "estruturas de madeira", "Madeiras do Vale"],
};