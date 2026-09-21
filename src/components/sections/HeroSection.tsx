import './HeroSection.css'

const STATS = [
  { number: '12', label: 'Cabañas Nativas' },
  { number: '2 a 8', label: 'Huéspedes por Cabaña' },
  { number: '35 km', label: 'Sur de La Junta' },
  { number: '0 m', label: 'Acceso directo a Lago' },
]

export default function HeroSection() {
  return (
    <section id="hero" className="hero" aria-label="Inicio">
      {/* Fondo fotográfico con overlay tonal brutalista */}
      <div className="hero__media">
        <img
          className="hero__image"
          src="/images/cabana7.avif"
          alt="Paisaje de cabañas Raíces del Sur frente al lago Rosselot en la Patagonia"
          loading="eager"
          decoding="async"
        />
        <div className="hero__overlay" aria-hidden="true" />
      </div>

      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-indicator" aria-hidden="true">■</span>
            <span>Patagonia Chilena · Lago Rosselot, Aysén</span>
          </div>

          <h1 className="hero__title">
            <span className="hero__title-main">RAÍCES DEL SUR</span>
            <span className="hero__title-sub">LODGE DE MONTAÑA</span>
          </h1>

          <p className="hero__lead">
            Refugio brutalista de madera nativa y piedra a orillas del lago. 
            Doce cabañas independientes diseñadas para el silencio, la pesca con mosca y la desconexión total.
          </p>

          <div className="hero__actions">
            <a href="#reserva" className="btn btn-primary btn-lg">
              Reservar Estadía →
            </a>
            <a href="#cabanas" className="btn btn-outline-light btn-lg">
              Ver Cabañas
            </a>
          </div>
        </div>

        {/* Métricas y Datos Clave en Grid Modular */}
        <div className="hero__stats-grid" aria-label="Información clave del lodge">
          {STATS.map(({ number, label }) => (
            <div key={label} className="hero__stat-card">
              <span className="hero__stat-number">{number}</span>
              <span className="hero__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
