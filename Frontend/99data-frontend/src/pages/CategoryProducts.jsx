import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../home/Navbar";
import { useState } from "react";

export default function CategoryProducts() {

  const { name } = useParams();
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("user");

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );


  /* SAMPLE DATASETS */

  const datasets = [

    {
      id: 1,
      title: "Schools Database",
      price: 499,
      totalRows: 100,
      preview: [
        ["ABC School", "Hyderabad", "9876543210"],
        ["XYZ School", "Vijayawada", "9123456789"],
        ["Delhi Public School", "Delhi", "9988776655"],
        ["Locked", "Locked", "Locked"],
        ["Locked", "Locked", "Locked"]
      ]
    },

    {
      id: 2,
      title: "Colleges Database",
      price: 599,
      totalRows: 120,
      preview: [
        ["ABC College", "Mumbai", "9876543210"],
        ["XYZ College", "Pune", "9123456789"],
        ["SRM University", "Chennai", "9988776655"],
        ["Locked", "Locked", "Locked"],
        ["Locked", "Locked", "Locked"]
      ]
    },

    {
      id: 3,
      title: "Teachers Database",
      price: 399,
      totalRows: 80,
      preview: [
        ["Ramesh", "Maths", "Hyderabad"],
        ["Suresh", "Physics", "Delhi"],
        ["Lakshmi", "English", "Vizag"],
        ["Locked", "Locked", "Locked"],
        ["Locked", "Locked", "Locked"]
      ]
    }

  ];


  /* ADD CART */

  const addToCart = (item) => {

    if (!isLoggedIn) {
      alert("Please login first 🔐");
      navigate("/login");
      return;
    }

    const exists = cart.find((i) => i.id === item.id);

    if (exists) {
      alert("Already in cart 🛒");
      return;
    }

    const updatedCart = [...cart, item];

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert("Added to cart ✅");

  };


  /* ADD WISHLIST */

  const addToWishlist = (item) => {

    if (!isLoggedIn) {
      alert("Please login first ❤️");
      navigate("/login");
      return;
    }

    const exists = wishlist.find((i) => i.id === item.id);

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

    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">


        {/* TITLE */}

        <h1 className="text-3xl font-bold text-[#082a57] mb-10">

          {name.replace("-", " ").toUpperCase()} DATASETS

        </h1>


        {/* GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {

            datasets.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300"
              >


                {/* HEADER */}

                <div className="p-5 border-b">

                  <h3 className="text-lg font-semibold text-[#082a57]">

                    {item.title}

                  </h3>

                  <p className="text-gray-500">

                    ₹{item.price}

                  </p>

                </div>



                {/* TABLE PREVIEW */}

                <div className="relative p-5">

                  <div className="overflow-x-auto">

                    <table className="w-full text-sm">

                      <thead>

                        <tr className="bg-gray-100">

                          <th className="p-2">Name</th>
                          <th className="p-2">City</th>
                          <th className="p-2">Contact</th>

                        </tr>

                      </thead>


                      <tbody>

                        {

                          item.preview.map((row, index) => (

                            <tr
                              key={index}
                              className={`text-center border-t ${
                                index >= 3
                                  ? "blur-sm select-none"
                                  : ""
                              }`}
                            >

                              {

                                row.map((col, i) => (

                                  <td key={i} className="p-2">

                                    {col}

                                  </td>

                                ))

                              }

                            </tr>

                          ))

                        }

                      </tbody>

                    </table>

                  </div>


                  {/* LOCK OVERLAY */}

                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/90 to-transparent flex flex-col items-center justify-end pb-3">

                    <div className="text-gray-600 text-sm mb-2">

                      🔒 Preview limited rows only

                    </div>

                    <button
                      onClick={() => navigate("/product-view")}
                      className="bg-[#082a57] text-white px-5 py-2 rounded-lg hover:bg-blue-900 transition"
                    >

                      Unlock {item.totalRows} Rows

                    </button>

                  </div>

                </div>



                {/* ACTIONS */}

                <div className="flex gap-2 px-5 pb-5">

                  <button
                    onClick={() => navigate("/product-view")}
                    className="flex-1 bg-[#082a57] text-white py-2 rounded-lg hover:bg-blue-900"
                  >

                    Preview

                  </button>


                  <button
                    onClick={() => addToCart(item)}
                    className="flex-1 border border-[#082a57] text-[#082a57] py-2 rounded-lg hover:bg-[#082a57] hover:text-white"
                  >

                    Add Cart

                  </button>


                  <button
                    onClick={() => addToWishlist(item)}
                    className="px-4 border rounded-lg hover:bg-gray-100"
                  >

                    ❤️

                  </button>

                </div>



                {/* FOOTER */}

                <div className="px-5 pb-5 text-xs text-gray-400">

                  Showing 3 preview rows • {item.totalRows} rows available

                </div>

              </div>

            ))

          }

        </div>

      </div>

    </>

  );

}