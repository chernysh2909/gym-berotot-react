export const Home = (props)=>{
  return(
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <h2 className="home__subtitle">
            MAKE YOUR
          </h2>
          <h1 className="home__title">BODY SHAPE</h1>
          <p className="home__description">In here we will help you to shape and build your ideal body and live your
            life to the fullest.</p>
          <a href="#" className="button button__flex">Get started <i className="ri-arrow-right-line"></i></a>
        </div>
        <div className="home__images">
          <img src="img/home-img.png" alt="home images" className="home__img"/>
          <div className="home__triangle home__triangle-3"></div>
          <div className="home__triangle home__triangle-2"></div>
          <div className="home__triangle home__triangle-1"></div>
        </div>
      </div>
    </section>
  )
}