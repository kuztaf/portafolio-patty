import React from 'react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background elegante */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black">
        <div className="absolute inset-0 opacity-15">
          {/* Patrón de fondo */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-olive-500 rounded-full filter blur-[128px]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-olive-600 rounded-full filter blur-[128px]"></div>
        </div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Título principal */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-olive-400 via-olive-500 to-olive-600 animate-gradient">
              Patricia
            </span>
            <span className="block mt-2">Caballero</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-light tracking-wide">
            Creadora Visual
          </p>

          {/* Descripción */}
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mt-6">
            Narrativa visual, contenido digital e identidad de marca.
            Conectando estética, emoción y funcionalidad a través de la imagen.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-olive-600 hover:bg-olive-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-olive-600/50"
              aria-label="Ver proyectos"
            >
              Ver Proyectos
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-gray-600 hover:border-olive-500 text-gray-300 hover:text-white font-semibold rounded-lg transition-all"
              aria-label="Contactar"
            >
              Contactar
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
