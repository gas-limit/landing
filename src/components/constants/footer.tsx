import type { IconType } from "react-icons/lib";

export const legalRoutes: Record<string, string>[] = [
	{
		name: "Terms & Conditions",
		href: "/terms-and-conditions",
	},
	{
		name: "Privacy Policy",
		href: "/privacy-policy",
	},
	{
		name: "Cookies",
		href: "/cookies",
	},
	{
		name: "Accessibility",
		href: "/accessibility",
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
				url: "/our-story",
			},
			{
				name: "Our Team",
				url: "/our-team",
			},
			{
				name: "Careers",
				url: "/careers",
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
				url: "/live-chat",
			},
		],
	},
];
