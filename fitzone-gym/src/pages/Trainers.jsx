import { trainers } from '../data/data.js'
import PageHeader from '../components/PageHeader.jsx'
import TrainerCard from '../components/TrainerCard.jsx'

export default function Trainers() {
  return (
    <>
      <PageHeader title="Our Trainers" subtitle="Certified coaches who keep you safe, motivated and progressing." />
      <section className="section">
        <div className="container grid grid-3">
          {trainers.map((t) => <TrainerCard key={t.name} trainer={t} />)}
        </div>
      </section>
    </>
  )
}
