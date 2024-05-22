import { constructMetadata, constructViewport } from "@/utils";

export const metadata = constructMetadata({ title: "Legal" });
export const viewport = constructViewport();

export default function LegalLayout({
	children,
}: Readonly<{
	children?: React.ReactNode;
}>) {
	return <>{children}</>;
}
