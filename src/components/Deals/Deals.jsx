import style from './Deals.module.css';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

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
        <SimpleBar
          autoHide={false}
          forceVisible="x"
          className={style.scrollWrap}
        >
          <ul className={style.list}>
            <li className={style.item}>
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
            </li>
            <li className={style.item}>
              <div className={style.itemContainer}>
                <div className={style.itemContent1}>
                  <p className={style.itemText}>BTC/USDT</p>
                  <p className={style.itemInfo}>
                    SPOT · <span className={style.span}>1 мин. назад</span>
                  </p>
                </div>
                <div className={style.itemContent2}>
                  <p className={style.itemProfit}>Прибыль</p>
                  <p className={style.itemNumber}>
                    6.02%
                    <svg className={style.iconVector}>
                      <use href="/sprite.svg#icon-Vector" />
                    </svg>
                  </p>
                </div>

                <div className={style.itemContent3}>
                  <p className={style.itemTarget}>Цель 3</p>
                  <p className={style.itemData}>Дата входа 06.10.2022</p>
                </div>
              </div>
              <svg className={style.icon}>
                <use href="/sprite.svg#icon-Group" />
              </svg>
            </li>
            <li className={style.item}>
              <div className={style.itemContainer}>
                <div className={style.itemContent1}>
                  <p className={style.itemText}>ETH/USDT</p>
                  <p className={style.itemInfo}>
                    SPOT · <span className={style.span}>1 мин. назад</span>
                  </p>
                </div>
                <div className={style.itemContent2}>
                  <p className={style.itemProfit}>Прибыль</p>
                  <p className={style.itemNumber}>
                    16.3%
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
            </li>
            <li className={style.item}>
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
                    0.963%
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
            </li>

            <li className={style.item}>
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
            </li>
            <li className={style.item}>
              <div className={style.itemContainer}>
                <div className={style.itemContent1}>
                  <p className={style.itemText}>BTC/USDT</p>
                  <p className={style.itemInfo}>
                    SPOT · <span className={style.span}>1 мин. назад</span>
                  </p>
                </div>
                <div className={style.itemContent2}>
                  <p className={style.itemProfit}>Прибыль</p>
                  <p className={style.itemNumber}>
                    6.02%
                    <svg className={style.iconVector}>
                      <use href="/sprite.svg#icon-Vector" />
                    </svg>
                  </p>
                </div>

                <div className={style.itemContent3}>
                  <p className={style.itemTarget}>Цель 3</p>
                  <p className={style.itemData}>Дата входа 06.10.2022</p>
                </div>
              </div>
              <svg className={style.icon}>
                <use href="/sprite.svg#icon-Group" />
              </svg>
            </li>
            <li className={style.item}>
              <div className={style.itemContainer}>
                <div className={style.itemContent1}>
                  <p className={style.itemText}>ETH/USDT</p>
                  <p className={style.itemInfo}>
                    SPOT · <span className={style.span}>1 мин. назад</span>
                  </p>
                </div>
                <div className={style.itemContent2}>
                  <p className={style.itemProfit}>Прибыль</p>
                  <p className={style.itemNumber}>
                    16.3%
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
            </li>
            <li className={style.item}>
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
                    0.963%
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
            </li>
          </ul>
        </SimpleBar>
      </div>
    </section>
  );
}
