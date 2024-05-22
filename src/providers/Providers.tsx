"use client";

import { Events, ThemeProvider } from "@/components/provider";
import type React from "react";
export default function Providers({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ProviderStack
			providers={[
				[
					ThemeProvider,
					{
						attribute: `class`,
						enableSystem: true,
						disableTransitionOnChange: true,
						defaultTheme: "system",
					},
				],
				[Events, {}],
			]}
		>
			{children}
		</ProviderStack>
	);
}

type NoInfer<T> = [T][T extends any ? 0 : 1];

type ContainsChildren = {
	children?: React.ReactNode;
};

function ProviderStack<
	Providers extends [ContainsChildren, ...ContainsChildren[]],
>({
	providers,
	children,
}: {
	providers: {
		[k in keyof Providers]: [
			React.JSXElementConstructor<Providers[k]>,
			Omit<NoInfer<Providers[k]>, "children">,
		];
	};
	children: React.ReactNode;
}) {
	let node = children;

	for (const [Provider, props] of providers) {
		node = <Provider {...props}>{node}</Provider>;
	}

	return node;
}
