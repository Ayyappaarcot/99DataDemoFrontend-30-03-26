import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo11.png"; // ✅ correct import

export default function Navbar() {

  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (

    <nav className="sticky top-0 bg-white shadow z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}

        <Link to="/" className="flex items-center gap-2">

          <img
            src={logo}
            alt="JustKlick Logo"
            className="w-11"
          />

          <h1 className="text-2xl font-bold text-[#082a57]">
            <span className="text-blue-800">Just</span><span className="text-red-500">Klick</span>
          </h1>

        </Link>

        {/* SEARCH */}

        <div className="hidden md:flex w-[45%]">

          <input
            placeholder="Search datasets like Real Estate, Hospitals..."
            className="border w-full px-4 py-2 rounded-l-lg outline-none"
          />

          <button className="bg-[#082a57] text-white px-6 rounded-r-lg">
            Search
          </button>

        </div>

        {/* RIGHT MENU */}

        <div className="flex gap-6 items-center text-[#082a57] font-medium">

          <Link to="/">Home</Link>

          <Link to="/categories">Categories</Link>

          {user ? (
            <>
              <Link to="/wishlist">❤️ Wishlist</Link>
              <Link to="/cart">🛒 Cart</Link>

              <button
                onClick={logout}
                className="bg-[#082a57] text-white px-4 py-1 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>

              <Link
                to="/register"
                className="bg-[#082a57] text-white px-4 py-1 rounded-lg"
              >
                Sign Up
              </Link>
            </>
          )}

        </div>

      </div>

    </nav>

  );
}