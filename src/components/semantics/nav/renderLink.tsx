import { fadeInAnimationVariants } from "@/components/constants/Motion";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import Link from "next/link";

export const renderLink = (link: LinkProps, index: Index) => {
	if (link.subLinks) {
		return (
			<DropdownMenu key={index}>
				<DropdownMenuTrigger asChild>
					<motion.span
						variants={fadeInAnimationVariants}
						initial="initial"
						animate="animate"
						exit="end"
					>
						<Link
							href={link.href}
							className="mx-10 bg-accent text-zinc-900 hover:bg-gray-300 dark:hover:bg-zinc-900 dark:hover:text-[#fafafa] font-semibold transition-all px-3 py-2 rounded-lg duration-300"
						>
							{link.name}
						</Link>
					</motion.span>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="mt-1 ml-2" align="end">
					{link.subLinks.map((subLink, subIndex) => (
						<DropdownMenuItem key={subIndex} className="transition-all">
							<Link
								className="font-medium flex items-center justify-between w-[100%]"
								href={subLink.href}
								target="_blank"
							>
								{subLink.name}
								<span>{subLink.icon}</span>
							</Link>
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		);
	}

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
