import { cn } from "@/lib/utils";
import type React from "react";

export default function Layout({
	Element,
	children,
	className,
}: Readonly<{
	children: React.ReactNode;
	Element: React.ElementType;
	className?: string;
}>) {
	return <Element className={cn("", className)}>{children}</Element>;
}
