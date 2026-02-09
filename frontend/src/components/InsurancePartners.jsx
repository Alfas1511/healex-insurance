import care_health from "../assets/insurers/care_health_insurance_logo.png";
import hdfc_ergo from "../assets/insurers/hdfc_ergo_insurance_logo.png";
import icici_lombard from "../assets/insurers/icici_lombrad_insurance_logo.jpg";
import sbi_general from "../assets/insurers/sbi_general_insurance_logo.jpg";
import tata_aig from "../assets/insurers/tata_aig_insurance_logo.jpg";
import niva_bupa from "../assets/insurers/niva_bupa_insurance_logo.png";
import national_insurance from "../assets/insurers/national_insurance_logo.png";
import adithya_birla from "../assets/insurers/adithya_birla_capital_insurance_logo.jpg";
import manipal_cigna from "../assets/insurers/manipal_cigna_insuracne_logo.png";
import star_health from "../assets/insurers/star_health_insurance_logo.png";

export default function InsurancePartners() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-3xl font-bold text-primaryDark mb-4">
                    Trusted Insurance Partners
                </h2>

                <p className="text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                    We work with leading insurers known for transparent policies,
                    strong claim records, and long-term reliability —
                    so you can choose with confidence.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
                    {[
                        care_health,
                        tata_aig,
                        hdfc_ergo,
                        sbi_general,
                        icici_lombard,
                        niva_bupa,
                        national_insurance,
                        adithya_birla,
                        manipal_cigna,
                        star_health
                    ].map((logo, index) => (
                        <div
                            key={index}
                            className="flex justify-center items-center border rounded-xl p-6 bg-white hover:shadow-sm transition"
                        >
                            <img
                                src={logo}
                                alt="Insurance Partner"
                                className="h-14 object-contain"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
