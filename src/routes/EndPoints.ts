export function pathTop(): string {
	return "/"
}

/**
 * Auth
 */
export function pathLogin(): string {
	return "/login"
}
export function pathAuthGoogleRedirect(): string {
	return "/auth/google/callback"
}

/**
 * Setting
 */

export function pathSetting(): string {
	return "/setting"
}

/**
 * Player
 */
export function pathPlayer(userID: string): string {
	return "/u/" + userID
}
export function pathPlayerCharacters(userID: string): string {
	return "/u/" + userID + "/characters"
}
export function pathPlayerPlots(userID: string): string {
	return "/u/" + userID + "/plots"
}
export function pathPlayerStories(userID: string): string {
	return "/u/" + userID + "/stories"
}

/**
 * User
 */
export function pathUserEdit(userID: string): string {
	return "/user/" + userID + "/edit"
}

/**
 * Character
 */
export function pathCharacters(): string {
	return "/characters"
}
export function pathCharacterDetail(characterID: string): string {
	return "/characters/" + characterID
}
export function pathCharacterNew(): string {
	return "/characters/new"
}
export function pathCharacterEdit(characterID: string): string {
	return "/characters/" + characterID + "/edit"
}
export function pathCharacterDelete(characterID: string): string {
	return "/characters/" + characterID + "/delete"
}
export function pathCharacterPlotsChoice(characterID: string): string {
	return "/characters/" + characterID + "/plots_choice"
}

/**
 * Plot
 */
export function pathPlots(): string {
	return "/plots"
}
export function pathPlotDetail(plotID: string): string {
	return "/plots/" + plotID
}
export function pathPlotNew(): string {
	return "/plots/new"
}
export function pathPlotEdit(plotID: string): string {
	return "/plots/" + plotID + "/edit"
}
export function pathPlotDelete(plotID: string): string {
	return "/plots/" + plotID + "/delete"
}

/**
 * Story
 */
export function pathStories(): string {
	return "/stories"
}
export function pathStoryDetail(storyID: string): string {
	return "/stories/" + storyID
}