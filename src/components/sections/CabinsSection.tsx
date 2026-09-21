import { useState, useMemo } from 'react'
import CabinCard, { type CabinProps } from '../shared/CabinCard'
import './CabinsSection.css'

const CABINS_DATA: CabinProps[] = [
  {
    name: 'Canelo',
    capacity: 8,
    price: '$210.000',
    image: '/images/cabana7.avif',
    featured: true,
    description: 'Nuestra cabaña insignia con vista panorámica a los volcanes y al lago Rosselot. Tres niveles, amplio living y terraza privada.',
    badge: 'Destacada / Familiar',
  },
  {
    name: 'Arrayán',
    capacity: 2,
    price: '$85.000',
    image: '/images/cabana1.avif',
    description: 'Refugio íntimo para parejas rodeado de arrayanes centenarios con estufa a leña y muelle privado.',
    badge: 'Parejas',
  },
  {
    name: 'Ciprés',
    capacity: 4,
    price: '$120.000',
    image: '/images/cabana2.avif',
    description: 'Espacio familiar de dos dormitorios con vista franca a la orilla del lago.',
  },
  {
    name: 'Coihue',
    capacity: 4,
    price: '$115.000',
    image: '/images/cabana3.avif',
    description: 'Construcción en coihue y piedra volcánica. Ambiente cálido y cocina de campo.',
  },
  {
    name: 'Lenga',
    capacity: 6,
    price: '$160.000',
    image: '/images/cabana4.avif',
    featured: true,
    description: 'Cabaña espaciosa para grupos y familias grandes. Chimenea central de doble combustión.',
    badge: 'Grupos',
  },
  {
    name: 'Ñirre',
    capacity: 2,
    price: '$90.000',
    image: '/images/cabana5.avif',
    description: 'Ubicada en el punto más alto del bosque con vista privilegiada al amanecer.',
  },
  {
    name: 'Radal',
    capacity: 6,
    price: '$155.000',
    image: '/images/cabana6.avif',
    description: 'Incluye tinaja caliente privada de madera al aire libre bajo las copas del bosque.',
    badge: 'Con Tinaja',
  },
  {
    name: 'Pitao',
    capacity: 2,
    price: '$80.000',
    image: '/images/cabana8.avif',
    description: 'Diseño minimalista para pescadores y senderistas que buscan descanso absoluto.',
  },
  {
    name: 'Roble',
    capacity: 4,
    price: '$125.000',
    image: '/images/cabana9.avif',
    description: 'Dos plantas con grandes ventanales térmicos orientados al lago.',
  },
  {
    name: 'Pehuen',
    capacity: 4,
    price: '$118.000',
    image: '/images/cabana10.avif',
    description: 'Acogedora y luminosa con terraza techada para disfrutar los días de lluvia.',
  },
  {
    name: 'Mañío',
    capacity: 6,
    price: '$162.000',
    image: '/images/cabana11.avif',
    description: 'Gran espacio común integrado con maderas nobles y acceso inmediato al sendero.',
  },
  {
    name: 'Nalca',
    capacity: 8,
    price: '$215.000',
    image: '/images/cabana12.avif',
    description: 'Máximo confort para hasta 8 personas con comedor rústico y cocina full equipada.',
  },
]

const FILTER_OPTIONS = [
  { label: 'Todas las cabañas (12)', value: 'all' },
  { label: '2 Personas', value: '2' },
  { label: '4 Personas', value: '4' },
  { label: '6 a 8 Personas', value: '6+' },
]

export default function CabinsSection() {
  const [filter, setFilter] = useState('all')

  const filteredCabins = useMemo(() => {
    if (filter === '2') return CABINS_DATA.filter(c => c.capacity === 2)
    if (filter === '4') return CABINS_DATA.filter(c => c.capacity === 4)
    if (filter === '6+') return CABINS_DATA.filter(c => c.capacity >= 6)
    return CABINS_DATA
  }, [filter])

  return (
    <section id="cabanas" className="section cabins" aria-labelledby="cabins-title">
      <div className="container">
        <header className="cabins__header reveal reveal-up">
          <span className="section__eyebrow">Alojamientos de Montaña</span>
          <h2 id="cabins-title" className="section__title">
            12 Cabañas de Madera Nativa
          </h2>
          <p className="section__subtitle">
            Cada cabaña toma su nombre de una especie arbórea de la Patagonia. 
            Arquitectura bioclimática en madera y piedra, aislación térmica y vistas panorámicas.
          </p>

          {/* Filtros Brutalistas */}
          <div className="cabins__filters" role="tablist" aria-label="Filtrar cabañas por capacidad">
            {FILTER_OPTIONS.map(opt => (
              <button
                key={opt.value}
                role="tab"
                aria-selected={filter === opt.value}
                className={`cabins__filter-btn ${filter === opt.value ? 'cabins__filter-btn--active' : ''}`}
                onClick={() => setFilter(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </header>

        {/* Bento Grid */}
        <div className="cabins__bento-grid">
          {filteredCabins.map((cabin, index) => (
            <CabinCard
              key={cabin.name}
              {...cabin}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
