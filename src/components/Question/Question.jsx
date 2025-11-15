import { useState } from 'react';
import style from './Question.module.css';

export default function Question() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (i) => {
    if (openIndex === i) {
      setOpenIndex(null);
    } else {
      setOpenIndex(i);
    }
  };

  return (
    <section className={style.questionSection} id="faq">
      <div className={style.wrapper}>
        <div className={style.container}>
          <h2 className={style.title}>часто задаваемые вопросы</h2>
          <div className={style.questionWrapper}>
            <div
              className={
                openIndex === 0
                  ? style.wrapperContentOpen
                  : style.wrapperContent
              }
            >
              <div className={style.divWrapper} onClick={() => handleClick(0)}>
                <h3
                  className={
                    openIndex === 0 ? style.wrappeTitleOpen : style.wrapperTitle
                  }
                >
                  Что такое TradeBlade
                </h3>
                <svg className={style.vectorIcon}>
                  <use
                    href={`/sprite.svg#${
                      openIndex === 0 ? 'icon-up-vector' : 'icon-down-vector'
                    }`}
                  />
                </svg>
              </div>

              {openIndex === 0 && (
                <p className={style.text}>
                  Мы опытная команда, для которой трейдинг - профессия.
                  TradeBlade является авторизованным официальным брокером биржи
                  Binance.
                  <br />
                  <br />
                  Он представляет пользователям множество преимуществ, таких как
                  более високая скорость синхронизации API и возможность создать
                  учетную запись Binance через платформу TradeBlade всего в 1
                  клик.
                </p>
              )}
            </div>
            <div
              className={
                openIndex === 1
                  ? style.wrapperContentOpen
                  : style.wrapperContent
              }
            >
              <div className={style.divWrapper} onClick={() => handleClick(1)}>
                <h3
                  className={
                    openIndex === 1 ? style.wrappeTitleOpen : style.wrapperTitle
                  }
                >
                  Что TradeBlade предлагает инвесторам
                </h3>
                <svg className={style.vectorIcon}>
                  <use
                    href={`/sprite.svg#${
                      openIndex === 1 ? 'icon-up-vector' : 'icon-down-vector'
                    }`}
                  />
                </svg>
              </div>

              {openIndex === 1 && (
                <p className={style.text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto, distinctio. Assumenda explicabo cum sunt cumque eos
                  error consectetur illo placeat asperiores adipisci, a officia
                  est, similique molestias pariatur earum veritatis?
                </p>
              )}
            </div>
            <div
              className={
                openIndex === 2
                  ? style.wrapperContentOpen
                  : style.wrapperContent
              }
            >
              <div className={style.divWrapper} onClick={() => handleClick(2)}>
                <h3
                  className={
                    openIndex === 2 ? style.wrappeTitleOpen : style.wrapperTitle
                  }
                >
                  Должен ли я перевести свои средства на TradeBlade
                </h3>
                <svg className={style.vectorIcon}>
                  <use
                    href={`/sprite.svg#${
                      openIndex === 2 ? 'icon-up-vector' : 'icon-down-vector'
                    }`}
                  />
                </svg>
              </div>

              {openIndex === 2 && (
                <p className={style.text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  praesentium exercitationem accusantium illum quos animi! Rem
                  dolor, dolore doloremque inventore explicabo quod, debitis
                  repellendus quis, hic quaerat sunt sint tempore!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
