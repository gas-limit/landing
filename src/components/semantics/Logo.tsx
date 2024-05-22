"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type React from "react";
import { Picture } from "../custom";

export const Logo: React.FC<{
	size: string | number;
	className?: string;
}> = ({ size, className }) => {
	const router = useRouter();
	return (
		<Picture
			className={cn(
				`flex justify-center cursor-pointer h-${size} w-${size}`,
				className,
			)}
			onClick={() => router.push("/")}
		>
			<Image
				src={`/assets/svgs/logo-text.svg`}
				alt={``}
				height={size as number}
				width={size as number}
			/>
		</Picture>
	);
};
