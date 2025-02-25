import { useState, useEffect } from "react";
import "@/styles/main.scss";
import "./Carousel.scss";

// eslint-disable-next-line react/prop-types
const Carousel = ({ apiUrl }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((err) => console.error("Error fetching data:", err));
    }, [apiUrl]);

    return (
        <div className="carousel-container">
            <div className="carousel">
                {items.map((item, index) => (
                    <div key={index} className="carousel-item">
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

const DualCarousel = () => {
    return (
        <div className="dual-carousel">
            <Carousel apiUrl="https://api.example.com/products" />
            <Carousel apiUrl="https://api.example.com/banners" />
        </div>
    );
};

export default DualCarousel;