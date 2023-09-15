import React from "react"
import { useUser } from "../../contexts/UserContext"
import { MessageInstance } from "antd/es/message/interface"
import { Button, Divider, Switch } from "antd"
import axios from "axios"
import { apiUpdateUserSensitiveOption } from "../../network/Api"
import { makeBearerToken } from "../../repository/Storage"
import { UserSensitiveOptionEdit } from "../../types/post_data/User"

interface SettingProps {
	messageApi: MessageInstance
}

function Setting(props: SettingProps) {
	const {logout} = useUser()

	function onClickLogout() {
		logout()
		props.messageApi.info('ログアウトしました')
	}

	function onChangeSensitiveDirect(checked: boolean) {
		const input: UserSensitiveOptionEdit = {
			SensitiveDirect: checked
		}
		axios.post(apiUpdateUserSensitiveOption(), input, {headers: {Authorization: makeBearerToken()}})
			.then(() => {
				if (checked) {
					props.messageApi.success("センシティブなコンテンツを表示する")
				} else {
					props.messageApi.info("センシティブなコンテンツを表示しない")
				}
			})
	}

	return (
		<div className="mx-4">
			<h2 className="mt-4 text-lg leading-tight">設定</h2>
			<Divider/>
			<div className="flex justify-between">
				<div>センシティブなコンテンツを表示する</div>
				<div><Switch className="bg-gray-300" onChange={onChangeSensitiveDirect}/></div>
			</div>
			<Divider/>
			<Button className="mt-4" onClick={onClickLogout}>ログアウト</Button>
		</div>
	)
}

export default Setting