"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { IconType } from "react-icons/lib";
import { toast } from "sonner";
interface LinkProps {
	name: string;
	href: string;
	icon: IconType;
}

export const renderLink = (link: LinkProps, index: Index) => {
	return (
		<motion.span key={index}>
			<Button
				onClick={() => toast("Coming soon!")}
				className={`
				bg-white hover:bg-[#f5f5f5] text-black 
					font-semibold transition-all px-6 py-2 rounded-lg duration-300 text-lg flex gap-2 items-center justify-center
				`}
			>
				<motion.span>{link.name}</motion.span>
				<ArrowRight size={16} />
			</Button>
		</motion.span>
	);
};
