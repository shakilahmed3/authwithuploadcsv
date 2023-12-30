import axios, { AxiosRequestConfig } from 'axios';
import { baseUrl } from './apiConfig';

const instance = axios.create({
	baseURL: baseUrl,
});

export const clearAuth = (): void => {
	localStorage.clear();
	window.location.reload();
};

interface ApiResponse {
	status: number | undefined;
	data: any;
}

const authFetch = async (url: string, optionsProps: AxiosRequestConfig = {}): Promise<ApiResponse> => {
	const options: AxiosRequestConfig = {
		method: 'GET',
		url,
		...optionsProps,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			...(optionsProps.headers || {}),
		},
	};

	try {
		const response = await instance(options);
		if (response.status === 200 || response.status === 201) {
			return {
				status: response.status,
				data: response.data,
			};
		}
	} catch (error) {
		// Type assertion to handle unknown type
		return {
			status: (error as any)?.response?.status,
			data: (error as any)?.response?.data,
		};
	}

	// Default response if no other conditions are met
	return {
		status: undefined,
		data: undefined,
	};
};

export default authFetch;
