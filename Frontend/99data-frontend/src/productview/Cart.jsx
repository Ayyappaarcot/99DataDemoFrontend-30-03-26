import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../home/Navbar";

export default function Cart() {

  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();


  /* LOAD CART */

  useEffect(() => {

    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCartItems(savedCart);

  }, []);


  /* REMOVE ITEM */

  const removeItem = (index) => {

    const updatedCart =
      cartItems.filter((_, i) => i !== index);

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

  };


  /* TOTAL PRICE */

  const totalPrice = cartItems.reduce(

    (sum, item) => sum + (item.price || 0),

    0

  );


  return (

    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-3xl font-bold text-[#082a57] mb-6">

          Cart 🛒

        </h1>


        {

          cartItems.length === 0 ? (

            <div className="text-gray-500">

              No datasets in cart yet.

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

                cartItems.map((item, index) => (

                  <div
                    key={index}
                    className="flex flex-col md:flex-row gap-4 justify-between items-center shadow rounded-lg p-5 hover:shadow-lg"
                  >


                    {/* LEFT SECTION */}

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


                    {/* RIGHT BUTTONS */}

                    <div className="flex gap-3">

                      <button
                        onClick={() =>
                          navigate(`/category/${item.category}`)
                        }
                        className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                      >

                        Preview

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


              {/* TOTAL */}

              <div className="flex justify-between mt-6 font-bold text-lg">

                <span>Total:</span>

                <span>₹{totalPrice}</span>

              </div>


              {/* CHECKOUT */}

              <button className="mt-4 bg-[#082a57] text-white px-6 py-3 rounded hover:bg-blue-900">

                Proceed to Checkout

              </button>

            </div>

          )

        }

      </div>

    </>

  );

}