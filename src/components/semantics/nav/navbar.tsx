"use client";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import * as React from "react";
import { useState } from "react";
import { useIsomorphicLayoutEffect } from "usehooks-ts";
import { Logo } from "../Logo";

let isError = false;
if (typeof window === "undefined") isError = true;

const Links = [
	{
		href: "#about",
		name: "About",
	},
	{
		href: "#services",
		name: "Services",
	},
	{
		href: "#protocols",
		name: "Protocols",
	},
];

export const Navbar = React.memo(() => {
	const [isLoaded, setIsLoaded] = useState(false);

	useIsomorphicLayoutEffect(() => {
		setIsLoaded(true);
	}, []);

	const ScrollIntoCenterView = (href: string) => {
		const element = document.getElementById(href)! as HTMLElement;
		if (element) {
			const elementRect = element.getBoundingClientRect();
			const absoluteElementTop = elementRect.top + window.scrollY;
			const middle =
				absoluteElementTop +
				Math.floor(elementRect.height / 2) -
				Math.floor(window.innerHeight / 2);
			window.scrollTo({
				top: middle,
				behavior: "smooth",
			});
		}
	};

	if (isLoaded && !isError) {
		return (
			<>
				<nav
					className={cn(
						"px-10 sticky top-0 z-50 flex items-center justify-center w-full h-[6rem]",
					)}
				>
					<motion.div
						className={cn(
							"flex items-center justify-between p-5 w-full max-w-screen-xl absolute z-10",
						)}
					>
						<Link 
							href="/"
							aria-label="Coven Finance"
						>
							<Logo size={`40`} />
						</Link>

						{/* <NavigationMenu>
							<NavigationMenuList>
								{Links.map((link) => (
									<NavigationMenuItem key={link.name}>
										<Link
											href={link.href}
											onClick={(e) => {
												e.preventDefault();
												ScrollIntoCenterView(link.href)
											}}
										>
											<NavigationMenuLink 
												className={navigationMenuTriggerStyle()}
											>
												{link.name}
											</NavigationMenuLink>
										</Link>
									</NavigationMenuItem>
								))}
							</NavigationMenuList>
						</NavigationMenu> */}
					</motion.div>
					<div className="backdrop"></div>
				</nav>
			</>
		);
	}
	return null;
});
