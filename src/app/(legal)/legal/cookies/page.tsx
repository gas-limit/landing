import { constructMetadata } from "@/utils";
import { Cookies } from "../../_sections";

export const metadata = constructMetadata({ title: "cookies" });

export default function CookiesPage() {
	return <Cookies />;
}
