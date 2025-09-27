// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import useFadeIn from "../hooks/useFadeIn";

function Projects() {
    const [ref, isVisible] = useFadeIn();

    return (
        <section
            id="projects"
            ref={ref}
            className="min-h-screen flex items-center justify-center bg-white"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center max-w-3xl"
            >
                <h2 className="text-4xl font-bold mb-6">Projects</h2>
                <p className="text-gray-600 mb-4">
                    Here are some of the projects I’ve worked on recently.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-100 rounded-xl shadow">Project 1</div>
                    <div className="p-6 bg-gray-100 rounded-xl shadow">Project 2</div>
                    <div className="p-6 bg-gray-100 rounded-xl shadow">Project 3</div>
                    <div className="p-6 bg-gray-100 rounded-xl shadow">Project 4</div>
                </div>
            </motion.div>
        </section>
    );
}

export default Projects;
