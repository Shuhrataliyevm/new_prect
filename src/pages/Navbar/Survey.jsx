import  { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import "@/styles/main.scss";
import { Link } from "react-router-dom";

function Survey() {
  const [comparison, setComparison] = useState([]);

  useEffect(() => {
    const compareProducts = JSON.parse(localStorage.getItem("comparison")) || [];
    setComparison(compareProducts);
  }, []);

  const removeComparison = (id) => {
    const updatedComparison = comparison.filter((product) => product.id !== id);
    setComparison(updatedComparison);
    localStorage.setItem("comparison", JSON.stringify(updatedComparison));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="comparison">
      <div className="container">
      <div className='comparison-Links'>
          <Link to='/'> Главная страница</Link>
          <span>&gt;</span>
          <p>Сравнение</p>
        </div>
      {comparison.length === 0 ? (
        <div className="comparison-empty">
          <img src="/assets/images/campare_not_page.webp" alt="" />
          <p>В данный момент у вас нет товаров.</p>
          <Link to='/' className="btn">Добавить товар</Link>
        </div>
      ) : (
        <div className="comparison-content">
          <div className="comparison-grid">
          {comparison.map((product) => (
            <ProductCard key={product.id} product={product} removeProduct={removeComparison} />
          ))}
        </div>
        <Link to='/' className="btn">Добавить товар</Link>
        </div>
      )}
      </div>
    </section>
  );
}

export default Survey;
