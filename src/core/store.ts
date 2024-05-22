import { getSessionStorageValue, getStorageValue } from "@/lib";
import { create } from "zustand";

type SearchStore = {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
};

export const useSettings = create<SearchStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

type CookieConsentStore = {
	cookieConsent: boolean;
	isLoaded: boolean;
	setCookieConsent: (value: boolean) => void;
	setIsLoaded: (value: boolean) => void;
};

export const useCookieConsentStore = create<CookieConsentStore>((set) => ({
	cookieConsent: false,
	isLoaded: false,
	setCookieConsent: (value) => set({ cookieConsent: value }),
	setIsLoaded: (value) => set({ isLoaded: value }),
}));

type LocalStorageStore = {
	value: any;
	setValue: (value: any, defaultValue: any, expiryInDays: number) => void;
};

export const useLocalStorage = (key: string, defaultValue: any) =>
	create<LocalStorageStore>((set) => ({
		value: getStorageValue(key, defaultValue),
		setValue: (newValue: any, expiryInDays = 365) => {
			set({ value: newValue });
			if (typeof window !== "undefined") {
				localStorage.setItem(key, JSON.stringify(newValue));
				const date = new Date();
				date.setTime(date.getTime() + expiryInDays * 24 * 60 * 60 * 1000);
				const expires = "expires=" + date.toUTCString();
				document.cookie =
					key + "=" + JSON.stringify(newValue) + ";" + expires + ";path=/";
			}
		},
	}));

type SessionStorageStore = {
	value: any;
	setValue: (value: any) => void;
};

export const useSessionStorage = (key: string, defaultValue: any) =>
	create<SessionStorageStore>((set, get) => ({
		value: getSessionStorageValue(key, defaultValue),
		setValue: (value: any) => {
			set({ value });
			if (typeof window !== "undefined") {
				sessionStorage.setItem;
			}
		},
	}));

type BackgroundState = {
	width: number | null;
	height: number | null;
	setWidth: (width: number) => void;
	setHeight: (height: number) => void;
};

export const useBackgroundStore = create<BackgroundState>((set) => ({
	width: null,
	height: null,
	setWidth: (width) => set({ width }),
	setHeight: (height) => set({ height }),
}));
