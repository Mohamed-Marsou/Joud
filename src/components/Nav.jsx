import "../scss/components/nav.scss"

const Nav = () => {
    return (
      <nav>
        <div id="logo">Joud</div>
        
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