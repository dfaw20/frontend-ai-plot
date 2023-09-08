const BACKEND_HOST = "http://localhost:8080"
const API_GET_GOOGLE_URL = BACKEND_HOST + "/auth/google"
const API_GOOGLE_REDIRECT_URL = BACKEND_HOST + "/auth/google/callback"
const API_USER_INFO_URL = BACKEND_HOST + "/user_info"
const API_CHARACTER_LIST = BACKEND_HOST + "/characters/"
const API_CHARACTER_CREATE = BACKEND_HOST + "/characters/create"

export {
	BACKEND_HOST,
	API_GET_GOOGLE_URL,
	API_GOOGLE_REDIRECT_URL,
	API_USER_INFO_URL,
	API_CHARACTER_LIST,
	API_CHARACTER_CREATE
}

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

export interface UserResult {
    user: User
}