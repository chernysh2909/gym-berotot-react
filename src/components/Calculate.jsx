export const Calculate = ()=>{
  return(
    <section className="calculate section">
      <div className="calculate__container container grid">
        <div className="calculate__content">
          <div className="section__titles">
            <h1 className="section__title-border">CALCULATE</h1>
            <h1 className="section__title">YOUR BMI</h1>
          </div>

          <p className="calculate__description">
            The body mass index (BMI) calculator calculates
            body mass index from your weight and height.
          </p>

          <form action="" className="calculate__form" id="calculate-form">
            <div className="calculate__box">
              <input type="number" placeholder="Height" className="calculate__input" id="calculate-cm"/>
              <label htmlFor="calculate-cm" className="calculate__label">cm</label>
            </div>
            <div className="calculate__box">
              <input type="number" placeholder="Weight" className="calculate__input" id="calculate-kg"/>
              <label htmlFor="calculate-kg" className="calculate__label">kg</label>
            </div>

            <button type="submit" className="button button__flex">
              Calculate Now <i className="ri-arrow-right-line"></i>
            </button>
          </form>

          <p className="calculate__message" id="calculate-message"></p>
        </div>
        <img src="img/calculate-img.png" alt="calculate image" className="calculate__img"/>
      </div>
    </section>
  )
}