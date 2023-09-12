import React, { useEffect } from "react"
import { useUser } from '../contexts/UserContext'
import { makeBearerToken } from "../repository/Storage"
import axios from 'axios'
import { apiUserInfo } from "../network/Api"
import { UserResult } from "../entities/User"

function LoginStateRestore() {
	const {login, logout, loginStatus} = useUser()

	useEffect(() => {
		if (loginStatus === 'INIT' || loginStatus === 'LOGOUT') {
			const bearer = makeBearerToken()
			if (bearer) {
				axios
					.get<UserResult>(apiUserInfo(), {headers: {	Authorization: bearer,}})
					.then(res => {
						login(res.data.user)
					})
					.catch((err) => {
						console.log(err)
						logout()
					})
			} else {
				logout()	
			}
		}

	}, [loginStatus])	

	return (
		<></>
	)
}

export default LoginStateRestore