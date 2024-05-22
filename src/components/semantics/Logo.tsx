"use client";
import { CustomPicture } from "@/components";
import { cn } from "@/lib/utils";
import { TwDimensionConversion } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type React from "react";

export const Logo: React.FC<{
	size: Sizes;
	className?: string;
}> = ({ size, className }) => {
	const router = useRouter();
	return (
		<CustomPicture
			className={cn(
				`flex justify-center cursor-pointer h-${size} w-${size}`,
				className,
			)}
			onClick={() => router.push("/")}
		>
			<Image
				src={`/assets/svgs/logo-text.svg`}
				alt={``}
				height={TwDimensionConversion(size)}
				width={TwDimensionConversion(size)}
			/>
		</CustomPicture>
	);
};
