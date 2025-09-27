import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6 mt-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Dat Le. All rights reserved.</p>
                <div className="flex gap-6 text-xl">
                    <a href="https://github.com/yourgithub" target="_blank" className="hover:text-white">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="hover:text-white">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:yourname@example.com" className="hover:text-white">
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </footer>
    );
}
