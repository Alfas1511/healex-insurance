import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function OurServices() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);
    return (
        <section className="py-20 bg-primaryLight" id="services">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-primaryDark">
                    Our Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-xl shadow-md text-center border border-primary/50" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-lg font-bold text-primary mb-2">
                            Personalised Health Insurance Advisory
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Guidance built around your life, not sales targets.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-xl shadow-md text-center border border-primary/50" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-lg font-bold text-primary mb-2">
                            Carefully Curated Policy Comparisons
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Plans evaluated for coverage, clarity, and claim reliability.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-8 rounded-xl shadow-md text-center border border-primary/50" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-lg font-bold text-primary mb-2">
                            Family & Senior Health Planning
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Thoughtful protection for every stage of life.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white p-8 rounded-xl shadow-md text-center border border-primary/50" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-lg font-bold text-primary mb-2">
                            Corporate & Employee Health Coverage
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Clear, scalable health solutions for growing teams.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white p-8 rounded-xl shadow-md text-center border border-primary/50" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-lg font-bold text-primary mb-2">
                            Renewals, Reviews & Coverage Upgrades
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Ensuring your insurance evolves as your life does.
                        </p>
                    </div>

                    {/* Card 6 – Claims (Important) */}
                    <div className="bg-white p-8 rounded-xl shadow-md text-center border border-primary/50" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-lg font-bold text-primary mb-2">
                            End-to-End Claim Support
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Support that stays with you until the claim is resolved.
                        </p>
                    </div>

                </div>
            </div>
        </section>

    );
}
