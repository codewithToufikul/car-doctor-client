import { useEffect, useState } from "react";
import Service from "./Service";

const Servies = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('sevices.json')
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            setServices(data)
        })
    },[])
    console.log(services);
    return (
        <div>
            <div className=" text-center max-w-[700px] mb-10 space-y-5 mx-auto">
            <p className=" text-lg font-bold text-red-500">Service</p>
            <h1 className=" text-5xl font-bold">Our Service Area</h1>
            <p className=" text-base">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className=" grid grid-cols-3 gap-6">
            {
                services.map(service=> <Service key={service._id} service={service}></Service>)
            }
            </div>
            <div className=" justify-center my-9 flex">
                <button className=" btn bg-transparent text-red-500 border-red-500">More Services</button>
            </div>
        </div>
    );
};

export default Servies;