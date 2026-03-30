import { useNavigate } from "react-router-dom";

export default function Featured() {

  const navigate = useNavigate();


  /* FEATURED DATASET */

  const dataset = {

    id: 101,

    name: "Architects & Interior Designers Dataset",

    category: "architects",

    records: 950,

    location: "India",

    price: 499,

    oldPrice: 1299,

    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e"

  };


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

  const addToCart = () => {

    if (!requireLogin()) return;

    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cart.find(
      (item) => item.id === dataset.id
    );

    if (exists) {

      alert("Already added to cart");

      return;

    }

    cart.push(dataset);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert("Added to cart 🛒");

  };


  /* ADD TO WISHLIST */

  const addToWishlist = () => {

    if (!requireLogin()) return;

    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find(
      (item) => item.id === dataset.id
    );

    if (exists) {

      alert("Already in wishlist");

      return;

    }

    wishlist.push(dataset);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

    alert("Added to wishlist ❤️");

  };


  /* PREVIEW DATASET */

  const previewDataset = () => {

    if (!requireLogin()) return;

    navigate(`/category/${dataset.category}`);

  };


  return (

    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">


        {/* IMAGE */}

        <div className="relative">

          <img
            src={dataset.image}
            alt="featured dataset"
            className="rounded-xl shadow-lg"
          />


          {/* BADGE */}

          <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-xs rounded">

            FEATURED

          </span>

        </div>


        {/* CONTENT */}

        <div>

          <h2 className="text-4xl font-bold text-[#082a57] mb-3">

            Featured Database

          </h2>


          <h3 className="text-xl font-semibold mb-2">

            {dataset.name}

          </h3>


          <p className="text-gray-600 mb-4">

            Verified dataset including company name, contact
            person, phone number, email, and pin code for
            marketing outreach and lead generation campaigns.

          </p>


          <p className="text-gray-500 text-sm">

            Records: {dataset.records}+

          </p>


          <p className="text-gray-500 text-sm mb-4">

            Coverage: {dataset.location}

          </p>


          {/* PRICE */}

          <div className="flex gap-3 items-center mb-6">

            <span className="text-2xl font-bold text-[#082a57]">

              ₹{dataset.price}

            </span>

            <span className="line-through text-gray-400">

              ₹{dataset.oldPrice}

            </span>

          </div>


          {/* BUTTONS */}

          <div className="flex gap-3 flex-wrap">


            <button
              onClick={previewDataset}
              className="bg-gray-200 px-6 py-3 rounded hover:bg-gray-300"
            >

              Preview

            </button>


            <button
              onClick={addToCart}
              className="bg-[#082a57] text-white px-6 py-3 rounded hover:bg-blue-900"
            >

              Add to Cart 🛒

            </button>


            <button
              onClick={addToWishlist}
              className="border px-6 py-3 rounded hover:bg-gray-100"
            >

              Wishlist ❤️

            </button>

          </div>


          {/* TRUST LABEL */}

          <p className="text-xs text-gray-400 mt-4">

            ✔ Verified dataset • Instant download after purchase

          </p>

        </div>

      </div>

    </section>

  );

}