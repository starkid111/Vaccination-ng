import background from "./images/background.svg";
import icon6 from "./images/icon6.png";
import icon7 from "./images/icon7.png";
import icon8 from "./images/icon8.png";
import arrow from "./images/arrow-right.png";
import VaccinationItem from "./VaccinationItem";

const Vaccination = () => {
  return (
    <div
      className="vaccination"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container  mx-auto">
        {/*<!--Text section-->*/}
        <div className="flex flex-col p-3 space-y-5 md:flex-row md:space-y-0 md:space-x-10 md:justify-between">
          <h1 className="text-2xl  lg:text-4xl font-bold w-[100%] md:w-1/2 text-white">
            Why get vaccinated today ?
          </h1>
          <p className="text-[14px] text-gray-200 font-[400] w-[100%] md:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            iste ratione rem consequatur eligendi, eveniet quas in maiores nam
            dolore eum cupiditate inventore possimus, amet atque similique
            facilis ad odit?
          </p>
        </div>
        {/*<!--card section->*/}
        <div className="card mt-10 p-5 flex gap-5 justify-between md:space-x-4 flex-wrap lg:flex-nowrap">
          {/*<!--1st Card -->*/}
          <div className="bg-[#C4C4C433]/20 flex flex-col space-y-10 pl-5 pr-8 pt-5 pb-10 rounded-tr-[80px] rounded-[20px] w-[100%] md:1/3 lg:w-1/2 md:rounded-tr-[150px] md:rounded-[50px]">
            {/*<!--icon-->*/}
            <VaccinationItem
              icon={icon6}
              header="Protects your immune system against viruses"
              arrow={arrow}
              description="Velit ut consectetur mauris, orci amet, faucibus. Sit turpis fringilla ipsum pretium,dictum. Dolor eget vel nulla lorem ac."
            />
          </div>

          <div className="flex flex-wrap gap-3 p-0 md:flex-nowrap">
            {/** <!--2nd card--> */}

            <div className="bg-transparent border-white/50 border-[3px] gray flex flex-col space-y-10 p-4 pb-10  rounded-3xl self-end w-[100%]  md:w-1/2 md:rounded-[50px] lg:w-1/2">
              {/** <!--icon--> */}
              <VaccinationItem
              icon={icon7}
              header="Minimize the spread of the Virus"
              arrow={arrow}
            />
            </div>

            {/** <!--3rd card--> */}
            <div className="bg-transparent border-white/50 border-[3px] gray flex flex-col space-y-10 p-4 pb-10  rounded-3xl self-end w-[100%] md:w-1/2 md:rounded-[50px] lg:w-1/2">
              {/**  <!--icon--> */}
              <div className="">
                <img src={icon8} alt="" />
              </div>
              <h3 className="text-[14px] font-bold text-white  max-w-sm md:text-2xl">
                Protect yourself
              </h3>
              <div className="flex space-x-3 items-center">
                <p className="text-[18px]  font-bold text-gray-200 md:text-[12px]">
                  Read more
                </p>
                <div className="w-[25px]">
                  <img src={arrow} alt="" className="w-[100%] text-gray-700" />
                </div>
              </div>
            </div>
            {/** <!--end of third section--> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vaccination;
