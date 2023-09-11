import React from "react"
import { useUser } from "../../contexts/UserContext"
import { MessageInstance } from "antd/es/message/interface"
import { Button } from "antd"

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
			<h2 className="mb-2 mt-0 text-4xl font-medium leading-tight text-primary">設定</h2>
			<Button onClick={onClickLogout}>ログアウト</Button>
		</div>
	)
}

export default Setting