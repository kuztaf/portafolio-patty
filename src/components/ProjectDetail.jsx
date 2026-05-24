import React from 'react';

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
    >
      {/* Botón cerrar fijo */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-50 p-3 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-all shadow-lg hover:scale-110"
        aria-label="Cerrar proyecto"
      >
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      {/* Contenido scrolleable */}
      <div className="min-h-screen">
        {/* Hero Image */}
        <div className="relative h-screen w-full">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-b ${project.color} opacity-40`}></div>
          
          {/* Título superpuesto */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 bg-gradient-to-t from-black via-black/80 to-transparent">
            <div className="max-w-6xl mx-auto">
              <span className="inline-block px-4 py-2 text-sm font-semibold bg-olive-600 text-white rounded-full mb-4">
                {project.category}
              </span>
              <h1 id="project-title" className="text-5xl md:text-7xl font-black uppercase mb-4">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Sección de detalles */}
        <div className="bg-zinc-900 py-20">
          <div className="max-w-6xl mx-auto px-8 md:px-16">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Columna 1 - Descripción extendida */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Sobre el proyecto</h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Este proyecto representa una exploración profunda en {project.category.toLowerCase()}, 
                    combinando técnicas tradicionales con enfoques contemporáneos para crear una narrativa visual única.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Proceso Creativo</h3>
                  <p className="text-gray-400 leading-relaxed">
                    El desarrollo de este trabajo involucró múltiples etapas de investigación, 
                    conceptualización y ejecución técnica, prestando especial atención a cada detalle 
                    para lograr el resultado deseado.
                  </p>
                </div>
              </div>

              {/* Columna 2 - Información técnica */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Detalles Técnicos</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-zinc-800">
                      <span className="text-gray-500 font-medium">Categoría</span>
                      <span className="text-white font-semibold">{project.category}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-zinc-800">
                      <span className="text-gray-500 font-medium">Año</span>
                      <span className="text-white font-semibold">2024</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-zinc-800">
                      <span className="text-gray-500 font-medium">Cliente</span>
                      <span className="text-white font-semibold">Proyecto Personal</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-zinc-800">
                      <span className="text-gray-500 font-medium">Rol</span>
                      <span className="text-white font-semibold">Dirección Creativa</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Herramientas</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Adobe Photoshop', 'Lightroom', 'Illustrator', 'Premiere Pro'].map((tool) => (
                      <span key={tool} className="px-4 py-2 bg-zinc-800 text-gray-300 rounded-lg text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Galería adicional */}
        <div className="bg-black py-20">
          <div className="max-w-6xl mx-auto px-8 md:px-16">
            <h2 className="text-4xl font-bold mb-12 text-center">Galería del Proyecto</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-900">
                  <img
                    src={project.image}
                    alt={`${project.title} - Vista ${item}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-zinc-900 py-20">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">¿Te gustó este proyecto?</h2>
            <p className="text-gray-400 text-lg mb-8">
              Trabajemos juntos en tu próxima idea creativa
            </p>
            <button
              onClick={() => {
                onClose();
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 300);
              }}
              className="px-10 py-4 bg-olive-600 hover:bg-olive-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-olive-600/50"
            >
              Contactar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
