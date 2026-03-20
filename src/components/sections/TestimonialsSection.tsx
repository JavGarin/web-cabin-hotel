import { useState, useEffect, useCallback, useRef } from 'react'
import './TestimonialsSection.css'

const ORIGINAL_TESTIMONIALS = [
  {
    quote: 'Una experiencia que no olvidaremos jamás. Nos despertamos con el lago frente a la ventana y el silencio de los arrayanes. No hay palabras para describirlo.',
    name: 'Valentina Morales',
    origin: 'Santiago, Chile',
    cabin: 'Cabaña Coihue',
    initial: 'V',
  },
  {
    quote: 'Vinimos a pescar con mosca y nos quedamos enamorados del lugar. El personal fue increíblemente amable y la cabaña impecable. Volveremos en verano.',
    name: 'Rodrigo Fuentes',
    origin: 'Concepción, Chile',
    cabin: 'Cabaña Lenga',
    initial: 'R',
  },
  {
    quote: 'La Patagonia que soñamos ver. Los cóndores sobrevolando el lago al atardecer fue un momento mágico. La cabaña familiar perfecta para desconectar.',
    name: 'María José Carrasco',
    origin: 'Buenos Aires, Argentina',
    cabin: 'Cabaña Canelo',
    initial: 'M',
  },
  {
    quote: 'Celebramos nuestro aniversario aquí y fue simplemente perfecto. La privacidad, el entorno, la chimenea... Todo superó nuestras expectativas.',
    name: 'Diego y Sofía Reyes',
    origin: 'Temuco, Chile',
    cabin: 'Cabaña Arrayán',
    initial: 'D',
  },
  {
    quote: 'Como guía de trekking, soy muy exigente con los alojamientos. Raíces del Sur tiene la mejor relación calidad-precio de toda la región de Aysén. Recomendado 100%.',
    name: 'Cristóbal Urrutia',
    origin: 'Coyhaique, Chile',
    cabin: 'Cabaña Ñirre',
    initial: 'C',
  },
  {
    quote: 'Un lugar sacado de un cuento. La cabaña Mañío fue nuestro hogar por una semana y no queríamos irnos. La calidez de la madera y el sonido lejano de una cascada son el combo perfecto.',
    name: 'Lucía Espinoza',
    origin: 'Puerto Montt, Chile',
    cabin: 'Cabaña Mañío',
    initial: 'L',
  },
]

// Para el loop infinito, duplicamos los elementos
const TESTIMONIALS = [...ORIGINAL_TESTIMONIALS, ...ORIGINAL_TESTIMONIALS]

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const trackRef = useRef<HTMLDivElement>(null)
  const length = ORIGINAL_TESTIMONIALS.length

  // Detectar items visibles basado en el ancho de pantalla (igual que el CSS)
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) setVisibleItems(1)
      else if (window.innerWidth < 1024) setVisibleItems(2)
      else setVisibleItems(3)
    }
    updateVisible()
    window.addEventListener('resize', updateVisible)
    return () => window.removeEventListener('resize', updateVisible)
  }, [])

  const next = useCallback(() => {
    setIsTransitioning(true)
    setIndex(i => i + 1)
  }, [])

  const prev = useCallback(() => {
    setIsTransitioning(true)
    setIndex(i => i - 1)
  }, [])

  // Auto-advance
  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  // Lógica de loop infinito "seamless"
  useEffect(() => {
    if (index >= length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
        setIndex(0)
      }, 500)
      return () => clearTimeout(timer)
    }
    if (index < 0) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
        setIndex(length - 1)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [index, length])

  const StarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )

  return (
    <section id="testimonios" className="section testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <header className="testimonials__header reveal reveal-up">
          <span className="testimonials__eyebrow">Lo que dicen nuestros huéspedes</span>
          <h2 id="testimonials-title" className="testimonials__title">Opiniones reales</h2>
        </header>

        <div className="testimonials__track-wrap">
          <div
            ref={trackRef}
            className="testimonials__track"
            style={{
              transform: `translateX(-${index * (100 / visibleItems)}%)`,
              transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
            }}
            aria-live="polite"
          >
            {TESTIMONIALS.map((t, i) => (
              <article key={i} className="testimonial-card" aria-label={`Testimonio de ${t.name}`}>
                <div className="testimonial-card__inner">
                  <div className="testimonial-card__stars" aria-label="5 estrellas">
                    {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                  </div>
                  <blockquote className="testimonial-card__quote">"{t.quote}"</blockquote>
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar" aria-hidden="true">{t.initial}</div>
                    <div>
                      <p className="testimonial-card__name">{t.name}</p>
                      <p className="testimonial-card__meta">{t.origin} · {t.cabin}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="testimonials__controls" role="group" aria-label="Navegación de testimonios">
          <button className="testimonials__btn" onClick={prev} aria-label="Testimonio anterior">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {ORIGINAL_TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`testimonials__dot${i === (index % length + length) % length ? ' testimonials__dot--active' : ''}`}
              onClick={() => {
                setIsTransitioning(true)
                setIndex(i)
              }}
              aria-label={`Ir al testimonio ${i + 1}`}
              aria-pressed={i === (index % length + length) % length}
            />
          ))}
          <button className="testimonials__btn" onClick={next} aria-label="Testimonio siguiente">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
