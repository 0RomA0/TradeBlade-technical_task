import style from './Deals.module.css';

export default function Deals() {
  return (
    <section className={style.dealsSection} id="deals">
      <div className={style.container}>
        <div className={style.content}>
          <h2 className={style.title}>Прошедшие сделки</h2>
          <p className={style.text}>
            <svg className={style.iconElips}>
              <use href="/sprite.svg#icon-Ellipse" />
            </svg>
            Онлайн
          </p>
        </div>
        <ul className={style.list}>
          <li className={style.item}>
            <div className={style.card}>
              <div className={style.itemContainer}>
                <div className={style.itemContent1}>
                  <p className={style.itemText}>NEAR/USDT</p>
                  <p className={style.itemInfo}>
                    SPOT · <span className={style.span}>1 мин. назад</span>
                  </p>
                </div>
                <div className={style.itemContent2}>
                  <p className={style.itemProfit}>Прибыль</p>
                  <p className={style.itemNumber}>
                    58.6206%
                    <svg className={style.iconVector}>
                      <use href="/sprite.svg#icon-Vector" />
                    </svg>
                  </p>
                </div>

                <div className={style.itemContent3}>
                  <p className={style.itemTarget}>Цель 4</p>
                  <p className={style.itemData}>Дата входа 06.10.2022</p>
                </div>
              </div>
              <svg className={style.icon}>
                <use href="/sprite.svg#icon-Group" />
              </svg>
            </div>
          </li>
          <li className={style.item}>
            <div className={style.card}>
              <svg className={style.icon}>
                <use href="/sprite.svg#icon-Group" />
              </svg>
            </div>
          </li>
          <li className={style.item}>
            <div className={style.card}>
              <svg className={style.icon}>
                <use href="/sprite.svg#icon-Group" />
              </svg>
            </div>
          </li>
          <li className={style.item}>
            <div className={style.card}>
              <svg className={style.icon}>
                <use href="/sprite.svg#icon-Group" />
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
