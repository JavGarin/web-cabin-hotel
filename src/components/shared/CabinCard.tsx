import './CabinCard.css'

interface CabinCardProps {
  name: string
  capacity: number
  price: string
  image: string
  index: number
}

export default function CabinCard({ name, capacity, price, image, index }: CabinCardProps) {
  return (
    <article
      className={`cabin-card reveal reveal-up stagger-${Math.min(index + 1, 12)}`}
      aria-label={`Cabaña ${name}`}
    >
      <div className="cabin-card__img-wrap">
        <img
          src={image}
          alt={`Vista exterior de la Cabaña ${name}`}
          className="cabin-card__img"
          loading="lazy"
          decoding="async"
          width="400"
          height="300"
        />
        <span className="cabin-card__badge">Disponible</span>
      </div>

      <div className="cabin-card__body">
        <h3 className="cabin-card__name">Cabaña {name}</h3>

        <div className="cabin-card__meta">
          <span className="cabin-card__meta-item">
            <svg className="cabin-card__meta-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
            </svg>
            {capacity} {capacity === 2 ? 'personas' : 'personas'}
          </span>
          <span className="cabin-card__meta-item">
            <svg className="cabin-card__meta-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Cabaña completa
          </span>
        </div>

        <div className="cabin-card__divider" />

        <div className="cabin-card__footer">
          <div className="cabin-card__price">
            <span className="cabin-card__price-amount">{price}</span>
            <span className="cabin-card__price-label">CLP por noche</span>
          </div>
          <a href="#reserva" className="btn btn-forest cabin-card__btn">
            Reservar
          </a>
        </div>
      </div>
    </article>
  )
}
