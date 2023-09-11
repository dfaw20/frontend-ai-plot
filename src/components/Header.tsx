import React from "react"
import { useUser } from '../contexts/UserContext'
import { Link, useLocation } from 'react-router-dom'
import { CgMenuRight } from 'react-icons/cg'
import { pathLogin, pathSetting, pathTop } from "../routes/EndPoints"
import { Button } from "antd"

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
				{loginStatus === 'LOGIN' ?
				<Link to={pathSetting()}>
					<CgMenuRight size={30}/>
				</Link> : null }
				{loginStatus === 'LOGOUT' && !location.pathname.includes(pathLogin()) ?
				<Link to={pathLogin()}>
					<Button>ログイン</Button>
				</Link> : null }
			</div>
		</div>
	)
}

export default Header