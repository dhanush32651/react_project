import { Link } from 'react-router-dom'
import { images } from '../data/images.js'
import { stats, programs, trainers, testimonials } from '../data/data.js'
import SectionTitle from '../components/SectionTitle.jsx'
import ProgramCard from '../components/ProgramCard.jsx'
import TrainerCard from '../components/TrainerCard.jsx'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(10,10,10,.88), rgba(10,10,10,.35)), url(${images.hero})` }}>
        <div className="container hero-content">
          <span className="eyebrow">Welcome to FitZone</span>
          <h1>Build Your Body.<br />Boost Your <em>Strength.</em></h1>
          <p>Modern equipment, certified trainers and programs for every goal - from your first workout to your first competition.</p>
          <div className="hero-actions">
            <Link to="/pricing" className="btn">Start Your Journey</Link>
            <Link to="/programs" className="btn btn-outline">View Programs</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <div className="container two-col">
          <img className="rounded" src={images.about} alt="Inside FitZone gym" loading="lazy" />
          <div>
            <SectionTitle
              eyebrow="About Us"
              title="More than a gym. A community."
              subtitle="At FitZone we believe fitness should be simple, safe and enjoyable. Our coaches build a plan around your body, your schedule and your goals."
            />
            <ul className="checklist">
              <li>Latest strength and cardio equipment</li>
              <li>Certified, friendly personal trainers</li>
              <li>Clean, spacious and air-conditioned floors</li>
              <li>Diet and recovery guidance included</li>
            </ul>
            <Link to="/contact" className="btn">Book a Free Trial</Link>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section alt">
        <div className="container">
          <SectionTitle eyebrow="Our Programs" title="Train the way you love" subtitle="Pick a program that matches your goal." />
          <div className="grid grid-4">
            {programs.map((p) => <ProgramCard key={p.id} program={p} />)}
          </div>
        </div>
      </section>

      {/* TRAINERS */}
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Meet the Team" title="Expert trainers on your side" />
          <div className="grid grid-3">
            {trainers.map((t) => <TrainerCard key={t.name} trainer={t} />)}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section alt">
        <div className="container">
          <SectionTitle eyebrow="Success Stories" title="What our members say" />
          <div className="grid grid-3">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="testimonial">
                <p>“{t.text}”</p>
                <footer>- {t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Your first session is on us.</h2>
          <p>Walk in, meet the trainers and try the gym for free.</p>
          <Link to="/contact" className="btn btn-dark">Claim Free Trial</Link>
        </div>
      </section>
    </>
  )
}
