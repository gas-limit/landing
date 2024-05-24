"use client";

import { cn } from "@/lib/utils";
import type React from "react";
import { CustomArticle } from "./Article";

export const Glass: React.FC<
	Readonly<{
		children?: React.ReactNode;
		className?: string;
	}>
> = ({ children, className }) => {
	return (
		<CustomArticle
			className={cn(
				`
          bg-opacity-10
          backdrop-filter backdrop-blur-sm
          bg-white
          border border-foreground-800
          rounded-lg p-4 shadow-lg
        `,
				className,
			)}
		>
			{children}
		</CustomArticle>
	);
};

export default Glass;
