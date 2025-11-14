import style from './Hero.module.css';

export default function Hero() {
  const handleSubmit = () => {};

  return (
    <section className={style.heroSection}>
      <div className={style.content}>
        <h1 className={style.title}>
          моментально Копируй сделки профи трейдеров
        </h1>
        <p className={style.text}>
          Начни копировать сделки с успешной командой профессиональных трейдеров
          в автоматическом режиме.
        </p>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.inputWrapper}>
            <input
              className={style.input}
              name="email"
              type="email"
              placeholder="ВАШ E-MAIL"
              required
              autoComplete="off"
            />
            <button className={style.btn} type="submit">
              НАЧАТЬ
            </button>
          </div>

          <p className={style.formText}>5 дней бесплатного пользования</p>
        </form>
      </div>

      <img
        className={style.imgage}
        srcSet="../../../image 1x-min.png, ../../../image 2x-min.png"
        src="../../../image 1x-min.png"
        alt="img"
      />
    </section>
  );
}
