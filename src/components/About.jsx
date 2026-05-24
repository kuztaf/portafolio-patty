import React from 'react';

const About = () => {
  const stats = [
    { value: '10+', label: 'Categorías' },
    { value: '50+', label: 'Proyectos' },
    { value: '5+', label: 'Años' },
    { value: '100%', label: 'Pasión' }
  ];

  const skills = [
    { name: 'Fotografía', level: 95 },
    { name: 'Diseño Gráfico', level: 90 },
    { name: 'Producción Audiovisual', level: 88 },
    { name: 'UX/UI Design', level: 85 },
    { name: 'Dirección Editorial', level: 87 },
    { name: 'Ilustración', level: 82 }
  ];

  return (
    <section id="about" className="min-h-screen py-32 bg-black flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase mb-4">
            sobre mí<span className="text-olive-600">.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Columna izquierda - Imagen/Visual */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              {/* Placeholder para imagen del artista */}
              <div className="absolute inset-0 bg-gradient-to-br from-olive-500 via-olive-600 to-olive-700 opacity-20"></div>
              <img
                src="/images/perfil.png"
                alt="Patricia Caballero"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="800"%3E%3Crect fill="%23333" width="800" height="800"/%3E%3Ctext fill="%23666" font-size="40" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EPatricia Caballero%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>

            {/* Decoración */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-olive-600/20 rounded-2xl -z-10 hidden lg:block"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-olive-500/20 rounded-full -z-10 hidden lg:block"></div>
          </div>

          {/* Columna derecha - Contenido */}
          <div className="space-y-8">
            {/* Descripción */}
            <div className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
 Hola, soy Patricia Caballero, creadora visual con experiencia en fotografía, diseño y producción audiovisual. Actualmente vivo en Madrid, España, donde continúo desarrollando proyectos creativos enfocados en narrativa visual, contenido digital e identidad de marca.
              </p>
              <p className="text-gray-400 leading-relaxed">
A lo largo de mi trayectoria he trabajado en áreas artísticas, académicas y audiovisuales, explorando distintas formas de comunicación visual desde la fotografía, el diseño gráfico, el video y la ilustración. Me interesa crear piezas que conecten estética, emoción y funcionalidad.
              </p>
              <p className="text-gray-400 leading-relaxed">
Disfruto trabajar tanto de forma independiente como en colaboración con otros creativos, adaptándome a diferentes proyectos y procesos. Me considero una persona siempre en búsqueda de nuevas formas de contar historias a través de la imagen.
              </p>


              
            </div>


            {/* CTA */}
            <div className="pt-6">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-olive-600 hover:bg-olive-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-olive-600/50"
                aria-label="Colaborar conmigo"
              >
                Trabajemos Juntos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
