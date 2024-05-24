import { constructMetadata } from "@/utils";
import { Terms } from "../../_sections";

export const metadata = constructMetadata({ title: "terms" });

export default function TermsPage() {
	return <Terms />;
}
