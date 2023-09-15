import { Gender } from "../../entities/Character"

export interface CharacterInput {
	Name: string
	Nickname: string
	Gender: Gender
	Hair: string
	Outfit: string
	Personality: string
	Tone: string
	Profile: string
	Sensitive: boolean
}
