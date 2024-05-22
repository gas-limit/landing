"use client";
import Link from "next/link";

export const FooterSection: React.FC<{
	title: string;
	links: { name: string; url: string }[];
}> = ({ title, links }) => (
	<div className="text-center sm:text-left">
		<p className="text-lg font-medium text-gray-900">{title}</p>
		<ul className="mt-8 space-y-4 text-sm">
			{links.map((link) => (
				<li key={link.name}>
					<Link
						className="text-gray-700 transition hover:text-gray-700/75"
						href={link.url}
					>
						{link.name}
					</Link>
				</li>
			))}
		</ul>
	</div>
);
