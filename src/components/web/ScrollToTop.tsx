"use client";

import { Button } from "@/components/ui/button";
import { throttle } from "lodash";
import { ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";

export const ScrollToTop: React.FC = React.memo(() => {
	const [isVisible, setIsVisible] = useState(false);
	const [isDark, setIsDark] = useState(false);
	const [position, setPosition] = useState("absolute");

	useEffect(() => {
		const toggleVisibility = throttle(() => {
			const scrollY = window.scrollY;
			setIsVisible(scrollY > 1000);
			setPosition(scrollY > 1000 ? "fixed" : "absolute");
		}, 200);

		const checkColorScheme = () => {
			setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
		};

		window.addEventListener("scroll", toggleVisibility);
		window.addEventListener("resize", checkColorScheme);
		checkColorScheme();

		return () => {
			window.removeEventListener("scroll", toggleVisibility);
			window.removeEventListener("resize", checkColorScheme);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<Button
			variant="outline"
			size="icon"
			className={`
        ${position} bottom-8 right-8 p-2 z-50
        cursor-pointer
        group inline-flex items-center justify-center
        rounded-full shadow-lg
        transition-all duration-300 ease-in-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        ${
					isDark
						? "bg-gradient-to-r from-[#C1A3E7] via-[#D4B8EF] to-[#A3E4E7]"
						: "bg-gradient-to-r from-[#E0C7FF] via-[#E5DBFF] to-[#A0E7E5]"
				}
        text-purple-900 hover:shadow-[0px_0px_25px_rgba(220,170,250,0.8)]
        transform transition-transform transform-origin-center hover:scale-105
        before:absolute before:inset-0 before:rounded-full before:bg-white/30 before:blur-lg before:opacity-40 hover:before:opacity-60
        after:content-[''] after:absolute after:inset-0 after:rounded-full after:animate-pulse after:bg-white/20 after:opacity-0 group-hover:after:opacity-100
      `}
			onClick={scrollToTop}
			aria-label="Scroll to top"
		>
			<ChevronUp className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
		</Button>
	);
});

export default ScrollToTop;
