"use client";
import type { SocialLink } from "@/components/constants";
import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";

const socialLinks: SocialLink[] = [
	{
		href: "https://twitter.com/Coven_fi",
		name: "Twitter",
		Icon: FaTwitter,
	},
	{
		href: "https://github.com/Coven-Finance",
		name: "GitHub",
		Icon: FaGithub,
	},
];

export const SocialLinks = () => (
	<ul className="flex justify-center gap-6 mt-8 sm:justify-start md:gap-8">
		{socialLinks.map(({ href, name, Icon }) => (
			<li key={href}>
				<Link
					href={href}
					rel="noreferrer noopener"
					target="_blank"
					className="text-teal-700 transition hover:text-teal-700/75"
				>
					<span className="sr-only">{name}</span>
					<Icon className="w-6 h-6" />
				</Link>
			</li>
		))}
	</ul>
);
