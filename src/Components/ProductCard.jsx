import React from "react";
import { IndianRupee } from "lucide-react";
import { useNavigate } from 'react-router-dom';
export default function ProductCard({ data }) {
    const navigate=useNavigate();
  return (
    <div className="md:max-w-[280px] w-full md:h-[300px] shadow-sm shadow-gray-300 max-w-[160px] h-[232px]">
      <div className=" md:pt-14 md:h-[130px] h-[120px]  w-full flex items-center justify-center object-cover">
        <img
          className="w-[80px] h-[80px] md:w-[130px] md:h-[130px]"
          src={data.pimg}
          alt=""
        />
      </div>
      <div className="w-full flex items-center justify-start md:pt-14 px-3">
        <h3 className="font-[poppins] text-[12px] text-gray-500 font-medium">
          {data.pname}
        </h3>
      </div>
      <div className="w-full flex justify-start pt-2 text-[8px] md:text-[10px] px-3 gap-3">
        {data.ingredient?.map((item, index) => (
          <div
            key={index}
            className="px-2 py-[2px] rounded-md bg-orange-100 text-orange-600 font-medium"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="w-full px-3 flex justify-between pt-3">
        <div className="flex items-center gap-1 justify-center text-[11px] text-gray-500">
          <IndianRupee className="w-3 h-3 text-gray-400" />
          <span>{data.price}</span>
        </div>
      </div>
      <div className="max-w-[100%] w-full h-[30px] flex items-center justify-center pt-2 ">
        <button onClick={()=>{navigate('/checkout')}} className="w-[90%] h-full bg-orange-400 text-[12px] text-white rounded-sm ">
          Add To Meal{" "}
        </button>
      </div>
    </div>
  );
}
