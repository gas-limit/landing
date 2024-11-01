import type { IconType } from "react-icons/lib";

export const legalRoutes: Record<string, string>[] = [
	{
		name: "Terms & Conditions",
		href: "/legal/terms",
	},
	{
		name: "Privacy Policy",
		href: "/legal/privacy",
	},
	{
		name: "Cookies",
		href: "/legal/cookies",
	},
	{
		name: "Accessibility",
		href: "/legal/accessibility",
	},
];

export type LegalRoutesType = typeof legalRoutes;

export type SocialLink = {
	href: string;
	name: string;
	Icon: IconType;
};

export interface FooterProps
	extends Record<
		"About Us" | "Our Services" | "Helpful Links",
		{
			name: string;
			url: string;
		}[]
	> {}

export const footer: FooterProps[] = [
	{
		"About Us": [
			{
				name: "Our Story",
				url: "/about/story",
			},
			{
				name: "Our Team",
				url: "/about/team",
			},
			{
				name: "Careers",
				url: "/about/careers",
			},
		],
		"Our Services": [
			{
				name: "Services",
				url: "/services",
			},
			{
				name: "Pricing",
				url: "/pricing",
			},
			{
				name: "FAQs",
				url: "/faqs",
			},
		],
		"Helpful Links": [
			{
				name: "Support",
				url: "/support",
			},
			{
				name: "Live Chat",
				url: "/support/chat",
			},
		],
	},
];
