import { FaDiscord, FaTwitter } from "react-icons/fa";

export const Links: LinkProps[] = [
	{ name: "Investors", href: "https://3b3hv4uvdss.typeform.com/to/M0K48KDr" },
	{
		name: "Socials",
		href: "/",
		subLinks: [
			{
				name: "Discord",
				href: "https://discord.gg/XDqxjWwujD",
				icon: <FaDiscord className="w-5 h-5" />,
			},
			{
				name: "Twitter",
				href: "https://twitter.com/TheLeagueDeFi",
				icon: <FaTwitter className="w-5 h-5" />,
			},
		],
	},
];
