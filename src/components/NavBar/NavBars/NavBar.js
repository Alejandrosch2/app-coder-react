import './NavBar.css'
import Button from '../../Button/Button'



const NavBar = ({title, ...rest }) => {

  const handleTerror = () => {
    console.log('terror')
  }
  const handleCooperativo = () => {
    console.log('cooperativo')
  }
  const handleEstrategia = () => {
    console.log('estrategia')
  }

    return(
      <nav className="NavBar">
          <div>
                <h3> {title} </h3>
              
          </div>

          <div className="categories" >

            <Button label='terror' backgroundColor='black' colorText='crimson' handleClick={handleTerror}/>
            <Button label='cooperativo' handleClick={handleCooperativo} />
            <Button label='estrategia' handleClick={handleEstrategia}/>


          </div>

        
          
     

      </nav>
    )
  
  } 

  export default NavBar