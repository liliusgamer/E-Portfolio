// src/hooks/useInView.js
import { useEffect, useRef, useState } from "react";

export default function useInView(options = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // chỉ animate 1 lần
                }
            },
            { threshold: 0.2, ...options }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [options]);

    return [ref, isVisible];
}
