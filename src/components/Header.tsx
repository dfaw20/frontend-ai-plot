import React from "react"
import { useUser } from '../contexts/UserContext'
import { Link } from 'react-router-dom'
import { CgMenuRight } from 'react-icons/cg'
import { pathSetting } from "../routes/EndPoints"

function Header() {

	const {loginStatus} = useUser()

	switch (loginStatus) {
	case "INIT":
		return <></>
	case "LOGIN":
		return (
			<div className="flex justify-between">
				<div className="p-4">
					<h1>Plot</h1>
				</div>
				<div className="p-4">
					<Link to={pathSetting()}>
						<CgMenuRight size={30}/>
					</Link>
				</div>
			</div>
		)
	case "LOGOUT":
		return (
			<></>
		)
	}
}

export default Header