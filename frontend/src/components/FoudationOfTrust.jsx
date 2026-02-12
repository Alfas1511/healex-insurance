import { useState, useEffect } from "react";
import proof1 from "../assets/proofs/proof1.jpeg";
import proof2 from "../assets/proofs/proof2.jpeg";
import proof3 from "../assets/proofs/proof3.jpeg";
import proof4 from "../assets/proofs/proof4.jpeg";

export default function FoundationOfTrust() {
    const proofs = [proof1, proof2, proof3, proof4];
    const [selectedImage, setSelectedImage] = useState(null);

    // Close on ESC key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setSelectedImage(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <section className="py-12 bg-primary/15 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-primaryDark mb-12">
                    The Foundation of Trust: Our Claims
                </h2>

                <div className="relative w-full overflow-hidden">
                    <div className="flex gap-8 animate-scroll whitespace-nowrap">
                        {[...proofs, ...proofs].map((img, index) => (
                            <div
                                key={index}
                                className="min-w-[280px] md:min-w-[350px] bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition"
                                onClick={() => setSelectedImage(img)}
                            >
                                <img
                                    src={img}
                                    alt="Proof of Work"
                                    className="w-full h-60 object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* LIGHTBOX MODAL */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="max-w-4xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage}
                            alt="Expanded Proof"
                            className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
