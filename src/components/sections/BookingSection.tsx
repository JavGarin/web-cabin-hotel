import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import './BookingSection.css'

const schema = z.object({
  checkin:  z.string().min(1, 'Selecciona fecha de llegada'),
  checkout: z.string().min(1, 'Selecciona fecha de salida'),
  cabin:    z.string().min(1, 'Selecciona una cabaña'),
  guests:   z.string().min(1, 'Indica número de huéspedes'),
  name:     z.string().min(2, 'Ingresa tu nombre completo'),
  email:    z.string().email('Email inválido'),
  phone:    z.string().min(9, 'Ingresa tu teléfono'),
  notes:    z.string().optional(),
})

type BookingForm = z.infer<typeof schema>

const CABINS = [
  'Arrayán (2 pers.) — $85.000', 'Ciprés (4 pers.) — $120.000',
  'Coihue (4 pers.) — $115.000', 'Lenga (6 pers.) — $160.000',
  'Ñirre (2 pers.) — $90.000',  'Radal (6 pers.) — $155.000',
  'Canelo (8 pers.) — $210.000','Pitao (2 pers.) — $80.000',
  'Roble (4 pers.) — $125.000', 'Pehuen (4 pers.) — $118.000',
  'Mañío (6 pers.) — $162.000', 'Nalca (8 pers.) — $215.000',
]

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<BookingForm>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (_data: BookingForm) => {
    await new Promise(r => setTimeout(r, 800))
    setSubmitted(true)
  }

  return (
    <section id="reserva" className="section booking" aria-labelledby="booking-title">
      <div className="container">
        <div className="booking__inner">

          {/* Información */}
          <div className="booking__info reveal reveal-left">
            <span className="booking__eyebrow">Haz tu reserva</span>
            <h2 id="booking-title" className="booking__title">
              Tu refugio en la Patagonia te espera
            </h2>
            <p className="booking__desc">
              Reserva directamente con nosotros y obtén el mejor precio. Sin comisiones
              de terceros. Confirmación en menos de 24 horas vía email o WhatsApp.
            </p>
            <ul className="booking__features">
              {[
                'Cancelación gratuita hasta 7 días antes',
                'Pago del 30% para confirmar, resto al llegada',
                'Check-in flexible entre 14:00 y 20:00',
                'Incluye ropa de cama y kit de bienvenida',
                'Mascotas pequeñas bienvenidas (previo aviso)',
              ].map(f => (
                <li key={f} className="booking__feature">
                  <span className="booking__feature-dot" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Formulario */}
          <div className="booking__form-card reveal reveal-right">
            {submitted ? (
              <div className="booking__success">
                <div className="booking__success-icon" aria-hidden="true">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="booking__success-title">¡Solicitud recibida!</h3>
                <p className="booking__success-text">
                  Nos pondremos en contacto contigo en menos de 24 horas para confirmar tu reserva.
                </p>
              </div>
            ) : (
              <>
                <h3 className="booking__form-title">Formulario de Reserva</h3>
                <form className="booking__form" onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="checkin" className="form-label">Llegada</label>
                      <input id="checkin" type="date" className={`form-input${errors.checkin ? ' error' : ''}`} {...register('checkin')} />
                      {errors.checkin && <span className="form-error">{errors.checkin.message}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="checkout" className="form-label">Salida</label>
                      <input id="checkout" type="date" className={`form-input${errors.checkout ? ' error' : ''}`} {...register('checkout')} />
                      {errors.checkout && <span className="form-error">{errors.checkout.message}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="cabin" className="form-label">Cabaña</label>
                      <div className="form-select-wrap">
                        <select id="cabin" className={`form-select${errors.cabin ? ' error' : ''}`} {...register('cabin')}>
                          <option value="">Seleccionar…</option>
                          {CABINS.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                      {errors.cabin && <span className="form-error">{errors.cabin.message}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="guests" className="form-label">Huéspedes</label>
                      <div className="form-select-wrap">
                        <select id="guests" className={`form-select${errors.guests ? ' error' : ''}`} {...register('guests')}>
                          <option value="">Cantidad…</option>
                          {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'persona' : 'personas'}</option>)}
                        </select>
                      </div>
                      {errors.guests && <span className="form-error">{errors.guests.message}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Nombre completo</label>
                    <input id="name" type="text" placeholder="Ej: María González" className={`form-input${errors.name ? ' error' : ''}`} {...register('name')} />
                    {errors.name && <span className="form-error">{errors.name.message}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input id="email" type="email" placeholder="correo@ejemplo.cl" className={`form-input${errors.email ? ' error' : ''}`} {...register('email')} />
                      {errors.email && <span className="form-error">{errors.email.message}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Teléfono</label>
                      <input id="phone" type="tel" placeholder="+56 9 XXXX XXXX" className={`form-input${errors.phone ? ' error' : ''}`} {...register('phone')} />
                      {errors.phone && <span className="form-error">{errors.phone.message}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="notes" className="form-label">Comentarios (opcional)</label>
                    <textarea id="notes" placeholder="Dietas especiales, mascotas, llegada tardía…" className="form-textarea" {...register('notes')} />
                  </div>

                  <button type="submit" className="btn btn-forest booking__submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando…' : 'Solicitar Reserva →'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
