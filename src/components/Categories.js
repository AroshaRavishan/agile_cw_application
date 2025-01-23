import boats_image from '../assests/boats-image.png';
import cars_image from '../assests/cars-image.png';
import commercial_image from '../assests/commercial-image.png';
import heavy_machinery_image from '../assests/heavy-machinery-image.png';
import motorcycles_image from '../assests/motorcycles-image.png';
import off_road_vehicles_image from '../assests/off-road-vehicles-image.png';
import recreational_vehicles_image from '../assests/recreational-vehicles-image.png';
import three_wheelers_image from '../assests/three-wheelers-image.png';

const categories = [
  { name: "Cars", image: cars_image },
  { name: "Motorcycles", image: motorcycles_image },
  { name: "Commercial", image: commercial_image },
  { name: "Heavy Machinery", image: heavy_machinery_image },
  { name: "Three-Wheelers", image: three_wheelers_image },
  { name: "Boats & Watercraft", image: boats_image },
  { name: "Recreational Vehicles", image: recreational_vehicles_image },
  { name: "Off-Road Vehicles", image: off_road_vehicles_image },
];

const TrendingCategories = () => {
  return (
    <section className="py-8 container mt-20">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-[#505050]">Trending Categories</h2>
        <a href="/categories" className="text-[#505050] hover:underline">
          View all categories
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-[550px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white  text-center py-2">
              <span className="text-sm font-medium">{category.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingCategories;
