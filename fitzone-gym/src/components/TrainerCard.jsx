export default function TrainerCard({ trainer }) {
  return (
    <article className="card trainer">
      <img src={trainer.img} alt={trainer.name} loading="lazy" />
      <div className="card-body">
        <h3>{trainer.name}</h3>
        <span className="role">{trainer.role}</span>
        <p className="muted">{trainer.bio}</p>
      </div>
    </article>
  )
}
