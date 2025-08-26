import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { FaStar, FaRegHeart, FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaShoppingCart } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";
import { FiMinus, FiPlus } from "react-icons/fi";
import logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import brand from '../assets/images/brandname.png';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === id);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);
    if (!product) return <div className="p-10 text-center">Product not found.</div>;

    return (
        <div className="font-poppins bg-white text-gray-800">
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
                    <Link to="/cart" className="hover:text-primary transition">
                        <FaShoppingCart size={20} />
                    </Link>
                    <Link to="/account" className="hover:text-primary transition">
                        <FaRegHeart size={20} />
                    </Link>
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

            {/* Product Info */}
            <div className="max-w-6xl mx-auto py-16 px-6 lg:px-10 grid md:grid-cols-2 gap-14">
                <div className="flex gap-6">
                    <div className="flex flex-col gap-3">
                        {[1, 2, 3, 4].map(i => (
                            <img key={i} src={product.img} alt="thumb" className="w-20 h-20 object-cover border-2 border-green-600 rounded-xl" />
                        ))}
                    </div>
                    <img src={product.img} alt="product" className="rounded-xl max-h-[450px] w-auto" />
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">{product.name}</h1>
                    <div className="flex items-center gap-3">
                        {[...Array(product.rating)].map((_, i) => <FaStar key={i} className="text-yellow-400 text-sm" />)}
                        <span className="text-sm text-gray-500">4 Reviews</span>
                        <span className="text-sm text-gray-400">SKU: 2,51,594</span>
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">In Stock</span>
                    </div>

                    <div className="text-xl space-x-4">
                        <del className="text-gray-400">$48.00</del>
                        <span className="text-green-600 font-semibold">${product.price}</span>
                        <span className="bg-red-100 text-red-600 text-sm px-2 py-1 rounded">64% Off</span>
                    </div>

                    <p className="text-sm leading-relaxed mt-2">{product.description || "Class aptent taciti sociosqu ad litora torquent per conubia nostra..."}</p>

                    <div className="flex items-center gap-3 mt-2">
                        <span>Brand:</span>
                        <img src={brand} alt="brand" className="h-6" />
                    </div>

                    <div className="flex items-center gap-3 mt-4">
                        <button className="border p-2 rounded-full"><FiMinus /></button>
                        <span>5</span>
                        <button className="border p-2 rounded-full"><FiPlus /></button>
                        <button className="ml-4 flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-full">
                            <FaShoppingCart /> Add to Cart
                        </button>
                        <button className="ml-2 text-xl text-green-600"><FaRegHeart /></button>
                    </div>

                    <div className="text-sm mt-6 space-y-1">
                        <p><strong>Category:</strong> {product.category}</p>
                    </div>

                    <div className="flex gap-4 items-center mt-4">
                        <span className="text-sm">Share item:</span>
                        {[FaFacebookF, FaTwitter, FaPinterestP, FaInstagram].map((Icon, i) => (
                            <Icon key={i} className="text-gray-500 hover:text-green-600 cursor-pointer" />
                        ))}
                    </div>
                </div>
            </div>

            {/* Description Tabs */}
            <div className="max-w-6xl mx-auto px-6 lg:px-10">
                <div className="flex gap-6 border-b pb-3">
                    <button className="text-green-600 font-semibold">Descriptions</button>
                    <button className="text-gray-500">Customer Feedback</button>
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-8 text-sm">
                    <div className="space-y-3 text-gray-600">
                        <p>Sed commodo aliquam dui ut porta. Fusce ipsum felis...</p>
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                            <li>100 g of fresh leaves provides...</li>
                            <li>Aliquam ac est at augue volutpat elementum.</li>
                            <li>Quisque nec enim eget sapien malesuada.</li>
                            <li>Pra in convallis odio volutpat felis posuere.</li>
                        </ul>
                    </div>
                    <div className="relative">
                        <img src="/your/discount-guy.jpg" alt="promo" className="rounded-xl" />
                        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow">
                            <IoMdPlay className="text-green-600 text-2xl" />
                        </button>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto mt-12 px-6 lg:px-10 grid md:grid-cols-2 gap-6 text-sm">
                    <div className="bg-gray-100 p-6 rounded-xl">
                        <p className="font-semibold">64% Discount</p>
                        <p>Save your 64% money with us!</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-xl">
                        <p className="font-semibold">100% Organic</p>
                        <p>100% Organic Vegetables</p>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            <div className="max-w-6xl mx-auto mt-16 px-6 lg:px-10">
                <h2 className="text-xl font-semibold mb-6">Related Products</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {products
                        .filter(p => p.category === product.category && p.id !== product.id)
                        .slice(0, 4)
                        .map((related) => (
                            <Link
                                to={`/product/${related.id}`}
                                key={related.id}
                                className="border p-4 rounded-xl hover:shadow hover:scale-[1.02] transition-transform"
                            >
                                <img src={related.img} alt={related.name} className="h-32 mx-auto mb-4" />
                                <p className="text-sm text-gray-600 text-center">{related.name}</p>
                                <p className="text-green-600 font-semibold text-center">${related.price}</p>
                            </Link>
                        ))}
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

export default ProductDetail;
