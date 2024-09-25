import flag from "./images/flag.png";
import covidImage from "./images/Covid.png";
import bgwhite from './images/bg-white.svg'

const VaccineForm = () => {
  return (
    <div style={{ backgroundImage: `url(${bgwhite})` }}>
      <div className="container mx-auto flex flex-col-reverse lg:flex-row justify-between">
        <div className="space-y-8 p-5 md:py-10">
          <h1 className="text-5xl text-black font-bold text-center max-w-[452px] hidden lg:block">
            Get your Vaccine Registration today
          </h1>
          <div className=" space-y-4">
            <div className="space-y-2">
              <h2 className="text-black text-sm  md:text-xl lg:text-2xl font-bold">
                Patient's Full Name
              </h2>
              <input
                type="text"
                placeholder="Full Name"
                className=" p-4  w-full bg-[#0B153C26]/15 rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-black text-sm  md:text-xl lg:text-2xl font-bold">Mobile Number</h2>
              <p className="text-black/50 text-sm md:text-xl font-medium max-w-[650px]">
                Notifications for appointment and reminders will be sent to this
                provided number
              </p>
              <div className=" flex flex-wrap md:flex-nowrap w-full gap-5 md:gap-10   ">
                <div className=" flex  gap-3 p-3 w-full rounded-xl bg-[#0B153C26]/15">
                  <img src={flag} alt="" />
                  <input
                    type="text"
                    placeholder="mobile number "
                    className=" bg-transparent"
                  />
                </div>
                <button className="text-white bg-[#17C2EC] px-10 md:px-14  py-3 text-xl lg:font-bold rounded-2xl ">
                  Verify
                </button>
              </div>
            </div>
          </div>
          <button className="text-white bg-[#17C2EC] w-full px-2 md:px-14  py-3 md:py-3 text-xl lg:font-bold rounded-2xl ">
            Submit
          </button>
          <div className="flex gap-7 items-center justify-center">
            <p className="text-black/50 text-sm  md:text-xl font-semibold">
              Already Registered ?
            </p>
            <span className="text-[#17c2ec] text-sm  md:text-xl font-bold">
              Check your Status
            </span>
          </div>
        </div>
        <div className="relative space-y-4  h-full">
        <h1 className="text-2xl md:text-3xl text-black font-bold text-center max-w-[452px] block lg:hidden">
            Get your Vaccine Registration today
          </h1>
          <img src={covidImage} alt=""/>
          <button className=" absolute bottom-20 left-24  text-white bg-[#C4C4C440]/25 px-10 md:px-14   py-2 text-xl lg:font-bold rounded-2xl ">
            Verify Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default VaccineForm;
