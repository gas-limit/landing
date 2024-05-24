"use client";
import Link from "next/link";

export const FooterSection: React.FC<{
	title: string;
	links: { name: string; url: string }[];
}> = ({ title, links }) => (
	<div className="text-center sm:text-left">
		<p className="text-lg font-semibold">{title}</p>
		<ul className="mt-8 space-y-4 text-sm">
			{links.map((link) => (
				<li key={link.name}>
					<Link className="transition hover:text-[#328170]/75" href={link.url}>
						{link.name}
					</Link>
				</li>
			))}
		</ul>
	</div>
);
