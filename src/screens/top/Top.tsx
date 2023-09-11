import React from "react"
import { Link } from "react-router-dom"
import { pathLogin } from "../../routes/EndPoints"
import { useUser } from "../../contexts/UserContext"

function Top() {
	const {loginStatus} = useUser()

	return (
		<>
		<div>Top</div>

		{loginStatus === 'LOGIN' ? null : <div>
			<Link to={pathLogin()}>ログインする</Link>
		</div>
		
		}
		</>
	)
}

export default Top