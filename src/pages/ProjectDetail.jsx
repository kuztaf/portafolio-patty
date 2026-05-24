import React from 'react';
import Gallery from '../components/Gallery';

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="bg-black">
      {/* Botón volver - visible en scroll */}
      <button
        onClick={onClose}
        className="fixed top-24 left-6 z-40 flex items-center gap-2 px-4 py-2 bg-zinc-800/90 backdrop-blur-sm hover:bg-zinc-700 text-white rounded-lg transition-all shadow-lg hover:scale-105"
        aria-label="Volver a proyectos"
      >
        <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        <span className="font-medium">Volver</span>
      </button>

      {/* Contenido de la página del proyecto */}
      <div className="pt-20">
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
            <div className="grid md:grid-cols-1 gap-16 text-center">
              <h2 className="text-3xl font-bold mb-4">{project.subtitle}</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
              {project.subdescription }
              </p>
            </div>
          </div>
        </div>

        {/* Galería adicional */}
        {project.gallery && project.gallery.length > 0 && (
          <Gallery 
            images={project.gallery} 
            title="Galería del Proyecto"
            projectTitle={project.title}
            columns={1}
          />
        )}

        

      </div>
    </div>
  );
};

export default ProjectDetail;
