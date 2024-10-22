import React from 'react';


interface HeroSectionProps {
    title: string;
    highlightedText: string;
    description: string;
    imageUrl: string;
  }

  const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    highlightedText,
    description,
    imageUrl,
  }) => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-brand-green-dark overflow-hidden">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-brand-green-dark transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          src={imageUrl}
          alt="Produtos em madeira de eucalipto"
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <h1 className="text-4xl tracking-tight font-sf-pro font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block xl:inline">{title}</span>{" "}
            <span className="block text-brand-green-light xl:inline">{highlightedText}</span>
          </h1>
          <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            {description}
          </p>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;