import { constructMetadata } from "@/utils";
import { Accessibility } from "../../_sections";

export const metadata = constructMetadata({ title: "accessibility" });

export default function AccessibilityPage() {
	return <Accessibility />;
}
