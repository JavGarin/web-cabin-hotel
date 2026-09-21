import './AmenitiesSection.css'

const AMENITIES = [
  {
    name: 'Kayak & Embarcadero',
    category: 'Lago',
    desc: 'Botes y kayaks con chalecos salvavidas incluidos para explorar el Lago Rosselot.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
      </svg>
    ),
  },
  {
    name: 'Pesca con Mosca',
    category: 'Deporte',
    desc: 'Acceso a ríos y desembocaduras vírgenes con truchas arcoíris y salmones silvestres.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 100-12.728m0 12.728L12 12m-6.364 6.364L12 12m0 0l6.364 6.364M12 12l6.364-6.364"/>
      </svg>
    ),
  },
  {
    name: 'Senderos Privados',
    category: 'Naturaleza',
    desc: 'Rutas señalizadas entre arrayanes y coihues gigantes con miradores panorámicos.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    ),
  },
  {
    name: 'Tinajas Calientes',
    category: 'Bienestar',
    desc: 'Tinajas de madera a leña bajo las estrellas con vista al bosque nativo.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
      </svg>
    ),
  },
  {
    name: 'Calefacción a Leña',
    category: 'Confort',
    desc: 'Estufas de combustión lenta en cada cabaña con provisión ilimitada de leña seca.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline strokeLinecap="round" strokeLinejoin="round" points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    name: 'Internet Starlink',
    category: 'Conectividad',
    desc: 'Conexión satelital de alta velocidad y baja latencia en todo el complejo.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
      </svg>
    ),
  },
  {
    name: 'Cocina Completa',
    category: 'Equipamiento',
    desc: 'Refrigerador, cocina a gas, vajilla completa y cafetera en todas las unidades.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    ),
  },
  {
    name: 'Avistamiento de Fauna',
    category: 'Ecoturismo',
    desc: 'Observación de cóndores, huillines, martines pescadores y carpinteros negros.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
      </svg>
    ),
  },
]

export default function AmenitiesSection() {
  return (
    <section id="amenidades" className="section amenities" aria-labelledby="amenities-title">
      <div className="container">
        <header className="amenities__header reveal reveal-up">
          <span className="section__eyebrow">Equipamiento & Actividades</span>
          <h2 id="amenities-title" className="section__title">
            Servicios Incluidos en tu Estadía
          </h2>
          <p className="section__subtitle">
            Instalaciones preparadas para el clima austral, confort térmico y experiencias directas con el ecosistema.
          </p>
        </header>

        {/* Grid Brutalista Modular */}
        <div className="amenities__grid">
          {AMENITIES.map((item, index) => (
            <div key={item.name} className="amenity-card reveal reveal-scale">
              <div className="amenity-card__header">
                <span className="amenity-card__category">{item.category}</span>
                <span className="amenity-card__num">0{index + 1}</span>
              </div>
              <div className="amenity-card__icon" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="amenity-card__title">{item.name}</h3>
              <p className="amenity-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
