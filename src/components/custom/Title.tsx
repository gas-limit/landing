"use client";

import { cn } from "@/lib/utils";
import type React from "react";

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TitleProps extends Record<string, string | undefined> {
	h: HeadingElement;
}

export const Title: React.FC<Readonly<TitleProps>> = ({
	h: Component = "h1",
	title,
	subtitle,
	className,
	subClassName,
}) => {
	return (
		<Component className={cn("", className)}>
			{title}
			{subtitle && <span className={cn("", subClassName)}>{subtitle}</span>}
		</Component>
	);
};

export default Title;
