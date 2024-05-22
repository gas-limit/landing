"use client";
import { fadeInAnimationVariants } from "@/components/constants/Motion";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import Link from "next/link";
import type { IconType } from "react-icons/lib";

interface LinkProps {
	name: string;
	href: string;
	icon: IconType;
}

export const renderLink = (link: LinkProps, index: Index) => {
	return (
		<motion.span key={index}>
			<Link
				href={link.href}
				target={link.name !== "Investors" ? "_self" : "_blank"}
				className="mx-10 bg-accent text-zinc-900 hover:bg-gray-300 dark:hover:bg-zinc-900 dark:hover:text-[#fafafa] font-semibold transition-all px-3 py-2 rounded-lg duration-300"
			>
				{link.name}
			</Link>
		</motion.span>
	);
};
