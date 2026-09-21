import './LocationSection.css'

const DISTANCES = [
  {
    title: 'La Junta (Pueblo)',
    distance: '35 km',
    time: '35 min en auto',
    desc: 'Abastecimiento de combustible, cajeros, artesanía y servicios básicos por Ruta 7.',
  },
  {
    title: 'Coyhaique (Capital Regional)',
    distance: '190 km',
    time: '2.5 hrs por Carretera Austral',
    desc: 'Centro urbano principal de la XI Región de Aysén.',
  },
  {
    title: 'Aeropuerto Balmaceda (BBA)',
    distance: '220 km',
    time: '3 hrs en transfer/auto',
    desc: 'Vuelos comerciales diarios directos desde Santiago y Puerto Montt.',
  },
  {
    title: 'Lago Rosselot',
    distance: '0 m',
    time: 'Acceso peatonal inmediato',
    desc: 'Muelle privado y playa de ribera a pasos de tu cabaña.',
  },
]

export default function LocationSection() {
  return (
    <section id="ubicacion" className="section location" aria-labelledby="location-title">
      <div className="container">
        <div className="location__layout">
          {/* Columna Izquierda: Información Geográfica y Rutas */}
          <div className="location__info reveal reveal-left">
            <span className="section__eyebrow">Geolocalización & Rutas</span>
            <h2 id="location-title" className="section__title">
              En el Corazón de la Carretera Austral
            </h2>
            <p className="location__lead">
              Ubicados a orillas del Lago Rosselot, Región de Aysén. Un enclave protegido rodeado de bosque templado lluvioso y fiordos cordilleranos.
            </p>

            <div className="location__grid">
              {DISTANCES.map(d => (
                <div key={d.title} className="location__card">
                  <div className="location__card-head">
                    <span className="location__card-dist">{d.distance}</span>
                    <span className="location__card-time">{d.time}</span>
                  </div>
                  <h3 className="location__card-title">{d.title}</h3>
                  <p className="location__card-desc">{d.desc}</p>
                </div>
              ))}
            </div>

            <div className="location__actions">
              <a
                href="https://maps.google.com/?q=Lago+Rosselot+La+Junta+Aysen+Chile"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label="Ver coordenadas en Google Maps (abre en nueva pestaña)"
              >
                Abrir en Google Maps ↗
              </a>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Visual de Coordenadas */}
          <div className="location__visual reveal reveal-right">
            <div className="location__map-card">
              <img
                src="/images/cabana11.avif"
                alt="Vista aérea de la ubicación de Raíces del Sur en el Lago Rosselot"
                className="location__map-img"
                loading="lazy"
                decoding="async"
              />
              <div className="location__badge-box">
                <div className="location__badge-coords">
                  <span>LAT 44°15'32"S</span>
                  <span>·</span>
                  <span>LON 72°28'45"W</span>
                </div>
                <div className="location__badge-title">
                  Raíces del Sur Lodge
                </div>
                <p className="location__badge-text">
                  Ruta 7 Carretera Austral Km 245 · Desvío Lago Rosselot, Aysén, Chile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
