import { useEffect, useState } from 'react'
import './HeroSection.css'

const STATS = [
  { number: '12', label: 'Cabañas' },
  { number: '2–8', label: 'Huéspedes' },
  { number: '35 km', label: 'de La Junta' },
]

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simular carga suave inicial
    const timer = setTimeout(() => setIsLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero" className="hero" aria-label="Inicio">

      {/* Pantalla de carga suave */}
      <div className={`preloader ${isLoaded ? 'preloader--hidden' : ''}`} aria-hidden="true">
        <div className="preloader__spinner" />
        <span className="preloader__text">Cargando experiencia</span>
      </div>

      {/* Fondo fijo cabana7.avif */}
      <img
        className="hero__image hero__image--active"
        src="/images/cabana7.avif"
        alt="Entorno natural Raíces del Sur"
        loading="eager"
        aria-hidden="true"
      />
      <div className="hero__overlay" aria-hidden="true" />

      {/* Decoración lateral izquierda */}
      <div className="hero__side-line" aria-hidden="true">
        <div className="hero__side-line-bar" />
        <span className="hero__side-label">Patagonia · Chile</span>
        <div className="hero__side-line-bar" />
      </div>

      {/* Contenido principal */}
      <div className="hero__content">
        <span className="hero__badge">
          <span className="hero__badge-dot" aria-hidden="true" />
          Lago Rosselot · Región de Aysén
        </span>

        <h1 className="hero__title">
          <span className="hero__title-line">Raíces del Sur</span>
          <span className="hero__title-line hero__title-line--em">Lodge</span>
        </h1>

        <div className="hero__actions">
          <a href="#cabanas" className="hero__cta-secondary">
            Ver cabañas
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Estadísticas — barra inferior */}
      <div className="hero__stats" aria-label="Datos del complejo">
        {STATS.map(({ number, label }) => (
          <div key={label} className="hero__stat-group">
            <div className="hero__stat">
              <span className="hero__stat-number">{number}</span>
              <span className="hero__stat-label">{label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>

    </section>
  )
}
