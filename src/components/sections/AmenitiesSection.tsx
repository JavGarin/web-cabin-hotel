import './AmenitiesSection.css'

const AMENITIES = [
  {
    name: 'Kayak en el Lago',
    desc: 'Equipo incluido para explorar las orillas del Rosselot',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
      </svg>
    ),
  },
  {
    name: 'Pesca con Mosca',
    desc: 'Ríos repletos de truchas arcoíris y salmones',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 100-12.728m0 12.728L12 12m-6.364 6.364L12 12m0 0l6.364 6.364M12 12l6.364-6.364"/>
      </svg>
    ),
  },
  {
    name: 'Senderismo Nativo',
    desc: 'Rutas entre arrayanes, coihues y helechos gigantes',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    ),
  },
  {
    name: 'Fogonzadas',
    desc: 'Fogones exteriores con leña nativa de arrayán',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>
      </svg>
    ),
  },
  {
    name: 'WiFi de Alta Velocidad',
    desc: 'Conexión por fibra óptica satelital en toda la cabañas',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
      </svg>
    ),
  },
  {
    name: 'Cocina Equipada',
    desc: 'Cocina completa con electrodomésticos patagónicos',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    ),
  },
  {
    name: 'Observación de Cóndores',
    desc: 'Miradores naturales a 20 min de las cabañas',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
      </svg>
    ),
  },
  {
    name: 'Chimenea Interior',
    desc: 'Calor de leña nativa en las noches patagónicas',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline strokeLinecap="round" strokeLinejoin="round" points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
]

export default function AmenitiesSection() {
  return (
    <section id="amenidades" className="section amenities" aria-labelledby="amenities-title">
      <div className="container">
        <header className="amenities__header reveal reveal-up">
          <span className="amenities__eyebrow">Lo que ofrecemos</span>
          <h2 id="amenities-title" className="amenities__title">
            Servicios & Comodidades
          </h2>
          <p className="amenities__subtitle">
            Todo lo que necesitas para una experiencia única en la Patagonia chilena.
          </p>
        </header>

        <div className="amenities__grid">
          {AMENITIES.map((a, i) => (
            <div
              key={a.name}
              className={`amenity-card reveal reveal-scale stagger-${Math.min(i + 1, 12)}`}
            >
              <div className="amenity-card__icon" aria-hidden="true">{a.icon}</div>
              <p className="amenity-card__name">{a.name}</p>
              <p className="amenity-card__desc">{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="amenities__cta reveal reveal-up">
          <a href="#reserva" className="btn btn-primary btn-lg">
            Reservar ahora →
          </a>
        </div>
      </div>
    </section>
  )
}
