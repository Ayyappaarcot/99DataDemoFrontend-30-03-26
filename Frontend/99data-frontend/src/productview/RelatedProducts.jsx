import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RelatedProducts() {

  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("user");

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );


  /* RELATED DATASETS */

  const products = [

    {
      id: 1,
      title: "Colleges Database",
      price: 599,
      rows: 120,
      category: "colleges"
    },

    {
      id: 2,
      title: "Hospitals Database",
      price: 699,
      rows: 150,
      category: "hospitals"
    },

    {
      id: 3,
      title: "Restaurants Database",
      price: 499,
      rows: 200,
      category: "restaurants"
    },

    {
      id: 4,
      title: "Real Estate Database",
      price: 799,
      rows: 180,
      category: "real-estate"
    }

  ];


  /* ADD TO CART */

  const addToCart = (item) => {

    if (!isLoggedIn) {

      alert("Please login first 🔐");

      navigate("/login");

      return;

    }

    const exists = cart.find(i => i.id === item.id);

    if (exists) {

      alert("Already in cart 🛒");

      return;

    }

    const updatedCart = [...cart, item];

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert("Added to cart ✅");

  };


  /* ADD TO WISHLIST */

  const addToWishlist = (item) => {

    if (!isLoggedIn) {

      alert("Please login first ❤️");

      navigate("/login");

      return;

    }

    const exists = wishlist.find(i => i.id === item.id);

    if (exists) {

      alert("Already in wishlist ❤️");

      return;

    }

    const updatedWishlist = [...wishlist, item];

    setWishlist(updatedWishlist);

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    alert("Added to wishlist ❤️");

  };


  return (

    <section className="mt-16">


      {/* TITLE */}

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-[#082a57]">

          Related Datasets

        </h2>

        <p className="text-gray-500">

          Customers also purchased these datasets

        </p>

      </div>



      {/* GRID */}

      <div className="grid md:grid-cols-4 gap-6">

        {

          products.map(item => (

            <div
              key={item.id}
              className="bg-white shadow rounded-xl p-5 hover:shadow-xl transition"
            >


              {/* TITLE */}

              <h3 className="font-semibold text-[#082a57] mb-1">

                {item.title}

              </h3>


              {/* PRICE */}

              <p className="text-gray-500 mb-2">

                ₹{item.price}

              </p>


              {/* ROW COUNT */}

              <p className="text-xs text-gray-400 mb-4">

                {item.rows} rows available

              </p>


              {/* BUTTONS */}

              <div className="flex gap-2">

                <button
                  onClick={() =>
                    navigate(`/category/${item.category}`)
                  }
                  className="flex-1 bg-[#082a57] text-white py-2 rounded hover:bg-blue-900"
                >

                  Preview

                </button>


                <button
                  onClick={() => addToCart(item)}
                  className="flex-1 border border-[#082a57] text-[#082a57] py-2 rounded hover:bg-[#082a57] hover:text-white"
                >

                  Add Cart

                </button>


                <button
                  onClick={() => addToWishlist(item)}
                  className="px-3 border rounded hover:bg-gray-100"
                >

                  ❤️

                </button>

              </div>

            </div>

          ))

        }

      </div>

    </section>

  );

}