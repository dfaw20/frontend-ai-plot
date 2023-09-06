const BACKEND_HOST = "http://localhost:8080";
const API_GET_GOOGLE_URL = BACKEND_HOST + "/auth/google";

export {
	BACKEND_HOST,
	API_GET_GOOGLE_URL,
};

export interface GoogleOAuthUrlObject {
    oauthUrl: string
}

export interface Token {
    accessToken: string
	tokenType: string
	refreshToken: string
	expiry: string
}

export interface User {
    accessToken: string
	tokenType: string
	refreshToken: string
	expiry: string
}

export interface TokenResult {
    token: Token
    user: User
}
