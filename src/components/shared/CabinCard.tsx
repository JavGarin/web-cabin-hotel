import './CabinCard.css'

export interface CabinProps {
  name: string
  capacity: number
  price: string
  image: string
  featured?: boolean
  description?: string
  badge?: string
}

interface CabinCardProps extends CabinProps {
  index: number
}

export default function CabinCard({
  name,
  capacity,
  price,
  image,
  featured = false,
  description,
  badge = 'Disponible',
  index,
}: CabinCardProps) {
  return (
    <article
      className={`cabin-card ${featured ? 'cabin-card--featured' : ''} reveal reveal-up`}
      aria-label={`Cabaña ${name}`}
      style={{ '--stagger': `${(index % 4) * 0.1}s` } as React.CSSProperties}
    >
      <div className="cabin-card__media">
        <img
          src={image}
          alt={`Cabaña ${name} en Raíces del Sur`}
          className="cabin-card__img"
          loading="lazy"
          decoding="async"
        />
        <div className="cabin-card__badge-wrap">
          <span className="cabin-card__badge">{badge}</span>
        </div>
      </div>

      <div className="cabin-card__body">
        <div className="cabin-card__header">
          <span className="cabin-card__id">N° {String(index + 1).padStart(2, '0')}</span>
          <h3 className="cabin-card__name">Cabaña {name}</h3>
        </div>

        {description && (
          <p className="cabin-card__desc">{description}</p>
        )}

        <div className="cabin-card__meta">
          <div className="cabin-card__meta-item">
            <span className="cabin-card__meta-label">Capacidad</span>
            <span className="cabin-card__meta-val">{capacity} {capacity === 1 ? 'persona' : 'personas'}</span>
          </div>
          <div className="cabin-card__meta-item">
            <span className="cabin-card__meta-label">Modalidad</span>
            <span className="cabin-card__meta-val">Cabaña Completa</span>
          </div>
        </div>

        <div className="cabin-card__footer">
          <div className="cabin-card__price">
            <span className="cabin-card__price-amount">{price}</span>
            <span className="cabin-card__price-period">CLP / noche</span>
          </div>
          <a href="#reserva" className="btn btn-forest cabin-card__cta">
            Reservar
          </a>
        </div>
      </div>
    </article>
  )
}
