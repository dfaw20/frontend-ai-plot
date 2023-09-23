import React, { useEffect, useState } from "react"
import { useUser } from '../contexts/UserContext'
import { makeBearerToken } from "../repository/Storage"
import axios from 'axios'
import { apiUserInfo } from "../network/Api"
import { UserResult } from "../entities/User"
import { Button, Modal } from "antd"

function LoginStateRestore() {
	const {login, logout, loginStatus} = useUser()
	const [showModal, setShowModal] = useState(false)

	function restore() {
		setShowModal(false)
		if (loginStatus === 'INIT' || loginStatus === 'LOGOUT') {
			const bearer = makeBearerToken()
			if (bearer) {
				axios
					.get<UserResult>(apiUserInfo(), {headers: {	Authorization: bearer,}})
					.then(res => {
						setShowModal(false)
						login(res.data.user)
					})
					.catch((err) => {
						setShowModal(true)
					})
			} else {
				setShowModal(false)
				logout()
			}
		}
	}

	function handleLogout() {
		setShowModal(false)
		logout()
	}

	useEffect(() => {
		restore()
	}, [loginStatus])	

	if (showModal) {
		return <Modal title="ログイン失敗" open={true} closeIcon={null}
		footer={[
			<Button key="reconnect" onClick={() => {restore()}}>
			  リトライ
			</Button>,
			<Button key="reconnect" onClick={() => {(handleLogout())}}>
				ログアウト
			</Button>
		  ]}
		>
			<p>ログインに失敗しました</p>
		</Modal>
	}

	return (
		<></>
	)
}

export default LoginStateRestore