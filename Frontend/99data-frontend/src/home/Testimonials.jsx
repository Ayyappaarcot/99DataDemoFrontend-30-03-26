import { useEffect, useState } from "react";

export default function Testimonials() {

  const reviews = [

    {
      id: 1,
      name: "Ravi Kumar",
      role: "Digital Marketing Executive",
      rating: 5,
      text:
        "Dataset quality is excellent and very useful for marketing campaigns.",
      avatar: "https://i.pravatar.cc/100?img=12"
    },

    {
      id: 2,
      name: "Priya Sharma",
      role: "Business Analyst",
      rating: 5,
      text:
        "Download was instant after payment. Highly recommended platform.",
      avatar: "https://i.pravatar.cc/100?img=5"
    },

    {
      id: 3,
      name: "Suresh Reddy",
      role: "Sales Manager",
      rating: 4,
      text:
        "Accurate and updated business database. Worth the price.",
      avatar: "https://i.pravatar.cc/100?img=8"
    }

  ];


  /* AUTO SLIDER FOR MOBILE */

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentIndex((prev) =>
        prev === reviews.length - 1 ? 0 : prev + 1
      );

    }, 4000);

    return () => clearInterval(interval);

  }, []);


  return (

    <section className="bg-gray-50 py-16">

      <div className="max-w-7xl mx-auto px-6">


        {/* TITLE */}

        <div className="text-center mb-12">

          <h2 className="text-3xl font-bold text-[#082a57]">

            What Our Customers Say

          </h2>

          <p className="text-gray-500 mt-2">

            Trusted by marketers, recruiters & businesses across India

          </p>

        </div>


        {/* DESKTOP GRID */}

        <div className="hidden md:grid md:grid-cols-3 gap-6">

          {

            reviews.map((review) => (

              <div
                key={review.id}
                className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition"
              >


                {/* RATING */}

                <div className="text-yellow-400 mb-2">

                  {"⭐".repeat(review.rating)}

                </div>


                {/* TEXT */}

                <p className="text-gray-600 mb-5">

                  "{review.text}"

                </p>


                {/* USER */}

                <div className="flex items-center gap-3">

                  <img
                    src={review.avatar}
                    alt="avatar"
                    className="w-12 h-12 rounded-full"
                  />

                  <div>

                    <h4 className="font-semibold text-[#082a57]">

                      {review.name}

                    </h4>

                    <p className="text-gray-400 text-sm">

                      {review.role}

                    </p>

                  </div>

                </div>


                {/* VERIFIED LABEL */}

                <p className="text-xs text-green-600 mt-4">

                  ✔ Verified Buyer

                </p>

              </div>

            ))

          }

        </div>


        {/* MOBILE SLIDER */}

        <div className="md:hidden">

          <div className="bg-white rounded-xl shadow p-6 text-center">

            <div className="text-yellow-400 mb-2">

              {"⭐".repeat(reviews[currentIndex].rating)}

            </div>

            <p className="text-gray-600 mb-5">

              "{reviews[currentIndex].text}"

            </p>

            <img
              src={reviews[currentIndex].avatar}
              alt="avatar"
              className="w-14 h-14 rounded-full mx-auto mb-2"
            />

            <h4 className="font-semibold text-[#082a57]">

              {reviews[currentIndex].name}

            </h4>

            <p className="text-gray-400 text-sm">

              {reviews[currentIndex].role}

            </p>

            <p className="text-xs text-green-600 mt-3">

              ✔ Verified Buyer

            </p>

          </div>


          {/* DOTS */}

          <div className="flex justify-center gap-2 mt-4">

            {

              reviews.map((_, index) => (

                <div
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    index === currentIndex
                      ? "bg-[#082a57]"
                      : "bg-gray-300"
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