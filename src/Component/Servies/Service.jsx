import { FaArrowRight } from "react-icons/fa";

const Service = ({ service }) => {
    const {img, title, price} = service
  return (
    <div className="card bg-base-100 border-2">
      <figure className="px-5 h-[260px] pt-10">
        <img
          src={img}
          alt="Shoes"
          className="h-full rounded-xl"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-2xl">{title}</h2>
        
        <div className="card-actions mt-5 items-center">
        <p className=" text-xl font-semibold text-red-500">Price: {price}$</p>
          <button className=" text-xl text-red-500 "><FaArrowRight /></button>
        </div>
      </div>
    </div>
  );
};

export default Service;
