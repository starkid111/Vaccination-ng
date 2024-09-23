import Bottle from "./images/bottle.png";


const Testimony = (props) => {
  return (
    <div className="h-[500px] max-w-[400px] "  style={{ backgroundImage: `url(${Bottle})`, backgroundPosition: 'cover' , backgroundRepeat: "no-repeat"  }}>
        <div className="h-full  flex justify-center items-center">
      <div className="p-6  space-y-7  rounded-2xl" style={{backgroundColor :props.bgcolor}}>
        <div className="flex items-center gap-5">
          <img src={props.image} alt="" />
          <div>
            <h1 className="text-2xl font-bold">{props.Tname}</h1>
            <p className="text-sm  font-bold" style={{color : props.color}}>{props.location}</p>
          </div>
        </div>
        <p className="text-center text-[18px] font-medium" style={{color : props.color}}> 
          “Been stressing about a close centre to get the <span className="text-[#17C2EC]">covid-19</span>  vaccine,
          until i tried Vaccination.ng”
        </p>
      </div>
      </div>
    </div>
  );
};

export default Testimony;
