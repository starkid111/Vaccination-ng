import send from "./images/send.png";

const Quote = () => {
  return (
    <div className="flex -mb-40 items-center justify-center">
      <div className="bg-[#C4C4C426]/15 p-5 md:p-4 lg:p-3 w-[80%] rounded-lg">
        <div className="bg-[#17C2EC] px-6 py-7 lg:py-14 flex flex-col gap-8 justify-center items-center rounded-lg" >
          <h1 className="text-[18px] md:text-4xl lg:text-5xl font-bold text-white text-center">Get a quote</h1>
          <p className="text-[10px] md:text-[20px] lg:text-2xl font-medium text-white text-center">please do enter your email address below </p>
          <div className="flex rounded-lg w-[245px] md:w-[550px]  ">
            <input type="text" placeholder="Ramadanadex111@gmail.com"  className="px-5 lg:px-10 w-full rounded-l-3xl"/>
            <div className="bg-[#0B153C] px-5 py-2 rounded-r-3xl">
              <img src={send} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
