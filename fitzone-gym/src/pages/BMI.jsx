import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'

function getCategory(bmi) {
  if (bmi < 18.5) return { label: 'Underweight', tip: 'Focus on strength training and a calorie surplus with enough protein.' }
  if (bmi < 25) return { label: 'Normal weight', tip: 'Great! Maintain with balanced training and nutrition.' }
  if (bmi < 30) return { label: 'Overweight', tip: 'Mix strength training with cardio and a modest calorie deficit.' }
  return { label: 'Obese', tip: 'Start with low-impact cardio and strength work, and consider talking to a doctor.' }
}

export default function BMI() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [result, setResult] = useState(null)

  const calculate = (e) => {
    e.preventDefault()
    const h = parseFloat(height) / 100
    const w = parseFloat(weight)
    if (!h || !w || h <= 0 || w <= 0) {
      setResult({ error: 'Please enter a valid height and weight.' })
      return
    }
    const bmi = w / (h * h)
    setResult({ bmi: bmi.toFixed(1), ...getCategory(bmi) })
  }

  return (
    <>
      <PageHeader title="BMI Calculator" subtitle="Check your Body Mass Index in seconds." />
      <section className="section">
        <div className="container narrow">
          <form className="form" onSubmit={calculate}>
            <label>
              Height (cm)
              <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="e.g. 172" />
            </label>
            <label>
              Weight (kg)
              <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="e.g. 68" />
            </label>
            <button className="btn" type="submit">Calculate BMI</button>
          </form>

          {result && (
            <div className="result">
              {result.error ? (
                <p className="error">{result.error}</p>
              ) : (
                <>
                  <div className="bmi-number">{result.bmi}</div>
                  <h3>{result.label}</h3>
                  <p className="muted">{result.tip}</p>
                </>
              )}
            </div>
          )}
          <p className="muted small">BMI is a general guide only and does not measure body fat or muscle.</p>
        </div>
      </section>
    </>
  )
}
