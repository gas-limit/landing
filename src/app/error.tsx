"use client";

import { Title } from "@/components";
import { Button } from "@/components/ui/button";
import { useLayoutEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useLayoutEffect(() => {
		console.error(error);
	}, [error]);
	return (
		<html>
			<body>
				<Title h="h2" title="Something went wrong!" className={``} />
				<Button onClick={() => reset()}>Try again</Button>
			</body>
		</html>
	);
}
