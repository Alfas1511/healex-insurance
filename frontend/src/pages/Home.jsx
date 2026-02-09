import whyHealexBg from "../assets/family_image.jpg";
import logoIcon from "../assets/healex_logo.jpeg";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import heroImage from "../assets/hero_images/hero_image_2.jpeg";
import OurServices from "../components/OurServices";
import InsurancePartners from "../components/InsurancePartners";
import GetInsuranceForm from "../components/GetInsuranceForm";

export default function Home() {
  return (
    <div>
      {/* HERO SECTION WITH IMAGE */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden pt-24">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})`, filter: "contrast(1.05) saturate(1.05)" }}
        ></div>


        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-primary/20"></div>

        {/* CONTENT */}
        <div className="relative z-10 flex items-end justify-center h-full text-white pb-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Healex — Clarity, Confidence, and Care
            </h1>
            {/* <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">Clarity, Confidence, and Care — In One Insurance Experience</p> */}

            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Expert guidance. Unbiased advice. Complete claim support — when it matters most.
            </p>

            <div className="flex flex-col mx-auto max-w-xs">
              <a
                href="https://wa.me/917356245467"
                className="inline-block bg-white text-primary font-semibold px-8 py-4 rounded-xl shadow-md hover:bg-gray-100 transition"
              >
                Get Expert Advice(Free)
              </a>
              <small className="">No spam. No pressure. Just expert advice you can trust.</small>
            </div>
          </div>
        </div>

      </section>

      {/* INSURANCE PARTNERS */}
      <InsurancePartners />


      {/* ABOUT US */}
      <section className="py-20 bg-white" id="about">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primaryDark">
            About Healex
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Healex is a health insurance advisory focused on clarity and care.
            We help individuals, families, and businesses choose coverage that truly fits their life —
            by comparing plans across trusted insurance providers.
          </p>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Our role doesn’t end at purchase. We stay with you through claims and support,
            when it matters most.
          </p>

          <p className="mt-8 text-xl font-semibold text-primary">
            We don’t push policies — we guide decisions.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <OurServices />

      {/* WHY HEALEX */}
      <section
        className="relative py-20 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${whyHealexBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/45"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-primaryDark">
            Why People Trust Healex?
          </h2>

          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
            Because health insurance deserves clarity, care, and support you can rely on.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Dedicated Health Insurance Specialists",
                desc: "Focused expertise — not generic advice.",
              },
              {
                title: "Honest, Unbiased Guidance",
                desc: "Recommendations made for you, not commissions.",
              },
              {
                title: "Carefully Chosen Insurer Options",
                desc: "Partners selected for reliability and claim performance.",
              },
              {
                title: "Support That Stays With You During Claims",
                desc: "We guide you through every step, till resolution.",
              },
              {
                title: "Long-Term Advisory Relationship",
                desc: "Support that continues well beyond purchase.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 bg-primaryLight/90 p-6 rounded-xl shadow-sm"
              >
                <span className="text-primary text-xl font-bold">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
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
                  <FaPhoneAlt className="text-xl" />
                  <a href="tel:+917356245467" className="hover:underline">
                    +91 73562 45467
                  </a>
                </p>
                <p className="flex items-center gap-2 mt-1">
                  <FaEnvelope className="text-xl" />
                  <a
                    href="mailto:healex.insure@gmail.com"
                    className="hover:underline"
                  >
                    healex.insure@gmail.com
                  </a>
                </p>

                <p className="flex items-center gap-2 mt-1">
                  <FaWhatsapp className="text-xl" />
                  <a
                    href="https://wa.me/917356245467"
                    className="hover:underline"
                  >
                    WhatsApp Support
                  </a>
                </p>
              </div>

              {/* CENTER – LOGO */}
              <div className="text-center">
                <div className="flex items-center gap-4">
                  {/* ICON */}
                  <img
                    src={logoIcon}
                    alt="Healex Logo"
                    className="h-16 w-16"
                  />

                  {/* TEXT */}
                  <div className="leading-tight">
                    <h1 className="text-5xl font-bold tracking-wide text-white">
                      Healex
                    </h1>
                    <p className="text-xs tracking-widest text-white opacity-90">
                      YOUR HEALTH INSURANCE EXPERT
                    </p>
                  </div>
                </div>
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
