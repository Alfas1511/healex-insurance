export default function OurServices() {
    return (
        <section className="py-24 bg-primaryDark/90" id="services">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-white">
                    Our Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {[
                        {
                            title: "Personalised Health Insurance Advisory",
                            desc: "Guidance built around your life, not sales targets.",
                        },
                        {
                            title: "Carefully Curated Policy Comparisons",
                            desc: "Plans evaluated for coverage, clarity, and claim reliability.",
                        },
                        {
                            title: "Family & Senior Health Planning",
                            desc: "Thoughtful protection for every stage of life.",
                        },
                        {
                            title: "Corporate & Employee Health Coverage",
                            desc: "Clear, scalable health solutions for growing teams.",
                        },
                        {
                            title: "Renewals, Reviews & Coverage Upgrades",
                            desc: "Ensuring your insurance evolves as your life does.",
                        },
                        {
                            title: "End-to-End Claim Support",
                            desc: "Support that stays with you until the claim is resolved.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="
                                bg-white/95 
                                p-8 
                                rounded-2xl 
                                shadow-lg 
                                text-center 
                                border border-white/10
                                transform 
                                transition-all 
                                duration-300 
                                hover:-translate-y-2 
                                hover:shadow-2xl
                            "
                        >
                            <h3 className="text-lg font-semibold text-primaryDark mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-700 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>

    );
}
