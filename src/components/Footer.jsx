import React from "react";
import "@/styles/main.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faRss,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTelegram,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="links">
            <b>Информация</b>
            <Link>Часто задаваемые вопросы</Link>
            <Link>Новости</Link>
            <Link>Блог</Link>
            <Link>Наши бренды</Link>
            <Link>Карьера в Asaxiy</Link>
            <Link>Оферта рассрочки</Link>
            <Link>Публичная оферта</Link>
            <Link>О нас</Link>
            <Link>Карта сайта</Link>
          </div>
          <div className="links">
            <b>Для связи</b>
            <a href="tel:+998712000105">
              <FontAwesomeIcon icon={faPhone} />
              +998 71 200 01 05
            </a>
            <a href="mailto:info@asaxiy.uz">
              <FontAwesomeIcon icon={faEnvelope} />
              info@asaxiy.uz
            </a>
            <a href="https://t.me/asaxiybot" target="_blank">
              <FontAwesomeIcon icon={faTelegram} />
              Telegram bot
            </a>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/41%C2%B017'03.4%22N+69%C2%B013'28.3%22E/@41.284272,69.22453,17z/data=!3m1!4b1!4m4!3m3!8m2!3d41.284272!4d69.22453?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
            >
              <FontAwesomeIcon icon={faLocationDot} />
              Chilonzor ko'chasi, 45/2, Toshkent
            </a>
            <b className="sodiqlik">Программы лояльности</b>
            <Link>Статус «El-yurt ishonchi»</Link>
            <Link>«Asaxiy Plus»</Link>
            <Link>Оферта «Asaxiy Plus»</Link>
          </div>
          <div className="links">
            <b>Доставка и магазины</b>
            <a
              href="https://www.google.com/maps/d/u/0/viewer?mid=1R5cL_79kiW9_CaeJVvCfswbKeU-hetc&ll=40.55956848590127%2C66.87988510000002&z=7"
              target="_blank"
              rel="noopener noreferrer"
              className="a-btn"
            >
              <img src="/assets/icons/store.svg" alt="" />
              Виды оплаты
              <img src="/assets/icons/iconleft.svg" alt="" />
            </a>
            <a
              href="https://asaxiy.uz/uz/page/delivery-points"
              target="_blank"
              rel="noopener noreferrer"
              className="a-btn"
            >
              <img src="/assets/icons/delivery-point.svg" alt="" />
              Пункты самовывоза
              <img src="/assets/icons/iconleft.svg" alt="" />
            </a>
            <a
              href="http://asaxiy.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="a-btn"
            >
              <img src="/assets/icons/delivery-footer.svg" alt="" />
              Доставка
              <img src="/assets/icons/iconleft.svg" alt="" />
            </a>
          </div>
          <div className="links">
            <b>Виды оплаты</b>
            <div className="payments">
              <span>
                <img src="/assets/images/uzum.svg" alt="" />
              </span>
              <span>
                <img src="/assets/images/payme.svg" alt="" />
              </span>
            </div>
            <div className="payments">
              <span>
                <img src="/assets/images/visa.svg" alt="" />
              </span>
              <span>
                <img src="/assets/images/mastercard.svg" alt="" />
              </span>
            </div>
            <div className="payments">
              <span>
                <img src="/assets/images/humo.svg" alt="" />
              </span>
              <span>
                <img src="/assets/images/uzcard.svg" alt="" />
              </span>
            </div>
            <b className="sodiqlik">Мы в социальных сетях</b>
            <div className="icons">
              <a href="https://www.facebook.com/asaxiyshop/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "25px" }} />
              </a>
              <a href="https://t.me/asaxiybot" target="_blank">
                <FontAwesomeIcon icon={faTelegram} style={{ fontSize: "25px" }} />
              </a>
              <a href="https://www.instagram.com/asaxiyshop/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "25px" }} />
              </a>
              <a
                href="https://www.youtube.com/channel/UC0UaPm4AlSkAU7U88H8jhhQ"
                target="_blank"
              >
                <FontAwesomeIcon icon={faYoutube} style={{ fontSize: "25px" }} />
              </a>
              <a href="https://asaxiy.uz/rss" target="_blank">
                <FontAwesomeIcon icon={faRss} style={{ fontSize: "25px" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
        2015 - 2025 Интернет-магазин asaxiy.uz: Бытовая техника и др. Доставка товаров осуществляется во все регионы. Все права защищены.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
