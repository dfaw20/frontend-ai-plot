export type Gender = 'male' | 'female' | 'other' | ''

export function getGenderText(gender: Gender) {
	switch (gender) {
		case "":
			return ''
		case "male":
			return '男性'
		case "female":
			return '女性'
		case "other":
			return 'その他'
	}
}

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