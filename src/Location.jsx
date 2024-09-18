import icon2 from "./images/icon2.png";
import LocationItem from "./LocationItem";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import icon5 from "./images/icon5.png";

const Location = () => {
  return (
    <div className="container mx-auto space-y-5 px-2 lg:-mt-14">
      <div className="flex gap-2 items-center">
        <img src={icon2} alt="" />
        <p className="text-white font-bold text-xl">
          Schedule your Vaccination
        </p>
      </div>

      <div className="flex flex-col bg-[#C4C4C40D]/5 justify-between px-10 py-4  items-center rounded-t-2xl lg:flex-row shadow-lg shadow-current space-y-5 lg:spacey-0">
        <div className="flex justify-between items-center mt-5  w-[100%] lg:w-[50%]">
          <LocationItem
            image={icon5}
            name="Location"
            description="Ikeja Lagos, Nigeria"
          />
          <LocationItem
            image={icon3}
            name="Date"
            description="29th Febuary, 2022"
          />
        </div>
        <div className="flex justify-between items-center  w-[100%] lg:w-[40%]">
          <LocationItem
            image={icon4}
            name="Vaccine Type"
            description="29th Febuary, 2022"
          />
          <button className="text-white bg-[#17C2EC] px-16 lg:px-5    py-1 lg:py-2 text-xl lg:font-bold rounded-xl ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Location;
