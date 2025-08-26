// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';
import { ShoppingCart, User, Truck, Headphones, ShieldCheck, RotateCcw, Star, Clock } from 'lucide-react';
import fruits from '../assets/images/categories/fruits.png';
import vegetables from '../assets/images/categories/vegetables.png';
import meat from '../assets/images/categories/meat.png';
import snacks from '../assets/images/categories/snacks.png';
import beverages from '../assets/images/categories/beverages.png';
import beauty from '../assets/images/categories/beauty.png';
import bread from '../assets/images/categories/bread.png';
import baking from '../assets/images/categories/baking.png';
import cooking from '../assets/images/categories/cooking.png';
import diabetic from '../assets/images/categories/diabetic.png';
import oil from '../assets/images/categories/oil.png';
import detergent from '../assets/images/categories/detergent.png';
import apple from '../assets/images/products/apple.png';
import malta from '../assets/images/products/malta.png';
import cabbage from '../assets/images/products/cabbage.png';
import lettuce from '../assets/images/products/lettuce.png';
import eggplant from '../assets/images/products/eggplant.png';
import potatoes from '../assets/images/products/potatoes.png';
import corn from '../assets/images/products/corn.png';
import cauliflower from '../assets/images/products/cauliflower.png';
import capsicum from '../assets/images/products/capsicum.png';
import chilli from '../assets/images/products/chilli.png';
import blue from '../assets/images/ads/blue.png';
import black from '../assets/images/ads/black.png';
import yellow from '../assets/images/ads/yellow.png';
import leftbanner from '../assets/images/leftbanner.jpg';
import righttopbanner from '../assets/images/righttopbanner.png';
import leftbottombanner from '../assets/images/leftbottombanner.png';

const categories = [
    { name: 'Fresh Fruit', img: fruits },
    { name: 'Fresh Vegetables', img: vegetables },
    { name: 'Meat & Fish', img: meat },
    { name: 'Snacks', img: snacks },
    { name: 'Beverages', img: beverages },
    { name: 'Health & Beauty', img: beauty },
    { name: 'Bread & Bakery', img: bread },
    { name: 'Baking Needs', img: baking },
    { name: 'Cooking', img: cooking },
    { name: 'Diabetic Food', img: diabetic },
    { name: 'Dish Detergents', img: detergent },
    { name: 'Oil', img: oil },
];
const products = [
    { name: 'Green Apple', price: '$14.00', img: apple, rating: 4, onSale: true },
    { name: 'Fresh Malta', price: '$10.00', img: malta, rating: 5 },
    { name: 'Chinese Cabbage', price: '$12.00', img: cabbage, rating: 3, onSale: true },
    { name: 'Green Lettuce', price: '$22.00', img: lettuce, rating: 4 },
    { name: 'Eggplant', price: '$5.00', img: eggplant, rating: 2 },
    { name: 'Big Potatoes', price: '$4.50', img: potatoes, rating: 3 },
    { name: 'Corn', price: '$3.00', img: corn, rating: 4 },
    { name: 'Fresh Cauliflower', price: '$18.00', img: cauliflower, rating: 5 },
    { name: 'Green Capsicum', price: '$18.00', img: capsicum, rating: 3, onSale: true },
    { name: 'Green Chili', price: '$18.00', img: chilli, rating: 4 },
];
function getTimeRemaining(deadline) {
    const total = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
}



