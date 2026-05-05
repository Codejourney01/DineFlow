import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import ProductCard from "../../Components/ProductCard";
import CardSlider from "../../Components/CardSlider";

export default function Interface() {
  const texts = [
    "Search Pizza, Burger...",
    "Craving something tasty?",
    "Find your favorite dish...",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const data = [
    {
      id: 1,
      pname: "Farmhouse Pizza",
      price: 300,
      pimg: "https://jambubakers.com/wp-content/uploads/2023/07/pizza.png",
    },
    {
      id: 2,
      pname: "Burger Meal Combo ",
      price: 500,
      pimg: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTXJgILZBjEU3_bZOCwqgFBXSdvaSBv9UGpCiiXmX8sVsYyAnIoZ0HVjfsqzCLEI6L3OjMP2Euwi4VS3k5G1JABOn8Hvtc-AXfJYi8-oqh1LpFt2fL-2JxQ",
    },
    {
      id: 3,
      pname: "Oreo Shake",
      price: 190,
      pimg: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT1ngCA5FmzOFGRAVjFIvql2uI9Hh_fQAj4UcuFAvYxxOXm0sxRamRMPZUvkL_lXg4o5ZmL8Y60wMXSRYJZerTXijAJx8LNQg",
    },
    {
      id: 4,
      pname: "Cheese Sandwich",
      price:200,
      pimg: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8fRHT_WBos-u0SaA09keNhaXzMlxwL506Fs4P8UZrph-UVv306prlM3W6q6nCBxW9DeZKA9DWAcet3bViFKzHf0dqXnV4C7pI1kiAXnTDXskX5kqYxLv-",
    },
    {
      id:5,
      pname:" Veg Frankie",
      price:120,
      pimg:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTqrVJZyZGjkrB-pFAW_embNx6kR816NrmIbNDglP7LRZ4JFZVjBlWU7f0pDzRx-QgBZbpYBIQj0Shx5W8up-hL0Bbw_QZPekWzmH_tn_Lg"

    }
  ];

  return (
    <div className="w-full flex items-center justify-center h-dvh md:h-[600px]">
      <div className="md:max-w-[95%] w-full flex flex-col items-center h-full">
        <div className="max-w-[95%] w-full pt-5 relative">
          <Search className="text-orange-400 absolute left-3 top-8 w-5 h-5" />

          <input
            type="text"
            className="w-full h-10 px-12 md:px-10 rounded-lg border border-gray-300 shadow-sm shadow-gray-100  focus:outline-orange-300"
          />

          <div className="absolute left-12 top-8 text-gray-400 text-sm pointer-events-none transition-all duration-500">
            {texts[index]}
          </div>
        </div>
        {/* Heading Part  */}
        <div className="max-w-[95%] w-full pt-8 px-2">
          <h2 className="font-semibold text-orange-400 text-xl font-[Poppins]">
            Welcome to DineFlow{" "}
          </h2>
          <h4 className="text-gray-400 text-sm pt-1">
            No waiting — just tasty ordering made simple.{" "}
          </h4>
        </div>

        {/* Slider Part 1 */}
        <div className="max-w-[95%] w-full px-2 pt-12 md:pt-10">
          <CardSlider
            items={data}
            renderCard={(item) => <ProductCard data={item} />}
          />
        </div>
      </div>
    </div>
  );
}
