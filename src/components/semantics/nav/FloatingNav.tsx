"use client";
import { cn } from "@/lib";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
export const FloatingNav = ({
	navItems,
	className,
}: {
	navItems?: {
		name: string;
		link: string;
		icon?: JSX.Element;
	}[];
	className?: string;
}) => {
	return (
		<>
			<motion.nav
				className={`
          flex max-w-[350px] sticky top-50 inset-x-0 mx-auto 
          border border-transparent dark:border-white/[0.2] 
          rounded-full dark:bg-black/50 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] 
          px-8 py-3  items-center justify-center space-x-4 
          mt-5 z-50`}
			>
				<Link href={`/`}>
					<Image
						src={`/assets/svgs/logo.svg`}
						alt={`Logo`}
						width={40}
						height={40}
						className={`cursor-pointer no-drag`}
					/>
				</Link>
			</motion.nav>
		</>
	);
};
