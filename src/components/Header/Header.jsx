import style from './Header.module.css';

export default function Header() {
  return (
    <>
      <header className={style.header}>
        <div className={style.headerContainer}>
          <svg className={style.logoIcon}>
            <use href="/sprite.svg#icon-logo" />
          </svg>
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
            <button className={style.btnLogIn} type="text">
              вход
            </button>
            <button className={style.btnRegister} type="text">
              регистрация
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
