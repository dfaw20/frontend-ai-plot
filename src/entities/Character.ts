export type Gender = 'male' | 'female' | 'other' | ''

export interface Character {
	ID: number
	Name: string
	Nickname: string
	Gender: Gender
	Outfit: string
	Hairstyle: string
	Personality: string
	Tone: string
	Profile: string
}