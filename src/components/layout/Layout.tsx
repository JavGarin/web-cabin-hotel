import '../../styles/globals.css'
import Navbar from './Navbar'
import Footer from './Footer'
import HeroSection from '../sections/HeroSection'
import { useEffect, lazy, Suspense } from 'react'

const CabinsSection = lazy(() => import('../sections/CabinsSection'))
const AmenitiesSection = lazy(() => import('../sections/AmenitiesSection'))
const GallerySection = lazy(() => import('../sections/GallerySection'))
const BookingSection = lazy(() => import('../sections/BookingSection'))
const TestimonialsSection = lazy(() => import('../sections/TestimonialsSection'))
const LocationSection = lazy(() => import('../sections/LocationSection'))

// Inicializar Intersection Observer global para clases .reveal
function useGlobalReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px 100px 0px' }
    )

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal:not(.is-observed)')
      elements.forEach(el => {
        el.classList.add('is-observed')
        observer.observe(el)
      })
    }

    observeElements()

    const mutationObserver = new MutationObserver(() => {
      requestAnimationFrame(observeElements)
    })
    
    mutationObserver.observe(document.body, { 
      childList: true, 
      subtree: true 
    })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])
}

export default function Layout() {
  useGlobalReveal()

  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <Suspense fallback={<div style={{ minHeight: '60vh', background: 'var(--color-bg-dark)' }} />}>
          <CabinsSection />
          <AmenitiesSection />
          <GallerySection />
          <BookingSection />
          <TestimonialsSection />
          <LocationSection />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
