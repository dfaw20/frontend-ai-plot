const BACKEND_HOST = "http://localhost:8080"
export {BACKEND_HOST}

export function apiGetGoogle(): string {
	return BACKEND_HOST + "/auth/google"
}

export function apiGoogleRedirectUrl(): string {
	return BACKEND_HOST + "/auth/google/callback"
}

export function apiUserInfo(): string {
	return BACKEND_HOST + "/auth_user"
}

export function apiCharacterCreate(): string {
	return BACKEND_HOST + "/characters/create"
}

export function apiCharactersByUser(userID: string): string {
	return BACKEND_HOST +  "/users/" + userID + "/characters"
}