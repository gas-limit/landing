"use client";

import type React from "react";
import { Footer, Navbar } from ".";
export default function Semantics({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<Navbar />
			{children}
			<Footer
				name={`Coven Finance`}
				description={`
          Coven Finance offers a unique platform for anyone to create, manage, and invest in index tokens composed of a diverse mix of ERC20 tokens, liquidity provider tokens, and lending tokens. Built on the fast and efficient Fantom network, Coven Finance allows seamless portfolio management with cutting-edge features.
        `}
			/>
		</>
	);
}
