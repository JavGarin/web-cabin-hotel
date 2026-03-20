import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import './Navbar.css'

const navLinks = [
  { href: '#cabanas', label: 'Cabañas' },
  { href: '#amenidades', label: 'Servicios' },
  { href: '#galeria', label: 'Galería' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#ubicacion', label: 'Ubicación' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  /*
   * ARQUITECTURA — Por qué usamos createPortal:
   * ─────────────────────────────────────────────
   * El <header class="navbar--scrolled"> aplica backdrop-filter: blur().
   * Cualquier propiedad de `filter` o `backdrop-filter` en un elemento
   * crea automáticamente un nuevo STACKING CONTEXT (contexto de apilamiento)
   * en el navegador. Esto rompe position: fixed en los hijos: en lugar de
   * posicionarse relativo al viewport, quedan atrapados relativo al <header>.
   *
   * createPortal escapa completamente del árbol DOM del header y renderiza
   * el overlay directamente como hijo de <body>, donde position: fixed
   * siempre es relativo al viewport, sin importar el scroll.
   */
  const mobileMenu = (
    <nav
      id="mobile-menu"
      className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}
      aria-label="Navegación mobile"
      aria-hidden={!menuOpen}
    >
      <button
        className="navbar__mobile-close"
        aria-label="Cerrar menú"
        onClick={handleNavClick}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div className="navbar__mobile-links">
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            style={{ '--i': i } as React.CSSProperties}
            onClick={handleNavClick}
          >
            {link.label}
          </a>
        ))}
      </div>

      <a href="#reserva" className="btn btn-primary navbar__mobile-cta" onClick={handleNavClick}>
        Reservar →
      </a>
    </nav>
  )

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
        <div className="container">
          <div className="navbar__inner">
            <a href="#hero" className="navbar__logo" aria-label="Raíces del Sur Lodge — Inicio">
              <span className="navbar__logo-name">Raíces del Sur</span>
              <span className="navbar__logo-tagline">Lago Rosselot · Aysén</span>
            </a>

            <nav className="navbar__nav" aria-label="Navegación principal">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className="navbar__link">{link.label}</a>
              ))}
            </nav>

            <a href="#reserva" className="btn btn-primary navbar__cta">Reservar →</a>

            <button
              className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(v => !v)}
            >
              <span className="navbar__hamburger-line" />
              <span className="navbar__hamburger-line" />
              <span className="navbar__hamburger-line" />
            </button>
          </div>
        </div>
      </header>

      {/* Portal: renderiza el overlay directamente en <body>
          Escapa cualquier stacking context creado por backdrop-filter
          del header, garantizando position: fixed relativo al viewport */}
      {createPortal(mobileMenu, document.body)}
    </>
  )
}
