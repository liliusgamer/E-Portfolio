import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("hero");

    const sections = [
        { id: "hero", label: "Home" },
        { id: "projects", label: "Projects" },
        { id: "experience", label: "Experience" },
        { id: "contact", label: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; // chừa khoảng offset
            let current = "hero";

            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element && element.offsetTop <= scrollPosition) {
                    current = section.id;
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" }); // smooth scroll
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">My Portfolio</h1>
                <ul className="flex space-x-6">
                    {sections.map((section) => (
                        <li key={section.id}>
                            <button
                                onClick={() => handleClick(section.id)}
                                className={`transition-colors ${activeSection === section.id
                                    ? "text-purple-600 font-semibold"
                                    : "text-gray-600 hover:text-purple-600"
                                    }`}
                            >
                                {section.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
