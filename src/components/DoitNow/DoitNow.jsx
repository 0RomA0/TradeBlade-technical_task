import style from './DoitNow.module.css';

export default function DoitNow() {
  const handleSubmit = () => {};
  return (
    <section className={style.doitNowSection}>
      <div className={style.wrapper}>
        <div className={style.container}>
          <p className={style.text}>
            Начните прямо сейчас с бесплатным <br /> 5-и дневным пробным
            периодом!
          </p>

          <div className={style.infoWrapper}>
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
                  Зарегистрироваться
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
