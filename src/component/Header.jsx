import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">ShopEase</div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M4 6h16M4 12h16m-7 6h7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                {/* Search Bar */}
                <div className="hidden lg:flex items-center bg-gray-100 rounded-lg px-4 py-2 w-1/3">
                    <svg className="text-gray-500" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="bg-transparent outline-none ml-2 w-full"
                    />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <a href="#" className="hover:text-gray-900">Shop</a>
                    <a href="#" className="hover:text-gray-900">Categories</a>
                    <a href="#" className="hover:text-gray-900">Deals</a>
                    <a href="#" className="hover:text-gray-900">Contact</a>
                </nav>

                {/* Icons */}
                <div className="hidden md:flex space-x-4">
                    <button className="relative p-2 text-gray-700 hover:text-gray-900">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M3 3h2l3 7h10l3-7h2"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <circle cx="9" cy="21" r="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="20" cy="21" r="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className="p-2 text-gray-700 hover:text-gray-900 border rounded-full">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 14c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md py-4 px-6">
                    <nav className="flex flex-col space-y-4 text-gray-700 font-medium">
                        <a href="#" className="hover:text-gray-900">Shop</a>
                        <a href="#" className="hover:text-gray-900">Categories</a>
                        <a href="#" className="hover:text-gray-900">Deals</a>
                        <a href="#" className="hover:text-gray-900">Contact</a>
                    </nav>
                </div>
            )}

        </header>
    );
};

export default Header;