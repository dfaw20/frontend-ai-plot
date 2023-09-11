import React from "react"
import { useUser } from "../../contexts/UserContext"
import { MessageInstance } from "antd/es/message/interface"

interface SettingProps {
	messageApi: MessageInstance
}

function Setting(props: SettingProps) {
	const {logout} = useUser()

	function onClickLogout() {
		logout()
		props.messageApi.info('ログアウトしました')
	}

	return (
		<div>
			<h2>設定</h2>
			<button onClick={onClickLogout}>ログアウト</button>
		</div>
	)
}

export default Setting