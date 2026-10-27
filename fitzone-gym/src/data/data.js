import { images } from './images.js'

export const stats = [
  { value: '2,500+', label: 'Active Members' },
  { value: '40+', label: 'Weekly Classes' },
  { value: '15', label: 'Expert Trainers' },
  { value: '12', label: 'Years of Experience' },
]

export const programs = [
  {
    id: 'strength',
    title: 'Strength Training',
    img: images.strength,
    level: 'All levels',
    duration: '60 min',
    short: 'Build muscle and raw power with progressive barbell and dumbbell training.',
    details: [
      'Compound lifts: squat, deadlift, bench, overhead press',
      'Progressive overload plans written for you',
      'Form coaching and spotting on every session',
    ],
  },
  {
    id: 'cardio',
    title: 'Cardio & HIIT',
    img: images.cardio,
    level: 'Beginner - Intermediate',
    duration: '45 min',
    short: 'Burn fat and boost stamina with high-intensity interval circuits.',
    details: [
      'Treadmill, rower, bike and bodyweight circuits',
      'Heart-rate zone tracking',
      'Great for fat loss and endurance',
    ],
  },
  {
    id: 'yoga',
    title: 'Yoga & Mobility',
    img: images.yoga,
    level: 'All levels',
    duration: '50 min',
    short: 'Improve flexibility, posture and recovery while calming the mind.',
    details: [
      'Vinyasa, hatha and restorative flows',
      'Mobility work for lifters and runners',
      'Breathing and stress-relief techniques',
    ],
  },
  {
    id: 'crossfit',
    title: 'CrossFit',
    img: images.crossfit,
    level: 'Intermediate - Advanced',
    duration: '60 min',
    short: 'Functional movements, Olympic lifts and daily workouts of the day.',
    details: [
      'Daily WOD with scaling options',
      'Olympic lifting and gymnastics skills',
      'Small coached groups and a strong community',
    ],
  },
]

export const trainers = [
  {
    name: 'Arjun Reddy',
    role: 'Head Strength Coach',
    img: images.trainer1,
    bio: '10 years coaching powerlifting and bodybuilding. Specialises in muscle gain and injury-safe lifting.',
  },
  {
    name: 'Priya Sharma',
    role: 'Yoga & Mobility Coach',
    img: images.trainer2,
    bio: 'Certified yoga instructor focused on flexibility, posture correction and recovery.',
  },
  {
    name: 'Rahul Verma',
    role: 'CrossFit & HIIT Coach',
    img: images.trainer3,
    bio: 'Former state-level athlete who designs high-energy workouts for fat loss and conditioning.',
  },
]

export const plans = [
  {
    name: 'Basic',
    price: 999,
    features: ['Gym floor access', 'Locker room', '2 group classes / month', 'Free fitness assessment'],
  },
  {
    name: 'Pro',
    price: 1999,
    popular: true,
    features: ['Everything in Basic', 'Unlimited group classes', 'Custom workout plan', 'Diet guidance', 'Sauna access'],
  },
  {
    name: 'Elite',
    price: 3499,
    features: ['Everything in Pro', '8 personal training sessions', 'Monthly body composition scan', 'Priority booking', 'Free supplements guide'],
  },
]

export const testimonials = [
  { name: 'Sneha K.', text: 'Lost 9 kg in four months. The trainers genuinely care about your progress.' },
  { name: 'Vikram P.', text: 'Cleanest gym in the city with great equipment. My squat went up 40 kg.' },
  { name: 'Anjali M.', text: 'The yoga and mobility classes fixed my back pain. Highly recommended.' },
]

export const schedule = [
  { day: 'Mon - Fri', time: '5:00 AM - 10:30 PM' },
  { day: 'Saturday', time: '6:00 AM - 9:00 PM' },
  { day: 'Sunday', time: '7:00 AM - 1:00 PM' },
]
