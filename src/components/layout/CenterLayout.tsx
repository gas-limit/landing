"use client";

import { cn } from "@/lib/utils";
import type React from "react";

export const CenterLayout = ({
	Element,
	children,
	className,
}: Readonly<{
	children: React.ReactNode;
	Element: React.ElementType;
	className?: string;
}>) => {
	return (
		<Element
			className={cn(
				"px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24 max-w-screen-xl",
				className,
			)}
		>
			{children}
		</Element>
	);
};
