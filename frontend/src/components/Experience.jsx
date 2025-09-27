// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import useFadeIn from "../hooks/useFadeIn";

function Experience() {
    const [ref, isVisible] = useFadeIn();

    return (
        <section
            id="experience"
            ref={ref}
            className="min-h-screen flex items-center justify-center bg-gray-50"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center max-w-3xl"
            >
                <h2 className="text-4xl font-bold mb-6">Experience</h2>
                <ul className="space-y-4 text-gray-700">
                    <li>💼 Software Engineer at Company A (2021 - Present)</li>
                    <li>💼 Frontend Developer at Company B (2019 - 2021)</li>
                    <li>💼 Intern at Company C (2018 - 2019)</li>
                </ul>
            </motion.div>
        </section>
    );
}

export default Experience;
