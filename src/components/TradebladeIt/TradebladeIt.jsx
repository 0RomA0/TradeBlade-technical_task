import style from './TradebladeIt.module.css';

export default function TradebladeIt() {
  return (
    <section className={style.tradebladeItSection}>
      <div className={style.container}>
        <h2 className={style.title}>tradeblade это</h2>

        <div className={style.contentContainer}>
          <div className={style.content}>
            <svg className={style.tradebladeItIcon}>
              <use href="/sprite.svg#icon-rectangle" />
            </svg>
            <div className={style.wrapper}>
              <h3 className={style.contentTitle}>Копи-трейдинг 24/7</h3>
              <p className={style.text}>
                Copy-Trading позволяет следить за сделками команды и получать
                прибыль 24/7 без каких-либо усилий или проблем для вас.
              </p>
            </div>
          </div>
          <div className={style.content}>
            <svg className={style.tradebladeItIcon}>
              <use href="/sprite.svg#icon-tv" />
            </svg>
            <div className={style.wrapper}>
              <h3 className={style.contentTitle}>
                Торговля спотовыми и фьючерсными сделками
              </h3>
              <p className={style.text}>
                Платформа для копи-трейдинга поддерживает торговлю как
                спотовыми, так и фьючерсными сделками на Binance.
              </p>
            </div>
          </div>
          <div className={style.content}>
            <svg className={style.tradebladeItIcon}>
              <use href="/sprite.svg#icon-wallet" />
            </svg>
            <div className={style.wrapper}>
              <h3 className={style.contentTitle}>
                Высокая прибыль каждий день
              </h3>
              <p className={style.text}>
                Каждая сделка показывает хорошие результаты на рынках за счет
                хорошего денежного и риск менеджмента.
              </p>
            </div>
          </div>
          <div className={style.content}>
            <svg className={style.tradebladeItIcon}>
              <use href="/sprite.svg#icon-btn" />
            </svg>
            <div className={style.wrapper}>
              <h3 className={style.contentTitle}>
                Собственный курс по трейдингу
              </h3>
              <p className={style.text}>
                Мы хотим менять комьюнити, улучшать его. В личном кабинете на
                сайте вы найдете наш собственный курс по криптовалютам, который
                поможет увереннее понимать наши сигналы и разрабатывать свои.
              </p>
            </div>
          </div>
          <div className={style.content}>
            <svg className={style.tradebladeItIcon}>
              <use href="/sprite.svg#icon-circle" />
            </svg>
            <div className={style.wrapper}>
              <h3 className={style.contentTitle}>Сильное окружение</h3>
              <p className={style.text}>
                Ты попадаешь в сильное крипто окружение, ведь развиваться легче
                когда нас много. В чате присутствуют люди из нашей команды,
                которые общаються со всеми, помагают и подсказывают.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
