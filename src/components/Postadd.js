import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ImagePlus } from "lucide-react";

const Postadd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [step, setStep] = useState(1);
  const [selectedImages, setSelectedImages] = useState(Array(8).fill(null));

  const carCategories = ["Car", "SUV", "Truck", "Van"];
  const sedanTypes = ["Sedan", "Hatchback", "Coupe"];
  const conditions = ["New", "Used"];
  const carBrands = ["Honda", "Toyota", "Ford", "BMW", "Mercedes"];
  const transmissionTypes = ["Manual", "Automatic", "DCT", "CVT"];
  const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid"];
  const bodyTypes = ["Sedan", "SUV", "Hatchback", "Coupe"];

  // Watch selected brand to update models
  const selectedBrand = watch("brand");

  // Model options based on selected brand
  const getModelOptions = (brand) => {
    const modelMap = {
      Honda: ["Civic", "Accord", "CR-V", "Vezel"],
      Toyota: ["Camry", "Corolla", "RAV4"],
      Ford: ["Mustang", "F-150", "Explorer"],
      BMW: ["3 Series", "5 Series", "X5"],
      Mercedes: ["C-Class", "E-Class", "GLC"],
    };
    return modelMap[brand] || [];
  };

  const onSubmit = (data) => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log("Final form data:", { ...data, images: selectedImages });
      // Handle form submission here
    }
  };

  const handleImageUpload = (index) => (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...selectedImages];
        newImages[index] = reader.result;
        setSelectedImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://godare.net/wp-content/uploads/2024/11/bg-banner.png')",
      }}
      className="h-screen bg-gray-100 p-6 bg-cover bg-center relative"
    >
      <div className="absolute inset-0 bg-black-900 opacity-50"></div>
      <div className="max-w-7xl mx-auto relative z-10 h-full flex justify-start items-center">
        <div className=" bg-white rounded-lg shadow-lg p-6  max-w-lg">
          <h1 className="text-2xl font-bold mb-6">Post an add</h1>
          <p className="text-sm text-gray-600 mb-6">
            Enter your login credentials to access your account
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    {...register("category", {
                      required: "Category is required",
                    })}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Select category</option>
                    {carCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.category.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sub category
                  </label>
                  <select
                    {...register("subCategory", {
                      required: "Sub category is required",
                    })}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Select sub category</option>
                    {sedanTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.subCategory && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subCategory.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Condition
                  </label>
                  <select
                    {...register("condition", {
                      required: "Condition is required",
                    })}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Select condition</option>
                    {conditions.map((cond) => (
                      <option key={cond} value={cond}>
                        {cond}
                      </option>
                    ))}
                  </select>
                  {errors.condition && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.condition.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Brand
                  </label>
                  <select
                    {...register("brand", { required: "Brand is required" })}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Select brand</option>
                    {carBrands.map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>
                  {errors.brand && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.brand.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Model
                  </label>
                  <select
                    {...register("model", { required: "Model is required" })}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Select model</option>
                    {getModelOptions(selectedBrand).map((model) => (
                      <option key={model} value={model}>
                        {model}
                      </option>
                    ))}
                  </select>
                  {errors.model && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.model.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Trim / Edition (optional)
                  </label>
                  <input
                    type="text"
                    {...register("trim")}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter trim/edition"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Year of manufacture
                  </label>
                  <input
                    type="number"
                    {...register("year", {
                      required: "Year is required",
                      min: { value: 1900, message: "Invalid year" },
                      max: {
                        value: new Date().getFullYear(),
                        message: "Invalid year",
                      },
                    })}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter year"
                  />
                  {errors.year && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.year.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mileage
                  </label>
                  <input
                    type="number"
                    {...register("mileage", {
                      required: "Mileage is required",
                      min: { value: 0, message: "Invalid mileage" },
                    })}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter mileage"
                  />
                  {errors.mileage && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.mileage.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fuel type
                  </label>
                  <select
                    {...register("fuelType", {
                      required: "Fuel type is required",
                    })}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Select fuel type</option>
                    {fuelTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.fuelType && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fuelType.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Transmission type
                  </label>
                  <select
                    {...register("transmission", {
                      required: "Transmission type is required",
                    })}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Select transmission</option>
                    {transmissionTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.transmission && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.transmission.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Body Type
                  </label>
                  <select
                    {...register("bodyType", {
                      required: "Body type is required",
                    })}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Select body type</option>
                    {bodyTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.bodyType && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.bodyType.message}
                    </p>
                  )}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    {...register("description", {
                      required: "Description is required",
                      minLength: {
                        value: 50,
                        message: "Description must be at least 50 characters",
                      },
                    })}
                    className="w-full p-2 border rounded-md h-32"
                    placeholder="Enter vehicle description"
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price
                  </label>
                  <input
                    type="number"
                    {...register("price", {
                      required: "Price is required",
                      min: {
                        value: 0,
                        message: "Price must be greater than 0",
                      },
                    })}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter price"
                  />
                  {errors.price && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.price.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Add photos
                  </label>
                  <div className="grid grid-cols-4 gap-4">
                    {Array(8)
                      .fill(null)
                      .map((_, index) => (
                        <div
                          key={index}
                          className="relative w-[75px] aspect-square border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-400"
                          onClick={() =>
                            document.getElementById(`image-${index}`).click()
                          }
                        >
                          {selectedImages[index] ? (
                            <img
                              src={selectedImages[index]}
                              alt={`Upload ${index + 1}`}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          ) : (
                            <ImagePlus className="w-6 h-6 text-gray-400" />
                          )}
                          <input
                            type="file"
                            id={`image-${index}`}
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageUpload(index)}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="text-sm font-medium text-white bg-[#2b241a] px-8 py-2 rounded-full hover:bg-opacity-90 w-full mt-6 hover:bg-brown-700"
            >
              {step === 3 ? "Publish" : "Next"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Postadd;
