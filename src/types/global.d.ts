type sizes =
	| "0"
	| "1"
	| "2"
	| "3"
	| "4"
	| "5"
	| "6"
	| "7"
	| "8"
	| "9"
	| "10"
	| "11"
	| "12"
	| "14"
	| "16"
	| "20"
	| "24"
	| "28"
	| "32"
	| "36"
	| "40"
	| "44"
	| "48"
	| "52"
	| "56"
	| "60"
	| "64"
	| "72"
	| "80"
	| "96";

type Index = string | number;

interface SubLinkProps {
	name: string;
	href: string;
	icon: JSX.Element;
}

interface LinkProps {
	name: string;
	href: string;
	subLinks?: SubLinkProps[];
}