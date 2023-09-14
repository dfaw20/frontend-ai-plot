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
	Name: string //名前
	Nickname: string //呼び名
	Gender: Gender //性別
	Hair: string //髪色
	Outfit: string //服装
	Personality: string //性格
	Tone: string // 話し方
	Profile: string // プロフィール
}