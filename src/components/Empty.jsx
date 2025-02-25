import { useEffect } from 'react'
import '@/styles/main.scss'
import { useNavigate } from 'react-router-dom'

function Empty() {
  const navigete = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className='empty'>
      <h5 className='empty-text'>Данные еще не добавлены!</h5>
      <div className='empty-btns'>
        <button onClick={() => navigete("/")} className='btn'>Перейти на главную страницу</button>
        <button onClick={() => navigete(-1)} className='btn'>Назад</button>
      </div>
    </section>

  )
}

export default Empty