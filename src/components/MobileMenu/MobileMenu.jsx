import style from './MobileMenu.module.css';

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={style.mobileMenu}>
      <button className={style.closeBtn} onClick={onClose}>
        ×
      </button>
      <a className={style.mobileLink} href="#numbers" onClick={onClose}>
        Цифры
      </a>
      <a className={style.mobileLink} href="#deals" onClick={onClose}>
        Сделки онлайн
      </a>
      <a className={style.mobileLink} href="#about" onClick={onClose}>
        о компании
      </a>
      <a className={style.mobileLink} href="#start" onClick={onClose}>
        как начать
      </a>
      <a className={style.mobileLink} href="#pricing" onClick={onClose}>
        тарифы
      </a>
      <a className={style.mobileLink} href="#reviews" onClick={onClose}>
        отзывы
      </a>
      <a className={style.mobileLink} href="#faq" onClick={onClose}>
        FAQ
      </a>
      <button className={style.btnLogIn} type="button">
        вход
      </button>
      <button className={style.btnRegister} type="button">
        регистрация
      </button>
    </div>
  );
}
