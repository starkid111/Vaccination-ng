import moderna from "./images/Moderna_logo.png";
import pfizer from "./images/Pfizer.png";
import zeneca from "./images/zeneca.png";
import sinovac from "./images/sinovac.png";

const Partners = () => {
  return (
    <div className="bg-white w-[100%] px-5 py-1">
      <div className="flex justify-between items-center gap-5  container mx-auto w-full">
        <div className="w-[100%]">
          <img src={moderna} alt="" className="w-[80%]" />
        </div>
        <div className="w-[100%]">
          <img src={pfizer} alt="" className="w-[80%]" />
        </div>
        <div className="w-[100%]">
          <img src={zeneca} alt="" className="w-[80%]" />
        </div>
        <div className="w-[100%]">
          <img src={sinovac} alt="" className="w-[80%]" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
