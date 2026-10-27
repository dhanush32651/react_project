import { Link } from 'react-router-dom'
import { schedule } from '../data/data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo">FIT<span>ZONE</span></div>
          <p className="muted">Train hard. Recover well. Become your strongest self.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/trainers">Trainers</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/bmi">BMI Calculator</Link></li>
          </ul>
        </div>

        <div>
          <h4>Opening Hours</h4>
          <ul>
            {schedule.map((s) => (
              <li key={s.day} className="muted">{s.day}: {s.time}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li className="muted">Vijayawada, Andhra Pradesh</li>
            <li className="muted">+91 98765 43210</li>
            <li className="muted">hello@fitzone.example</li>
          </ul>
        </div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} FitZone Gym. All rights reserved.</div>
    </footer>
  )
}
