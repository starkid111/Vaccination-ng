const VaccinationItem =(props)=> {
    return (
        <div className="flex flex-col space-y-10">
            <div className="">
              <img src={props.icon} alt="" />
            </div>
            <h3 className="text-[14px] font-bold text-[#17C2EC]  max-w-sm md:text-2xl">
              {props.header}
            </h3>
            <p className="text-[12px] font-500 text-white   md:text-xl">
             {props.description}
            </p>
            <div className="flex space-x-3  items-center ">
              <p className="text-[18px] font-bold text-[#17C2EC] md:text-[12px]">
                Read more
              </p>
              <img src={props.arrow} alt="" />
            </div>  
        </div>
    )
}

export default VaccinationItem