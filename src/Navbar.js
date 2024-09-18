import icon from './images/icon.svg'

const Navbar = () => {
    return ( 
        <div className="flex justify-between container mx-auto py-5 px-3 ">
        <div>
        <h1 className="text-3xl font-bold text-white">Vaccination-ng</h1>
        <span className="absolute w-[80px] border-[3px] rounded-sm border-[#17C2EC] "></span>
        </div>
          <ul className=" justify-between space-x-8 hidden lg:flex">
            <li className="text-white text-2xl">Home</li>
            <li className="text-white/50 text-2xl">Service</li>
            <li className="text-white/50 text-2xl">Schedule</li>
            <li className="text-white/50 text-2xl">Contact us</li>
          </ul>
          <button className="text-[#17C2EC] bg-white/10 px-6  py-3 text-2xl font-bold rounded-lg hidden lg:block">Check Status</button>

        
          <div className='block lg:hidden'>
               <img src={icon} alt="" />
          </div>

        </div>
     );
}
 
export default Navbar;