export default function GetInsuranceForm() {
    return (
        <section className="py-20 bg-white" id="contactForm">
            <div className="max-w-4xl mx-auto px-4">

                {/* Heading */}
                <h2 className="text-4xl font-bold text-center mb-12">
                    Get <span className="text-teal-500">Insurance</span>
                </h2>

                {/* Form */}
                <form className="space-y-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="border rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="border rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="border rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                        <select className="border rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-400">
                            <option>Select Insurance</option>
                            <option>Health Insurance</option>
                            <option>Life Insurance</option>
                            <option>Motor Insurance</option>
                            <option>Travel Insurance</option>
                        </select>
                    </div>

                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="border rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />

                    <button
                        type="submit"
                        className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-10 py-3 rounded-md transition"
                    >
                        Submit
                    </button>

                </form>
            </div>
        </section>
    );
}
