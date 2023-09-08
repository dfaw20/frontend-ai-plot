import React, { useEffect, useRef } from "react"
import {API_GOOGLE_REDIRECT_URL} from "../../network/Api"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useUser } from '../../contexts/UserContext'
import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from "../../repository/Storage"
import { TokenResult } from "../../entities/Auth"

function LoginGoogleRedirect() {
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
				.get<TokenResult>(API_GOOGLE_REDIRECT_URL + `?code=${code}`)
				.then((res) => {
					console.log("Success Get Token:", res.data)

					if (res.data.token) {
						login(res.data.user)
						localStorage.setItem(
							LOCAL_STORAGE_ACCESS_TOKEN_KEY,
							res.data.token.access_token
						)
						navigate('/')
					}
				})
				.catch((error) => {
					console.error("Error fetching token:", error)
				})
		}
	}, [])

	return (
		<div>
			redirect
		</div>
	)
}

export default LoginGoogleRedirect