import { useState } from 'react'
import { images } from '../data/images.js'
import PageHeader from '../components/PageHeader.jsx'

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <>
      <PageHeader title="Gallery" subtitle="A look inside FitZone." />
      <section className="section">
        <div className="container gallery-grid">
          {images.gallery.map((src, i) => (
            <button key={src} className="gallery-item" onClick={() => setActive(src)} aria-label={`Open photo ${i + 1}`}>
              <img src={src} alt={`FitZone gym photo ${i + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
      </section>

      {active && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <img src={active} alt="Enlarged gym" />
          <button className="close" aria-label="Close">✕</button>
        </div>
      )}
    </>
  )
}
