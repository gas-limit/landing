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
