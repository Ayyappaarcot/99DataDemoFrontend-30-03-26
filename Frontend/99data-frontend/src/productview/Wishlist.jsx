import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../home/Navbar";

export default function Wishlist() {

  const [wishlistItems, setWishlistItems] = useState([]);

  const navigate = useNavigate();


  /* LOAD DATA */

  useEffect(() => {

    const savedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlistItems(savedWishlist);

  }, []);


  /* REMOVE ITEM */

  const removeItem = (index) => {

    const updatedWishlist =
      wishlistItems.filter((_, i) => i !== index);

    setWishlistItems(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

  };


  /* MOVE TO CART */

  const moveToCart = (item) => {

    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];


    const exists = cart.find(
      (dataset) => dataset.id === item.id
    );


    if (exists) {

      alert("Already in cart 🛒");

      return;

    }


    cart.push(item);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert("Moved to cart ✅");

  };


  return (

    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-3xl font-bold text-[#082a57] mb-6">

          Wishlist ❤️

        </h1>


        {

          wishlistItems.length === 0 ? (

            <div className="text-gray-500">

              No datasets saved yet.

              <button
                onClick={() => navigate("/")}
                className="block mt-4 text-[#082a57] underline"
              >

                Browse datasets →

              </button>

            </div>

          ) : (

            <div className="space-y-5">

              {

                wishlistItems.map((item, index) => (

                  <div
                    key={index}
                    className="flex flex-col md:flex-row gap-4 justify-between items-center shadow rounded-lg p-5 hover:shadow-lg"
                  >


                    {/* LEFT */}

                    <div className="flex gap-4 items-center">


                      <img
                        src={
                          item.image ||
                          "https://via.placeholder.com/120"
                        }
                        className="w-24 h-20 object-cover rounded"
                        alt="dataset"
                      />


                      <div>

                        <h3 className="font-semibold text-[#082a57]">

                          {item.name}

                        </h3>

                        <p className="text-gray-500 text-sm">

                          Location: {item.location}

                        </p>

                        <p className="text-gray-500 text-sm">

                          Records: {item.records}

                        </p>

                        <p className="font-semibold">

                          ₹{item.price}

                        </p>

                      </div>

                    </div>


                    {/* BUTTONS */}

                    <div className="flex gap-3">

                      <button
                        onClick={() => moveToCart(item)}
                        className="bg-[#082a57] text-white px-4 py-2 rounded hover:bg-blue-900"
                      >

                        Add to Cart

                      </button>


                      <button
                        onClick={() => removeItem(index)}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      >

                        Remove

                      </button>

                    </div>

                  </div>

                ))

              }

            </div>

          )

        }

      </div>

    </>

  );

}