import React, {useEffect} from "react";
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Logos} from "./components/Logos";
import {Program} from "./components/Program";
import {Choose} from "./components/Choose";
import {Calculate} from "./components/Calculate";
import {Footer} from "./components/Footer";
import {Pricing} from "./components/Pricing";

function App() {

  const [scrollTop, setScropllTop] = React.useState(false)

  useEffect(()=>{
    const scrollUp = ()=>{
      setScropllTop(window.scrollY >= 350)
    }
    window.addEventListener('scroll', scrollUp)
    return () => {window.removeEventListener('scroll', scrollUp)}
  },[])

  return (
    <>
      <Header/>
      <main className="main">
        <Home/>
        <Logos/>
        <Program/>
        <Choose/>
        <Pricing/>
        <Calculate/>
      </main>
      <Footer/>

      <a href="#" className={`scrollup ${scrollTop? 'show-scroll' : ''}`} id="scroll-up">
        <i className="ri-arrow-up-line"></i>
      </a>
    </>
  );
}

export default App;
