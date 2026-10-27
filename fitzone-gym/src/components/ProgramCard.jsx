import { Link } from 'react-router-dom'

export default function ProgramCard({ program }) {
  return (
    <article className="card">
      <img src={program.img} alt={program.title} loading="lazy" />
      <div className="card-body">
        <h3>{program.title}</h3>
        <p className="muted">{program.short}</p>
        <div className="tags">
          <span>{program.level}</span>
          <span>{program.duration}</span>
        </div>
        <Link to="/contact" className="link-arrow">Book a free trial →</Link>
      </div>
    </article>
  )
}
