import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">

          {/* Columna Marca */}
          <div>
            <p className="footer__brand-name">Raíces del Sur</p>
            <p className="footer__brand-tagline">Lago Rosselot · Aysén</p>
            <p className="footer__brand-desc">
              Doce cabañas de montaña a orillas del Lago Rosselot, en el corazón
              de la Patagonia chilena. Un refugio donde el bosque abraza el lago.
            </p>
            <div className="footer__social" aria-label="Redes sociales">
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="WhatsApp">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M11.974 0C5.364 0 0 5.362 0 11.969c0 2.064.531 4.083 1.543 5.856L.057 23.993l6.305-1.654a11.952 11.952 0 0 0 5.612 1.396C18.586 23.735 24 18.374 24 11.969 24 5.362 18.586 0 11.974 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Columna Explorar */}
          <div>
            <h3 className="footer__col-title">Explorar</h3>
            <ul className="footer__links">
              {[
                ['#cabanas', 'Nuestras Cabañas'],
                ['#amenidades', 'Servicios y Comodidades'],
                ['#galeria', 'Galería de Fotos'],
                ['#testimonios', 'Opiniones'],
                ['#ubicacion', 'Cómo Llegar'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="footer__link">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Actividades */}
          <div>
            <h3 className="footer__col-title">Actividades</h3>
            <ul className="footer__links">
              {[
                'Kayak en el Lago',
                'Pesca con Mosca',
                'Senderismo Nativo',
                'Avistamiento de Cóndores',
                'Fogonzadas Patagónicas',
              ].map(a => <li key={a}><span className="footer__link">{a}</span></li>)}
            </ul>
          </div>

          {/* Columna Contacto */}
          <div>
            <h3 className="footer__col-title">Contacto</h3>
            <div className="footer__contact-item">
              <svg className="footer__contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>Lago Rosselot, La Junta<br/>Región de Aysén, Chile</span>
            </div>
            <div className="footer__contact-item">
              <svg className="footer__contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>+56 9 9876 5432</span>
            </div>
            <div className="footer__contact-item">
              <svg className="footer__contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>reservas@raicesdelsur.cl</span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {year} Raíces del Sur Lodge. Todos los derechos reservados.
            <span className="footer__dev-credit">
              {" · "}Desarrollado por <a href="https://atacama-dev.vercel.app/" target="_blank" rel="noopener noreferrer" className="footer__dev-link">Atacama Dev</a>
            </span>
          </p>
          <nav className="footer__legal" aria-label="Legal">
            <a href="#" className="footer__legal-link">Privacidad</a>
            <a href="#" className="footer__legal-link">Términos</a>
            <a href="#" className="footer__legal-link">Cookies</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
