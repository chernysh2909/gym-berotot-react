import React, {useEffect} from "react";
// import {NavItem} from "./NavItem";

export const Header = (props)=>{
  const [header,setHeader] = React.useState(false)
  const [menu, setMenu] = React.useState(false)

  useEffect(()=>{
    const headerScroll = ()=>{
      setHeader(window.scrollY >= 50)
    }
    window.addEventListener('scroll', headerScroll)
    return () => {window.removeEventListener('scroll', headerScroll)}
  },[])


  return (
    <header className={`header ${header ? 'bg-header': ' '}`} id="header" >
      <nav className="nav container">
        <a href="/" className="nav__logo">
          <img src="img/logo-nav.png" alt="" /> BEROTOT
        </a>

        <div className={`nav__menu ${menu ? 'show-menu' : ' '}`} id="nav-menu" >
          <ul className="nav__list">

            {/*<NavItem name='Home'/>*/}
            {/*<NavItem name='Program'/>*/}


            <li className="nav__item">
              <a href="#home" className="nav__link active-link">Home</a>
            </li>

            <li className="nav__item">
              <a href="#program" className="nav__link">Program</a>
            </li>
            <li className="nav__item">
              <a href="#choose" className="nav__link">Chose Us</a>
            </li>
            <li className="nav__item">
              <a href="#pricing" className="nav__link">Pricing</a>
            </li>


            <div className="nav__link">
              <a href="#footer" className="button nav__button">Register Now</a>
            </div>
          </ul>

          <div className="nav__close" id="nav-close" onClick={()=>setMenu(false)}>
            <i className="ri-close-line"></i>
          </div>
        </div>
        {/*// <!-- toggle button -->*/}
        <div className="nav__toggle" id="nav-toggle" onClick={()=>setMenu(true)}>
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  )
}

