import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FlashSale() {

  const navigate = useNavigate();


  /* COUNTDOWN TIMER */

  const calculateTimeLeft = () => {

    const difference =
      +new Date("2026-12-31") - +new Date();

    let timeLeft = {};

    if (difference > 0) {

      timeLeft = {

        days: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ),

        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),

        minutes: Math.floor(
          (difference / 1000 / 60) % 60
        ),

        seconds: Math.floor(
          (difference / 1000) % 60
        )

      };

    }

    return timeLeft;

  };


  const [timeLeft, setTimeLeft] =
    useState(calculateTimeLeft());


  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft(calculateTimeLeft());

    }, 1000);

    return () => clearInterval(timer);

  }, []);


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


  /* DATASETS */

  const datasets = [

    {
      id: 1,
      name: "Schools Database",
      category: "schools",
      records: 850,
      price: 299,
      oldPrice: 799,
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350"
    },

    {
      id: 2,
      name: "Doctors Database",
      category: "doctors",
      records: 620,
      price: 399,
      oldPrice: 999,
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
    },

    {
      id: 3,
      name: "Builders Database",
      category: "builders",
      records: 410,
      price: 499,
      oldPrice: 1099,
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
    },

    {
      id: 4,
      name: "Hotels Database",
      category: "hotels",
      records: 720,
      price: 349,
      oldPrice: 899,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945"
    }

  ];


  /* ADD TO CART */

  const addToCart = (item) => {

    if (!requireLogin()) return;

    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cart.find(
      (dataset) => dataset.id === item.id
    );

    if (exists) {

      alert("Already added to cart");

      return;

    }

    cart.push(item);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert("Added to cart 🛒");

  };


  /* ADD TO WISHLIST */

  const addToWishlist = (item) => {

    if (!requireLogin()) return;

    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find(
      (dataset) => dataset.id === item.id
    );

    if (exists) {

      alert("Already in wishlist");

      return;

    }

    wishlist.push(item);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

    alert("Added to wishlist ❤️");

  };


  /* PREVIEW DATASET */

  const previewDataset = (category) => {

    if (!requireLogin()) return;

    navigate(`/category/${category}`);

  };


  return (

    <section className="bg-gray-50 py-16">

      <div className="max-w-7xl mx-auto px-6">


        {/* TITLE */}

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold text-[#082a57]">

            Flash Sale ⚡ Limited Time Offer

          </h2>

        </div>


        {/* TIMER */}

        <div className="flex gap-6 text-center mb-10">

          {

            Object.keys(timeLeft).map((interval) => (

              <div
                key={interval}
                className="bg-white shadow px-6 py-3 rounded"
              >

                <p className="text-2xl font-bold text-[#082a57]">

                  {timeLeft[interval]}

                </p>

                <p className="text-gray-500 capitalize">

                  {interval}

                </p>

              </div>

            ))

          }

        </div>


        {/* DATASET GRID */}

        <div className="grid md:grid-cols-4 gap-6">

          {

            datasets.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
              >


                {/* IMAGE */}

                <div className="relative">

                  <img
                    src={item.image}
                    alt="dataset"
                    className="h-40 w-full object-cover"
                  />


                  {/* DISCOUNT BADGE */}

                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">

                    SALE

                  </span>

                </div>


                {/* CONTENT */}

                <div className="p-4">


                  <h3 className="font-semibold text-[#082a57]">

                    {item.name}

                  </h3>


                  <p className="text-gray-500 text-sm">

                    Records: {item.records}

                  </p>


                  {/* PRICE */}

                  <div className="flex gap-2 items-center mt-1">

                    <span className="font-bold text-[#082a57]">

                      ₹{item.price}

                    </span>

                    <span className="line-through text-gray-400 text-sm">

                      ₹{item.oldPrice}

                    </span>

                  </div>


                  {/* BUTTONS */}

                  <div className="flex gap-2 mt-4">


                    <button
                      onClick={() =>
                        previewDataset(item.category)
                      }
                      className="flex-1 bg-gray-200 py-2 rounded hover:bg-gray-300"
                    >

                      Preview

                    </button>


                    <button
                      onClick={() =>
                        addToCart(item)
                      }
                      className="flex-1 bg-[#082a57] text-white py-2 rounded hover:bg-blue-900"
                    >

                      Add Cart

                    </button>


                    <button
                      onClick={() =>
                        addToWishlist(item)
                      }
                      className="px-3 border rounded hover:bg-gray-100"
                    >

                      ❤️

                    </button>

                  </div>


                  {/* STOCK LABEL */}

                  <p className="text-xs text-red-500 mt-2">

                    Limited stock remaining

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