import type { Metadata, Viewport } from "next";

export function constructMetadata({
	title = "Coven Finance",
	description = "Coven Finance offers a unique platform for anyone to create, manage, and invest in index tokens composed of a diverse mix of ERC20 tokens, liquidity provider tokens, and lending tokens. Built on the fast and efficient Fantom network, Coven Finance allows seamless portfolio management with cutting-edge features.",
	image = "/assets/images/og.png",
	icons = "/assets/svgs/logo.svg",
	noIndex = false,
}: {
	title?: string;
	description?: string;
	image?: string;
	icons?: string;
	noIndex?: boolean;
} = {}): Metadata {
	return {
		title: {
			default: title,
			template: `${title} - %s`,
		},
		description: description,
		openGraph: {
			title,
			description,
			images: [
				{
					url: image,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
			creator: "@Coven_fi",
		},
		icons: [
			{
				url: icons,
				href: icons,
			},
		],
		// manifest: "/pwa/manifest.json",
		metadataBase: new URL("https://www.coven.fi/"),
		other: {
			currentYear: new Date().getFullYear(),
			timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
		},
		...(noIndex && {
			robots: {
				index: false,
				follow: false,
			},
		}),
	};
}

export async function constructViewport(): Promise<Viewport> {
	return {
		width: "device-width",
		height: "device-height",
		initialScale: 1,
		minimumScale: 1,
		maximumScale: 1,
		userScalable: false,
		viewportFit: "cover",
		interactiveWidget: "resizes-visual",
		themeColor: [
			{ media: "(prefers-color-scheme: light)", color: "#409888" },
			{ media: "(prefers-color-scheme: dark)", color: "#5E4978" },
		],
		colorScheme: "dark light",
	};
}
