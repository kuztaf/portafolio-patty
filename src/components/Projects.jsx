import React, { useState } from 'react';

const Projects = ({ onProjectClick }) => {
  const [imageLoading, setImageLoading] = useState({});

  // Mock data de proyectos
  const projects = [
    {
      id: 1,
      title: 'Dirección Editorial',
      category: 'Diseño',
      description: 'Proyectos de dirección editorial para publicaciones impresas y digitales.',
      subtitle: 'Amarcord',
      subdescription: 'Desarrollo de dirección de arte y diseño editorial para una revista académica de la Facultad de Arte, Diseño y Comunicación Audiovisual de la ESPOL, enfocada en crear una experiencia visual clara, contemporánea y funcional, integrando composición, jerarquía tipográfica e identidad gráfica.',
      image: 'images/editorial.png',
      gallery:[
        'images/editorial1.png',
        'images/editorial2.png',
        'images/editorial3.png',
        'images/editorial4.png',
        'images/editorial5.png'
      ],
      imageFooter: 'images/editorialE.png',
      color: 'from-olive-600 to-olive-700'
    },
    {
      id: 2,
      title: 'Diseño de Marca',
      category: 'Diseño',
      description: 'Identidad visual y branding para empresas y emprendimientos.',
      image: 'https://placehold.co/800x600/6b7655/ffffff?text=Diseño+de+Marca',
      color: 'from-olive-500 to-olive-600'
    },
    {
      id: 3,
      title: 'Diseño de App',
      category: 'UX/UI',
      description: 'Experiencia de usuario e interfaces para aplicaciones móviles y web.',
      image: 'https://placehold.co/800x600/8a9470/ffffff?text=UX+UI+Design',
      color: 'from-olive-400 to-olive-500'
    },
    {
      id: 4,
      title: 'Fotografía Retrato',
      category: 'Fotografía',
      description: 'Retratos personales y profesionales con narrativa visual.',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=600&fit=crop',
      color: 'from-olive-600 to-amber-700'
    },
    {
      id: 5,
      title: 'Fotografía Esculturas',
      category: 'Fotografía',
      description: 'Registro fotográfico de esculturas y obras tridimensionales.',
      image: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=800&h=600&fit=crop',
      color: 'from-stone-600 to-olive-600'
    },
    {
      id: 6,
      title: 'Fotografía Naturaleza',
      category: 'Fotografía',
      description: 'Paisajes y naturaleza capturados desde una perspectiva artística.',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop',
      color: 'from-green-700 to-olive-600'
    },
    {
      id: 7,
      title: 'Cortometraje',
      category: 'Audiovisual',
      description: 'Producción y dirección de cortometrajes con narrativa visual.',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop',
      color: 'from-slate-700 to-olive-700'
    },
    {
      id: 8,
      title: 'Corto Animado',
      category: 'Audiovisual',
      description: 'Animación y motion graphics para proyectos audiovisuales.',
      image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&h=600&fit=crop',
      color: 'from-olive-600 to-teal-700'
    },
    {
      id: 9,
      title: 'Ilustración Vectorial',
      category: 'Ilustración',
      description: 'Ilustraciones digitales y vectoriales para diversos medios.',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop',
      color: 'from-olive-500 to-lime-600'
    },
    {
      id: 10,
      title: 'Reel',
      category: 'Audiovisual',
      description: 'Compilación de trabajos audiovisuales y producción de contenido.',
      image: 'https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=800&h=600&fit=crop',
      color: 'from-olive-700 to-zinc-700'
    }
  ];

  const categories = ['Todos', ...new Set(projects.map(p => p.category))];
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase mb-4">
            proyectos<span className="text-olive-600">.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explora mi portfolio de trabajos creativos en fotografía, diseño y producción audiovisual
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === category
                  ? 'bg-olive-600 text-white shadow-lg shadow-olive-600/50'
                  : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white'
              }`}
              aria-label={`Filtrar por ${category}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-zinc-800 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => onProjectClick(project)}
              role="button"
              tabIndex={0}
              aria-label={`Ver detalles de ${project.title}`}
              onKeyDown={(e) => e.key === 'Enter' && onProjectClick(project)}
            >
              {/* Imagen */}
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-800">
                {imageLoading[project.id] !== false && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-olive-600 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onLoad={() => setImageLoading(prev => ({ ...prev, [project.id]: false }))}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23333" width="800" height="600"/%3E%3Ctext fill="%23666" font-size="40" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EImagen no disponible%3C/text%3E%3C/svg%3E';
                    setImageLoading(prev => ({ ...prev, [project.id]: false }));
                  }}
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
              </div>

              {/* Contenido */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/90 text-zinc-900 rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* No hay proyectos */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No se encontraron proyectos en esta categoría</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
