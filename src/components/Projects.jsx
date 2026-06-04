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
      subtitle: 'Atharix',
      subdescription: 'Diseño de identidad visual para Atharix, desarrollando una propuesta gráfica moderna y versátil enfocada en transmitir personalidad, coherencia visual y reconocimiento de marca a través de elementos tipográficos y conceptuales.',
      image: 'images/marca.png',
      gallery:[
        'images/marca1.png',
        'images/marca2.png',
        'images/marca3.png',
        'images/marca4.png',
        'images/marca5.png',
        'images/marca6.png',
        'images/marca7.png',
        'images/marca8.png',
        'images/marca9.png',
        'images/marca10.png',
        'images/marca11.png',
        'images/marca12.png',
        'images/marca13.png',
        'images/marca14.png',
        'images/marca15.png',
        'images/marca16.png',
        'images/marca17.png'
      ],
      imageFooter: 'images/marcaE.png',
      color: 'from-olive-500 to-olive-600'
    },
    {
      id: 3,
      title: 'Diseño de App',
      category: 'UX/UI',
      description: 'Experiencia de usuario e interfaces para aplicaciones móviles y web.',
      subtitle: 'DuoLife',
      subdescription: 'Diseño de una aplicación enfocada en fomentar hábitos de ejercicio y bienestar en adultos mayores, priorizando accesibilidad, claridad visual y una experiencia intuitiva centrada en las necesidades del usuario.',
      image: 'images/app.png',
      color: 'from-olive-400 to-olive-500',
      gallery:[
        'images/app1.png',
        'images/app2.png',
        'images/app3.png',
        'images/app4.png',
        'images/app5.png',
        'images/app6.png',
        'images/app7.png',
        'images/app8.png',
        'images/app9.png',
        'images/app10.png',
        'images/app11.png'
      ],
    },
    {
      id: 4,
      title: 'Fotografía Retrato',
      category: 'Fotografía',
      description: 'Retratos personales y profesionales con narrativa visual.',
      subtitle: 'Retratos',
      subdescription: 'Serie fotográfica centrada en retratos y expresión visual, explorando iluminación, composición y narrativa emocional para capturar identidad, atmósfera y presencia.',
      image: 'images/fotografia.jpg',
      color: 'from-olive-600 to-amber-700',
      galleryCols: 2,
      gallery:[
        'images/fotografia1.jpg',
        'images/fotografia2.jpg',
        'images/fotografia3.jpg',
        'images/fotografia4.jpg',
        'images/fotografia5.jpg',
        'images/fotografia6.jpg',
        'images/fotografia7.jpg'
      ]
    },
    {
      id: 5,
      title: 'Fotografía Esculturas',
      category: 'Fotografía',
      description: 'Registro fotográfico de esculturas y obras tridimensionales.',
      subtitle: 'Esculturas',
      subdescription: 'Exploración fotográfica de esculturas y formas tridimensionales, destacando volumen, textura y contraste a través de luz, composición y perspectiva.',
      image: 'images/esculturas.jpg',
      color: 'from-stone-600 to-olive-600',
      galleryCols: 3,
      gallery:[
        'images/esculturas1.jpg',
        'images/esculturas2.jpg',
        'images/esculturas3.jpg',
        'images/esculturas4.jpg',
        'images/esculturas5.jpg',
        'images/esculturas6.jpg',
        'images/esculturas7.jpg',
        'images/esculturas8.jpg',
        'images/esculturas9.jpg',
        'images/esculturas10.jpg',
        'images/esculturas11.jpg',
        'images/esculturas12.jpg',
        'images/esculturas13.jpg',
        'images/esculturas14.jpg',
        'images/esculturas15.jpg',
        'images/esculturas16.jpg',
        'images/esculturas17.jpg',
        'images/esculturas18.jpg',
        'images/esculturas19.jpg',
        'images/esculturas20.jpg',
        'images/esculturas21.jpg',
        'images/esculturas22.jpg',
      ]
    },
    {
      id: 6,
      title: 'Fotografía naturaleza',
      category: 'Fotografía',
      description: 'Paisajes y naturaleza capturados desde una perspectiva artística.',
      subtitle: 'Fotografía naturaleza',
      subdescription: 'Proyecto fotográfico enfocado en paisaje y naturaleza, explorando texturas, luz y color para transmitir calma, profundidad y conexión con el entorno natural.',
      image:  'images/naturaleza.jpg',
      color: 'from-green-700 to-olive-600',
      galleryCols: 2,
      gallery:[
        'images/naturaleza1.jpg',
        'images/naturaleza2.jpg',
        'images/naturaleza3.jpg',
        'images/naturaleza4.jpg',
        'images/naturaleza5.jpg',
        'images/naturaleza6.jpg',
        'images/naturaleza7.jpg',
        'images/naturaleza8.jpg',
        'images/naturaleza9.jpg',
        'images/naturaleza10.jpg',
        'images/naturaleza11.jpg',
        'images/naturaleza12.jpg',
        'images/naturaleza13.jpg',
        'images/naturaleza14.jpg',
        'images/naturaleza15.jpg',
        'images/naturaleza16.jpg'
      ]
    },
    {
      id: 7,
      title: 'Cortometraje',
      category: 'Audiovisual',
      description: 'Producción y dirección de cortometrajes con narrativa visual.',
      subtitle: 'A tu memoria',
      subdescription: 'Producción audiovisual centrada en la representación de la violencia de género desde una mirada narrativa y visual, utilizando recursos cinematográficos para generar reflexión y conciencia social. En este proyecto desarrollé el guion y realicé la dirección general y fotográfica.',
      image:  'images/cortometraje.png',
      color: 'from-slate-700 to-olive-700',
      galleryCols: 2,
      gallery:[
        'images/cortometraje1.png',
        'images/cortometraje2.png',
        'images/cortometraje3.png',
        'images/cortometraje4.png',
        'images/cortometraje5.png',
        'images/cortometraje6.png',
        'images/cortometraje7.png',
        'images/cortometraje8.png',
        'images/cortometraje9.png',
        'images/cortometraje10.png',
        'images/cortometraje11.png',
        'images/cortometraje12.png',
        'images/cortometraje13.png',
        'images/cortometraje14.png',
        'images/cortometraje15.png',
        'images/cortometraje16.png',
        'images/cortometraje17.png'
      ]
    },
    {
      id: 8,
      title: 'Corto Animado',
      category: 'Audiovisual',
      description: 'Animación y motion graphics para proyectos audiovisuales.',
      subtitle: 'The Babadook',
      subdescription: 'Proyecto de animación e ilustración inspirado en la atmósfera psicológica y estética visual de The Babadook, explorando tensión, oscuridad y narrativa emocional a través del lenguaje visual.',
      image:  'images/corto.png',
      color: 'from-olive-600 to-teal-700',
      galleryCols: 3,
      gallery:[
        'images/corto1.png',
        'images/corto2.png',
        'images/corto3.png',
        'images/corto4.png',
        'images/corto5.png',
        'images/corto6.png',
        'images/corto7.png',
        'images/corto8.png',
        'images/corto9.png',
        'images/corto10.png',
        'images/corto11.png'
      ]
    },
    {
      id: 9,
      title: 'Ilustración Vectorial',
      category: 'Ilustración',
      description: 'Ilustraciones digitales y vectoriales para diversos medios.',
      subtitle: 'Ilustración vectorial',
      subdescription: 'Colección de ilustraciones vectoriales desarrolladas mediante composición, color y formas geométricas, explorando distintos estilos visuales aplicados a proyectos creativos y gráficos.',
      image:  'images/vectorial.png',
      color: 'from-olive-500 to-lime-600',
      galleryCols: 3,
      gallery:[
        'images/vectorial1.png',
        'images/vectorial2.png',
        'images/vectorial3.png'
      ]
    },
    {
      id: 10,
      title: 'Reel',
      category: 'Audiovisual',
      description: 'Compilación de trabajos audiovisuales y producción de contenido.',
      image:  'images/reel.png',
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
