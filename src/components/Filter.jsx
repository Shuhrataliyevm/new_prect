import { useState } from "react";
import "@/styles/main.scss";

// eslint-disable-next-line react/prop-types
function Filter({ onFilterChange }) {
  const [filters, setFilters] = useState({
    name: "all",
    price: "all",
    rating: "all",
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const resetFilters = { name: "all", price: "all", rating: "all" };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="filter">
      <button className="filter-toggle" onClick={() => setIsOpen(!isOpen)}>
        Фильтр
      </button>
      {isOpen && (
        <div className="filter-dropdown">
          <button className="filter-close" onClick={() => setIsOpen(false)}>✖</button>
          <div className="filter-item">
            <p>По названию</p>
            <select name="name" value={filters.name} onChange={handleChange}>
              <option value="all">Все</option>
              <option value="a-z">От A до Z</option>
              <option value="z-a">От Z до A</option>
            </select>
          </div>
          <div className="filter-item">
            <p>По цене</p>
            <select name="price" value={filters.price} onChange={handleChange}>
              <option value="all">Все</option>
              <option value="low-high">Самый дешевый</option>
              <option value="high-low">Самый дорогой</option>
            </select>
          </div>
          <div className="filter-item">
            <p>По рейтингу</p>
            <select name="rating" value={filters.rating} onChange={handleChange}>
              <option value="all">Все</option>
              <option value="asc">По возрастанию</option>
              <option value="desc">По убыванию</option>
            </select>
          </div>
          <button type="button" onClick={clearFilters} className="filter-clear">
            Очистить
          </button>
        </div>
      )}
    </div>
  );
}

export default Filter;