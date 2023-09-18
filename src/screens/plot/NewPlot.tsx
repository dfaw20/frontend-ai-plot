import axios from "axios"
import React, { useState } from "react"
import { makeBearerToken } from "../../repository/Storage"
import { PlotInput } from "../../types/post_data/Plot"
import { apiPlotCreate } from "../../network/Api"
import { Button, Checkbox, Divider, Input } from "antd"
import { GiPencil } from "react-icons/gi"
import TextArea from "antd/es/input/TextArea"
import { MessageInstance } from "antd/es/message/interface"
import { pathPlayerPlots } from "../../routes/EndPoints"
import { useUser } from "../../contexts/UserContext"
import { Plot } from "../../entities/Plot"
import { useNavigate } from "react-router-dom"

interface NewProtProps {
	messageApi: MessageInstance
}

function NewPlot(props:NewProtProps) {
	const [inputTitle, setInputTitle] = useState<string>("")
	const [inputPrompt, setInputPrompt] = useState<string>("")
	const [checkSensitive, setCheckSensitive] = useState<boolean>(false)
	const navigate = useNavigate()
	const {user} = useUser()

	function onClickCreate() {
		const input: PlotInput = {
			Title: inputTitle,
			Prompt: inputPrompt,
			Sensitive: checkSensitive,
		}

		const bearer = makeBearerToken()
		if (bearer) {
			axios
				.post<Plot>(apiPlotCreate(), input, {headers: {	Authorization: bearer,}})
				.then(res => {
					if (user != null) {
						navigate(pathPlayerPlots(user.ID.toString()))
						props.messageApi.success(res.data.Title + "を作成しました")
					} else {
						props.messageApi.error("ユーザが存在しません")
					}
					
				})
				.catch((err) => {
					props.messageApi.error(err.response.data.error)
				})
		}
	}

	return (
		<div className="px-4 py-4">
			<div className="text-base">
				<div className="flex">
					<div className="mr-2">
						<GiPencil className='text-black' size={24}/>
					</div>
					<div className="text-gray-700">
						物語のシナリオを書く
					</div>
				</div>
			</div>

			<Divider/>

			<div>
			
				<div>
					<Input
						onChange={(e) => setInputTitle(e.target.value)}
						value={inputTitle}
						placeholder="タイトル"
					/>
				</div>

				<div className="py-4">
					<TextArea
						showCount
						maxLength={200}
						onChange={(e) => setInputPrompt(e.target.value)}
						value={inputPrompt}
						placeholder="プロンプト"
						className="h-60"
					/>

					<p className="text-sm text-gray-500 pt-2">
				プロンプトの書き方
					</p>
					<ul className="text-xs text-gray-400">
						<li>AIに入力されるプロンプトです</li>
						<li>文中の{"{i}"}と{"{u}"}はそれぞれキャラの名前に置き換えられます</li>
						<li>箇条書きで物語の流れを書いたり、舞台設定を書くことができます</li>
					</ul>
				</div>

				<Checkbox onChange={(e) => {
					setCheckSensitive(e.target.checked)
				}}>センシティブな内容を含む</Checkbox>

			</div>

			<Divider/>

			<Button onClick={onClickCreate}>シナリオを公開</Button>

			<ul className="text-xs text-gray-400 mt-2">
				<li>シナリオは他のユーザに公開されます</li>
			</ul>
		</div>
	)
}

export default NewPlot