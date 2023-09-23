import { User } from "./User"

export interface Token {
    access_token: string
	token_type: string
	refresh_token: string
	expiry: string
}

export interface TokenResult {
    IsWithdrawal: boolean
    WithdrawalEmail: string | null
    Token: Token | null
    User: User | null
}

export interface GoogleOAuthUrlObject {
    oauth_url: string
}
