export default function Newsletter() {

  return (

    <section className="bg-[#082a57] py-16 text-white">

      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-4">

          Subscribe our newsletter for newest database updates

        </h2>

        <div className="flex mt-6">

          <input
            placeholder="Type your email here"
            className="flex-1 px-4 py-3 rounded-l-lg outline-none text-black"
          />

          <button className="bg-white text-[#082a57] px-6 rounded-r-lg">

            SUBSCRIBE

          </button>

        </div>

      </div>

    </section>

  );

}