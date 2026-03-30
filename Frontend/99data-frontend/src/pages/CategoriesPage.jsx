import Navbar from "../home/Navbar";
import { useNavigate } from "react-router-dom";

export default function CategoriesPage() {

  const navigate = useNavigate();


  const categories = [

    { name: "Schools", icon: "🎓", count: 120 },
    { name: "Colleges", icon: "🏫", count: 95 },
    { name: "Hospitals", icon: "🏥", count: 210 },
    { name: "Doctors", icon: "👨‍⚕️", count: 340 },
    { name: "Restaurants", icon: "🍽️", count: 180 },
    { name: "Hotels", icon: "🏨", count: 140 },
    { name: "Real Estate", icon: "🏠", count: 260 },
    { name: "Builders", icon: "🏗️", count: 150 },
    { name: "Architects", icon: "📐", count: 75 },
    { name: "Interior Designers", icon: "🛋️", count: 65 },
    { name: "Retail Stores", icon: "🛍️", count: 310 },
    { name: "Gyms", icon: "🏋️", count: 120 },
    { name: "Beauty Parlours", icon: "💄", count: 190 },
    { name: "NGOs", icon: "🤝", count: 85 },
    { name: "Startups", icon: "🚀", count: 55 }

  ];


  /* CATEGORY CLICK HANDLER */

  const handleCategoryClick = (categoryName) => {

    const user = localStorage.getItem("user");

    if (!user) {

      alert("Please login to view datasets");

      navigate("/login");

      return;

    }

    navigate(`/category/${categoryName.toLowerCase().replace(/\s+/g, "-")}`);

  };


  return (

    <>

      <Navbar />


      <div className="max-w-7xl mx-auto px-6 py-16">


        {/* PAGE HEADER */}

        <div className="flex justify-between items-center mb-10">

          <h1 className="text-4xl font-bold text-[#082a57]">

            Explore Dataset Categories

          </h1>


          <button
            onClick={() => navigate("/")}
            className="text-[#082a57] font-semibold hover:underline"
          >

            ← Back to Home

          </button>

        </div>


        {/* CATEGORY GRID */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">


          {

            categories.map((item, index) => (

              <div
                key={index}

                onClick={() => handleCategoryClick(item.name)}

                className="bg-white shadow rounded-xl p-6 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition duration-200 flex flex-col justify-between"
              >


                {/* ICON */}

                <div className="text-4xl mb-4">

                  {item.icon}

                </div>


                {/* NAME */}

                <h3 className="text-lg font-semibold text-[#082a57]">

                  {item.name}

                </h3>


                {/* DATASET COUNT */}

                <p className="text-sm text-gray-500 mt-2">

                  {item.count}+ datasets available

                </p>


                {/* BUTTON */}

                <button className="mt-4 bg-[#082a57] text-white py-2 rounded hover:bg-blue-900 text-sm">

                  Browse Datasets →

                </button>


              </div>

            ))

          }

        </div>


        {/* FOOT NOTE */}

        <p className="text-center text-gray-400 mt-12 text-sm">

          Select a category to preview available datasets before purchase.

        </p>


      </div>

    </>

  );

}