import './LocationSection.css'

const DISTANCES = [
  {
    title: 'La Junta',
    desc: '35 km por Ruta 7 Carretera Austral — 35 min en auto',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
  },
  {
    title: 'Coyhaique',
    desc: '190 km hacia el sur — 2,5 hrs — Capital de la XI Región',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
      </svg>
    ),
  },
  {
    title: 'Aeropuerto Balmaceda',
    desc: '220 km — Vuelos directos desde Santiago en 2 horas',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
      </svg>
    ),
  },
  {
    title: 'Lago Rosselot',
    desc: 'Acceso directo desde las cabañas — a 50 metros del embarcadero',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
      </svg>
    ),
  },
]

export default function LocationSection() {
  return (
    <section id="ubicacion" className="section location" aria-labelledby="location-title">
      <div className="container">
        <div className="location__inner">

          {/* Mapa visual */}
          <div className="reveal reveal-left">
            <div className="location__map-wrap">
              <img
                src="/images/imagenFondo_2.avif"
                alt="Vista aérea del Lago Rosselot y los arrayanes en la Región de Aysén"
                className="location__map-img"
                loading="lazy"
                decoding="async"
              />
              <div className="location__map-badge" aria-label="Ubicación: Lago Rosselot, Aysén">
                <div className="location__map-badge-icon" aria-hidden="true">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="location__map-badge-text">
                  <span className="location__map-badge-name">Raíces del Sur Lodge</span>
                  <span className="location__map-badge-sub">Lago Rosselot, Aysén</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="reveal reveal-right">
            <span className="location__eyebrow">Cómo llegar</span>
            <h2 id="location-title" className="location__title">
              En el corazón de la Carretera Austral
            </h2>
            <p className="location__desc">
              El lodge Raíces del Sur se encuentra a orillas del Lago Rosselot, a 35 km al sur
              del pueblo de La Junta, siguiendo la Ruta 7 — la mítica Carretera Austral. Un
              desvío de tierra señalizado nos lleva directamente al complejo, entre arrayanes
              y coihues centenarios.
            </p>
            <ul className="location__items">
              {DISTANCES.map(d => (
                <li key={d.title} className="location__item">
                  <div className="location__item-icon">{d.icon}</div>
                  <div>
                    <p className="location__item-title">{d.title}</p>
                    <p className="location__item-desc">{d.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-forest"
              aria-label="Ver en Google Maps (abre en nueva ventana)"
            >
              Ver en Google Maps →
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
