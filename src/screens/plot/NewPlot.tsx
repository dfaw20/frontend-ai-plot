import axios from "axios"
import React from "react"
import { makeBearerToken } from "../../repository/Storage"
import { PlotInput } from "../../types/post_data/Plot"
import { apiPlotCreate } from "../../network/Api"

function NewPlot() {

	function onClickCreate() {
		const input: PlotInput = {
			Title: '勇者の冒険',
			Description: '勇者と魔王の物語',
			Prompt: `
			{i}は魔王城に向かう
			{i}は魔王城で{u}と出会う
			{i}と{u}は戦う
			`,
			Location: '魔王城',
			Season: '夏',
			Genre: '冒険活劇',
			OutputFormat: '小説形式',
			ShowWarning: true,
			Sensitive: false,
		}

		const bearer = makeBearerToken()
		if (bearer) {
			axios
				.post(apiPlotCreate(), input, {headers: {	Authorization: bearer,}})
				.then(res => {
					console.log(res)
				})
		}
	}

	return (
		<div>
			<div>シナリオを作る</div>

			<button onClick={onClickCreate}>作成</button>
		</div>
	)
}

export default NewPlot