function Home() {
    return (
        <div className="bg-white  font-poppins">
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
                </div>        <div className="flex-1 mx-4">
                    <input type="text" placeholder="Search products..." className="w-full border border-softPrimary rounded px-4 py-2 focus:outline-none" />
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
            <nav className="bg-[#333333] text-white text-sm px-4 md:px-10">
                <ul className="flex space-x-6 py-3 relative">
                    <li className="group relative cursor-pointer flex items-center gap-1">
                        <Link to="/" className="hover:underline">Home</Link>

                    </li>
                    <li className="group relative cursor-pointer flex items-center gap-1">
                        <Link to="/shop" className="hover:underline">Shop</Link>
                    </li>

                    <li className="group relative cursor-pointer flex items-center gap-1">
                        <Link to="/blog" className="hover:underline">Blog</Link>
                    </li>
                    <Link to="/about" className="hover:underline">About Us</Link>
                    <Link to="/contact" className="hover:underline">Contact Us</Link>
                </ul>
            </nav>
            {/* Hero Banner */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-10 mt-6">
                <div className="md:col-span-2 relative rounded-xl overflow-hidden p-6 flex items-center bg-cover bg-center  h-80 md:h-[415px]"
                    style={{ backgroundImage: `url(${leftbanner})` }}
                >
                    <div className="z-10">
                        <h1 className="text-4xl font-extrabold leading-tight text-hardPrimary">Fresh & Healthy Organic Food</h1>
                        <p className="mt-2 text-dark">Sign up now & get 10% OFF</p>
                        <button className="mt-4 bg-primary text-white px-6 py-2 rounded-full hover:bg-hardPrimary transition">Shop Now</button>
                    </div>
                </div>
                <div className="flex flex-col gap-4"
                >
                    <div
                        className="bg-[#F1F1F1] rounded-xl p-4 md:h-[200px] flex flex-col justify-center bg-cover bg-center bg-no-repeat text-left"
                        style={{ backgroundImage: `url(${righttopbanner})` }}
                    >
                        <h3 className="text-gray-700 text-sm font-medium">Summer Sale</h3>
                        <p className="text-2xl font-bold text-gray-900 mt-1">75% OFF</p>
                        <p className="text-sm text-gray-600 mt-1">Only Fruit & Vegetable</p>
                        <span className="text-sm font-semibold text-primary mt-3 hover:underline cursor-pointer">Shop Now →</span>
                    </div>

                    <div
                        className="bg-[#002603] rounded-xl p-4 text-center md:h-[200px] flex flex-col justify-center bg-cover bg-no-repeat bg-center"
                        style={{ backgroundImage: `url(${leftbottombanner})` }}
                    >
                        <h3 className="text-sm font-medium text-white">Best Deal</h3>
                        <p className="text-xl font-bold text-white mt-1">Special Products Deal of the Month</p>
                        <span className="text-sm font-semibold text-primary mt-3 hover:underline cursor-pointer">Shop Now →</span>
                    </div>

                </div>
            </section>

            {/* Feature Badges */}
            <section className="mt-10 px-4 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-hardPrimary">
                <div className="bg-[#F9F9F9] py-4 rounded shadow-sm flex flex-col items-center gap-2">
                    <Truck size={28} />
                    <span className="text-sm font-medium">Free Shipping</span>
                </div>
                <div className="bg-[#F9F9F9] py-4 rounded shadow-sm flex flex-col items-center gap-2">
                    <Headphones size={28} />
                    <span className="text-sm font-medium">24/7 Customer Support</span>
                </div>
                <div className="bg-[#F9F9F9] py-4 rounded shadow-sm flex flex-col items-center gap-2">
                    <ShieldCheck size={28} />
                    <span className="text-sm font-medium">Secure Payment</span>
                </div>
                <div className="bg-[#F9F9F9] py-4 rounded shadow-sm flex flex-col items-center gap-2">
                    <RotateCcw size={28} />
                    <span className="text-sm font-medium">Money Back Guarantee</span>
                </div>
            </section>


            {/* Categories */}
            <section className="mt-12 px-4 md:px-10">
                <h2 className="text-2xl font-semibold mb-6">Popular Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                    {categories.map((cat, i) => (
                        <div key={i} className="bg-white rounded-xl shadow hover:shadow-md text-center p-4 border">
                            <img src={cat.img} alt={cat.name} className="w-26 h-26 mx-auto mb-2 object-contain rounded-full" />
                            <p className="text-sm font-medium text-black">{cat.name}</p>
                        </div>
                    ))}
                </div>

            </section>

            {/* Products Grid */}
            <section className="mt-12 px-4 md:px-10">
                <h2 className="text-2xl font-semibold mb-6">Popular Products</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((product, i) => (
                        <div key={i} className="border rounded-xl p-4 hover:shadow relative bg-white flex flex-col justify-between h-full">
                            {product.onSale && (
                                <span className="absolute top-2 left-2 bg-danger text-white text-xs px-2 py-1 rounded-full">
                                    50% OFF
                                </span>
                            )}

                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full h-40 object-contain mx-auto"
                            />

                            <div className="mt-4 flex justify-between items-start">
                                <div className="text-left">
                                    <p className="text-sm font-medium text-gray-800">{product.name}</p>
                                    <p className="text-sm text-gray-500">{product.price}</p>
                                    <div className="flex gap-[2px] mt-1">
                                        {[...Array(5)].map((_, idx) =>
                                            idx < product.rating ? (
                                                <Star key={idx} size={14} fill="#facc15" stroke="#facc15" />
                                            ) : (
                                                <Star key={idx} size={14} className="text-gray-300" />
                                            )
                                        )}
                                    </div>
                                </div>

                                <button className="w-8 h-8 mt-1 rounded-full border border-gray-300 text-gray-600 hover:text-primary hover:border-primary transition flex items-center justify-center">
                                    <ShoppingCart size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* Flash Cards Section */}
            <section className="mt-16 px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1: Best Deals */}
                <div
                    className="relative rounded-xl overflow-hidden h-80 flex flex-col justify-center px-6 bg-cover bg-center text-white transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl animate-fade-up-zoom"
                    style={{ backgroundImage: `url(${blue})` }}>
                    <h3 className="text-lg md:text-xl font-semibold">Best Deals</h3>
                    <p className="text-xs md:text-sm mt-1">Sales of the month</p>
                    <div className="flex gap-2 text-center mt-4 text-xs md:text-sm font-semibold">
                        <div className="bg-white/20 px-2 py-1 rounded">12d</div>
                        <div className="bg-white/20 px-2 py-1 rounded">05h</div>
                        <div className="bg-white/20 px-2 py-1 rounded">43m</div>
                        <div className="bg-white/20 px-2 py-1 rounded">21s</div>
                    </div>
                    <button className="mt-6 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#00B207] hover:text-white transition flex items-center gap-2 w-fit">
                        Shop Now →
                    </button>


                </div>

                {/* Card 2: Low-Fat Meat */}
                <div
                    className="relative rounded-xl overflow-hidden h-80 flex flex-col justify-center px-6 bg-cover bg-center text-white transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl animate-fade-up-zoom"
                    style={{ backgroundImage: `url(${black})` }}>
                    <h3 className="text-lg md:text-xl font-semibold">85% Fat Free</h3>
                    <p className="text-xs md:text-sm mt-1">Low-Fat Meat</p>
                    <p className="text-sm mt-2">Starting at <span className="font-bold">$79.9</span></p>
                    <button className="mt-6 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#00B207] hover:text-white transition flex items-center gap-2 w-fit">
                        Shop Now →
                    </button>


                </div>

                {/* Card 3: Summer Sale */}
                <div
                    className="relative rounded-xl overflow-hidden h-80 flex flex-col justify-center px-6 bg-cover bg-center text-white transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl animate-fade-up-zoom" style={{ backgroundImage: `url(${yellow})` }}>
                    <h3 className="text-lg md:text-xl font-bold">Summer Sale</h3>
                    <p className="text-sm mt-1">100% Fresh Fruit</p>
                    <p className="text-sm mt-1 font-medium text-red-600">Up to 64% OFF</p>
                    <button className="mt-6 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#00B207] hover:text-white transition flex items-center gap-2 w-fit">
                        Shop Now →
                    </button>


                </div>
            </section>

            <section className="mt-16 px-4 md:px-10">
                <h2 className="text-2xl font-semibold mb-4 text-hardPrimary">Hot Deals</h2>

                <div
                    className="grid grid-cols-4 grid-rows-3 gap-0"
                    style={{ gridAutoFlow: 'dense' }}
                >
                    <div className="col-span-2 row-span-2 bg-white border border-gray-200 p-6 flex flex-col items-center text-center relative hover:outline hover:outline-2 hover:outline-green-600 transition">
                        {/* Discount Badge */}
                        <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full z-10">
                            50% OFF
                        </span>

                        {/* Product Image */}
                        <img src={products[0].img} alt={products[0].name} className="h-44 object-contain mb-4" />

                        {/* Product Name */}
                        <p className="text-lg font-semibold text-gray-800 mb-1">{products[0].name}</p>

                        {/* Price with strike-through */}
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-base font-semibold text-red-600">$7.00</span>
                            <span className="text-sm line-through text-gray-400">{products[0].price}</span>
                        </div>

                        {/* Rating */}
                        <div className="flex justify-center gap-[2px] mb-2">
                            {[...Array(5)].map((_, idx) =>
                                idx < products[0].rating ? (
                                    <Star key={idx} size={16} fill="#facc15" stroke="#facc15" />
                                ) : (
                                    <Star key={idx} size={16} className="text-gray-300" />
                                )
                            )}
                        </div>

                        {/* Timer */}
                        <div className="flex items-center gap-2 text-sm font-medium text-red-600 mb-4">
                            <Clock size={16} />
                            Offer ends in: <span className="font-semibold">02h 45m 09s</span>
                        </div>

                        {/* Add to Cart Button */}
                        <button className="w-full bg-primary hover:bg-hardPrimary text-white font-semibold py-2 rounded-full text-sm flex items-center justify-center gap-2">
                            <ShoppingCart size={16} />
                            Add to Cart
                        </button>
                    </div>


                    {/* Remaining Products */}
                    {products.slice(1, 9).map((product, i) => (
                        <div
                            key={i}
                            className="bg-white border border-gray-200 p-3 h-full flex flex-col justify-between hover:outline hover:outline-2 hover:outline-green-600 transition"
                        >
                            <img src={product.img} alt={product.name} className="h-20 object-contain mx-auto" />

                            <div className="mt-3 flex justify-between items-center">
                                <div className="text-left">
                                    <p className="text-sm font-medium text-gray-700">{product.name}</p>
                                    <p className="text-sm text-gray-500">{product.price}</p>
                                    <div className="flex gap-[2px] mt-1">
                                        {[...Array(5)].map((_, idx) =>
                                            idx < product.rating ? (
                                                <Star key={idx} size={12} fill="#facc15" stroke="#facc15" />
                                            ) : (
                                                <Star key={idx} size={12} className="text-gray-300" />
                                            )
                                        )}
                                    </div>
                                </div>

                                <button className="w-7 h-7 rounded-full border border-gray-300 text-gray-600 hover:text-primary hover:border-primary transition flex items-center justify-center">
                                    <ShoppingCart size={14} />
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            </section>


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
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">Shop</a></li>
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
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
}

export default Home;
