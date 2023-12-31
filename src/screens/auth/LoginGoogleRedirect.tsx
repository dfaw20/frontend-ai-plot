import React, { useEffect, useRef } from "react"
import {apiGoogleRedirectUrl} from "../../network/Api"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useUser } from '../../contexts/UserContext'
import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from "../../repository/Storage"
import { TokenResult } from "../../entities/Auth"
import { MessageInstance } from "antd/es/message/interface"
import { Spin } from "antd"
import { pathWithdrawalReRegister } from "../../routes/EndPoints"

interface LoginGoogleRedirectProps {
	messageApi: MessageInstance
}

function LoginGoogleRedirect(props: LoginGoogleRedirectProps) {
	const navigate = useNavigate()
	const didLoadRef = useRef(false)
	const { login } = useUser()

	useEffect(() => {
		if (didLoadRef.current === false) {
			didLoadRef.current = true

			// OAuth2認証フローのリダイレクト後、アクセストークンを取得するためのコード
			const urlParams = new URLSearchParams(window.location.search)
			const code = urlParams.get("code")

			// OAuth2認証コードが存在する場合、バックエンドに送信してアクセストークンを取得
			axios
				.get<TokenResult>(apiGoogleRedirectUrl() + `?code=${code}`)
				.then((res) => {
					console.log("Get TokenResult:", res.data)

					if (res.data.IsWithdrawal) {
						navigate(pathWithdrawalReRegister(), {
							state: {
								"withdrawal_email": res.data.WithdrawalEmail
							}
						})
					} else {
						if (res.data.Token != null && res.data.User != null) {
							login(res.data.User)
							localStorage.setItem(
								LOCAL_STORAGE_ACCESS_TOKEN_KEY,
								res.data.Token.access_token
							)
							props.messageApi.success('ログインしました')
							navigate('/')
						}
					}
				})
				.catch((error) => {
					console.error("Error fetching token:", error)
				})
		}
	}, [])

	return (
		<div className="flex items-center justify-center w-screen h-screen">
			<Spin />
		</div>
	)
}

export default LoginGoogleRedirect