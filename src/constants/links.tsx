import { FaDesktop } from "react-icons/fa";
import type { IconType } from "react-icons/lib";
interface LinkProps {
	name: string;
	href: string;
	icon: IconType;
}

export const Links: LinkProps[] = [{ name: "App", href: "/", icon: FaDesktop }];
