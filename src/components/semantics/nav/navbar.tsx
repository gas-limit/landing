"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";
import { Logo } from "../Logo";

export const Navbar = React.memo(() => {
	return (
		<>
			<nav
				className={cn(
					"px-10 sticky top-0 z-50 flex items-center justify-center w-full h-[6rem]",
				)}
			>
				<div
					className={cn(
						"flex items-center justify-between p-5 w-full max-w-screen-xl absolute z-10",
					)}
				>
					<Link
						className="sr-only"
						href="/"
						rel="noopener noreferrer"
						target="_self"
						aria-label="Coven Finance"
					>
						<Logo size={`40`} />
					</Link>
				</div>
				<div className="backdrop"></div>
			</nav>
		</>
	);
});
