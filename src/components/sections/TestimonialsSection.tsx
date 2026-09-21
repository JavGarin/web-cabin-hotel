import { useState, useCallback } from 'react'
import './TestimonialsSection.css'

const TESTIMONIALS = [
  {
    quote: 'Una experiencia que no olvidaremos jamás. Nos despertamos con el lago frente a la ventana y el silencio de los arrayanes. No hay palabras para describirlo.',
    name: 'Valentina Morales',
    origin: 'Santiago, Chile',
    cabin: 'Cabaña Coihue',
    year: '2025',
  },
  {
    quote: 'Vinimos a pescar con mosca y nos quedamos enamorados del lugar. El personal fue increíblemente amable y la cabaña impecable. Volveremos en verano.',
    name: 'Rodrigo Fuentes',
    origin: 'Concepción, Chile',
    cabin: 'Cabaña Lenga',
    year: '2025',
  },
  {
    quote: 'La Patagonia que soñamos ver. Los cóndores sobrevolando el lago al atardecer fue un momento mágico. La cabaña familiar perfecta para desconectar.',
    name: 'María José Carrasco',
    origin: 'Buenos Aires, Argentina',
    cabin: 'Cabaña Canelo',
    year: '2026',
  },
  {
    quote: 'Celebramos nuestro aniversario aquí y fue simplemente perfecto. La privacidad, el entorno, la chimenea... Todo superó nuestras expectativas.',
    name: 'Diego & Sofía Reyes',
    origin: 'Temuco, Chile',
    cabin: 'Cabaña Arrayán',
    year: '2026',
  },
  {
    quote: 'Como guía de trekking, soy muy exigente con los alojamientos. Raíces del Sur tiene la mejor relación calidad-precio de toda la región de Aysén.',
    name: 'Cristóbal Urrutia',
    origin: 'Coyhaique, Chile',
    cabin: 'Cabaña Ñirre',
    year: '2025',
  },
  {
    quote: 'Un lugar sacado de un cuento. La cabaña Mañío fue nuestro hogar por una semana y no queríamos irnos. La calidez de la madera y el sonido del río son insuperables.',
    name: 'Lucía Espinoza',
    origin: 'Puerto Montt, Chile',
    cabin: 'Cabaña Mañío',
    year: '2026',
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = useCallback(() => {
    setCurrentIndex(i => (i + 1) % TESTIMONIALS.length)
  }, [])

  const handlePrev = useCallback(() => {
    setCurrentIndex(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }, [])

  const current = TESTIMONIALS[currentIndex]

  return (
    <section id="testimonios" className="section section--alt testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <header className="testimonials__header reveal reveal-up">
          <span className="section__eyebrow">Bitácora de Huéspedes</span>
          <h2 id="testimonials-title" className="section__title">
            Testimonios & Reseñas Reales
          </h2>
        </header>

        {/* Bloque Testimonial Editorial Brutalista */}
        <div className="testimonials__card reveal reveal-scale">
          <div className="testimonials__meta-bar">
            <span className="testimonials__tag">Reseña Verificada</span>
            <span className="testimonials__counter">
              {String(currentIndex + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
            </span>
          </div>

          <blockquote className="testimonials__quote">
            "{current.quote}"
          </blockquote>

          <div className="testimonials__footer">
            <div className="testimonials__author">
              <span className="testimonials__author-name">{current.name}</span>
              <span className="testimonials__author-info">
                {current.origin} · {current.cabin} ({current.year})
              </span>
            </div>

            <div className="testimonials__controls" role="group" aria-label="Controles de navegación">
              <button
                className="testimonials__btn"
                onClick={handlePrev}
                aria-label="Testimonio anterior"
              >
                ← Anterior
              </button>
              <button
                className="testimonials__btn"
                onClick={handleNext}
                aria-label="Testimonio siguiente"
              >
                Siguiente →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
