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
  phone:    z.string().min(9, 'Ingresa tu teléfono de contacto'),
  notes:    z.string().optional(),
})

type BookingForm = z.infer<typeof schema>

const CABIN_OPTIONS = [
  'Canelo (8 pers.) — $210.000',
  'Arrayán (2 pers.) — $85.000',
  'Ciprés (4 pers.) — $120.000',
  'Coihue (4 pers.) — $115.000',
  'Lenga (6 pers.) — $160.000',
  'Ñirre (2 pers.) — $90.000',
  'Radal (6 pers.) — $155.000',
  'Pitao (2 pers.) — $80.000',
  'Roble (4 pers.) — $125.000',
  'Pehuen (4 pers.) — $118.000',
  'Mañío (6 pers.) — $162.000',
  'Nalca (8 pers.) — $215.000',
]

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<BookingForm>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (_data: BookingForm) => {
    await new Promise(resolve => setTimeout(resolve, 600))
    setSubmitted(true)
  }

  return (
    <section id="reserva" className="section section--dark booking" aria-labelledby="booking-title">
      <div className="container">
        <div className="booking__layout">

          {/* Columna Izquierda: Información de Reserva y Políticas */}
          <div className="booking__info reveal reveal-left">
            <span className="section__eyebrow">Canal Directo Sin Intermediarios</span>
            <h2 id="booking-title" className="section__title">
              Reserva tu Refugio en la Patagonia
            </h2>
            <p className="booking__lead">
              Atención directa por los administradores del lodge. Tarifas sin comisiones de plataformas y confirmación expedita por correo o WhatsApp.
            </p>

            <div className="booking__conditions">
              <h3 className="booking__conditions-title">Condiciones de Estadía</h3>
              <ul className="booking__list">
                <li>
                  <span className="booking__list-bullet">■</span>
                  <span><strong>Check-in:</strong> 15:00 a 20:00 hrs / <strong>Check-out:</strong> hasta las 11:00 hrs.</span>
                </li>
                <li>
                  <span className="booking__list-bullet">■</span>
                  <span><strong>Garantía:</strong> 30% de abono para confirmar reserva; saldo al ingresar.</span>
                </li>
                <li>
                  <span className="booking__list-bullet">■</span>
                  <span><strong>Cancelación:</strong> Reembolso total con aviso previo de 7 días.</span>
                </li>
                <li>
                  <span className="booking__list-bullet">■</span>
                  <span><strong>Kit incluido:</strong> Ropa de cama térmica, toallas y carga de leña seca.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta de Formulario Brutalista */}
          <div className="booking__card reveal reveal-right">
            {submitted ? (
              <div className="booking__success" role="status">
                <div className="booking__success-badge">CONFIRMACIÓN EN CURSO</div>
                <h3 className="booking__success-title">Solicitud de Reserva Registrada</h3>
                <p className="booking__success-desc">
                  Hemos recibido tus datos correctamente. Nuestro equipo revisará la disponibilidad de la cabaña y te contactará en menos de 24 horas hábiles.
                </p>
                <button
                  type="button"
                  className="btn btn-outline booking__success-btn"
                  onClick={() => setSubmitted(false)}
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <>
                <div className="booking__form-header">
                  <span className="booking__form-tag">FORMULARIO DE DISPONIBILIDAD</span>
                  <p className="booking__form-sub">Completa los campos obligatorios para cotizar tu estadía.</p>
                </div>

                <form className="booking__form" onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="checkin" className="form-label">Fecha de Llegada</label>
                      <input
                        id="checkin"
                        type="date"
                        className={`form-input ${errors.checkin ? 'form-input--error' : ''}`}
                        aria-invalid={errors.checkin ? 'true' : 'false'}
                        {...register('checkin')}
                      />
                      {errors.checkin && <span className="form-error-msg">{errors.checkin.message}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="checkout" className="form-label">Fecha de Salida</label>
                      <input
                        id="checkout"
                        type="date"
                        className={`form-input ${errors.checkout ? 'form-input--error' : ''}`}
                        aria-invalid={errors.checkout ? 'true' : 'false'}
                        {...register('checkout')}
                      />
                      {errors.checkout && <span className="form-error-msg">{errors.checkout.message}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="cabin" className="form-label">Cabaña de Preferencia</label>
                      <select
                        id="cabin"
                        className={`form-select ${errors.cabin ? 'form-input--error' : ''}`}
                        aria-invalid={errors.cabin ? 'true' : 'false'}
                        {...register('cabin')}
                      >
                        <option value="">Selecciona una opción...</option>
                        {CABIN_OPTIONS.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                      {errors.cabin && <span className="form-error-msg">{errors.cabin.message}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="guests" className="form-label">N° de Huéspedes</label>
                      <select
                        id="guests"
                        className={`form-select ${errors.guests ? 'form-input--error' : ''}`}
                        aria-invalid={errors.guests ? 'true' : 'false'}
                        {...register('guests')}
                      >
                        <option value="">Cantidad...</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                          <option key={n} value={String(n)}>
                            {n} {n === 1 ? 'huésped' : 'huéspedes'}
                          </option>
                        ))}
                      </select>
                      {errors.guests && <span className="form-error-msg">{errors.guests.message}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Nombre y Apellidos</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Ej: Carolina Rojas"
                      className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                      aria-invalid={errors.name ? 'true' : 'false'}
                      {...register('name')}
                    />
                    {errors.name && <span className="form-error-msg">{errors.name.message}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Correo Electrónico</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="contacto@ejemplo.com"
                        className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                        aria-invalid={errors.email ? 'true' : 'false'}
                        {...register('email')}
                      />
                      {errors.email && <span className="form-error-msg">{errors.email.message}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Teléfono / WhatsApp</label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+56 9 1234 5678"
                        className={`form-input ${errors.phone ? 'form-input--error' : ''}`}
                        aria-invalid={errors.phone ? 'true' : 'false'}
                        {...register('phone')}
                      />
                      {errors.phone && <span className="form-error-msg">{errors.phone.message}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="notes" className="form-label">Requerimientos Especiales (Opcional)</label>
                    <textarea
                      id="notes"
                      rows={3}
                      placeholder="Indícanos si viajas con mascotas, hora aproximada de llegada o consultas particulares..."
                      className="form-textarea"
                      {...register('notes')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary booking__submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Procesando...' : 'Enviar Solicitud de Reserva →'}
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
