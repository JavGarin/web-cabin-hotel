import { useState, useCallback } from 'react'
import './GallerySection.css'

const IMAGES = [
  { src: '/images/cabana1.avif', alt: 'Cabaña Arrayán al atardecer', featured: true },
  { src: '/images/cabana2.avif', alt: 'Cabaña Ciprés junto al lago' },
  { src: '/images/cabana3.avif', alt: 'Interior Cabaña Coihue' },
  { src: '/images/cabana4.avif', alt: 'Cabaña Lenga rodeada de bosque' },
  { src: '/images/cabana5.avif', alt: 'Vista lago desde Cabaña Ñirre' },
  { src: '/images/imagenFondo.avif', alt: 'Lago Rosselot al amanecer', featured: true },
  { src: '/images/cabana6.avif', alt: 'Fogón en Cabaña Radal' },
  { src: '/images/cabana7.avif', alt: 'Cabaña Canelo familiar' },
  { src: '/images/imagenFondo_2.avif', alt: 'Paisaje patagónico Aysén' },
  { src: '/images/cabana8.avif', alt: 'Cabaña Pitao vista exterior' },
  { src: '/images/cabana9.avif', alt: 'Sendero junto al Roble' },
  { src: '/images/cabana10.avif', alt: 'Amanecer en Cabaña Pehuen' },
]

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  const openLightbox = useCallback((src: string) => setLightbox(src), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
  }, [closeLightbox])

  return (
    <section id="galeria" className="section gallery" aria-labelledby="gallery-title">
      <div className="container">
        <header className="gallery__header reveal reveal-up">
          <span className="gallery__eyebrow">Nuestro entorno</span>
          <h2 id="gallery-title" className="gallery__title">Galería de Fotos</h2>
          <p className="gallery__subtitle">
            Imágenes auténticas del entorno natural y nuestras cabañas en Lago Rosselot.
          </p>
        </header>

        <div className="gallery__grid">
          {IMAGES.map((img, i) => (
            <button
              key={i}
              className={`gallery__item reveal reveal-scale stagger-${Math.min(i + 1, 12)}${img.featured ? ' gallery__item--featured' : ''}`}
              onClick={() => openLightbox(img.src)}
              aria-label={`Ver imagen: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="gallery__item-img"
                loading="lazy"
                decoding="async"
              />
              <div className="gallery__item-overlay" aria-hidden="true">
                <div className="gallery__item-icon">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Imagen en pantalla completa"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Cerrar imagen"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src={lightbox} alt="Imagen ampliada" className="lightbox-img" />
          </div>
        </div>
      )}
    </section>
  )
}
