import React, { useEffect } from "react"
import { useUser } from '../contexts/UserContext'
import { makeBearerToken } from "../repository/Storage"
import axios from 'axios'
import { apiUserInfo } from "../network/Api"
import { UserResult } from "../entities/User"
import { MessageInstance } from "antd/es/message/interface"

interface LoginStateRestoreProps {
	messageApi: MessageInstance,
}

function LoginStateRestore(props: LoginStateRestoreProps) {
	const {login, logout} = useUser()

	useEffect(() => {
		const bearer = makeBearerToken()
		if (bearer) {
			axios
				.get<UserResult>(apiUserInfo(), {headers: {	Authorization: bearer,}})
				.then(res => {
					login(res.data.user)
					props.messageApi.open({
						type: 'success',
						content: 'ログインしました',
					});
				})
				.catch((err) => {
					console.log(err)		
				})
		} else {
			logout()
		}
	}, [])	

	return (
		<></>
	)
}

export default LoginStateRestore