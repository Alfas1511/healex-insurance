import emailjs from "emailjs-com";
import { useRef } from "react";

export default function GetInsuranceForm() {

    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_34fmlep",
            "template_mp8jf7c",
            formRef.current,
            "R2NrNd1qb-3XmYcG_"
        )
            .then(() => {
                alert("Message sent successfully!");
                formRef.current.reset();
            })
            .catch((error) => {
                alert("Failed to send message");
                console.error(error);
            });
    };

    return (
        <section className="py-20 bg-white" id="contact-form">
            <div className="max-w-4xl mx-auto px-4">

                <h2 className="text-4xl font-bold text-center mb-12">
                    Get <span className="text-teal-500">Insurance</span>
                </h2>

                <form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className="space-y-6"
                >

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="border rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-teal-400"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="border rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-teal-400"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            required
                            className="border rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-teal-400"
                        />

                        <select
                            name="insurance"
                            required
                            className="border rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-teal-400"
                        >
                            <option value="">Select Insurance</option>
                            <option value="Health Insurance">Health Insurance</option>
                            <option value="Life Insurance">Life Insurance</option>
                            <option value="Motor Insurance">Motor Insurance</option>
                            <option value="Travel Insurance">Travel Insurance</option>
                        </select>
                    </div>

                    <textarea
                        rows="5"
                        name="message"
                        placeholder="Your Message"
                        required
                        className="border rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-teal-400"
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
