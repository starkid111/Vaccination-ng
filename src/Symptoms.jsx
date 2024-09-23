import background from "./images/background.svg";
import headache from "./images/headache.png"
import Virus from "./Virus";
import headacheSmall from './images/headacheSmall.svg'

const Symptoms = () => {
  return (
    <div  style={{ backgroundImage: `url(${background})` }}>
      <div className="container mx-auto flex flex-col space-y-10">
        <p className="text-sm  md:text-2xl text-center font-bold mt-10 text-white">Covid-19 Prevention </p>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-center text-white">
          <span className="text-[#17C2EC]">Covid-19</span> Symptoms
        </h1>
        <p className="text-white/50 text-xs md:text-xl lg:text-2xl font-medium text-center">
          Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis
          aenean eu velit. Mi vestibulum, ullamcorper venenatis imperdiet augue
          arcu donec neque.
        </p>
        <div className="relative hidden md:block">
            <Virus  VirusName ='High Fever'   left='15%'/>
            <Virus  VirusName ='Loss sense of smell' top='35%' left='4%'/>
            <Virus  VirusName ='Dry Cough' bottom='10%' left='1%'/>
            <Virus  VirusName ='Loss sense of taste' right='12%'/>
            <Virus  VirusName ='Difficulty breathing'  top='35%' right='4%'/>
            <Virus  VirusName ='Sore Throat'  bottom = '10%' right='1%'/>
            <img src={headache} alt="" className="mx-auto w-1/2" />
        </div>
        {/**mobile image  */}
        <div className=" md:hidden flex items-center justify-center w-[100%]">
          <img src={headacheSmall} alt="" className="w-[80%]" />
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
