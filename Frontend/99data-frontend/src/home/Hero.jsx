import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {

  const navigate = useNavigate();


  /* HERO SLIDES */

  const slides = [

    {
      title: "Special 50% Off",
      subtitle: "for our student community",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop"
    },

    {
      title: "Verified Business Database",
      subtitle: "Access 30M+ contacts instantly",
      image:
        "https://images.unsplash.com/photo-1551281044-8b7b8b8c5e3b?q=80&w=1200&auto=format&fit=crop"
    },

    {
      title: "Marketing Ready Leads",
      subtitle: "Boost your outreach campaigns",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop"
    }

  ];


  const [current, setCurrent] = useState(0);


  /* AUTO SLIDER */

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );

    }, 4000);

    return () => clearInterval(timer);

  }, []);


  /* SLIDE NAVIGATION */

  const nextSlide = () => {

    setCurrent(current === slides.length - 1 ? 0 : current + 1);

  };

  const prevSlide = () => {

    setCurrent(current === 0 ? slides.length - 1 : current - 1);

  };


  /* LOGIN CHECK FUNCTION */

  const checkLoginAndNavigate = (path) => {

    const user = localStorage.getItem("user");

    if (!user) {

      alert("Please login first");

      navigate("/login");

      return;

    }

    navigate(path);

  };


  /* QUICK CATEGORY BUTTONS */

  const quickCategories = [

    "schools",
    "hospitals",
    "restaurants",
    "real-estate",
    "colleges",
    "doctors"

  ];


  return (

    <section className="bg-[#082a57] text-white py-16 relative">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">


        {/* LEFT CONTENT */}

        <div>

          <p className="tracking-[6px] mb-3">

            DATASET MARKETPLACE

          </p>


          <h1 className="text-5xl font-bold mb-4">

            {slides[current].title}

          </h1>


          <p className="mb-6 text-lg">

            {slides[current].subtitle}

          </p>


          {/* MAIN BUTTON */}

          <button
            onClick={() => navigate("/categories")}
            className="bg-white text-[#082a57] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >

            View All Categories →

          </button>


          {/* QUICK CATEGORY BUTTONS */}

          <div className="flex flex-wrap gap-3 mt-6">

            {

              quickCategories.map((item, index) => (

                <button
                  key={index}

                  onClick={() =>
                    checkLoginAndNavigate(`/category/${item}`)
                  }

                  className="bg-white/20 px-4 py-2 rounded hover:bg-white hover:text-[#082a57] transition"
                >

                  {item.replace("-", " ").toUpperCase()}

                </button>

              ))

            }

          </div>

        </div>


        {/* RIGHT IMAGE SLIDER */}

        <div className="relative">

          <img
            src={slides[current].image}

            alt="dataset banner"

            className="rounded-xl shadow-lg w-full h-[350px] object-cover transition-all duration-500"
          />


          {/* LEFT ARROW */}

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white text-[#082a57] px-3 py-2 rounded-full shadow hover:bg-gray-100"
          >

            ←

          </button>


          {/* RIGHT ARROW */}

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white text-[#082a57] px-3 py-2 rounded-full shadow hover:bg-gray-100"
          >

            →

          </button>


          {/* SLIDER DOTS */}

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">

            {

              slides.map((_, index) => (

                <div
                  key={index}

                  onClick={() => setCurrent(index)}

                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    current === index
                      ? "bg-white"
                      : "bg-white/40"
                  }`}
                />

              ))

            }

          </div>

        </div>

      </div>

    </section>

  );

}