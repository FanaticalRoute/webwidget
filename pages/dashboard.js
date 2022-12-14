import Image from 'next/image'
import css from '../styles/dashboard.module.css'
import Header from '../components/Header'
import Time from '../components/Time'
import Calendar from '../components/Calendar'
import Note from '../components/Note'

export default function Dashboard() {
  return (
    <div className={css.container}>
      <Header />
      <div className={css.subcontainer}>
        <Time />
        <Calendar />
        <Note />
      </div>
    </div>
    
  )
}
