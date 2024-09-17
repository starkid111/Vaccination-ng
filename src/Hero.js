import imageOne from "./images/imageOne.svg";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row  justify-between container mx-auto gap-5 mt-4 lg:mt-11 p-5 md:p-0">
      <div className="flex flex-col space-y-10 w-full md:w-1/2">
        <p className="text-xl lg:text-2xl text-[#17C2EC] font-bold">
          Get Vaccinated. Boost your Immune System
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white  lg:max-w-lg">
          COVID-19 Vaccination Got Easier With,
          <span className="text-[#17C2EC]">Vaccination.ng</span>
        </h1>
        <p className="text-xl lg:text-2xl text-white/70 font-bold">
          Vaccination.ng will help you find the nearest centre for vaccination,
          in all 36 states in Nigeria.
        </p>
        <div className="flex gap-2">
          <button className="text-white bg-[#17C2EC] px-6  py-3 text-2xl font-bold rounded-2xl hidden lg:block">
            Get Vaccine
          </button>
          <button className="text-white bg-white/10 px-6  py-3 text-2xl font-bold rounded-2xl hidden border-[#17C2EC]  border-2 lg:block">
            Help Centre
          </button>
        </div>
      </div>

      <div className="">
        <img src={imageOne} alt="" />
      </div>
    </div>
  );
};

export default Hero;
