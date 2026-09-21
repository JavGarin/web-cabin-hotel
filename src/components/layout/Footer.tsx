import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">

          {/* Columna 1: Marca e Identidad */}
          <div className="footer__col footer__col--brand">
            <span className="footer__brand-title">RAÍCES DEL SUR</span>
            <span className="footer__brand-sub">LODGE & CABAÑAS DE MONTAÑA</span>
            <p className="footer__brand-desc">
              Doce cabañas de madera nativa a orillas del Lago Rosselot, Carretera Austral, Región de Aysén, Patagonia Chilena.
            </p>
            <div className="footer__coords">
              <span>LAT 44°15'S</span>
              <span>·</span>
              <span>LON 72°28'W</span>
            </div>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div className="footer__col">
            <h3 className="footer__heading">Navegación</h3>
            <ul className="footer__nav">
              <li><a href="#hero" className="footer__link">Inicio</a></li>
              <li><a href="#cabanas" className="footer__link">Cabañas Nativas</a></li>
              <li><a href="#amenidades" className="footer__link">Servicios & Entorno</a></li>
              <li><a href="#galeria" className="footer__link">Galería Fotográfica</a></li>
              <li><a href="#testimonios" className="footer__link">Testimonios</a></li>
              <li><a href="#ubicacion" className="footer__link">Cómo Llegar</a></li>
            </ul>
          </div>

          {/* Columna 3: Información de Contacto */}
          <div className="footer__col">
            <h3 className="footer__heading">Contacto & Reservas</h3>
            <div className="footer__contact-list">
              <div className="footer__contact-item">
                <span className="footer__contact-label">Ubicación</span>
                <span className="footer__contact-val">Ruta 7 Km 245, Desvío Lago Rosselot, La Junta, Aysén</span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-label">WhatsApp / Teléfono</span>
                <a href="tel:+56998765432" className="footer__contact-val footer__contact-link">+56 9 9876 5432</a>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-label">Correo Electrónico</span>
                <a href="mailto:reservas@raicesdelsur.cl" className="footer__contact-val footer__contact-link">reservas@raicesdelsur.cl</a>
              </div>
            </div>
          </div>

        </div>

        {/* Barra Inferior */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Raíces del Sur Lodge. Todos los derechos reservados.
          </p>
          <p className="footer__credit">
            Diseño Brutalista Minimalista · Desarrollado con React 19 & TypeScript
          </p>
        </div>
      </div>
    </footer>
  )
}
