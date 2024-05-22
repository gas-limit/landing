"use client";
import { useRouter } from "next/navigation";
import { type ElementRef, useEffect, useRef, useState } from "react";

import { fadeInAnimationVariants } from "@/components/constants/Motion";
import { Button } from "@/components/ui/button";
import { Links } from "@/constants/links";
import { useSettings } from "@/core/store";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
import { renderLink } from "./renderLink";

export const Navbar = () => {
	const router = useRouter();
	const [isLoaded, setIsLoaded] = useState(false);
	const [isCollapsed, setIsCollapsed] = useState(true);
	const isMobile = useMediaQuery("(max-width:768px)");
	const settings = useSettings();
	const navbarRef = useRef<ElementRef<"div">>(null);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	if (isLoaded && !isMobile) {
		return (
			<nav
				className={`
					px-10 sticky top-0 z-[99999]
					mx-auto 
				`}
			>
				<motion.div
					transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
					initial={{ y: "-100%" }}
					animate={{ y: "0%" }}
					className={cn(
						"flex items-center justify-between p-5 z-[99999] text-white",
						isMobile && "hidden",
					)}
				>
					<span className="cursor-pointer" onClick={() => router.push("/")}>
						<Image
							src="/assets/svgs/logo-text.svg"
							alt="Logo"
							width={130}
							height={130}
							priority
						/>
					</span>
					<div className="flex items-center justify-between grow">
						<motion.div
							className="flex items-center justify-end px-10 grow"
							initial="initial"
							animate="animate"
							exit="end"
							variants={fadeInAnimationVariants}
						>
							{Links.slice(0, 2).map(renderLink)}
						</motion.div>
					</div>
				</motion.div>
			</nav>
		);
	}

	if (isLoaded && isMobile) {
		return (
			<>
				<Button
					variant="outline"
					size="icon"
					className="fixed left-3 top-3 dark:border-white"
					onClick={() => setIsCollapsed(false)}
				>
					<Menu className="dark:text-white" />
				</Button>
				<motion.header
					ref={navbarRef}
					transition={{ duration: 0.5, type: "tween", ease: "backInOut" }}
					animate={isCollapsed ? "open" : "close"}
					initial={{ x: "-100%" }}
					variants={{ close: { x: "0" }, open: { opacity: 0, x: "-100%" } }}
					className={cn(
						"fixed top-0 left-0 right-0 bottom-0 flex flex-col items-start justify-start py-10 px-4 h-[100vh] bg-[#fafafa] dark:bg-zinc-900 z-[99999]",
						!isMobile && "hidden",
					)}
				>
					<span
						className="cursor-pointer flex justify-between items-center w-[100%]"
						onClick={() => router.push("/")}
					>
						<span className="flex items-center justify-center flex-grow">
							<Image
								src="/assets/svgs/logo.svg"
								alt="Logo"
								width="70"
								height="70"
								priority
							/>
						</span>
						<span>
							<Button
								variant="outline"
								size="icon"
								className="dark:border-white"
								onClick={() => setIsCollapsed(true)}
							>
								<X className="dark:text-white" />
							</Button>
						</span>
					</span>
					<div className="flex flex-col w-[100%] flex-grow">
						<div className="flex flex-col justify-around p-5 grow">
							{Links.map((link, index) =>
								link.subLinks ? (
									link.subLinks.map((subLink, subIndex) => (
										<Link
											href={subLink.href}
											className="p-5 mx-10 font-semibold transition-all duration-300 rounded-sm cursor-pointer dark:hover:bg-zinc-700 hover:bg-gray-200"
											target="_blank"
											key={subIndex}
										>
											<motion.span
												onClick={() => setIsCollapsed(true)}
												className="flex items-center justify-between"
											>
												{subLink.name}
												<span className="justify-self-end">{subLink.icon}</span>
											</motion.span>
										</Link>
									))
								) : (
									<motion.span
										onClick={() => {
											setIsCollapsed(true);
											setTimeout(() => router.push(link.href), 1500);
										}}
										key={index}
										className="p-5 mx-10 font-semibold transition-all duration-300 rounded-sm cursor-pointer dark:hover:bg-zinc-700 hover:bg-gray-200"
									>
										{link.name}
									</motion.span>
								),
							)}
						</div>
					</div>
				</motion.header>
			</>
		);
	}
};
