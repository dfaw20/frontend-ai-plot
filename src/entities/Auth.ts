import { User } from "./User"

export interface Token {
    access_token: string
	token_type: string
	refresh_token: string
	expiry: string
}

export interface TokenResult {
    token: Token
    user: User
}

export interface GoogleOAuthUrlObject {
    oauth_url: string
}
