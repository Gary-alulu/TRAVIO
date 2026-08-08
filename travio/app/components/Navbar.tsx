"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    destinations: false,
    pages: false
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (menu: keyof typeof isDropdownOpen) => {
    setIsDropdownOpen(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const destinations = ["Paris", "Tokyo", "New York", "Bali", "Rome"];
  const pages = ["Gallery", "Testimonials", "FAQ", "Contact", "About Us", "Blogs"];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-[#FFF8F0] text-[#3E2C23] ${isScrolled ? "bg-opacity-90 shadow-lg" : "bg-opacity-80"}`}>
      <div className="container mx-auto px-6 py-4 flex items-center">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl text-primary">
          Travio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 mx-auto">
          <Link href="/" className="hover:bg-[rgba(211,188,160,0.2)] transition-colors rounded-md px-3 py-1">
            Home
          </Link>
          <Link href="/bookings" className="hover:bg-[rgba(211,188,160,0.2)] transition-colors rounded-md px-3 py-1">
            Bookings
          </Link>
          
          {/* Destinations Dropdown */}
          <div className="relative group" onMouseEnter={() => setIsDropdownOpen(prev => ({ ...prev, destinations: true }))} onMouseLeave={() => setIsDropdownOpen(prev => ({ ...prev, destinations: false }))}>
            <Link href="/destinations" className="flex items-center hover:bg-[rgba(211,188,160,0.2)] transition-colors rounded-md px-3 py-1 cursor-pointer">
              Destinations
            </Link>
            
            <AnimatePresence>
              {isDropdownOpen.destinations && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                >
                  {destinations.map((item) => (
                    <Link 
                      key={item} 
                      href={`/destinations/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm transition-transform hover:translate-x-1"
                    >
                      {item}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Pages Dropdown */}
          <div className="relative group" onMouseEnter={() => setIsDropdownOpen(prev => ({ ...prev, pages: true }))} onMouseLeave={() => setIsDropdownOpen(prev => ({ ...prev, pages: false }))}>
            <div className="flex items-center hover:bg-[rgba(211,188,160,0.2)] transition-colors rounded-md px-3 py-1 cursor-pointer">
              Pages
            </div>
            
            <AnimatePresence>
              {isDropdownOpen.pages && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  {pages.map((item) => (
                    <Link 
                      key={item} 
                      href={item === 'About Us' ? '/about' : item === 'Blogs' ? '/blog' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm transition-transform hover:translate-x-1"
                    >
                      {item}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
        </div>

        {/* Contact Us Button */}
        <Link 
          href="/contact"
          className="hidden md:inline-block bg-[#3E2C23] hover:bg-[#4d382c] text-[#E6D5B8] px-4 py-2 rounded-full transition-colors"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#3E2C23] focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg z-50 md:hidden"
          >
            <div className="flex justify-end p-4">
              <button 
                className="text-gray-700 focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="px-4 py-2 flex flex-col space-y-4">
              <Link href="/" className="block py-2 hover:text-primary" onClick={toggleMobileMenu}>
                Home
              </Link>
              <Link href="/bookings" className="block py-2 hover:text-primary" onClick={toggleMobileMenu}>
                Bookings
              </Link>
              
              <div>
                <button 
                  onClick={() => toggleDropdown("destinations")}
                  className="flex items-center py-2 hover:text-primary w-full"
                >
                  Destinations
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {isDropdownOpen.destinations && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 overflow-hidden"
                    >
                      {destinations.map((item) => (
                        <Link 
                          key={item} 
                          href={`/destinations/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block py-2 text-sm hover:text-primary"
                          onClick={toggleMobileMenu}
                        >
                          {item}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div>
                <button 
                  onClick={() => toggleDropdown("pages")}
                  className="flex items-center py-2 hover:text-primary w-full"
                >
                  Pages
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {isDropdownOpen.pages && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 overflow-hidden"
                    >
                      {pages.map((item) => (
                        <Link 
                          key={item} 
                          href={item === 'About Us' ? '/about' : item === 'Blogs' ? '/blog' : `/${item.toLowerCase()}`}
                          className="block py-2 text-sm hover:text-primary"
                          onClick={toggleMobileMenu}
                        >
                          {item}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;