import { useNavigate } from "react-router-dom";

export default function Categories() {

  const navigate = useNavigate();

  const categories = [

    { name: "Real Estate", icon: "https://cdn-icons-png.flaticon.com/512/69/69524.png" },

    { name: "Restaurants", icon: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png" },

    { name: "Hospitals / Clinics", icon: "https://cdn-icons-png.flaticon.com/512/2966/2966488.png" },

    { name: "Hotels / Lodges", icon: "https://cdn-icons-png.flaticon.com/512/139/139899.png" },

    { name: "Education Institutes", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png" },

    { name: "Builders", icon: "https://cdn-icons-png.flaticon.com/512/1570/1570887.png" },

    { name: "Property Dealers", icon: "https://cdn-icons-png.flaticon.com/512/942/942748.png" },

    { name: "Apartment Developers", icon: "https://cdn-icons-png.flaticon.com/512/619/619153.png" },

    { name: "Plot Sellers", icon: "https://cdn-icons-png.flaticon.com/512/809/809957.png" },

    { name: "Cafes", icon: "https://cdn-icons-png.flaticon.com/512/924/924514.png" },

    { name: "Catering Services", icon: "https://cdn-icons-png.flaticon.com/512/5787/5787100.png" },

    { name: "Doctors", icon: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png" },

    { name: "Diagnostic Centers", icon: "https://cdn-icons-png.flaticon.com/512/2785/2785544.png" },

    { name: "Resorts", icon: "https://cdn-icons-png.flaticon.com/512/139/139899.png" },

    { name: "Guest Houses", icon: "https://cdn-icons-png.flaticon.com/512/235/235889.png" },

    { name: "Schools", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png" },

    { name: "Colleges", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png" },

    { name: "Coaching Centers", icon: "https://cdn-icons-png.flaticon.com/512/201/201623.png" },

    { name: "Skill Training Institutes", icon: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png" },

    { name: "Architects", icon: "https://cdn-icons-png.flaticon.com/512/4202/4202843.png" },

    { name: "Interior Designers", icon: "https://cdn-icons-png.flaticon.com/512/1046/1046875.png" }

  ];

  return (

    <section className="py-16 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}

        <div className="flex justify-between items-center mb-10">

          <h2 className="text-3xl font-bold text-[#082a57]">

            Categories

          </h2>

          <button
            onClick={() => navigate("/categories")}
            className="text-[#082a57] font-semibold hover:underline"
          >

            View All →

          </button>

        </div>


        {/* CATEGORY GRID */}

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {

            categories.map((item, i) => (

              <div

                key={i}

                onClick={() =>
                  navigate(`/category/${item.name.toLowerCase().replace(/\s+/g, "-")}`)
                }

                className="bg-white shadow rounded-xl p-5 hover:shadow-xl hover:-translate-y-1 transition cursor-pointer flex flex-col justify-between"

              >

                {/* ICON */}

                <img
                  src={item.icon}
                  className="w-10 mb-4"
                  alt="category icon"
                />


                {/* CATEGORY NAME */}

                <p className="text-[#082a57] font-semibold text-sm">

                  {item.name}

                </p>


                {/* ARROW */}

                <div className="mt-3 text-right text-gray-400">

                  →

                </div>

              </div>

            ))

          }

        </div>

      </div>

    </section>

  );

}