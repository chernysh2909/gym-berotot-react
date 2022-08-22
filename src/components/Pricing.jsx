export const Pricing = ()=>{
  return(
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className="section__data">
          <h2 className="section__subtitle">
            Pricing
          </h2>
          <div className="section__titles">
            <h2 className="section__title-border">OUR</h2>
            <h2 className="section__title">SPECIAL PLAN</h2>
          </div>
        </div>

        <div className="pricing__container grid">
          <article className="pricing__card">
            <header className="pricing__header">
              <div className="pricing__shape">
                <img src="img/pricing1.png" alt="pricing image" className="pricing__img"/>
              </div>
              <h1 className="pricing__title">BASIC PACKAGE</h1>
              <h2 className="pricing__number">$120</h2>
            </header>

            <ul className="pricing__list">
              <li className="pricing__item">
                <i className="ri-checkbox-circle-line"></i> 5 Days In A Week
              </li>
              <li className="pricing__item">
                <i className="ri-checkbox-circle-line"></i> 01 Sweatshirt
              </li>
              <li className="pricing__item pricing__item-opacity">
                <i className="ri-checkbox-circle-line"></i> 01 Bottle of Protein
              </li>
              <li className="pricing__item pricing__item-opacity">
                <i className="ri-checkbox-circle-line"></i> Access to Videos
              </li>
              <li className="pricing__item pricing__item-opacity">
                <i className="ri-checkbox-circle-line"></i> Muscle Stretching
              </li>
            </ul>

            <a href="#" className="button button__flex pricing__button">
              Purchase Now <i className="ri-arrow-right-line"></i>
            </a>
          </article>

          <article className="pricing__card pricing__card-active">
            <header className="pricing__header">
              <div className="pricing__shape">
                <img src="img/pricing2.png" alt="pricing image" className="pricing__img"/>
              </div>
              <h1 className="pricing__title">PREMIUM PACKAGE</h1>
              <h2 className="pricing__number">$240</h2>
            </header>

            <ul className="pricing__list">
              <li className="pricing__item">
                <i className="ri-checkbox-circle-line"></i> 5 Days In A Week
              </li>
              <li className="pricing__item">
                <i className="ri-checkbox-circle-line"></i> 01 Sweatshirt
              </li>
              <li className="pricing__item">
                <i className="ri-checkbox-circle-line"></i> 01 Bottle of Protein
              </li>
              <li className="pricing__item pricing__item-opacity">
                <i className="ri-checkbox-circle-line"></i> Access to Videos
              </li>
              <li className="pricing__item pricing__item-opacity">
                <i className="ri-checkbox-circle-line"></i> Muscle Stretching
              </li>
            </ul>

            <a href="#" className="button button__flex pricing__button">
              Purchase Now <i className="ri-arrow-right-line"></i>
            </a>
          </article>

          <article className="pricing__card">
            <header className="pricing__header">
              <div className="pricing__shape">
                <img src="img/pricing3.png" alt="pricing image" className="pricing__img"/>
              </div>
              <h1 className="pricing__title">DIAMOND PACKAGE</h1>
              <h2 className="pricing__number">$420</h2>
            </header>

            <ul className="pricing__list">
              <li className="pricing__item">
                <i className="ri-checkbox-circle-line"></i> 5 Days In A Week
              </li>
              <li className="pricing__item">
                <i className="ri-checkbox-circle-line"></i> 01 Sweatshirt
              </li>
              <li className="pricing__item">
                <i className="ri-checkbox-circle-line"></i> 01 Bottle of Protein
              </li>
              <li className="pricing__item">
                <i className="ri-checkbox-circle-line"></i> Access to Videos
              </li>
              <li className="pricing__item">
                <i className="ri-checkbox-circle-line"></i> Muscle Stretching
              </li>
            </ul>

            <a href="#" className="button button__flex pricing__button">
              Purchase Now <i className="ri-arrow-right-line"></i>
            </a>
          </article>
        </div>

      </div>
    </section>
  )
}