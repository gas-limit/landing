"use client";

import { Nav } from "@/components";
import { fadeInAnimationVariants } from "@/components/constants/Motion";
import { Links } from "@/constants/links";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Logo } from "../Logo";
import { renderLink } from "./renderLink";

let isError = false;
if (typeof window === "undefined") isError = true;

export const Navbar = () => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	if (isLoaded && !isError) {
		return (
			<Nav
				className={`
					px-10 sticky top-0 z-50
					bg-gradient-to-b from-[#235B4E]/90
					to-[#235B4E]/10 backdrop-blur-lg flex flex-row items-center justify-center
				`}
			>
				<motion.div
					transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
					initial={{ y: "-100%" }}
					animate={{ y: "0%" }}
					className={`
						flex items-center justify-between 
						p-5 w-full max-w-screen-xl
					`}
				>
					<Logo size={`40`} className={`select-none`} />
					<div className="flex items-center justify-between grow">
						<motion.button
							className={`
								flex items-center justify-end 
								px-10 ml-auto
							`}
							initial="initial"
							animate="animate"
							exit="end"
							variants={fadeInAnimationVariants}
						>
							{Links.map(renderLink)}
						</motion.button>
					</div>
				</motion.div>
			</Nav>
		);
	}
};
