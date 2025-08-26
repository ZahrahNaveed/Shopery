import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import logo from '../assets/images/logo.jpg';
import blogs from '../data/blogs';

const SingleBlog = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <p className="p-10">Blog not found.</p>;

  return (
    <div className="font-poppins bg-white text-hardPrimary">
      {/* Topbar */}
      <div className="bg-hardPrimary text-white text-sm py-2 px-4 flex justify-between">
        <div>Store Location: Pakistan</div>
        <div>
          <Link to="/login" className="hover:underline mr-4">Login</Link>
          <Link to="/register" className="hover:underline">Sign Up</Link>
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
            placeholder="Search"
            className="w-full border border-softPrimary rounded px-4 py-2 focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-4 text-dark">
          <ShoppingCart size={20} className="hover:text-primary transition" />
          <User size={20} className="hover:text-primary transition" />
        </div>
      </header>

      {/* Nav Links */}
      <nav className="bg-[#333333] text-white text-sm px-4 md:px-10">
        <ul className="flex space-x-6 py-3">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/shop" className="hover:underline">Shop</Link></li>
          <li><Link to="/blog" className="hover:underline">Blog</Link></li>
          <li><Link to="/about" className="hover:underline">About Us</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <main className="md:col-span-3">
          <img src={blog.image} alt={blog.title} className="w-full rounded-md mb-6" />
          <div className="text-sm text-gray-500 mb-2">{blog.category} &nbsp; | &nbsp; By {blog.author} &nbsp; | &nbsp; {blog.comments} Comments</div>
          <h1 className="text-2xl font-semibold mb-4 leading-tight">{blog.title}</h1>
          <p className="mb-4 text-gray-700">{blog.content}</p>
        </main>

        {/* Sidebar */}
        <aside className="space-y-6">
          <input type="text" placeholder="Search..." className="border px-4 py-2 rounded w-full" />
          {/* You can add top categories, tags, etc., here as needed */}
        </aside>
      </div>

      {/* Footer */}
      <footer className="bg-hardPrimary text-white mt-20 py-10 px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Shopery</h3>
            <p>Fresh grocery delivered to your doorstep.</p>
            <p className="mt-2 text-sm">(219) 555-0114</p>
            <p className="text-sm">proxy@gmail.com</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">My Account</h4>
            <ul className="space-y-1 text-sm">
              <li>Order History</li>
              <li>Wishlist</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Helps</h4>
            <ul className="space-y-1 text-sm">
              <li>Contact</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Categories</h4>
            <ul className="space-y-1 text-sm">
              <li>Fruit & Vegetables</li>
              <li>Meat & Fish</li>
              <li>Bread & Bakery</li>
              <li>Beauty & Health</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-xs mt-6">&copy; 2025 Shopery. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default SingleBlog;
