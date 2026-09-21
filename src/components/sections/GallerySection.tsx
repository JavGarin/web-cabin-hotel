import { useState, useCallback, useEffect } from 'react'
import './GallerySection.css'

const GALLERY_ITEMS = [
  { src: '/images/cabana7.avif', alt: 'Vista panorámica de cabañas frente al lago', tag: 'Exterior & Lago', size: 'large' },
  { src: '/images/cabana1.avif', alt: 'Cabaña Arrayán al atardecer', tag: 'Cabañas' },
  { src: '/images/cabana8.avif', alt: 'Sala de estar con estufa a leña', tag: 'Interiores' },
  { src: '/images/imagenFondo.avif', alt: 'Amanecer en Lago Rosselot', tag: 'Entorno', size: 'wide' },
  { src: '/images/cabana6.avif', alt: 'Tinaja caliente al aire libre', tag: 'Experiencias' },
  { src: '/images/cabana3.avif', alt: 'Detalle arquitectura en madera nativa', tag: 'Detalles' },
  { src: '/images/cabana11.avif', alt: 'Parque privado y sendero', tag: 'Naturaleza', size: 'tall' },
  { src: '/images/cabana5.avif', alt: 'Dormitorio con vista al bosque', tag: 'Interiores' },
  { src: '/images/cabana10.avif', alt: 'Atardecer en la cordillera', tag: 'Entorno' },
]

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState<string | null>(null)

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setActiveImage(null)
  }, [])

  useEffect(() => {
    if (activeImage) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeImage, handleKeyDown])

  return (
    <section id="galeria" className="section section--alt gallery" aria-labelledby="gallery-title">
      <div className="container">
        <header className="gallery__header reveal reveal-up">
          <span className="section__eyebrow">Documentación Visual</span>
          <h2 id="gallery-title" className="section__title">
            Galería del Complejo
          </h2>
          <p className="section__subtitle">
            Fotografías reales del entorno del Lago Rosselot, la arquitectura en madera y las comodidades del lodge.
          </p>
        </header>

        {/* Mosaico Brutalista */}
        <div className="gallery__mosaic">
          {GALLERY_ITEMS.map((item, index) => (
            <button
              key={index}
              className={`gallery__card gallery__card--${item.size || 'standard'} reveal reveal-scale`}
              onClick={() => setActiveImage(item.src)}
              aria-label={`Ver fotografía ampliada: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="gallery__img"
                loading="lazy"
                decoding="async"
              />
              <div className="gallery__overlay">
                <span className="gallery__tag">{item.tag}</span>
                <span className="gallery__caption">{item.alt}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Brutalista */}
      {activeImage && (
        <div
          className="gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Fotografía ampliada"
          onClick={() => setActiveImage(null)}
        >
          <div className="gallery__lightbox-container" onClick={e => e.stopPropagation()}>
            <button
              className="gallery__lightbox-close"
              onClick={() => setActiveImage(null)}
              aria-label="Cerrar vista previa"
            >
              ✕
            </button>
            <img src={activeImage} alt="Fotografía en alta resolución" className="gallery__lightbox-image" />
          </div>
        </div>
      )}
    </section>
  )
}
