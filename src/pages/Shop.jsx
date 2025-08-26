// src/pages/ShopPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import { ShoppingCart, User } from "lucide-react";
import banner from '../assets/images/Bannar.png';
import products from "../data/products";
import ProductQuickView from "./ProductQuickView";

const ShopPage = () => {
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [rating, setRating] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products
    .filter(p => {
      if (category && p.category !== category) return false;
      if (priceRange) {
        const [min, max] = priceRange.split("-").map(Number);
        if (!(p.price >= min && (!max || p.price <= max))) return false;
      }
      if (rating && p.rating < parseInt(rating)) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="bg-white font-poppins">
      {/* Topbar */}
      <div className="bg-hardPrimary text-white text-sm py-2 px-4 flex justify-between">
        <div>Free Shipping on orders over $50</div>
        <div>
          <Link to="/login" className="hover:underline mr-4">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
        </div>
      </div>

      {/* Navbar */}
      <header className="shadow-md py-4 px-4 md:px-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Shopery Logo" className="h-10 w-auto object-contain" />
          <div className="text-dark text-2xl font-bold">Shopery</div>
        </div>
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border border-softPrimary rounded px-4 py-2 focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-4 text-dark">
          <button className="hover:text-primary transition">
            <ShoppingCart size={20} />
          </button>
          <button className="hover:text-primary transition">
            <User size={20} />
          </button>
        </div>
      </header>

      {/* Nav Links */}
      <nav className="bg-[#333333] text-white text-sm px-4 md:px-10">
        <ul className="flex space-x-6 py-3 relative">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/shop" className="hover:underline">Shop</Link></li>
          <li><Link to="/blog" className="hover:underline">Blog</Link></li>
          <li><Link to="/about" className="hover:underline">About Us</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
        </ul>
      </nav>

      {/* Shop Content */}
      <div className="p-6">
        <div className="mb-6">
          <img src={banner} alt="Banner" className="w-full rounded-xl" />
        </div>

        {/* Filters */}
        <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
          <div className="flex gap-2">
            <select className="border p-2 rounded" onChange={e => setCategory(e.target.value)}>
              <option value="">Select Category</option>
              <option value="fruits">Fruits</option>
              <option value="vegetables">Vegetables</option>
              <option value="meat">Meat & Fish</option>
              <option value="snacks">Snacks</option>
              <option value="beverages">Beverages</option>
              <option value="bakery">Bakery</option>
              <option value="beauty">Health & Beauty</option>
            </select>

            <select className="border p-2 rounded" onChange={e => setPriceRange(e.target.value)}>
              <option value="">Select Price</option>
              <option value="0-10">$0 - $10</option>
              <option value="10-20">$10 - $20</option>
              <option value="20-50">$20 - $50</option>
              <option value="50-">$50+</option>
            </select>

            <select className="border p-2 rounded" onChange={e => setRating(e.target.value)}>
              <option value="">Select Rating</option>
              <option value="5">★★★★★</option>
              <option value="4">★★★★ & Up</option>
              <option value="3">★★★ & Up</option>
              <option value="2">★★ & Up</option>
              <option value="1">★ & Up</option>
            </select>
          </div>

          <div className="flex gap-2 items-center">
            <select className="border p-2 rounded" onChange={e => setSortBy(e.target.value)}>
              <option value="">Sort by Latest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name (A-Z)</option>
            </select>

            <select className="border p-2 rounded">
              <option>Show: 16</option>
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="36">36</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredProducts.map((p, i) => (
            <div
              key={i}
              onClick={() => setSelectedProduct(p)}
              className="cursor-pointer relative bg-white rounded-xl border border-transparent shadow-sm overflow-hidden p-3 group hover:shadow-md hover:border-primary transition-all duration-300"
            >
              <img src={p.img} alt={p.name} className="w-full h-32 object-contain mb-2" />
              <div className="text-center">
                <p className="font-medium text-sm text-gray-800">{p.name}</p>
                <p className="text-green-600 font-bold text-sm">${p.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Product Quick View */}
        {selectedProduct && (
          <ProductQuickView
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <ul className="flex gap-2 text-sm">
            <li className="px-3 py-1 rounded-full bg-green-600 text-white">1</li>
            <li className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">2</li>
            <li className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">3</li>
            <li className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">...</li>
            <li className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">21</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-hardPrimary text-white mt-20 py-10 px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Shopery</h3>
            <p>Fresh grocery delivered to your doorstep.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Useful Links</h4>
            <ul className="space-y-1 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/shop" className="hover:underline">Shop</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Categories</h4>
            <ul className="space-y-1 text-sm">
              <li>Fruits</li>
              <li>Vegetables</li>
              <li>Meat</li>
              <li>Dairy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Newsletter</h4>
            <p className="text-sm mb-2">Subscribe to get updates.</p>
            <input type="email" placeholder="Your email" className="w-full px-3 py-2 text-black rounded" />
            <button className="mt-2 bg-warning text-white px-4 py-2 rounded hover:bg-danger">Subscribe</button>
          </div>
        </div>
        <p className="text-center text-xs mt-6">&copy; 2025 Shopery. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ShopPage;
