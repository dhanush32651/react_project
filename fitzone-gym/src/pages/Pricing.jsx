import { useState } from 'react'
import { Link } from 'react-router-dom'
import { plans } from '../data/data.js'
import PageHeader from '../components/PageHeader.jsx'

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  // yearly = pay for 10 months, get 12
  const priceFor = (monthly) => (yearly ? monthly * 10 : monthly)

  return (
    <>
      <PageHeader title="Membership Plans" subtitle="Simple pricing. No hidden charges." />
      <section className="section">
        <div className="container">
          <div className="toggle">
            <button className={!yearly ? 'on' : ''} onClick={() => setYearly(false)}>Monthly</button>
            <button className={yearly ? 'on' : ''} onClick={() => setYearly(true)}>Yearly (2 months free)</button>
          </div>

          <div className="grid grid-3">
            {plans.map((p) => (
              <div key={p.name} className={p.popular ? 'plan popular' : 'plan'}>
                {p.popular && <span className="badge">Most Popular</span>}
                <h3>{p.name}</h3>
                <div className="price">
                  ₹{priceFor(p.price).toLocaleString('en-IN')}
                  <small>/{yearly ? 'year' : 'month'}</small>
                </div>
                <ul className="checklist">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <Link to="/contact" className="btn">Choose {p.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
