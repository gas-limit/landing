import { constructMetadata } from "@/utils";
import { Privacy } from "../../_sections";

export const metadata = constructMetadata({ title: "privacy" });

export default function PrivacyPage() {
	return <Privacy />;
}
