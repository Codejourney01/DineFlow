import { ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

export default function PopularSection({ items }) {
  return (
    <div className="w-full">
      {/* Heading */}
      <div className="max-w-[95%] w-full pt-8 px-2 flex justify-between items-center">
        <h3 className="font-semibold text-orange-400 text-xl font-[Poppins]">
          Popular Items
        </h3>
      </div>

      {/* Grid */}
      <div className="max-w-[95%] w-full px-2 pt-4">
        <div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-3 
            md:grid-cols-4 
            xl:grid-cols-5 
             gap-x-3 md:gap-x-4 
            gap-y-5 md:gap-y-6
          "
        >
          {items.map((item) => (
            <div key={item.id} className="flex justify-center">
              <ProductCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
