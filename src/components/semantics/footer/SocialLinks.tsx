"use client";
import type { SocialLink } from "@/components/constants";
import Link from "next/link";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

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
	{
		href: "https://discord.gg/nraaSkNufk",
		name: "Discord",
		Icon: FaDiscord,
	},
];

export const SocialLinks = () => (
	<ul className="flex justify-center gap-6 mt-8 sm:justify-start md:gap-8 w-full">
		{socialLinks.map(({ href, name, Icon }) => (
			<li key={href}>
				<Link
					href={href}
					rel="noreferrer noopener"
					target="_blank"
					className="transition hover:text-[#328170]/75"
				>
					<span className="sr-only">{name}</span>
					<Icon className="w-6 h-6" />
				</Link>
			</li>
		))}
	</ul>
);
