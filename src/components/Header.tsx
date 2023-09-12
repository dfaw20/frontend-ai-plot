import React from "react"
import { useUser } from '../contexts/UserContext'
import { Link, useLocation } from 'react-router-dom'
import { pathLogin, pathTop } from "../routes/EndPoints"
import { Button, Spin } from "antd"
import DrawerButton from "./DrawerButton"

function Header() {

	const {loginStatus} = useUser()
	const location = useLocation()
	
	return (
		<div className="flex justify-between">
			<div className="p-4">
				<Link to={pathTop()}>
					<h1 className="tracking-widest">PLot</h1>
				</Link>
			</div>
			<div className="p-4">
				{loginStatus === 'INIT' ?
					<><Spin /></>
				 : null }
				{loginStatus === 'LOGIN' ?
					<DrawerButton/>
				 : null }
				{loginStatus === 'LOGOUT' && !location.pathname.includes(pathLogin()) ?
				<Link to={pathLogin()}>
					<Button>ログイン</Button>
				</Link> : null }
			</div>
		</div>
	)
}

export default Header