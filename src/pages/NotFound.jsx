import 'react'
import '@/styles/main.scss'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='notfound'>
      <div className="container">
        <div className="notfound-content">
          <img src="/assets/images/img-error.svg" alt="" />
          <h1>Страница не найдена!</h1>
          <p>Не беспокойтесь и продолжайте покупки.</p>
          <Link to="/">Главная страница</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound