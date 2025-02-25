
import '@/styles/main.scss'
import Product from './Product'



// eslint-disable-next-line react/prop-types
function Home({ search  }) {
  
  return (
    <section className='home'>
      <div className='container'>
        <Product search={search}/>
      </div>
    </section>
  )
}

export default Home