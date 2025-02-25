import  { useEffect, useState } from 'react'
import '@/styles/main.scss'
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

function Tracking() {
  const [recaptchaValue, setRecaptchaValue] = useState(null);  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='tracking'>
      <div className='container'>
        <div className='tracking-Links'>
          <Link to='/'>Главная страница</Link>
          <span>&gt;</span>
          <p>Статус заказа</p>
        </div>
        <div className='tracking-content'>
          <div className='tracking-content-registration'>
            <h2>Статус заказа</h2>
            <b>Для просмотра заказа заполните необходимые поля. Номер заказа был отправлен вам в SMS-сообщении.</b>
            <input type="text" placeholder='BUYURMA RAQAMI' />
            <label htmlFor="tel">
              <p>Номер телефона, указанный при оформлении заказа<span>*</span></p>
              <input type="tel" name="" id="tel" />
            </label>
            <div className='capcha'>
              <ReCAPTCHA
                sitekey="6Le4qNkqAAAAADlnJGrpsNdMJpY5Q18947NNn86I" 
                onChange={handleRecaptchaChange}
              />
            </div>
            <button className='tracking-btn' disabled={!recaptchaValue}>Kirish</button>
          </div>
          <div className='tracking-content-img'>
            <img src="/assets/images/tracking.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tracking;