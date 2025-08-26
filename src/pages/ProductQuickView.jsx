import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import products from "../data/products";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaHeart,
  FaTimes,
} from "react-icons/fa";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

export default function ProductQuickView({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center p-6 md:p-10">
      <div className="relative bg-white rounded-2xl w-full max-w-6xl shadow-lg p-6 md:p-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-xl"
        >
          <FaTimes />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Left Side */}
          <div className="md:col-span-5 flex">
            {/* Thumbnails */}
            <div className="hidden md:flex flex-col space-y-4 overflow-y-auto max-h-[420px] pr-4">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className={`w-16 h-16 border-2 ${i === 0 ? "border-green-500" : "border-gray-200"
                    } rounded-lg`}
                >
                  <img
                    src={product.img}
                    alt="thumb"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1">
              <img
                src={product.img}
                alt={product.name}
                className="rounded-xl w-full h-[400px] object-contain"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="md:col-span-7">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2">
              {product.name}
              <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">
                In Stock
              </span>
            </h2>

            {/* Ratings + SKU */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-3">
              <div className="flex text-yellow-400 text-base">
                {Array.from({ length: product.rating || 4 }).map((_, i) => (
                  <span key={i}>&#9733;</span>
                ))}
              </div>
              <span>{product.reviews || 4} Reviews</span>
              <span>• SKU: {product.sku || "N/A"}</span>
            </div>

            {/* Pricing */}
            <div className="flex items-center gap-4 mb-4">
              {product.oldPrice && (
                <span className="text-gray-400 line-through text-lg">
                  ${product.oldPrice.toFixed(2)}
                </span>
              )}
              <span className="text-green-600 text-2xl font-semibold">
                ${product.price.toFixed(2)}
              </span>
              {product.discount && (
                <span className="text-red-500 text-sm bg-red-100 px-2 py-1 rounded">
                  {product.discount}% Off
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {product.description ||
                "This product is high quality and freshly sourced."}
            </p>

            {/* Quantity + Cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded">
                <button className="px-3 py-2 text-lg text-gray-600 hover:text-black">
                  <IoMdRemove />
                </button>
                <span className="px-4">1</span>
                <button className="px-3 py-2 text-lg text-gray-600 hover:text-black">
                  <IoMdAdd />
                </button>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition">
                Add to Cart
              </button>
              <button className="p-3 rounded-full border hover:bg-gray-100">
                <FaHeart className="text-gray-600" />
              </button>
            </div>

            {/* Meta Info */}
            <div className="text-sm text-gray-600 space-y-1 mb-6">
              <div>
                <strong>Category:</strong> {product.category}
              </div>
              <div>
                <strong>Tags:</strong> {product.tags?.join(", ") || "Organic, Healthy"}
              </div>
            </div>

            {/* Share Icons */}
            <div className="flex items-center space-x-3 text-gray-600">
              <span className="text-sm font-medium">Share item:</span>
              <FaFacebookF className="cursor-pointer hover:text-blue-500" />
              <FaTwitter className="cursor-pointer hover:text-sky-400" />
              <FaPinterestP className="cursor-pointer hover:text-red-600" />
              <FaInstagram className="cursor-pointer hover:text-pink-500" />
            </div>
            <div className="mt-6">
              <button
                onClick={() => {
                  onClose();
                  window.location.href = `/product/${product.id}`;
                }}
                className="text-sm text-green-600 hover:text-green-800 inline-flex items-center gap-1"
              >
                View Full Details <span className="text-base">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
