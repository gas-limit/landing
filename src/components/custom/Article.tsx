"use client";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import * as React from "react";

type ArticleProps = React.ComponentPropsWithoutRef<"article"> & {
	variant?: "primary" | "secondary";
};

const Article = React.forwardRef<
	HTMLElement,
	React.HTMLAttributes<HTMLElement>
>(({ className, style, variant, ...props }: ArticleProps, ref) => (
	<article
		className={cn(ArticleVariants({ variant }), className)}
		ref={ref}
		style={style}
		{...props}
	/>
));

const ArticleVariants = cva("bg-foreground-800 text-foreground-800", {
	variants: {
		variant: {
			primary: "bg-foreground-800 text-foreground-800",
			secondary: "bg-foreground-800 text-foreground-800",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

Article.displayName = "Article";

export { Article };
