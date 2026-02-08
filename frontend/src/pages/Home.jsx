import care_health from "../assets/insurers/care_health_insurance_logo.png";
import hdfc_ergo from "../assets/insurers/hdfc_ergo_insurance_logo.png";
import icici_lombard from "../assets/insurers/icici_lombrad_insurance_logo.jpg";
import sbi_general from "../assets/insurers/sbi_general_insurance_logo.jpg";
import tata_aig from "../assets/insurers/tata_aig_insurance_logo.jpg";
import niva_bupa from "../assets/insurers/niva_bupa_insurance_logo.png";
import national_insurance from "../assets/insurers/national_insurance_logo.png";
import GetInsuranceForm from "../components/GetInsuranceForm";
import whyHealexBg from "../assets/family_image.jpg";
import healexLogo from "../assets/healex_logo_text.jpeg";
import healexWhiteLogo from "../assets/healex_white_logo.jpeg";

export default function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Healex – Health Insurance, Made Simple
          </h1>

          <p className="text-lg md:text-xl mb-8">
            Choose the right health insurance from multiple companies — with expert guidance and claim support.
          </p>

          <a
            href="https://wa.me/917356245467"
            className="inline-block bg-white text-primary font-semibold px-8 py-4 rounded-xl shadow-md"
          >
            Talk to a Healex Expert
          </a>
        </div>
      </section>

      {/* INSURANCE PARTNERS */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-500 font-medium mb-6">
            Our Insurance Partners
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
            {[care_health, tata_aig, hdfc_ergo, sbi_general, icici_lombard, niva_bupa, national_insurance].map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center border rounded-lg py-6 bg-white"
              >
                <img
                  src={logo}
                  alt="Insurance Partner"
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primaryDark">
            About Healex
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Healex is an exclusive health insurance advisory service.
            We help individuals, families, and businesses choose the right health insurance
            at an affordable premium by comparing plans from multiple insurance companies.
          </p>

          <p className="mt-6 text-xl font-semibold text-primary">
            We don’t push policies — we guide decisions.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-primaryLight">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-primaryDark">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Health Insurance Advisory",
              "Policy Comparison (Multiple Companies)",
              "Family & Senior Citizen Plans",
              "Corporate Health Insurance",
              "Renewal & Upgrade Support",
              "End-to-End Claim Assistance",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <p className="font-medium text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY HEALEX */}
      <section
        className="relative py-20 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${whyHealexBg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/45"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-primaryDark">
            Why Healex?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Health insurance experts (not general agents)",
              "Honest & transparent advice",
              "Multiple company options",
              "Strong claim-time support",
              "Long-term relationship focus",
            ].map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-primaryLight/90 p-5 rounded-xl shadow-sm"
              >
                <span className="text-primary font-bold">✓</span>
                <p className="text-gray-800">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <GetInsuranceForm />

      {/* HEALEX PRE-FOOTER CONTACT */}
      <section className="bg-primary text-white">

        <div className="py-14">
          <div className="max-w-6xl mx-auto px-6">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

              {/* LEFT – CONTACT */}
              <div>
                <p className="text-sm opacity-80 mb-1">
                  Please contact
                </p>
                <p className="font-semibold text-lg mb-2">
                  YOUR HEALTH INSURANCE EXPERT
                </p>
                <p className="font-semibold flex items-center gap-2">
                  📞 <a href="tel:+917356245467" className="hover:underline">
                    +91 73562 45467
                  </a>
                </p>
                <p className="flex items-center gap-2 mt-1">
                  ✉️ <a
                    href="mailto:healex.insure@gmail.com"
                    className="hover:underline"
                  >
                    healex.insure@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2 mt-1">
                  💬 <a
                    href="https://wa.me/917356245467"
                    className="hover:underline"
                  >
                    WhatsApp Support
                  </a>
                </p>
              </div>

              {/* CENTER – LOGO */}
              <div className="text-center">
                <img
                  src={healexWhiteLogo}
                  alt="Healex"
                  className="h-12 mx-auto mb-2"
                />
                <p className="text-sm opacity-80">
                  Your Health Insurance Expert
                </p>
              </div>

              {/* RIGHT – ADDRESS */}
              <div className="text-center md:text-right">
                <p className="text-sm opacity-80 mb-1">
                  Office Address
                </p>
                <p className="leading-relaxed">
                  Mathson Chambers, 2nd Floor,<br />
                  College Road,<br />
                  Kothamangalam – 686691
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* TRUST BAR */}
        <div className="bg-primaryDark py-4">
          <div className="max-w-6xl mx-auto px-6 text-sm font-medium flex flex-wrap justify-center gap-4">
            <span>◆ 10+ Top Insurers</span>
            <span>◆ Right Plan</span>
            <span>◆ Expert Call</span>
            <span>◆ Lifetime Support</span>
          </div>
        </div>

      </section>


    </div>
  );
}
