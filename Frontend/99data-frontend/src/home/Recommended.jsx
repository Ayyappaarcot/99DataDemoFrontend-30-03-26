import { useNavigate } from "react-router-dom";

export default function Recommended() {

  const navigate = useNavigate();


  /* DATASETS */

  const datasets = [

    {
      id: 1,
      name: "Architects Database",
      category: "architects",
      location: "Andhra Pradesh",
      records: 500,
      price: 499,
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200"
    },

    {
      id: 2,
      name: "Restaurants Database",
      category: "restaurants",
      location: "Telangana",
      records: 720,
      price: 699,
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200"
    },

    {
      id: 3,
      name: "Hospitals Database",
      category: "hospitals",
      location: "South India",
      records: 420,
      price: 599,
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200"
    }

  ];


  /* LOGIN CHECK */

  const requireLogin = () => {

    const user = localStorage.getItem("user");

    if (!user) {

      alert("Please login first");

      navigate("/login");

      return false;

    }

    return true;

  };


  /* ADD TO CART */

  const addToCart = (item) => {

    if (!requireLogin()) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(item);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart 🛒");

  };


  /* ADD TO WISHLIST */

  const addToWishlist = (item) => {

    if (!requireLogin()) return;

    const wishlist =

      JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist.push(item);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert("Added to wishlist ❤️");

  };


  /* PREVIEW DATASET */

  const previewDataset = (category) => {

    if (!requireLogin()) return;

    navigate(`/category/${category}`);

  };


  return (

    <section className="py-16 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">


        {/* TITLE */}

        <div className="flex justify-between items-center mb-10">

          <h2 className="text-3xl font-bold text-[#082a57]">

            Recommended For You

          </h2>


          <button
            onClick={() => navigate("/categories")}
            className="text-[#082a57] font-semibold hover:underline"
          >

            View All →

          </button>

        </div>


        {/* DATASET GRID */}

        <div className="grid md:grid-cols-3 gap-6">

          {

            datasets.map((item) => (

              <div
                key={item.id}
                className="bg-white shadow rounded-xl overflow-hidden hover:shadow-xl transition"
              >


                {/* IMAGE */}

                <img
                  src={item.image}
                  alt="dataset"
                  className="h-48 w-full object-cover"
                />


                {/* CONTENT */}

                <div className="p-5">


                  {/* TITLE */}

                  <h3 className="font-semibold text-[#082a57]">

                    {item.name}

                  </h3>


                  {/* LOCATION */}

                  <p className="text-gray-500 text-sm">

                    Location: {item.location}

                  </p>


                  {/* RECORD COUNT */}

                  <p className="text-gray-500 text-sm">

                    Records: {item.records}

                  </p>


                  {/* PRICE */}

                  <p className="font-semibold text-[#082a57] mt-1">

                    ₹{item.price}

                  </p>


                  {/* BUTTONS */}

                  <div className="flex gap-2 mt-4">


                    {/* PREVIEW */}

                    <button
                      onClick={() =>
                        previewDataset(item.category)
                      }
                      className="flex-1 bg-gray-200 py-2 rounded hover:bg-gray-300"
                    >

                      Preview

                    </button>


                    {/* ADD CART */}

                    <button
                      onClick={() => addToCart(item)}
                      className="flex-1 bg-[#082a57] text-white py-2 rounded hover:bg-blue-900"
                    >

                      Add Cart

                    </button>


                    {/* WISHLIST */}

                    <button
                      onClick={() =>
                        addToWishlist(item)
                      }
                      className="px-4 border rounded hover:bg-gray-100"
                    >

                      ❤️

                    </button>

                  </div>


                  {/* DATASET COUNT BADGE */}

                  <p className="text-xs text-gray-400 mt-2">

                    Verified dataset • Preview available

                  </p>

                </div>

              </div>

            ))

          }

        </div>

      </div>

    </section>

  );

}