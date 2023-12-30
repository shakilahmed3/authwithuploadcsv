import { Token } from "@/types";

export const getToken = (): Token | null => {
	const storedToken = localStorage.getItem("token");
	if (storedToken) {
		return JSON.parse(storedToken) as Token;
	}
	return null;
};

export const setToken = (value: Token): void => {
	localStorage.setItem("token", JSON.stringify(value));
};

export function setTokenValidity(value: Date): void {
	localStorage.setItem("tokenValidity", JSON.stringify(value.toISOString()));
}

export const getTokenValidity = (): Date | null => {
	const storedValue = localStorage.getItem("tokenValidity");
	return storedValue ? new Date(JSON.parse(storedValue)) : null;
};

export function setIsValidate(value: boolean = true): void {
	localStorage.setItem("IsValidate", JSON.stringify(value));
}

export const getIsValidate = (): boolean | null => {
	const storedValue = localStorage.getItem("IsValidate");
	return storedValue ? JSON.parse(storedValue) : null;
};
