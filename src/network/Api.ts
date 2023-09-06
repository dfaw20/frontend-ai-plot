const BACKEND_HOST = "http://localhost:8080";
const API_GET_GOOGLE_URL = BACKEND_HOST + "/auth/google";

export {
	BACKEND_HOST,
	API_GET_GOOGLE_URL,
};

export interface GoogleOAuthUrlObject {
    oauth_url: string
}

export interface Token {
    access_token: string
	token_type: string
	refresh_token: string
	expiry: string
}

export interface User {
    email: string
    display_name: string
}

export interface TokenResult {
    token: Token
    user: User
}
