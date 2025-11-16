import style from './AboutCompany.module.css';

export default function AboutCompany() {
  const handleSubmit = () => {};
  return (
    <section className={style.aboutSection} id="about">
      <div className={style.cutElement}></div>

      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.textContainer}>
            <h2 className={style.title}>О компании</h2>
            <p className={style.text}>
              Мы опытная команда, для которой трейдинг - профессия. TradeBlade
              является авторизованным официальным брокером биржи Binance.
              <br />
              <br />
              Он представляет пользователям множество преимуществ, таких как
              более високая скорость синхронизации API и возможность создать
              учетную запись Binance через платформу TradeBlade всего в 1 клик.
            </p>
          </div>

          <div className={style.infoWrapper}>
            <p className={style.textForm}>
              Попробуйте сейчас и получите 5 дней бесплатного пользования
            </p>
            <form className={style.form} onSubmit={handleSubmit}>
              <div className={style.inputWrapper}>
                <div className={style.inputContainer}>
                  <input
                    className={style.input}
                    name="email"
                    type="email"
                    placeholder="ВАШ E-MAIL"
                    required
                    autoComplete="off"
                  />
                </div>

                <button className={style.btn} type="submit">
                  попробовать
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
