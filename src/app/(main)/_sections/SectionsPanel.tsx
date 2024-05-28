"use client";
import {
	Article,
	Picture,
	Section,
	Slide,
	Text,
	Title,
	glass,
} from "@/components";
import { sections } from "@/constants";
import { Slugify } from "@/utils";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
export const SectionsPanel = () => {
	const isLargeScreen = useMediaQuery("(min-width: 1600px)");
	return (
		<Section
			className={`
					grid grid-cols-1 lg:grid-cols-2 grid-row-1
					prose-lg gap-5 m-auto mb-6 mt-8
					px-[1.25rem]
				`}
		>
			{sections.map((section, index) => {
				const adjustedIndex = index + 1;
				return (
					<Slide 
						key={Slugify(section.title!)}
						delay={+adjustedIndex * 0.25}
					>
						<Section
							className={`
								flex flex-col-reverse sm:flex-row
								justify-center items-center h-full
								${glass} border-zinc-300/35
								overflow-auto ${isLargeScreen ? `p-0 rounded-2xl` : ``}
								`}
							style={{
								backgroundImage: `${
									isLargeScreen
										? `url(/assets/images/landing/${adjustedIndex}.png)`
										: `none`
								}`,
								backgroundSize: "contain",
								backgroundPosition: "right",
								backgroundRepeat: "no-repeat",
							}}
						>
							<Article
								className={`
										flex flex-col justify-start items-center mr-4 ml-4 overflow-auto 
										${
											isLargeScreen
												? `w-full h-full m-0 backdrop-filter backdrop-blur-md bg-black/10`
												: ``
										}
								`}
								style={{
									borderRadius: "1rem",
								}}
							>
								<Title
									h="h2"
									title={section.title!}
									className={`
											w-full overflow-auto font-bold
											text-2xl sm:text-3xl lg:text-4xl
											${isLargeScreen ? `px-4` : ``}
										`}
								/>
								<Text
									text={section.description!}
									className={`
											max-w-xl mx-auto sm:text-xl/relaxed
											overflow-auto ${isLargeScreen ? `px-4` : ``}
										`}
								/>
							</Article>
							<Slide delay={+adjustedIndex * 0.5}>
								<Picture className={`overflow-auto`}>
									{!isLargeScreen && (
										<Image
											src={`/assets/images/landing/${adjustedIndex}.png`}
											alt=""
											style={{}}
											width={300}
											height={300}
										/>
									)}
								</Picture>
							</Slide>
						</Section>
					</Slide>
				);
			})}
		</Section>
	);
};
