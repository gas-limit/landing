import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import * as React from "react";

type PictureProps = React.ComponentPropsWithoutRef<"picture"> & {
	variant?: "primary" | "secondary";
};

const Picture = React.forwardRef<
	HTMLElement,
	React.HTMLAttributes<HTMLElement>
>(({ className, children, style, variant, ...props }: PictureProps, ref) => {
	// const srcSet = getSrcFromChildImage(children);
	return (
		<picture
			className={cn(PictureVariants({ variant }), className)}
			ref={ref}
			style={style}
			{...props}
		>
			{children}
			<source srcSet={""} type="image/webp" />
		</picture>
	);
});

const PictureVariants = cva("overflow-hidden", {
	variants: {
		variant: {
			primary: "rounded-lg shadow-lg",
			secondary: "rounded-md shadow-md",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

Picture.displayName = "Picture";

const getSrcFromChildImage = (
	children: React.ReactNode,
): string | undefined => {
	let src: string | undefined;

	React.Children.forEach(children, (child) => {
		if (
			React.isValidElement(child) &&
			child.type === "img" &&
			child.props.src
		) {
			src = child.props.src;
		}
	});

	return src;
};

export { Picture };
