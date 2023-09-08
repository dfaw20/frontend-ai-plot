import React, { useEffect } from "react"
import { useUser } from '../contexts/UserContext'
import { makeBearerToken } from "../repository/Storage"
import axios from 'axios'
import { API_USER_INFO_URL, UserResult } from "../network/Api"

function LoginStateRestore() {
	const {login, logout} = useUser()

	useEffect(() => {
		const bearer = makeBearerToken()
		if (bearer) {
			axios
				.get<UserResult>(API_USER_INFO_URL, {headers: {	Authorization: bearer,}})
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