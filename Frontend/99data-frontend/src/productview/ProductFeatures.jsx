export default function ProductFeatures() {

  const features = [

    {
      title: "Verified Contact Details",
      desc: "Each record is validated for better accuracy and reliability.",
      icon: "✔"
    },

    {
      title: "Includes Email & Phone",
      desc: "Contains both phone numbers and email addresses wherever available.",
      icon: "📞"
    },

    {
      title: "Recently Updated",
      desc: "Dataset refreshed periodically to ensure latest information.",
      icon: "🕒"
    },

    {
      title: "Excel Format Download",
      desc: "Instant download available in Excel & CSV formats.",
      icon: "📊"
    },

    {
      title: "PAN India Coverage",
      desc: "Covers multiple cities and states across India.",
      icon: "🇮🇳"
    },

    {
      title: "Marketing Ready Data",
      desc: "Perfect for lead generation and outreach campaigns.",
      icon: "📢"
    }

  ];


  return (

    <section className="mb-16">


      {/* TITLE */}

      <div className="text-center mb-10">

        <h2 className="text-3xl font-bold text-[#082a57]">

          Dataset Features

        </h2>

        <p className="text-gray-500 mt-2">

          High-quality structured data designed for business growth

        </p>

      </div>



      {/* FEATURES GRID */}

      <div className="grid md:grid-cols-3 gap-6">

        {

          features.map((feature, index) => (

            <div
              key={index}
              className="bg-white shadow rounded-xl p-6 hover:shadow-xl transition duration-300"
            >


              {/* ICON */}

              <div className="text-2xl mb-3">

                {feature.icon}

              </div>


              {/* TITLE */}

              <h3 className="font-semibold text-[#082a57] mb-2">

                {feature.title}

              </h3>


              {/* DESCRIPTION */}

              <p className="text-gray-500 text-sm leading-relaxed">

                {feature.desc}

              </p>

            </div>

          ))

        }

      </div>



      {/* TRUST STRIP */}

      <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-600">

        <span>✔ Instant Download</span>

        <span>✔ One-Time Payment</span>

        <span>✔ No Subscription Required</span>

        <span>✔ Business-Ready Format</span>

      </div>

    </section>

  );

}