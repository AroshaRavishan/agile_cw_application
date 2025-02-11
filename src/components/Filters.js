import React, { useState } from "react";
import { Copy } from "lucide-react";
import boats_image from '../assests/boats-image.png';
import cars_image from '../assests/cars-image.png';
import commercial_image from '../assests/commercial-image.png';
import heavy_machinery_image from '../assests/heavy-machinery-image.png';
import motorcycles_image from '../assests/motorcycles-image.png';
import off_road_vehicles_image from '../assests/off-road-vehicles-image.png';
import recreational_vehicles_image from '../assests/recreational-vehicles-image.png';
import three_wheelers_image from '../assests/three-wheelers-image.png';

const categories = [
  { 
    name: "Honda Vezel 2014",
    image: cars_image,
    location: "Colombo, Sri Lanka",
    price: "LKr 1000000",
  },
  { 
    name: "BMW 320d 2015",
    image: motorcycles_image,
    location: "Negombo, Sri Lanka",
    price: "LKr 1500000",
  },
  { 
    name: "Toyota CHR 2016",
    image: commercial_image,
    location: "Negomb, Sri Lanka",
    price: "LKr 1500000",
  },
  { 
    name: "Mazda RX8 2008",
    image: heavy_machinery_image,
    location: "Galle, Sri Lanka",
    price: "LKr 2000000",
  },
  { 
    name: "Toyota Prius 2016",
    image: cars_image,
    location: "Kandy, Sri Lanka",
    price: "LKr 1800000",
  },
  { 
    name: "Honda Civic 2018",
    image: recreational_vehicles_image,
    location: "Matara, Sri Lanka",
    price: "LKr 2500000",
  },
  { 
    name: "Nissan Leaf 2017",
    image: off_road_vehicles_image,
    location: "Jaffna, Sri Lanka",
    price: "LKr 1700000",
  },
  { 
    name: "Mercedes C200 2015",
    image: boats_image,
    location: "Batticaloa, Sri Lanka",
    price: "LKr 3000000",
  }
];

const itemsPerPage = 4;

function Filters() {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < categories.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentItems = categories.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="container mx-auto mt-20">
      <div className="grid grid-cols-12 gap-6">
        {/* Sort & Filter Column */}
        <div className="col-span-12 md:col-span-4 text-black font-bold text-3xl p-4 border-r border-gray-300">
          Sort & Filter
        </div>

        {/* Categories Grid */}
        <div className="col-span-12 md:col-span-8 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentItems.map((category, index) => (
              <div
                key={index}
                className="relative flex flex-col rounded-lg overflow-hidden shadow-sm border border-gray-300 hover:shadow-md transition-shadow"
              >
                <div className="relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-2 right-2 p-1 bg-white rounded-md shadow-sm hover:bg-gray-100">
                    <Copy className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                
                <div className="p-3 space-y-2 bg-white">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-sm">{category.name}</h3>
                  </div>
                  <div className="text-xs text-gray-600">{category.location}</div>
                  <div className="text-sm font-medium">{category.price}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="text-black-900 font-medium hover:underline disabled:text-gray-400"
            >
              &lt; Previous
            </button>
            <button
              onClick={handleNext}
              disabled={(currentPage + 1) * itemsPerPage >= categories.length}
              className="text-black-900 font-medium hover:underline disabled:text-gray-400"
            >
              Next &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;