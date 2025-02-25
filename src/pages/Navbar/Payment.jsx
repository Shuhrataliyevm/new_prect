import  { useEffect } from 'react'
import '@/styles/main.scss'
import { Link } from 'react-router-dom'

function Payment() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='payment'>
      <div className='container'>
        <div className='payment-Links'>
          <Link to='/'>Главная страница</Link>
          <span>&gt;</span>
          <p>Оплата</p>
        </div>
        <div className='payment-content'>
            <div className='payment-content-registration'>
              <h2>Оплата</h2>
              <b>Введите ваш номер заказа или личный ID без ошибок.</b>
              <input type="text" placeholder='Namuna: A777 yoki B999 yoki M333' maxLength={10} />
              <div className='text'>
                <p>B — для заказа</p>
                <p>A — для аккаунта</p>
                <p>M — для погашения рассрочки</p>
              </div>
              <button className='payment-btn'>Подтверждение</button>
            </div>
            <div className='payment-content-img'>
                <img src="/assets/images/order-pay.svg" alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Payment