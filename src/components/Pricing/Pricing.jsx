import style from './Pricing.module.css';

export default function Pricing() {
  return (
    <section className={style.pricingSection} id="pricing">
      <div className={style.container}>
        <h2 className={style.title}>тарифы</h2>

        <div className={style.divBtn}>
          <div className={style.divSpot}>СПОТ</div>
          <div className={style.divFutures}>фьючерс</div>
        </div>

        <div className={style.wrapper}>
          <div className={style.firsElem}>
            <h3 className={style.text}>STANDART</h3>
            <ul className={style.list}>
              <li className={style.item}>
                <div className={style.divWrapper}>
                  <svg className={style.icon}>
                    <use href="/sprite.svg#icon-check-mark" />
                  </svg>
                  <p className={style.itemText}>Ручной трейдинг</p>
                </div>
              </li>
              <li className={style.item}>
                <div className={style.divWrapper}>
                  <svg className={style.icon}>
                    <use href="/sprite.svg#icon-check-mark" />
                  </svg>
                  <p className={style.itemText}>
                    Автоматическое или полуавтоматическое копирование сделок
                  </p>
                </div>
              </li>
              <li className={style.item}>
                <div className={style.divWrapper}>
                  <svg className={style.icon}>
                    <use href="/sprite.svg#icon-check-mark" />
                  </svg>
                  <p className={style.itemText}>
                    Личный кабинет со статистикой
                  </p>
                </div>
              </li>
              <li className={style.item}>
                <div className={style.divWrapper}>
                  <svg className={style.icon}>
                    <use href="/sprite.svg#icon-check-mark" />
                  </svg>
                  <p className={style.itemText}>
                    Среднесрочные сделки с уровнями набора портфеля
                  </p>
                </div>
              </li>
            </ul>
            <div className={style.contentFirst}>
              <p className={style.contentTextFirst}>$234</p>
              <p className={style.contentSmallTextFirst}>-35%</p>
              <div className={style.contentDivFirst}>
                <div className={style.itemWrapper}>
                  <p className={style.itemData}>12 месяцев</p>
                  <svg className={style.itemIcon}>
                    <use href="/sprite.svg#icon-down-vector" />
                  </svg>
                </div>
              </div>
            </div>

            <button className={style.btn}>
              <p className={style.hBtn}>Попробовать</p>
              <p className={style.pBtn}>5 дней бесплатно</p>
            </button>
          </div>

          <div className={style.secondElem}>
            <h3 className={style.text}>VIP</h3>
            <ul className={style.list}>
              <li className={style.item}>
                <div className={style.divWrapper}>
                  <svg className={style.icon}>
                    <use href="/sprite.svg#icon-check-mark" />
                  </svg>
                  <p className={style.itemText}>Ручной трейдинг</p>
                </div>
              </li>
              <li className={style.item}>
                <div className={style.divWrapper}>
                  <svg className={style.icon}>
                    <use href="/sprite.svg#icon-check-mark" />
                  </svg>
                  <p className={style.itemText}>
                    Автоматическое или полуавтоматическое копирование сделок
                  </p>
                </div>
              </li>
              <li className={style.item}>
                <div className={style.divWrapper}>
                  <svg className={style.icon}>
                    <use href="/sprite.svg#icon-check-mark" />
                  </svg>
                  <p className={style.itemText}>
                    Личный кабинет со статистикой
                  </p>
                </div>
              </li>
              <li className={style.item}>
                <div className={style.divWrapper}>
                  <svg className={style.icon}>
                    <use href="/sprite.svg#icon-check-mark" />
                  </svg>
                  <p className={style.itemText}>
                    Краткосрочные, среднесрочные и инвест <br /> сделки
                  </p>
                </div>
              </li>
              <li className={style.item}>
                <div className={style.divWrapper}>
                  <svg className={style.icon}>
                    <use href="/sprite.svg#icon-check-mark" />
                  </svg>
                  <p className={style.itemText}> Доступ в Vip чат с командой</p>
                </div>
              </li>
              <li className={style.item}>
                <div className={style.divWrapper}>
                  <svg className={style.icon}>
                    <use href="/sprite.svg#icon-check-mark" />
                  </svg>
                  <p className={style.itemText}>
                    Наш авторский курс по трейдингу
                  </p>
                </div>
              </li>
            </ul>

            <div className={style.contentSecond}>
              <p className={style.contentTextSecond}>$585</p>
              <p className={style.contentSmallTextSecond}>-35%</p>
              <div className={style.contentDivSecond}>
                <div className={style.itemWrapper}>
                  <p className={style.itemData}>12 месяцев</p>
                  <svg className={style.itemIcon}>
                    <use href="/sprite.svg#icon-down-vector" />
                  </svg>
                </div>
              </div>
            </div>

            <button className={style.btn}>
              <p className={style.hBtn}>Попробовать</p>
              <p className={style.pBtn}>5 дней бесплатно</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
