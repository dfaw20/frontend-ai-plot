import React from "react"
import { Link } from "react-router-dom"
import { pathLogin } from "../../routes/EndPoints"

function Top() {
	return (
		<>
		<div>Top</div>
		<div>
			<Link to={pathLogin()}>ログインする</Link>
		</div>
		</>
	)
}

export default Top