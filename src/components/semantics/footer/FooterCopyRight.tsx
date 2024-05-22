"use client";

import type { LegalRoutesType } from "@/components/constants";
import Link from "next/link";
import React from "react";

export const FooterCopyright: React.FC<{
	name: string;
	legalRoutes?: LegalRoutesType;
}> = ({ name, legalRoutes }) => {
	return (
		<div className="pt-6 mt-12 border-t border-gray-100">
			<div className="text-center sm:flex sm:justify-between sm:text-left">
				<p className="text-sm text-gray-500">
					<span className="block sm:inline">All rights reserved.</span>
					{legalRoutes
						? legalRoutes.map((route, index: Index) => (
								<React.Fragment key={index}>
									<Link
										className={`
                  inline-block text-teal-600 underline transition hover:text-teal-600/75
                  `}
										href={route.href!}
									>
										{route.name}
									</Link>
									<span>&middot;</span>
								</React.Fragment>
							))
						: null}
				</p>
				<p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
					&copy; 2024 {name}
				</p>
			</div>
		</div>
	);
};
