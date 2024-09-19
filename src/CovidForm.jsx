import hero2 from './images/hero2.png';

const CovidForm  = () => {
    return (  
        <div className="covidForm" style={{backgroundImage :`url(${hero2})` }}>
        <div className="container mx-auto pt-6 pb-4 px-3">
            
            <div className="covidBox bg-[#C4C4C41A]/10 flex flex-col rounded-md space-y-7 ">
               
                <div className="bg-[#C4C4C41A]/5 text-center text-white font-bold text-[10px] p-4  sm:text-[20px] md:text-[24px] md:text-left md:px-10">Check your COVID-19 result on our database</div>
              
                <div className=" flex flex-col space-y-4  px-4 md:flex-row md:px-4 md:space-y-0 md:space-x-4">
                    <input type="text" placeholder="Okeowo" class="p-3 border-solid border-[3px] border-[#17C2EC] rounded-xl bg-transparent w-[100%]"/>
                    <input type="text" placeholder="NIK Number" class=" p-3 border-[3px] border-solid  border-gray-700 rounded-xl bg-transparent w-[100%]"/>
                    <button className="px-10 py-3 text-[#17C2EC]  border-solid border-[3px] border-[#17C2EC] flex self-start rounded-xl">Check</button>
                </div>
               
                <div class="p-5">
                <div class="bg-[#C4C4C41A]/5 text-[#17C2EC] text-[10px] font-bold text-center  rounded-sm p-4 sm:text-[20px] md:text-[24px] md:text-left">Need a certificate for your COVID-19 result? 
                    Please click here</div>
                    </div>
            </div>
        </div>
    </div>
   

     );
}
 
export default CovidForm ;