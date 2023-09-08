import React, { useEffect } from "react"
import { useUser } from '../contexts/UserContext'
import { makeBearerToken } from "../repository/Storage"
import axios from 'axios'
import { apiUserInfo } from "../network/Api"
import { UserResult } from "../entities/User"

function LoginStateRestore() {
	const {login, logout} = useUser()

	useEffect(() => {
		const bearer = makeBearerToken()
		if (bearer) {
			axios
				.get<UserResult>(apiUserInfo(), {headers: {	Authorization: bearer,}})
				.then(res => {
					login(res.data.user)
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