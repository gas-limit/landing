"use client";

import { cn } from "@/lib";
import type React from "react";
import { FooterBar, Navbar } from ".";

export const Semantics = ({
	children,
	className,
}: Readonly<{ children?: React.ReactNode; className: string }>) => {
	return (
		<>
			<Navbar />
			<main
				className={cn(
					`
						w-full mx-auto prose prose-lg flex flex-col items-center justify-center overflow-x-hidden
				`,
					className,
				)}
			>
				{children}
			</main>
			<FooterBar
				name={`Coven Finance`}
				description={`
          Coven Finance offers a unique platform for anyone to create, manage, and invest in index tokens composed of a diverse mix of ERC20 tokens, liquidity provider tokens, and lending tokens. Built on the fast and efficient Fantom network, Coven Finance allows seamless portfolio management with cutting-edge features.
        `}
			/>
		</>
	);
}
