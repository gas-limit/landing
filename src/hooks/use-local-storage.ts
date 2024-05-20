"use client";
import { useEffect, useState } from "react";

const getStorageValue = (key: string, defaultValue: any): any => {
	if (typeof window !== "undefined") {
		const saved = localStorage.getItem(key);
		if (!saved) return defaultValue;
		const initial = JSON.parse(saved);
		return initial || defaultValue;
	} else {
		return defaultValue;
	}
};

const useLocalStorage = (key: string, defaultValue: any) => {
	const [value, setValue] = useState(() => {
		return getStorageValue(key, defaultValue);
	});

	useEffect(() => {
		if (typeof window !== "undefined")
			localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};

export { useLocalStorage, getStorageValue };
