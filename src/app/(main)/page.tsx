"use client";

import { Hero, Picture, Title } from "@/components";
import { AnimatedText, Slide } from "@/components";
import { Background } from "@/components/svgs/Background";
import { Article, Section } from "@/components/templates";
import { sections } from "@/constants";
import { Slugify } from "@/utils";
import Image from "next/image";
import type React from "react";

export default function HomePage() {
	// await new Promise((resolve) => setTimeout(resolve, 2000)); <- only uncomment if you want a longer loading time
	return (
		<>
			<Hero
				image={`/assets/images/landing/hero.png`}
				title={`Coven Finance`}
				paragraph={`
						Yield optimized index tokens on Fantom
					`}
			/>
			{sections.map((section, index) => {
				const adjustedIndex = index + 1;
				return (
					<Section
						key={Slugify(section.title!)}
						className={` h-96 flex flex-col `}
					>
						<Article
							className={`
							flex flex-col justify-start items-center
							`}
						>
							<Title h={`h2`} title={section.title!} className={``} />
							<AnimatedText text={section.description!} className={``} />
						</Article>
						<Slide delay={+adjustedIndex * 0.5}>
							<Picture
								className={`
								
								`}
								children={
									<Image
										src={`/assets/images/landing/${adjustedIndex}.png`}
										alt={``}
										width={300}
										height={300}
									/>
								}
							/>
						</Slide>
					</Section>
				);
			})}
			<Background />
		</>
	);
}
