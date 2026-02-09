import whyHealexBg from "../assets/background_images/bg_image_1.jpeg";

export default function WhyHealex() {
    return (
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
                    ].map((item, index, arr) => (
                        <div
                            key={index}
                            className={`flex gap-4 bg-primaryLight/90 p-6 rounded-xl shadow-sm
                  ${index === arr.length - 1 ? "md:col-span-2 md:mx-auto md:max-w-md" : ""}
                `}>
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
    )
}
