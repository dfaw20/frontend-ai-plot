import { Gender } from "../../entities/Character"

export interface CharacterInput {
	name: string
	nickname: string
	gender: Gender
	outfit: string
	hairstyle: string
	personality: string
	tone: string
	profile: string
}
