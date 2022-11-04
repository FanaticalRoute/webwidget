import css from '../styles/header.module.css'

function Header() {
  return (
    <div className={css.navbar}>
      <h1 className={css.logo}>webwidget</h1>
      <div className={css.buttons}>
      <button className={css.login}>Login</button>
      <button className={css.register}>Register</button>
      </div>
    </div>
  )
}

export default Header