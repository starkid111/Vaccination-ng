
import Hero from "./Hero";
import Navbar from "./Navbar";
import background from './images/background.svg'

const NavHero = () => {
    return ( 
        <div className="cover " style={{backgroundImage :`url(${background})` }}>
          <Navbar/>
         <Hero />
        </div>
     );
}
 
export default NavHero;