import Image from 'next/image'
import css from '../styles/Home.module.css'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className={css.container}>
      <Header />
      <main>
        <div className={css.landing}>
          <h1 className={css.titlelanding}>The new tool for productivity</h1>
          <button className={css.buttonlanding}>Join us 😁</button>
        </div>
      </main>
    </div>
    
  )
}
