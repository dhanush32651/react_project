import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { schedule } from '../data/data.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', goal: 'Muscle gain', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    // Later: send `form` to your backend API with fetch('/api/contact', {...})
    console.log('Form submitted:', form)
    setSent(true)
    setForm({ name: '', phone: '', email: '', goal: 'Muscle gain', message: '' })
  }

  return (
    <>
      <PageHeader title="Contact Us" subtitle="Book your free trial or ask us anything." />
      <section className="section">
        <div className="container two-col top">
          <form className="form" onSubmit={onSubmit}>
            {sent && <p className="success">Thanks! We will contact you shortly.</p>}
            <label>
              Full name
              <input name="name" value={form.name} onChange={onChange} required />
            </label>
            <label>
              Phone
              <input name="phone" type="tel" value={form.phone} onChange={onChange} required />
            </label>
            <label>
              Email
              <input name="email" type="email" value={form.email} onChange={onChange} required />
            </label>
            <label>
              Your goal
              <select name="goal" value={form.goal} onChange={onChange}>
                <option>Muscle gain</option>
                <option>Fat loss</option>
                <option>Flexibility & yoga</option>
                <option>Strength & CrossFit</option>
              </select>
            </label>
            <label>
              Message
              <textarea name="message" rows="4" value={form.message} onChange={onChange} />
            </label>
            <button className="btn" type="submit">Send Message</button>
          </form>

          <div className="info">
            <h3>Visit us</h3>
            <p className="muted">FitZone Gym, Vijayawada, Andhra Pradesh</p>
            <p className="muted">+91 98765 43210</p>
            <p className="muted">hello@fitzone.example</p>
            <h3>Opening hours</h3>
            {schedule.map((s) => (
              <p key={s.day} className="muted">{s.day}: {s.time}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
