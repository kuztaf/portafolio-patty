import React, { useState } from 'react';
import ImageModal from './ImageModal';

const Gallery = ({ images, title = "Galería del Proyecto", projectTitle = "", columns = 1 }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!images || images.length === 0) return null;

  // Configuración de columnas según el prop (1-4 columnas)
  const gridClasses = {
    1: "grid grid-cols-1 gap-8",
    2: "grid grid-cols-1 md:grid-cols-2 gap-8",
    3: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
    4: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
  };

  const gridClass = gridClasses[columns] || gridClasses[1];

  // Funciones de navegación
  const handleImageClick = (imageSrc, imageAlt, index) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt });
    setSelectedIndex(index);
  };

  const handleNext = () => {
    if (selectedIndex < images.length - 1) {
      const nextIndex = selectedIndex + 1;
      const nextImage = images[nextIndex];
      const imageSrc = typeof nextImage === 'string' ? nextImage : nextImage.src;
      const imageAlt = typeof nextImage === 'string' 
        ? `${projectTitle} - Vista ${nextIndex + 1}` 
        : (nextImage.alt || `Vista ${nextIndex + 1}`);
      setSelectedImage({ src: imageSrc, alt: imageAlt });
      setSelectedIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    if (selectedIndex > 0) {
      const prevIndex = selectedIndex - 1;
      const prevImage = images[prevIndex];
      const imageSrc = typeof prevImage === 'string' ? prevImage : prevImage.src;
      const imageAlt = typeof prevImage === 'string' 
        ? `${projectTitle} - Vista ${prevIndex + 1}` 
        : (prevImage.alt || `Vista ${prevIndex + 1}`);
      setSelectedImage({ src: imageSrc, alt: imageAlt });
      setSelectedIndex(prevIndex);
    }
  };

  const handleClose = () => {
    setSelectedImage(null);
    setSelectedIndex(null);
  };

  return (
    <>
      <div className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className={gridClass}>
            {images.map((image, index) => {
              // Soporte para array de strings o array de objetos
              const imageSrc = typeof image === 'string' ? image : image.src;
              const imageAlt = typeof image === 'string' 
                ? `${projectTitle} - Vista ${index + 1}` 
                : (image.alt || `Vista ${index + 1}`);

              return (
                <div 
                  key={index} 
                  className="relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-900 cursor-pointer group"
                  onClick={() => handleImageClick(imageSrc, imageAlt, index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Ver ${imageAlt} en tamaño completo`}
                  onKeyDown={(e) => e.key === 'Enter' && handleImageClick(imageSrc, imageAlt, index)}
                >
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Overlay con icono de zoom */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-12 h-12 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal de imagen */}
      {selectedImage && (
        <ImageModal
          image={selectedImage.src}
          alt={selectedImage.alt}
          onClose={handleClose}
          onNext={selectedIndex < images.length - 1 ? handleNext : null}
          onPrev={selectedIndex > 0 ? handlePrev : null}
          showNavigation={images.length > 1}
        />
      )}
    </>
  );
};

export default Gallery;
