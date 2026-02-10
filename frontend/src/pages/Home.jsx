import logoIcon from "../assets/healex_logo.jpeg";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import OurServices from "../components/OurServices";
import InsurancePartners from "../components/InsurancePartners";
import GetInsuranceForm from "../components/GetInsuranceForm";
import WhyHealex from "../components/WhyHealex";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      {/* HERO SECTION WITH IMAGE */}
      <Hero/>

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
      <WhyHealex />


      {/* CONTACT FORM */}
      <GetInsuranceForm />

      {/* HEALEX PRE-FOOTER CONTACT */}
      <section className="bg-primary text-white">

        <div className="py-20 bg-primaryDark text-white">
          <div className="max-w-6xl mx-auto px-6">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

              {/* LEFT – CONTACT */}
              <div className="bg-white/5 backdrop-blur p-8 rounded-2xl shadow-lg">
                <p className="text-sm uppercase tracking-widest opacity-70 mb-3">
                  Get in Touch
                </p>

                <p className="font-semibold text-lg mb-6 leading-relaxed">
                  Let’s talk about your health coverage.<br />
                  <span className="text-white/80 text-sm">
                    Clear answers • Unbiased guidance • Long-term support
                  </span>
                </p>

                <div className="space-y-4">

                  {/* Phone */}
                  <p className="flex items-center gap-3">
                    <span className="bg-white/10 p-2 rounded-full">
                      <FaPhoneAlt />
                    </span>
                    <a href="tel:+917356245467" className="hover:underline font-medium">
                      +91 73562 45467
                    </a>
                  </p>

                  {/* Email */}
                  <p className="flex items-center gap-3">
                    <span className="bg-white/10 p-2 rounded-full">
                      <FaEnvelope />
                    </span>
                    <a
                      href="mailto:healex.insure@gmail.com"
                      className="hover:underline font-medium"
                    >
                      healex.insure@gmail.com
                    </a>
                  </p>

                  {/* WhatsApp */}
                  <p className="flex items-center gap-3">
                    <span className="bg-green-500 p-2 rounded-full text-white">
                      <FaWhatsapp />
                    </span>
                    <a
                      href="https://wa.me/917356245467"
                      className="hover:underline font-medium"
                    >
                      WhatsApp Support
                    </a>
                  </p>
                </div>
              </div>

              {/* CENTER – LOGO */}
              <div className="flex justify-center">
                <div className="flex items-center gap-4">
                  <img
                    src={logoIcon}
                    alt="Healex Logo"
                    className="h-16 w-16"
                  />
                  <div className="leading-tight">
                    <h1 className="text-5xl font-bold tracking-wide">
                      Healex
                    </h1>
                    <p className="text-xs tracking-widest opacity-90">
                      YOUR HEALTH INSURANCE EXPERT
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT – ADDRESS */}
              <div className="bg-white/5 backdrop-blur p-8 rounded-2xl shadow-lg text-center md:text-right">
                <p className="text-sm uppercase tracking-widest opacity-70 mb-3">
                  VISIT US
                </p>
                <p className="leading-relaxed text-white/90">
                  Mathson Chambers, 2nd Floor,<br />
                  College Road,<br />
                  Kothamangalam – 686691
                </p>
              </div>

            </div>
          </div>
        </div>


        {/* TRUST BAR */}
        {/* <div className="bg-primaryDark py-4">
          <div className="max-w-6xl mx-auto px-6 text-sm font-medium flex flex-wrap justify-center gap-4">
            <span>◆ 10+ Top Insurers</span>
            <span>◆ Right Plan</span>
            <span>◆ Expert Call</span>
            <span>◆ Lifetime Support</span>
          </div>
        </div> */}

      </section>


    </div>
  );
}
