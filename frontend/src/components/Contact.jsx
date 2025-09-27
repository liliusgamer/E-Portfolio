// src/components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import useFadeIn from "../hooks/useFadeIn";

function Contact() {
    const [ref, isVisible] = useFadeIn();

    return (
        <section
            id="contact"
            ref={ref}
            className="min-h-screen flex items-center justify-center bg-white"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center max-w-lg"
            >
                <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 border rounded-lg"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 border rounded-lg"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows="5"
                        className="w-full p-3 border rounded-lg"
                    />
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                        Send Message
                    </button>
                </form>
            </motion.div>
        </section>
    );
}

export default Contact;
