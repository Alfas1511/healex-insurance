import heroImage from "../assets/background_images/hero_image_2.jpeg";

export default function Hero() {
    return (
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

                    {/* SLOGAN */}
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-2 drop-shadow-sm animate-fadeIn">
                        “Clarity, Confidence, and Care”
                    </h1>

                    {/* BRAND */}
                    <p className="text-sm md:text-base font-medium tracking-widest uppercase opacity-80 mb-6 animate-fadeIn delay-150">
                        by Healex
                    </p>

                    {/* SUBTEXT */}
                    <p className="text-lg md:text-xl font-light leading-relaxed opacity-95 max-w-3xl mx-auto mb-10 animate-fadeIn delay-300">
                        Expert guidance. Unbiased advice. Complete claim support — when it matters most.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-col mx-auto max-w-xs gap-2 animate-fadeIn delay-500">
                        <a
                            href="https://wa.me/917356245467"
                            className="inline-block bg-white text-primary font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Get Expert Advice (Free)
                        </a>
                        <small className="text-white/80 text-xs tracking-wide">
                            No spam. No pressure. Just expert advice you can trust.
                        </small>
                    </div>

                </div>
            </div>

        </section>
    )
}
