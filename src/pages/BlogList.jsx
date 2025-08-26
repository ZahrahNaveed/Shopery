import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, ChevronDown } from 'lucide-react';
import logo from '../assets/images/logo.jpg';
import blogs from '../data/blogs';

const BlogList = () => {
    return (
        <div className="font-poppins bg-white text-hardPrimary">
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

            {/* Blog Content */}
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6 text-black">
                {/* Sidebar */}
                <aside className="space-y-6">
                    <button className="border border-gray-300 px-4 py-2 text-sm rounded flex items-center gap-2 hover:border-primary hover:text-primary transition">
                        Filter <ChevronDown size={16} />
                    </button>

                    <div>
                        <h3 className="font-semibold mb-2">Top Categories</h3>
                        <ul className="space-y-1 text-sm">
                            {["Fresh Fruit", "Vegetables", "Cooking", "Snacks", "Beverages", "Beauty & Health", "Bread & Bakery"].map((label, idx) => {
                                const counts = [134, 150, 45, 24, 19, 12, 10];
                                return (
                                    <li key={idx} className="flex justify-between cursor-pointer hover:text-primary transition">
                                        <span>{label}</span>
                                        <span className="text-gray-500">({counts[idx]})</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Popular Tag</h3>
                        <div className="flex flex-wrap gap-2 text-xs">
                            {["Healthy", "Low fat", "Vegetarian", "Bread", "Vitamins", "Snacks", "Tiffin"].map((tag) => (
                                <span key={tag} className="border border-gray-300 px-2 py-1 rounded-full cursor-pointer hover:border-primary hover:text-primary transition">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Our Gallery</h3>
                        <div className="grid grid-cols-3 gap-2">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="bg-gray-200 aspect-square"></div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Recently Added</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex gap-2 items-center">
                                <div className="w-12 h-12 bg-gray-200"></div>
                                <div>
                                    <p className="hover:text-primary cursor-pointer transition">Post title here...</p>
                                    <p className="text-xs text-gray-500">Apr 25, 2025</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Main Blog Grid */}
                <main className="md:col-span-3 space-y-8">
                    <div className="flex justify-between items-center text-sm">
                        <p>{blogs.length} Results Found</p>
                        <div>
                            Sort by: <span className="font-medium">Latest</span>
                        </div>
                    </div>

                    {/* Blog Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {blogs.map((blog) => (
                            <Link
                                to={`/blog/${blog.id}`}
                                key={blog.id}
                                className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
                            >
                                <div className="relative">
                                    <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover" />
                                    <span className="absolute top-2 left-2 bg-white px-2 py-1 text-xs font-semibold rounded-full">{blog.date}</span>
                                </div>
                                <div className="p-4">
                                    <p className="text-xs text-gray-500 mb-1">
                                        {blog.category} &nbsp; | &nbsp; By {blog.author} &nbsp; | &nbsp; {blog.comments} Comments
                                    </p>
                                    <h3 className="font-semibold text-base mb-2 leading-tight">{blog.title}</h3>
                                    <span className="text-primary text-sm font-semibold">Read More →</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center gap-2 mt-6">
                        {[1, 2, 3, 4, 5].map((n) => (
                            <button key={n} className={`px-3 py-1 border rounded ${n === 1 ? 'bg-primary text-white' : 'bg-white text-black'}`}>{n}</button>
                        ))}
                    </div>
                </main>
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

export default BlogList;