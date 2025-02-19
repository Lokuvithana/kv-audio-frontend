import React from "react";

export default function ProductCard({ item }) {

  return (
    <div className="w-[380px] h-[400px] m-5 bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
      {/* Product Image */}
      <img
        className="w-full h-52 object-cover"
        src={item.image[0] || "https://via.placeholder.com/150"}
        alt={item.name}
      />

      {/* Product Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
        <p className="text-sm text-gray-500">{item.category}</p>

        {/* Price */}
        <p className="text-xl font-bold text-green-600 mt-2">
          {item.price.toLocaleString()} {/* Format with commas */}
        </p>

        {/* Availability Badge */}
        <span
          className={`inline-block px-3 py-1 mt-2 text-xs font-semibold rounded-full ${
            item.availability ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
          }`}
        >
          {item.availability ? "In Stock" : "Out of Stock"}
        </span>

        {/* Product Description */}
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{item.description}</p>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-2">
          <button className="flex-1 px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
