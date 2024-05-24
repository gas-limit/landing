import { CenterLayout } from "@/components";

export default function LegalLayout({
	children,
}: Readonly<{
	children?: React.ReactNode;
}>) {
	return (
		<>
			<CenterLayout
				Element={`section`}
				className={`
					prose prose-headings:text-white *:text-white
					sm:prose-lg lg:prose-xl bg-black/20 rounded-lg
					my-20 backdrop-filter backdrop-blur-md bg-opacity-45
					shadow-2xl p-4 z-[-1]
			`}
			>
				{children}
			</CenterLayout>
		</>
	);
}
