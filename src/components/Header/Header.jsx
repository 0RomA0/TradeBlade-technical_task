import { useState } from 'react';
import style from './Header.module.css';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
      <header className={style.header}>
        {/* Лого завжди */}
        <svg className={style.logoIcon}>
          <use href="/sprite.svg#icon-logo" />
        </svg>

        {/* Десктоп меню */}
        <div className={style.headerContainer}>
          <div className={style.linksContainer}>
            <a className={style.link} href="#numbers">
              Цифры
            </a>
            <a className={style.link} href="#deals">
              Сделки онлайн
            </a>
            <a className={style.link} href="#about">
              о компании
            </a>
            <a className={style.link} href="#start">
              как начать
            </a>
            <a className={style.link} href="#pricing">
              тарифы
            </a>
            <a className={style.link} href="#reviews">
              отзывы
            </a>
            <a className={style.link} href="#faq">
              FAQ
            </a>
          </div>
          <div className={style.btnContainer}>
            <button className={style.btnLogIn} type="button">
              вход
            </button>
            <button className={style.btnRegister} type="button">
              регистрация
            </button>
          </div>
        </div>

        {/* Мобільний бургер */}
        <button className={style.burger} onClick={toggleMenu}>
          <svg className={style.iconBurger} width="24" height="24">
            <use href="/sprite.svg#icon-burger" />
          </svg>
        </button>

        {/* Мобільне меню */}
        <MobileMenu isOpen={menuOpen} onClose={toggleMenu} />
      </header>
    </>
  );
}
