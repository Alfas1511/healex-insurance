export default function OurServices() {
    return (
        <section className="py-20 bg-primary/20" id="services">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section Heading */}
                <h2 className="text-3xl font-bold text-center mb-12 text-primary">
                    Our Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card */}
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
                            className="bg-primaryDark/90 p-8 rounded-xl shadow-lg text-center border border-white/10 hover:bg-primaryDark transition"
                        >
                            <h3 className="text-lg font-semibold text-white mb-2">
                                {item.title}
                            </h3>
                            <p className="text-white/80 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
