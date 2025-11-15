import style from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={style.footerSection}>
      <div className={style.container}>
        <div className={style.firstElem}>
          <p className={style.text}>Быстрая навигация</p>

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
        </div>
        <div className={style.secondElem}>
          <div className={style.stick}></div>
        </div>
        <div className={style.thirdElem}>
          <svg className={style.logoIcon}>
            <use href="/sprite.svg#icon-logo" />
          </svg>
          <p className={style.footerText}>
            © 2022 TradeBlade. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
