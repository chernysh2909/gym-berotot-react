import React from "react";

export const NavItem = (props)=>{

  const [activeLink, setActiveLink] = React.useState(false)

  return(
    <li className="nav__item" onClick={()=>setActiveLink(true)} >
      <a href="#home" className={`active-link ${activeLink ? 'active-link': '' }`} >{props.name}</a>
    </li>
  )
}