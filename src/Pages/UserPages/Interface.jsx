import React, { useEffect, useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import ProductCard from "../../Components/ProductCard";
import CardSlider from "../../Components/CardSlider";
import CategorySlider from "../../Components/CategorySlider";
import CategoryGrid from "../../Components/CategoryGrid";
import PopularSection from "../../Components/PopularSection";
export default function Interface() {
  const texts = [
    "Search Pizza, Burger...",
    "Craving something tasty?",
    "Find your favorite dish...",
  ];

  const [index, setIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

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
      ingredient: ["Capsicum", "Corn"],
      popular:true,
      pimg: "https://jambubakers.com/wp-content/uploads/2023/07/pizza.png",
    },
    {
      id: 2,
      pname: "Burger Meal Combo ",
      price: 500,
      popular:true,
      ingredient: ["Burger", "Beverage"],
      pimg: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTXJgILZBjEU3_bZOCwqgFBXSdvaSBv9UGpCiiXmX8sVsYyAnIoZ0HVjfsqzCLEI6L3OjMP2Euwi4VS3k5G1JABOn8Hvtc-AXfJYi8-oqh1LpFt2fL-2JxQ",
    },
    {
      id: 3,
      pname: "Oreo Shake",
      price: 190,
      popular:true,
      ingredient: ["Chilled", "Oreo"],
      pimg: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT1ngCA5FmzOFGRAVjFIvql2uI9Hh_fQAj4UcuFAvYxxOXm0sxRamRMPZUvkL_lXg4o5ZmL8Y60wMXSRYJZerTXijAJx8LNQg",
    },
    {
      id: 4,
      pname: "Cheese Sandwich",
      price: 200,
      popular:true,
      ingredient: ["Trending", "Cheesy"],
      pimg: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8fRHT_WBos-u0SaA09keNhaXzMlxwL506Fs4P8UZrph-UVv306prlM3W6q6nCBxW9DeZKA9DWAcet3bViFKzHf0dqXnV4C7pI1kiAXnTDXskX5kqYxLv-",
    },
    {
      id: 5,
      pname: " Veg Frankie",
      price: 120,
      popular:true,
      ingredient: ["Veggie", "Tasteful"],
      pimg: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTqrVJZyZGjkrB-pFAW_embNx6kR816NrmIbNDglP7LRZ4JFZVjBlWU7f0pDzRx-QgBZbpYBIQj0Shx5W8up-hL0Bbw_QZPekWzmH_tn_Lg",
    },{
      id: 6,
      pname: "Masala Dosa",
      price: 140,
      popular:true,
      ingredient: ["South", "Tasteful"],
      pimg: "https://i0.wp.com/www.chitrasfoodbook.com/wp-content/uploads/2016/06/mysore-masala-dosa-recipe.jpg?w=1200&ssl=1",
    },
    ,{
      id: 7,
      pname: "Steam Momos",
      price: 120,
      popular:true,
      ingredient: ["Chinese", "Tasteful"],
      pimg: "https://png.pngtree.com/png-clipart/20250117/original/pngtree-perfectly-arranged-steamed-momos-with-chutney-png-image_20263467.png",
    },
    ,{
      id: 8,
      pname: "Manchurain Dry",
      price: 140,
      popular:true,
      ingredient: ["Chinese", "Spicy"],
      pimg: "https://png.pngtree.com/png-vector/20250423/ourmid/pngtree-spicy-chicken-manchurian-for-asian-cuisine-and-restaurant-menu-design-png-image_16089305.png",
    },
  ];

  const categories = [
    {
      id: 1,
      cname: "Pizza",
      cimg: "https://image.cdn.shpy.in/360704/cheeseburstpizza-1717657411053.jpeg?format=webp",
    },
    {
      id: 2,
      cname: "Burger",
      cimg: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQyhPtYH6NPsve0NH7qV4f7qyDvZk89ASN1Q__PsjwdfMkIx-2OS5cAeWA9odUljQV_HZuL5S8G83CrsmtgbVkjsAMUGaJF3EZcjjQ22yPPtlma6Iz7vrY-Q8w",
    },
    {
      id: 3,
      cname: "Drinks",
      cimg: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRGuQByL9wSLdPpVEzHroHT18anb5YL905ITpIC_iETN0dXGA_SmHl4CKwfMSL1YIdjkLLNlGyZWPOjIpufsXl598N0UkEmfA",
    },
    {
      id: 4,
      cname: "Sandwich",
      cimg: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRRP7SxV7l0mtU3aXzqCJ4B-r8wkWX3tgkMuDXuuZxhODqCFQ1LswghamkqERZEg8SMhjwdDPTGXiM6dtQk8BJiCSU5feu4",
    },
    {
      id: 5,
      cname: "Dessert",
      cimg: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTfRiNVsnrzwy--6scLC7iEFnP2cDDSpJE2ffOg2iKPMbNeyHtF_p1Zes4L0xgFBCrr4ilSnO-WXbGeiIjvvgp-RBPibofvc9CrYVK05u16VV2hPK0vbQW5Ub4",
    },
    {
      id: 6,
      cname: "Rolls",
      cimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpZHbAUek6Qtw6_Xoc_rx1MrlzryTxpTA8g&s",
    },
    {
      id: 7,
      cname: "Thali",
      cimg: "https://png.pngtree.com/png-clipart/20241221/original/pngtree-indian-thali-png-image_18122295.png",
    },
  ];
  const popularitems=data.filter(item => item.popular);


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
        {!showAll ? (
          <CategorySlider categories={categories} setShowAll={setShowAll} />
        ) : (
          <CategoryGrid categories={categories} setShowAll={setShowAll} />
        )}
        <div className="max-w-[95%] w-full px-2 pt-1 md:pt-3">

        <PopularSection items={popularitems} />
        </div>
      </div>

    </div>
  );
}
