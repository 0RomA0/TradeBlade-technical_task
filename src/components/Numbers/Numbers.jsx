import style from './Numbers.module.css';

export default function Numbers() {
  return (
    <section className={style.numbersSection} id="numbers">
      <div className={style.cutElement}></div>

      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.content}>
            <div className={style.container1}>
              <h2 className={style.title}>Цифры</h2>
              <p className={style.textData}>Cентябрь 2022</p>
            </div>
            <div className={style.container2}>
              <p className={style.text}>Торговой прибыли</p>
              <p className={style.number}>2756%</p>
            </div>
            <div className={style.container3}>
              <p className={style.text}>фьючерсных и спотовых сделок</p>
              <p className={style.number}>67</p>
            </div>
            <div className={style.container4}>
              <p className={style.text}>прибыль подписчиков</p>
              <p className={style.number}>375000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
