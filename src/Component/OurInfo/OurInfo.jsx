import calender from "../../assets/icons/calender.png";
import call from "../../assets/icons/call.png";
import location from "../../assets/icons/location.png";
const OurInfo = () => {
  return (
    <div className=" my-8 px-10 py-20 rounded-xl text-white flex justify-between bg-[#151515]">
      <div className=" flex gap-2 items-center">
        <img className="" src={calender} alt="" />
        <div className=" ">
            <p className=" text-base">We are open monday-friday</p>
            <h1 className=" text-2xl">7:00 am - 9:00 pm</h1>
        </div>
      </div>
      <div className=" gap-2 flex items-center">
        <img className="" src={call} alt="" />
        <div className=" ">
        <p className=" text-base">Have a question?</p>
            <h1 className=" text-2xl">+2546 251 2658</h1>
        </div>
      </div>
      <div className=" gap-2 flex items-center">
        <img className=" " src={location} alt="" />
        <div className=" ">
        <p className=" text-base">Need a repair? our address</p>
            <h1 className=" text-2xl">Liza Street, New York</h1>
        </div>
      </div>
    </div>
  );
};

export default OurInfo;
