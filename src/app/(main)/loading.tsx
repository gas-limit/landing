"use client";
import { Main, Section } from "@/components/templates";
import Image from "next/image";

export default function Loading() {
	return (
		<>
			<Main
				className={`flex absolute overflow-hidden h-[100dvh] w-full justify-center items-center`}
			>
				<Section className={``}>
					<Image
						className={`animate-bounce`}
						src="/assets/images/web/loading.png"
						alt=""
						width={300}
						height={300}
					/>
				</Section>
			</Main>
		</>
	);
}
