import "../scss/components/nav.scss"
import { useState, useEffect } from "react";
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    return (
      <nav className={scrolled ? "Scrolled" : ""}>
        <div id="logo" >
          <img src="../../../public/picture/logo.png" alt="" />
        </div>
        
        <ul className="navLinks">
          <li><a href="#home">Blog</a></li>
          <li><a href="#about">Services</a></li>
          <li><a href="#services">Our Story</a></li>
          <li><a href="#contact" id="contact">Contact us</a></li>
        </ul>
      </nav>
    );
  };

export default Nav