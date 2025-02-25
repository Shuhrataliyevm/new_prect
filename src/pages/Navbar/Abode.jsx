import { useEffect } from 'react'
import '@/styles/main.scss'
import { Link } from 'react-router-dom'

function Abode() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='basket'>
      <div className='container'>
        <div className='basket-Links'>
          <Link to='/'>Главная страница</Link>
          <span>&gt;</span>
          <p>Корзина</p>
        </div>
        <div className="basket-empty">
          <img src="/assets/images/basket_no_page.webp" alt="" />
          <p>В корзине пока нет товаров.</p>
          <span>Начните с терминов на главной странице или найдите нужный товар через поиск.</span>
          <Link to='/' className="btn">Основное меню</Link>
        </div>
      </div>
    </section>
  )
}

export default Abode;