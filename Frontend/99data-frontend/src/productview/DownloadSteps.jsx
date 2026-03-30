import { useNavigate } from "react-router-dom";

export default function DownloadSteps() {

  const navigate = useNavigate();

  const steps = [

    {
      id: 1,
      title: "Select Dataset",
      description: "Browse categories and choose the dataset that fits your business needs.",
      icon: "📂"
    },

    {
      id: 2,
      title: "Add to Cart",
      description: "Add your selected dataset to cart or wishlist for quick checkout.",
      icon: "🛒"
    },

    {
      id: 3,
      title: "Secure Payment",
      description: "Complete payment safely using our secure checkout system.",
      icon: "🔐"
    },

    {
      id: 4,
      title: "Instant Download",
      description: "Download full dataset immediately after successful payment.",
      icon: "⬇️"
    }

  ];


  return (

    <section className="mb-16">

      {/* TITLE */}

      <div className="mb-10 text-center">

        <h2 className="text-3xl font-bold text-[#082a57]">

          How Dataset Download Works

        </h2>

        <p className="text-gray-500 mt-2">

          Simple 4-step process to access verified business data instantly

        </p>

      </div>



      {/* STEPS GRID */}

      <div className="grid md:grid-cols-4 gap-6">

        {

          steps.map((step) => (

            <div
              key={step.id}
              className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition duration-300"
            >

              {/* STEP NUMBER */}

              <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center rounded-full bg-[#082a57] text-white font-bold">

                {step.id}

              </div>


              {/* ICON */}

              <div className="text-3xl mb-3">

                {step.icon}

              </div>


              {/* TITLE */}

              <h3 className="font-semibold text-[#082a57] mb-2">

                {step.title}

              </h3>


              {/* DESCRIPTION */}

              <p className="text-gray-500 text-sm">

                {step.description}

              </p>

            </div>

          ))

        }

      </div>



      {/* TRUST BADGES */}

      <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-600">

        <span>✔ Secure Checkout</span>

        <span>✔ Instant Download Access</span>

        <span>✔ Verified Business Data</span>

        <span>✔ One-Time Payment Only</span>

      </div>


    </section>

  );

}