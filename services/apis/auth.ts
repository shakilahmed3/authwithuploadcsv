import authFetch from "../apiSettings/authFetch";

type Auth = {
    login(query: { email: String, password: String }): Promise<any>;
    registration(query: any): Promise<any>;
    registrationValidate(query: any): Promise<any>;
    reSentVerification(query: any): Promise<any>;
    forgetPass(query: any): Promise<any>;
    resetPassword(query: any): Promise<any>;
    resetToken(query: any): Promise<any>;
    verifyOtp(query: any): Promise<any>;
    resendOtp(query: any): Promise<any>;
}

const auth: Auth = {
    login: (query: { email: String, password: String }) => {
        return authFetch("user/login", {
            method: "POST",
            data: query,
        });
    },
    registration: (query: any) => {
        return authFetch("user/register", {
            method: "POST",
            data: query,
        });
    },
    registrationValidate: (query: any) => {
        return authFetch("user/verify", {
            method: "POST",
            data: query,
        });
    },
    reSentVerification: (query: any) => {
        return authFetch("user/resend/code", {
            method: "POST",
            data: query,
        });
    },
    forgetPass: (query: any) => {
        return authFetch("login/forget/password", {
            method: "POST",
            data: query,
        });
    },
    resetPassword: (query: any) => {
        return authFetch(`user/reset/password`, {
            method: "POST",
            data: query,
        });
    },
    resetToken: (query: any) => {
        return authFetch("token/refresh/", {
            method: "POST",
            data: query,
        });
    },
    verifyOtp: (query: any) => {
        return authFetch("user/two-factor/verify", {
            method: "POST",
            data: query,
        });
    },
    resendOtp: (query: any) => {
        return authFetch("user/two-factor/resend", {
            method: "POST",
            data: query,
        });
    },
};

export default auth;
