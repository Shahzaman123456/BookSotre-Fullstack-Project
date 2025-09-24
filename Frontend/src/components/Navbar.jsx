import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // ✅ Use NavLink for SPA navigation
import Login from "./Login";
import { useAuth } from "../context/AuthicPrvider.jsx";
import Logout from "./logout.jsx";

const Navbar = () => {
  const { authUser } = useAuth();

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme;
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    }
    return "light";
  });

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Course", href: "/course" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
  ];

  return (
    <div
      className={`navbar shadow-lg px-4 lg:px-20 fixed top-0 right-0 left-0 z-50 ${
        sticky ? "bg-base-200 shadow-md duration-300 transition-all ease-in-out" : ""
      }`}
    >
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          {/* Mobile Dropdown Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border"
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg transition-colors ${
                      isActive ? "bg-primary text-white" : "hover:bg-base-200"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            {/* Search for mobile */}
            <li>
              <form onSubmit={handleSearch} className="mt-2">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Search books..."
                    className="input input-bordered w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </form>
            </li>

            {/* Login/Logout Mobile */}
            <li>
              {authUser ? (
                <Logout />
              ) : (
                <button
                  type="button"
                  className="btn btn-primary w-full justify-center mt-2"
                  onClick={() => document.getElementById("my_modal_1").showModal()}
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>

        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold normal-case btn btn-ghost hover:bg-transparent"
        >
          📚 BookStore
        </NavLink>
      </div>

      {/* Navbar Center - Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg transition-colors ${
                    isActive ? "bg-primary text-white" : "hover:bg-base-200"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-3">
        {/* Search Desktop */}
        <form onSubmit={handleSearch} className="form-control hidden lg:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search books..."
              className="px-3 py-2 border rounded-md w-64 pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 btn btn-ghost btn-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </form>

        {/* Theme Toggle */}
        <div className="flex items-center">
          <label className="swap swap-rotate btn btn-ghost btn-circle">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
              className="sr-only"
            />
            {/* Sun */}
            <svg
              className={`swap-on fill-current w-6 h-6 ${theme === "dark" ? "block" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41...Z" />
            </svg>
            {/* Moon */}
            <svg
              className={`swap-off fill-current w-6 h-6 ${theme === "light" ? "block" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14...Z" />
            </svg>
          </label>
        </div>

        {/* Login / Logout Desktop */}
        {authUser ? (
          <Logout />
        ) : (
          <>
            <button
              type="button"
              className="btn btn-primary hidden md:flex hover:btn-primary-focus transition-colors"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Login
            </button>
            <Login />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
