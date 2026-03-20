import CabinCard from '../shared/CabinCard'
import './CabinsSection.css'

const CABINS = [
  { name: 'Arrayán',  capacity: 2, price: '$85.000',  image: '/images/cabana1.avif' },
  { name: 'Ciprés',   capacity: 4, price: '$120.000', image: '/images/cabana2.avif' },
  { name: 'Coihue',   capacity: 4, price: '$115.000', image: '/images/cabana3.avif' },
  { name: 'Lenga',    capacity: 6, price: '$160.000', image: '/images/cabana4.avif' },
  { name: 'Ñirre',    capacity: 2, price: '$90.000',  image: '/images/cabana5.avif' },
  { name: 'Radal',    capacity: 6, price: '$155.000', image: '/images/cabana6.avif' },
  { name: 'Canelo',   capacity: 8, price: '$210.000', image: '/images/cabana7.avif' },
  { name: 'Pitao',    capacity: 2, price: '$80.000',  image: '/images/cabana8.avif' },
  { name: 'Roble',    capacity: 4, price: '$125.000', image: '/images/cabana9.avif' },
  { name: 'Pehuen',   capacity: 4, price: '$118.000', image: '/images/cabana10.avif' },
  { name: 'Mañío',    capacity: 6, price: '$162.000', image: '/images/cabana11.avif' },
  { name: 'Nalca',    capacity: 8, price: '$215.000', image: '/images/cabana12.avif' },
]

export default function CabinsSection() {
  return (
    <section id="cabanas" className="section cabins" aria-labelledby="cabins-title">
      <div className="container">
        <header className="cabins__header reveal reveal-up">
          <span className="cabins__eyebrow">Nuestros alojamientos</span>
          <h2 id="cabins-title" className="cabins__title">
            12 Cabañas únicas
          </h2>
          <p className="cabins__subtitle">
            Cada cabaña lleva el nombre de un árbol nativo de la Patagonia.
            Diseñadas para que te desconectes del mundo y te conectes con la naturaleza.
          </p>
        </header>

        <div className="cabins__grid">
          {CABINS.map((cabin, i) => (
            <CabinCard key={cabin.name} {...cabin} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
