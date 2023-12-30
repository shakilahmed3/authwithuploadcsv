import { baseUrl } from "./apiConfig";
import axios, { AxiosRequestConfig } from "axios";
import { Token } from "@/types";
import { getIsValidate, getToken, getTokenValidity, setIsValidate, setToken, setTokenValidity } from "@/utils/user";
import auth from "../apis/auth";
import moment from "moment";

let token: Token | null = getToken();

const instance = axios.create({
    baseURL: baseUrl,
})

instance.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
instance.defaults.headers.common["Authorization"] = `Bearer ${token?.access ? token.access : "empty"}`;

export function updateToken(newToken: Token): void {
    instance.defaults.headers.common[
        "Authorization"
    ] = `Bearer ${newToken?.access}`;
    setToken(newToken);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (
    url: string,
    optionsProps: AxiosRequestConfig = {},
    fileUpload?: boolean
) => {
    let tokenTime = getTokenValidity();
    let IsValidate = getIsValidate();

    let currentTime = new Date();

    if (tokenTime && Date.parse(currentTime.toString()) < Date.parse(tokenTime.toString())) {
        setIsValidate(true);
    } else {
        setIsValidate(false);
    }


    const options: AxiosRequestConfig = {
        method: "GET",
        url: url,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        ...optionsProps,
    };

    if (fileUpload) {
        delete options.headers!["Content-Type"];
    }

    try {
        if (IsValidate) {
            const response = await instance(options);
            return {
                status: response.status,
                ...response.data,
            };
        } else {
            try {
                let res = await auth.resetToken({ refresh: token?.refresh });
                if (res?.status === 200) {
                    setIsValidate(true);
                    let tokenValidity = moment().add(Number(token?.validity), "minutes").toDate();
                    setTokenValidity(tokenValidity);
                    updateToken({
                        ...token,
                        access: res?.access,
                    });
                    let res2 = await instance(options);
                    return {
                        status: res2.status,
                        ...res2.data,
                    };
                }
            } catch (error) {
                localStorage.clear();
                window.location.href = "/login";
            }
        }
    } catch (error) {
        if ((error as any).response.status === 401 || (error as any).response.status === 403) {
            if (token?.refresh) {
                try {
                    let res = await auth.resetToken({ refresh: token?.refresh });
                    if (res?.status === 200) {
                        updateToken({
                            ...token,
                            access: res?.access,
                        });
                        let res2 = await instance(options);
                        return {
                            status: res2.status,
                            ...res2.data,
                        };
                    }
                } catch (error) {
                    localStorage.clear();
                    window.location.href = "/login";
                }
            } else {
                localStorage.clear();
                window.location.href = "/login";
            }
        }

        console.error("Error: ", error);
        return {
            status: (error as any)?.response?.status,
            ...(error as any).response.data,
        };
    }
};