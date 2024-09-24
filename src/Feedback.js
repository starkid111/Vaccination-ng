import Testimony from "./Testimony";
import oyin from "./images/oyin.png";
import lekan from './images/lekan.png';
import tope from './images/tope.png'

const Feedback = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-col space-y-10">
        <p className="text-sm  md:text-2xl text-center font-bold mt-10 text-[#17C2EC]">
          FEEDBACK
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-center text-black">
        What our Patients Think
        </h1>
        <p className="text-[#00000080]/50 text-xs md:text-xl lg:text-2xl font-medium text-center">
        Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis
          aenean eu velit. Mi vestibulum, ullamcorper venenatis imperdiet augue
          arcu donec neque.
        </p>

        <div className="flex flex-col lg:flex-row  lg:justify-between items-center md:gap-5 lg:gap-16" >
           <Testimony  image={oyin} Tname= 'Oyindamola Maja' location='Badagry, Lagos' bgcolor = '#C4C4C480' color = '#00000080' Hcolor = "black" description =" “Been stressing about a close centre to get the  vaccine,
           until i tried Vaccination.ng” "/>
           <Testimony  image={lekan} Tname= 'Okeowo Lekan' location='Ikeja, Lagos'  bgcolor = '#17C2EC' color = 'white'  Hcolor="white" description =" “Got my vaccine very close to my house. Was very easy scheduling an appointment.” "/>
           <Testimony  image={tope} Tname= 'Kafaru Temitope' location='Obanikoro, Lagos' bgcolor = "#C4C4C480" color = '#00000080' Hcolor = "black"  description =" “Been stressing about a close centre to get the  vaccine,
           until i tried Vaccination.ng” "/>
        </div>

      </div>
    </div>
  );
};

export default Feedback;
