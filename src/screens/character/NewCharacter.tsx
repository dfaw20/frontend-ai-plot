import axios from "axios"
import React from "react"
import { apiCharacterCreate } from "../../network/Api"
import { CharacterInput } from "../../types/post_data/Character"
import { makeBearerToken } from "../../repository/Storage"

function NewCharacter() {

	function onClickCreate() {
		const input: CharacterInput = {
			Name: "",
			Nickname: "",
			Hair: "",
			Gender: "female",
			Outfit: "",
			Personality: "",
			Tone: "",
			Profile: ``,
			Sensitive: false,
		}

		const bearer = makeBearerToken()
		if (bearer) {
			axios
				.post(apiCharacterCreate(), input, {headers: {	Authorization: bearer,}})
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

export default NewCharacter