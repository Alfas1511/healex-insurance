import { useState } from "react";

export default function GetInsuranceForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        help: "",
        message: ""
    });

    const WHATSAPP_NUMBER = "917356245467"; // country code + number (no +, no spaces)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const whatsappMessage = `
            *Healex Insurance Consultation Request*

            *Name:* ${formData.name}
            *Email:* ${formData.email}
            *Phone:* ${formData.phone}
            *Need Help With:* ${formData.help}

            *Message:*
            ${formData.message || "N/A"}
                    `;

        const encodedMessage = encodeURIComponent(whatsappMessage.trim());

        window.open(
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
            "_blank"
        );
    };

    return (
        <section className="py-16 bg-primaryLight" id="contact-form">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primaryDark">
                        Request <span className="text-primary">Expert</span> Advice
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Free consultation • 15–20 minutes • No obligation
                    </p>
                </div>

                {/* Form */}
                <div className="bg-primary/20 shadow-xl rounded-2xl p-10 border border-primary/80">
                    <form className="space-y-6" onSubmit={handleSubmit}>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                required
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                onChange={handleChange}
                                className="border rounded-lg px-4 py-3 w-full"
                            />

                            <input
                                required
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                onChange={handleChange}
                                className="border rounded-lg px-4 py-3 w-full"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                required
                                name="phone"
                                type="tel"
                                placeholder="Phone Number"
                                onChange={handleChange}
                                className="border rounded-lg px-4 py-3 w-full"
                            />

                            <select
                                required
                                name="help"
                                onChange={handleChange}
                                className="border rounded-lg px-4 py-3 w-full"
                            >
                                <option value="">How can we help you?</option>
                                <option>Reviewing an existing health policy</option>
                                <option>Choosing a new health insurance plan</option>
                                <option>Renewal & coverage optimisation</option>
                                <option>Claim or policy support</option>
                                <option>Not sure — need expert guidance</option>
                            </select>
                        </div>

                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Tell us a bit about your situation (optional)"
                            onChange={handleChange}
                            className="border rounded-lg px-4 py-3 w-full"
                        />

                        {/* CTA */}
                        <div className="text-center pt-4">
                            <button
                                type="submit"
                                className="bg-primary hover:bg-primaryDark text-white font-semibold px-12 py-4 rounded-xl"
                            >
                                Request a Call Back
                            </button>

                            <p className="text-sm text-gray-500 mt-3">
                                No spam. No pressure. Just expert advice you can trust.
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
}
