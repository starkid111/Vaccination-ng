
import Hero from "./Hero";
import Navbar from "./Navbar";
import background from './images/background.svg'
import Location from "./Location";

const NavHero = () => {
    return ( 
        <div className=" h-full" style={{backgroundImage :`url(${background})` }}>
          <Navbar/>
         <Hero />
         <Location />
        </div>
     );
}
 
export default NavHero;