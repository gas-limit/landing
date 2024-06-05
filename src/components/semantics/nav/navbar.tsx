"use client";

import { Nav } from "@/components";
import { useEffect, useState } from "react";

import { Logo } from "../Logo";
import Link from "next/link";
import React from "react";

let isError: boolean = false;
if (typeof window === "undefined") isError = true;

export const Navbar = React.memo(() => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	if (isLoaded && !isError) {
		return (
			<Nav
				className={`
					px-10 sticky top-0 z-50
					flex items-center justify-center
					w-full h-[6rem]
				`}
			>
				<Link
					href="/"
					className={`
						flex items-center justify-between 
						p-5 w-full max-w-screen-xl absolute z-10
					`}
				>
					<Logo size={`40`} />
				</Link>
				<div className="backdrop"></div>
			</Nav>
		);
	}
});
