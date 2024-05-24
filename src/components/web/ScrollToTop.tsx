"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ScrollToTop: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
		};
		window.addEventListener("scroll", toggleVisibility);

		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	const scrollToTop = () => {
		isVisible &&
			window.scrollTo({
				top: 0,
				behavior: "auto",
			});
	};

	return (
		<picture
			className={`fixed bottom-4 right-4 rounded-full p-2 outline-none transition-opacity duration-200 bg-transparent ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
			role={`button`}
			onClick={scrollToTop}
		>
			<Image
				src={`/assets/svgs/web/scroll.svg`}
				alt={`Scroll to top`}
				width={40}
				height={40}
				className={`object-cover hover:scale-110 transition-transform duration-200`}
			/>
		</picture>
	);
};
