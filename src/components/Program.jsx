export const Program = ()=>{
  return(
    <section className="program section" id="program">
      <div className="container">
        <div className="section__data">
          <h2 className="section__subtitle">Our Program</h2>
          <div className="section__titles">
            <h1 className="section__title-border">BUILD YOUR</h1>
            <h1 className="section__title">BEST BODY</h1>
          </div>
        </div>
        <div className="program__container grid">
          <article className="program__card">
            <div className="program__shape">
              <img src="img/program1.png" alt="program image" className="program__img"/>
            </div>

            <h3 className="program__title">Flex Muscle</h3>

            <p className="program__description">
              Creating tension that's temporarily making the muscle
              fibers smaller or contracted.
            </p>

            <a href="#" className="program__button">
              <i className="ri-arrow-right-line"></i>
            </a>
          </article>

          <article className="program__card">
            <div className="program__shape">
              <img src="img/program2.png" alt="program image" className="program__img"/>
            </div>

            <h3 className="program__title">Cardio Exercise</h3>

            <p className="program__description">
              Exercise your heart rate up and keeps it
              up for a prolonged period of time.
            </p>

            <a href="#" className="program__button">
              <i className="ri-arrow-right-line"></i>
            </a>
          </article>

          <article className="program__card">
            <div className="program__shape">
              <img src="img/program3.png" alt="program image" className="program__img" />
            </div>

            <h3 className="program__title">Basic Yoga</h3>

            <p className="program__description">
              Diaphragmatic this is the most common breathing
              technique you'll find in yoga.
            </p>

            <a href="#" className="program__button">
              <i className="ri-arrow-right-line"></i>
            </a>
          </article>

          <article className="program__card">
            <div className="program__shape">
              <img src="img/program4.png" alt="program image" className="program__img"/>
            </div>

            <h3 className="program__title">Weight Lifting</h3>

            <p className="program__description">
              Attempts a maximum weight single lift of a
              barbell loaded with weight plates.
            </p>

            <a href="#" className="program__button">
              <i className="ri-arrow-right-line"></i>
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}