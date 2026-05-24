import React from 'react';

const ImageModal = ({ image, alt, onClose, onNext, onPrev, showNavigation = true }) => {
  if (!image) return null;

  // Cerrar modal al hacer clic en el fondo
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Cerrar con tecla ESC
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Prevenir scroll del body cuando el modal está abierto
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Imagen ampliada"
    >
      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-3 bg-zinc-800/80 hover:bg-zinc-700 text-white rounded-full transition-all z-10 hover:scale-110"
        aria-label="Cerrar"
      >
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      {/* Navegación anterior */}
      {showNavigation && onPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 p-3 bg-zinc-800/80 hover:bg-zinc-700 text-white rounded-full transition-all hover:scale-110 hidden md:block"
          aria-label="Imagen anterior"
        >
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
      )}

      {/* Imagen */}
      <div className="max-w-7xl max-h-[85vh] flex items-center justify-center p-4">
        <img
          src={image}
          alt={alt}
          className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      {/* Navegación siguiente */}
      {showNavigation && onNext && (
        <button
          onClick={onNext}
          className="absolute right-4 p-3 bg-zinc-800/80 hover:bg-zinc-700 text-white rounded-full transition-all hover:scale-110 hidden md:block"
          aria-label="Imagen siguiente"
        >
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      )}

      {/* Caption */}
      {alt && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-zinc-900/90 px-6 py-3 rounded-lg">
          <p className="text-white text-sm">{alt}</p>
        </div>
      )}
    </div>
  );
};

export default ImageModal;
