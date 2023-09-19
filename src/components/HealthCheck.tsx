import React, { useEffect, useState } from "react"
import axios from 'axios'
import { apiHealthCheck } from "../network/Api"
import { Button, Modal } from "antd"

interface HealthCheckObject {
	HealthCheckResult: 'OK'
}

function HealthCheck() {
	const [downServer, setDownServer] = useState(false)
	const [loading, setLoading] = useState(false)

	function reload() {
		setLoading(true)

		axios
		.get<HealthCheckObject>(apiHealthCheck())
		.then(res => {
			if (res.data.HealthCheckResult === 'OK') {
				setDownServer(false)
				setLoading(false)
			} else {
				setDownServer(true)
				setLoading(false)	
			}
		})
		.catch(() => {
			setDownServer(true)
			setLoading(false)
		})
	}

	useEffect(() => {
		reload()
	}, [])

	if (loading) {
		return null
	}

	if (downServer) {
		return <>
			<Modal title="接続失敗" open={true} closeIcon={null}
			footer={[
				<Button key="reconnect" onClick={() => {reload()}}>
				  再接続
				</Button>,
			  ]}
			>
				<p>サーバに接続できません</p>
			</Modal>
		</>
	} 
	
	return null
}

export default HealthCheck