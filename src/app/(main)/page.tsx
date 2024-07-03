import { Card, EnterAnimation, Hero, Section, Title } from "@/components";
import type React from "react";
import { AboutPanel, SectionsPanel } from "./_sections/index";

export default function HomePage() {
	const images: {
		source: string;
		name: string;
	}[] = [
		{
			source: "/assets/images/proto/1.png",
			name: "Spookyswap",
		},
		{
			source: "/assets/images/proto/2.png",
			name: "WigoSwap",
		},
		{
			source: "/assets/images/proto/3.png",
			name: "Tarot",
		},
		{
			source: "/assets/images/proto/4.png",
			name: "Equalizer",
		},
		{
			source: "/assets/images/proto/5.png",
			name: "BeethovenX",
		},
		{
			source: "/assets/images/proto/6.png",
			name: "Fantom Moneymarkets",
		},
		{
			source: "/assets/images/proto/7.png",
			name: "Polter Finance",
		},
	];
	return (
		<>
			<Hero
				title={`Coven Finance`}
				subtitle={`Yield optimized index tokens on Fantom`}
			/>
			{/* <ProtocolsPanel /> */}
			<AboutPanel />
			<SectionsPanel />
			<Section
				className={`
					grid grid-cols-2 gap-4
					md:grid-cols-3 lg:grid-cols-4
					justify-center items-center
					p-4 mb-32
				`}
				id={`protocols`}
			>
				<Title
					h="h2"
					title={`Integrated with`}
					className={`
						col-span-full text-center text-2xl
						font-bold text-white
					`}
				/>
				{[...images].map((item, idx: Index) => (
					<EnterAnimation key={idx}>
						<Card image={`${item.source}`} name={item.name} />
					</EnterAnimation>
				))}
			</Section>
		</>
	);
}
