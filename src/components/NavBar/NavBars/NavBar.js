import './NavBar.css'


const NavBar = () => {

    return(
      <nav className="NavBar">
          <div>
                <p> Tienda-Online</p>
              
          </div>
        <button className="option">accion</button>
        <button className="option">estrategia</button>
        <button className="option">FPS</button>
        <button className="option">horror</button>
        <button className="option">deportes</button>
        <button className="option">cooperativo</button>

      </nav>
    )
  
  }

  export default NavBar