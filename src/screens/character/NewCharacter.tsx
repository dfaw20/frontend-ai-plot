import axios from "axios"
import React from "react"
import { API_CHARACTER_CREATE } from "../../network/Api"
import { CharacterInput } from "../../types/post_data/PostData"
import { makeBearerToken } from "../../repository/Storage"

function CreateCharacter() {

	function onClickCreate() {
		const input: CharacterInput = {
			name: "jack",
			nickname: "ja",
			gender: "male",
			outfit: "痩せ型",
			hairstyle: "短髪",
			personality: "快活",
			tone: "若者言葉",
			profile: "一般的な青年"
		}

		const bearer = makeBearerToken()
		if (bearer) {
			axios
				.post(API_CHARACTER_CREATE, input, {headers: {	Authorization: bearer,}})
				.then(res => {
					console.log(res)
				})
		}
	}

	return (
		<div>
			<div>キャラクターを作る</div>

			<button onClick={onClickCreate}>作成</button>
		</div>
	)
}

export default CreateCharacter