export default function GetInsuranceForm() {
    return (
        <section className="py-24 bg-primaryLight" id="contact-form">
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

                {/* Form Card */}
                <div className="bg-primary/20 shadow-xl rounded-2xl p-10 border border-primary/80">
                    <form className="space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input required
                                type="text"
                                placeholder="Your Name"
                                className="border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary/40"
                            />

                            <input required
                                type="email"
                                placeholder="Your Email"
                                className="border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary/40"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input required
                                type="tel"
                                placeholder="Phone Number"
                                className="border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary/40"
                            />

                            <select required
                                className="border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary/40"
                            >
                                <option>How can we help you?</option>
                                <option>Reviewing an existing health policy</option>
                                <option>Choosing a new health insurance plan</option>
                                <option>Renewal & coverage optimisation</option>
                                <option>Claim or policy support</option>
                                <option>Not sure — need expert guidance</option>
                            </select>
                        </div>

                        <textarea
                            rows="5"
                            placeholder="Tell us a bit about your situation (optional)"
                            className="border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary/40"
                        />

                        {/* CTA */}
                        <div className="text-center pt-4">
                            <button
                                type="submit"
                                className="bg-primary hover:bg-primaryDark text-white font-semibold px-12 py-4 rounded-xl shadow-md transition"
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
