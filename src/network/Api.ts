const BACKEND_HOST = "http://localhost:8080"
export {BACKEND_HOST}

export function apiGetGoogle(): string {
	return BACKEND_HOST + "/auth/google"
}

export function apiGoogleRedirectUrl(): string {
	return BACKEND_HOST + "/auth/google/callback"
}

export function apiUserInfo(): string {
	return BACKEND_HOST + "/user"
}

export function apiUpdateUserDisplayName(): string {
	return BACKEND_HOST + "/user/update/display_name"
}

export function apiUpdateUserSensitiveOption(): string {
	return BACKEND_HOST + "/user/update/sensitive_option"
}

export function apiGetPlayer(playerID: string): string {
	return BACKEND_HOST +  "/players/" + playerID
}

export function apiCharactersByPlayer(playerID: string): string {
	return BACKEND_HOST +  "/players/" + playerID + "/characters"
}

export function apiPlotsByPlayer(playerID: string): string {
	return BACKEND_HOST +  "/players/" + playerID + "/plots"
}

export function apiCharacterCreate(): string {
	return BACKEND_HOST + "/characters/create"
}

export function apiGetCharacter(characterID: string): string {
	return BACKEND_HOST + "/characters/" + characterID
}

export function apiRecentPlots(): string {
	return BACKEND_HOST + "/plots/recent"
}

export function apiPlotCreate(): string {
	return BACKEND_HOST + "/plots/create"
}

export function apiTaleCreate(): string {
	return BACKEND_HOST + "/tale/create"
}

export function apiGetStory(storyID: string): string {
	return BACKEND_HOST +  "/stories/" + storyID
}

export function apiStoryGenerateChat(): string {
	return BACKEND_HOST + "/stories/generate_chat"
}
