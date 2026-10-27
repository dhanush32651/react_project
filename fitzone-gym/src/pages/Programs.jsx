import { programs } from '../data/data.js'
import PageHeader from '../components/PageHeader.jsx'
import { Link } from 'react-router-dom'

export default function Programs() {
  return (
    <>
      <PageHeader title="Our Programs" subtitle="Four ways to get stronger, fitter and healthier." />
      <section className="section">
        <div className="container">
          {programs.map((p, i) => (
            <div key={p.id} className={`program-row ${i % 2 ? 'reverse' : ''}`}>
              <img className="rounded" src={p.img} alt={p.title} loading="lazy" />
              <div>
                <h2>{p.title}</h2>
                <div className="tags">
                  <span>{p.level}</span>
                  <span>{p.duration}</span>
                </div>
                <p className="muted">{p.short}</p>
                <ul className="checklist">
                  {p.details.map((d) => <li key={d}>{d}</li>)}
                </ul>
                <Link to="/contact" className="btn">Join this program</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
