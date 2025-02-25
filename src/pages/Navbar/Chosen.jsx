import  { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import "@/styles/main.scss";
import { Link } from "react-router-dom";

function Chosen
() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = () => {
      const favoriteProducts = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(favoriteProducts);
    };

    loadFavorites();

    window.addEventListener("storage", loadFavorites);
    return () => window.removeEventListener("storage", loadFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((product) => product.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    window.dispatchEvent(new Event("storage"));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header favoriteCount={favorites.length} />

      <section className="favorite">
        <div className="container">
          <div className='favorite-Links'>
            <Link to='/'>Главная страница</Link>
            <span>&gt;</span>
            <p>Избранное</p>
          </div>
          {favorites.length === 0 ? (
            <div className="favorite-empty">
              <img src="/assets/images/heart-bubble.svg" alt="" />
              <p>Избранных товаров нет.</p>
              <span>Добавьте с помощью значка ❤️ на продукте.</span>
              <Link to='/' className="btn">Добавить товар</Link>
            </div>
          ) : (
            <div className="favorite-content">
              <div className="favorite-grid">
                {favorites.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    removeProduct={() => removeFavorite(product.id)}
                  />
                ))}
              </div>
              <Link to='/' className="btn">Добавить товар</Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Chosen
;
