import { useNavigate } from "react-router-dom";

export default function ProductInfo() {

  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("user");


  /* SAMPLE PREVIEW DATA */

  const previewData = [

    ["Delhi Public School", "Delhi", "9876543210"],
    ["St Mary School", "Mumbai", "9876543211"],
    ["Oxford High School", "Hyderabad", "9876543212"]

  ];


  const lockedRows = Array(6).fill([
    "Locked",
    "Locked",
    "Locked"
  ]);


  const dataset = {

    title: "Schools Database India",
    price: 499,
    totalRows: 100,
    columns: 12,
    coverage: "All India",
    accuracy: "98%",
    updated: "Feb 2026",
    format: ["Excel", "CSV"]

  };


  /* ADD TO CART */

  const addToCart = () => {

    if (!isLoggedIn) {

      alert("Please login first 🔐");

      navigate("/login");

      return;

    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cart.find(item => item.title === dataset.title);

    if (exists) {

      alert("Already added to cart 🛒");

      return;

    }

    cart.push(dataset);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart ✅");

  };


  return (

    <section className="mb-16">


      {/* TITLE */}

      <div className="mb-6">

        <h1 className="text-3xl font-bold text-[#082a57]">

          {dataset.title}

        </h1>

        <p className="text-gray-500 mt-1">

          Verified marketing dataset with preview sample rows below

        </p>

      </div>



      {/* DATASET STATS */}

      <div className="grid md:grid-cols-4 gap-4 mb-8">

        <StatCard label="Total Rows" value={dataset.totalRows} />
        <StatCard label="Columns" value={dataset.columns} />
        <StatCard label="Coverage" value={dataset.coverage} />
        <StatCard label="Accuracy" value={dataset.accuracy} />

      </div>



      {/* TABLE PREVIEW */}

      <div className="relative overflow-x-auto rounded-xl shadow">


        <table className="w-full text-sm">

          <thead className="bg-[#082a57] text-white">

            <tr>

              <th className="p-3">School Name</th>
              <th className="p-3">City</th>
              <th className="p-3">Phone</th>

            </tr>

          </thead>


          <tbody>

            {

              previewData.map((row, i) => (

                <tr key={i} className="border">

                  {

                    row.map((cell, index) => (

                      <td key={index} className="p-3">

                        {cell}

                      </td>

                    ))

                  }

                </tr>

              ))

            }


            {

              lockedRows.map((row, i) => (

                <tr
                  key={i}
                  className="border blur-sm select-none"
                >

                  {

                    row.map((cell, index) => (

                      <td key={index} className="p-3">

                        🔒 {cell}

                      </td>

                    ))

                  }

                </tr>

              ))

            }

          </tbody>

        </table>



        {/* LOCK OVERLAY */}

        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/90 to-transparent flex flex-col items-center justify-end pb-3">

          <p className="text-gray-600 text-sm mb-2">

            🔒 Unlock full dataset after purchase

          </p>

          <button
            onClick={addToCart}
            className="bg-[#082a57] text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition"
          >

            Unlock {dataset.totalRows} Rows – ₹{dataset.price}

          </button>

        </div>

      </div>



      {/* DATASET DETAILS */}

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        <DetailCard label="Last Updated" value={dataset.updated} />

        <DetailCard
          label="Available Formats"
          value={dataset.format.join(", ")}
        />

      </div>



      {/* ACTION BUTTONS */}

      <div className="flex flex-wrap gap-4 mt-8">

        <button
          onClick={addToCart}
          className="bg-[#082a57] text-white px-6 py-3 rounded-lg hover:bg-blue-900"
        >

          Add to Cart ₹{dataset.price}

        </button>


        <button
          onClick={() => navigate("/wishlist")}
          className="border border-[#082a57] text-[#082a57] px-6 py-3 rounded-lg hover:bg-[#082a57] hover:text-white"
        >

          Add to Wishlist ❤️

        </button>

      </div>


    </section>

  );

}



/* SMALL COMPONENTS */

function StatCard({ label, value }) {

  return (

    <div className="bg-white shadow rounded-lg p-4 text-center">

      <p className="text-xl font-bold text-[#082a57]">

        {value}

      </p>

      <p className="text-gray-500 text-sm">

        {label}

      </p>

    </div>

  );

}


function DetailCard({ label, value }) {

  return (

    <div className="bg-gray-50 rounded-lg p-4">

      <p className="text-gray-400 text-sm">

        {label}

      </p>

      <p className="text-[#082a57] font-semibold">

        {value}

      </p>

    </div>

  );

}