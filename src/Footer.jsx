import footer from './images/footer.png';
import youtube from './images/youtube.png';
import instagram from './images/instagram.png';
import twitter from './images/twitter.png';
import facebook from './images/facebook.png';

const Footer = () => {
    return ( 
        <div className="h-full pt-44" style={{backgroundImage :`url(${footer})` }}>
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 lg:justify-between lg:items-center container mx-auto py-5 px-3  ">
        <div >
        <h1 className="text-[18px] md:text-2xl text-3xl font-bold text-white">Vaccination-ng</h1>
        <span className="absolute w-[80px] border-[3px] rounded-sm border-[#17C2EC] "></span>
        </div>
          <ul className=" lg:justify-between md:space-x-8 flex flex-col md:flex-row">
            <li className="text-white text-sm md:text-[20px] lg:text-2xl">Home</li>
            <li className="text-white/50 text-sm md:text-[20px] lg:text-2xl">Service</li>
            <li className="text-white/50 text-sm md:text-[20px] lg:text-2xl">Schedule</li>
            <li className="text-white/50 text-sm md:text-[20px] lg:text-2xl">Contact us</li>
          </ul>
         
         <div className=' w-[80px] md:w-[140px] lg:w-[220px]'>
         <div className='flex items-center gap-2  w-full'>
               <img src={youtube} alt="" className='w-[20%]'/>
               <img src={instagram} alt="" className='w-[20%]' />
               <img src={twitter} alt=""  className='w-[20%]'/>
               <img src={facebook} alt=""  className='w-[20%]'  />
          </div>
         </div>
         

        </div>
        </div>
     );
}
 
export default Footer;