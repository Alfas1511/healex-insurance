import { useState, useEffect } from "react";

export default function Testimonials() {
    const testimonials = [
        {
            title: "Peace of Mind",
            quote:
                "I was confused by all the fine print in my old policy. The team at Healex explained everything clearly and helped me switch to a plan that actually covers my needs. Highly recommended!",
            name: "Arjun K.",
            location: "Kothamangalam",
        },
        {
            title: "Support When It Mattered",
            quote:
                "The best part about Healex isn’t just getting the insurance; it’s the support afterward. They were available on WhatsApp immediately when I had questions about a hospital stay.",
            name: "Sarah M.",
            location: "",
        },
        {
            title: "Truly Unbiased",
            quote:
                "Finally, an expert who doesn’t just push the most expensive plan. They understood my budget and found the perfect fit.",
            name: "Rahul P.",
            location: "",
        },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-primaryDark mb-12">
                    What Our Clients Say
                </h2>

                <div className="relative">
                    <div className="transition-all duration-700 ease-in-out">
                        <h3 className="text-xl font-semibold text-primary mb-4">
                            "{testimonials[index].title}"
                        </h3>

                        <p className="text-gray-700 text-lg leading-relaxed italic mb-6">
                            "{testimonials[index].quote}"
                        </p>

                        <p className="font-semibold text-gray-900">
                            — {testimonials[index].name}
                            {testimonials[index].location &&
                                `, ${testimonials[index].location}`}
                        </p>
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-3 mt-8">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-3 w-3 rounded-full transition ${i === index ? "bg-primary" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
