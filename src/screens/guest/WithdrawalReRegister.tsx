import React, { useEffect, useState } from "react"
import { Button } from "antd"
import { useLocation, useNavigate } from "react-router-dom"
import { useUser } from "../../contexts/UserContext"
import axios from "axios"
import { apiWithdrawalReRegister } from "../../network/Api"
import { MessageInstance } from "antd/es/message/interface"
import { pathLogin } from "../../routes/EndPoints"
import { ReRegisterEmail } from "../../types/post_data/WithdrawalEmail"

interface WithdrawalReRegisterProps {
	messageApi: MessageInstance
}

function WithdrawalReRegister(
	props: WithdrawalReRegisterProps
) {

	const {loginStatus} = useUser()
	const location = useLocation()
	const navigate = useNavigate()
	const [withdrawEmail, setWithdrawEmail] = useState<string|null>(null)

	useEffect(() => {
		if (location.state) {
			const locationState = location.state as { withdrawal_email: string | null | undefined }
			if (locationState.withdrawal_email) {
				setWithdrawEmail(locationState.withdrawal_email)
			}
		}
	}, [])

	function handleReRegister() {
		if (withdrawEmail == null) {
			props.messageApi.error("メールアドレスが存在しません")
		} else {
			const input: ReRegisterEmail = {
				WithdrawalEmail: withdrawEmail
			}
	 
			axios.post(apiWithdrawalReRegister(), input).then(() => {
				navigate(pathLogin())
				props.messageApi.info("メールアドレス " + withdrawEmail + " のアカウントで再登録が可能になりました")
			})
		}
	}

	if (loginStatus === 'LOGIN') {
		return <>ログイン済みのため退会の復元はできません</>
	}

	return (
		<div className="mx-4">
			<h2 className="mt-4 text-lg">退会済みのアカウント</h2>

			<div className="flex items-center justify-center mt-12">
				<p>
					このアカウントは退会済みです。<br/>
					もし再登録を行う場合は、以下のボタンから手続きを行なってください。
				</p>
			</div>

			<div className="flex items-center justify-center mt-12 text-xl">
				<p>
					{withdrawEmail}
				</p>
			</div>


			<div className="flex items-center justify-center mt-24">
				<Button onClick={() => handleReRegister()}>
					再登録の手続きをする
				</Button>
			</div>
				
		</div>
	)
}

export default WithdrawalReRegister