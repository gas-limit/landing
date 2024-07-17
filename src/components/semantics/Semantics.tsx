"use client";

import { cn } from "@/lib";
import React from "react";
import { FloatingNav, FooterBar, Navbar } from ".";
import { Background } from "../svgs";

export const Semantics = React.memo(
	({
		children,
		className,
	}: Readonly<{ children?: React.ReactNode; className: string }>) => {
		return (
			<>
				<Navbar />
				<main
					className={cn(
						`
						w-full mx-auto flex flex-col items-center justify-center overflow-x-hidden 
				`,
						className,
					)}
				>
					{children}
				</main>
				<FooterBar
					name={`Coven Finance`}
					description={`
          Coven Finance offers a unique platform for anyone to create, manage, and invest in index tokens composed of a diverse mix of ERC20 tokens, liquidity provider tokens, lending tokens and governance tokens which can be automatically placed in yield farming strategies.
        `}
				/>
				<Background />
			</>
		);
	},
);
