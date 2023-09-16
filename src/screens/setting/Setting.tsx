import React from "react"
import { useUser } from "../../contexts/UserContext"
import { MessageInstance } from "antd/es/message/interface"
import { Button, Divider, Switch } from "antd"
import axios from "axios"
import { apiUpdateUserSensitiveOption } from "../../network/Api"
import { makeBearerToken } from "../../repository/Storage"
import { UserSensitiveOptionEdit } from "../../types/post_data/User"
import { User } from "../../entities/User"

interface SettingProps {
	messageApi: MessageInstance
}

function Setting(props: SettingProps) {
	const {logout, user, reloadUser} = useUser()

	function onClickLogout() {
		logout()
		props.messageApi.info('ログアウトしました')
	}

	function onChangeSensitiveDirect(checked: boolean) {
		const input: UserSensitiveOptionEdit = {
			SensitiveDirect: checked
		}
		axios.post<User>(apiUpdateUserSensitiveOption(), input, {headers: {Authorization: makeBearerToken()}})
			.then((res) => {
				reloadUser(res.data)

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
			{user != null ?
			<div className="flex justify-between">
				<div>センシティブなコンテンツを表示する</div>
				<div><Switch defaultChecked={user.SensitiveDirect} className="bg-gray-300" onChange={onChangeSensitiveDirect}/></div>
			</div>
			: null}
			<Divider/>
			<Button className="mt-4" onClick={onClickLogout}>ログアウト</Button>
		</div>
	)
}

export default Setting