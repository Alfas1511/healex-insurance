export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold mb-4">Healex</h1>
          <p className="text-xl mb-6">Your Health Insurance Expert</p>

          <a
            href="https://wa.me/917356245467"
            className="bg-white text-primary px-6 py-3 rounded-xl font-semibold"
          >
            Get Free Consultation
          </a>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-6 text-gray-600 font-medium">Trusted Partners</p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-gray-500 text-sm">
            <div>Care</div>
            <div>TATA AIG</div>
            <div>HDFC ERGO</div>
            <div>SBI General</div>
            <div>ICICI Lombard</div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-primaryLight py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-primaryDark">
            Need help choosing a plan?
          </h2>

          <p className="mb-6 text-gray-700">
            Talk directly with our expert team
          </p>

          <a
            href="https://wa.me/917356245467"
            className="bg-primary text-white px-8 py-3 rounded-xl"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
