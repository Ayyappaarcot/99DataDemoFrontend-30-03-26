import { Link, useNavigate } from "react-router-dom";

export default function Footer() {

  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("userAuth");


  /* SCROLL TO TOP FUNCTION */

  const scrollTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };


  return (

    <footer className="bg-gray-900 text-white pt-14 pb-6">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">


        {/* ABOUT */}

        <div>

          <h3 className="text-2xl font-bold mb-4 text-white">

            JustKlick

          </h3>

          <p className="text-gray-400 leading-relaxed">

            India's trusted business dataset marketplace providing
            verified marketing databases across industries for lead
            generation and outreach campaigns.

          </p>


          {/* SOCIAL ICONS */}

          <div className="flex gap-4 mt-5">

            <button
              onClick={() =>
                window.open("https://linkedin.com", "_blank")
              }
              className="hover:text-blue-400"
            >
              LinkedIn
            </button>

            <button
              onClick={() =>
                window.open("https://instagram.com", "_blank")
              }
              className="hover:text-pink-400"
            >
              Instagram
            </button>

            <button
              onClick={() =>
                window.open("https://twitter.com", "_blank")
              }
              className="hover:text-blue-300"
            >
              Twitter
            </button>

          </div>

        </div>



        {/* CATEGORIES */}

        <div>

          <h3 className="font-semibold mb-4">

            Categories

          </h3>

          <ul className="space-y-2 text-gray-400">

            <li
              onClick={() => {
                navigate("/category/real-estate");
                scrollTop();
              }}
              className="hover:text-white cursor-pointer"
            >
              Real Estate Dataset
            </li>

            <li
              onClick={() => {
                navigate("/category/hospitals");
                scrollTop();
              }}
              className="hover:text-white cursor-pointer"
            >
              Hospitals Dataset
            </li>

            <li
              onClick={() => {
                navigate("/category/restaurants");
                scrollTop();
              }}
              className="hover:text-white cursor-pointer"
            >
              Restaurants Dataset
            </li>

            <li
              onClick={() => {
                navigate("/category/schools");
                scrollTop();
              }}
              className="hover:text-white cursor-pointer"
            >
              Schools Dataset
            </li>

          </ul>

        </div>



        {/* QUICK LINKS */}

        <div>

          <h3 className="font-semibold mb-4">

            Quick Links

          </h3>

          <ul className="space-y-2 text-gray-400">

            <li>

              <Link
                to="/about"
                onClick={scrollTop}
                className="hover:text-white"
              >
                About Us
              </Link>

            </li>


            <li>

              <Link
                to="/contact"
                onClick={scrollTop}
                className="hover:text-white"
              >
                Contact
              </Link>

            </li>


            {

              !isLoggedIn && (

                <>

                  <li>

                    <Link
                      to="/login"
                      onClick={scrollTop}
                      className="hover:text-white"
                    >
                      Login
                    </Link>

                  </li>


                  <li>

                    <Link
                      to="/register"
                      onClick={scrollTop}
                      className="hover:text-white"
                    >
                      Register
                    </Link>

                  </li>

                </>

              )

            }


            {

              isLoggedIn && (

                <li>

                  <button
                    onClick={() => {

                      localStorage.removeItem("userAuth");

                      navigate("/login");

                    }}
                    className="hover:text-white"
                  >
                    Logout

                  </button>

                </li>

              )

            }

          </ul>

        </div>



        {/* CONTACT */}

        <div>

          <h3 className="font-semibold mb-4">

            Contact

          </h3>

          <p className="text-gray-400">

            📍 Hyderabad, India

          </p>

          <p className="text-gray-400">

            ✉ support@JustKlick.com

          </p>

          <p className="text-gray-400">

            📞 +91 98765 43210

          </p>


          {/* SUPPORT BUTTON */}

          <button
            onClick={() => navigate("/contact")}
            className="mt-4 bg-[#082a57] px-4 py-2 rounded hover:bg-blue-900"
          >

            Contact Support

          </button>

        </div>

      </div>



      {/* BOTTOM BAR */}

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">

        © {new Date().getFullYear()} JustKlick. All rights reserved.

      </div>

    </footer>

  );

}