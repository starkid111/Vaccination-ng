import virus from "./images/virus.png";

const Virus = (props) => {
  return (
    <div
      className="absolute flex  items-center "
      style={{
        top: `${props.top}`,
        bottom: `${props.bottom}`,
        right: `${props.right}`,
        left: `${props.left}`,
      }}
    >
      <img src={virus} alt="" className="z-10 w-[25%] lg:w-[40%]" />
      <div className="bg-[#C4C4C433]/20 rounded-lg px-5 py-2 lg:px-10 lg:py-4 -mt-2 -ml-6 w-full">
        <p className="text-[#17C2EC] text-sm lg:text-xl ml-4">{props.VirusName}</p>
      </div>
    </div>
  );
};

export default Virus;
