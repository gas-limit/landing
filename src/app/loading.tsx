"use client";
import { ElementLayout, CustomPicture as Picture } from "@/components";
import Image from "next/image";
import React from "react";

const Loading = React.memo(() => {
	return (
		<>
			<ElementLayout
				Element={`section`}
				className={`
					flex flex-col justify-center
					items-center h-screen w-screen
					overflow-hidden absolute top-0
					left-0 bottom-0 right-0 z-50 bg-[#4C246E]
				`}
			>
				<Picture
					className={`
						h-screen w-screen
						overflow-hidden 
						absolute flex items-center justify-center
					`}
				>
					<Image
						className={`animate-bounce`}
						src="/assets/images/web/loading.png"
						alt=""
						width={300}
						height={300}
					/>
				</Picture>
			</ElementLayout>
		</>
	);
})

export default Loading;