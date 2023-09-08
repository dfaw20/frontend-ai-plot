import React from "react"
import { Link } from "react-router-dom"
import { pathCharacterNew } from "../../routes/EndPoints"

function CharactersHome() {
	return (
		<>
			<div>キャラクター</div>
			<Link to={pathCharacterNew()}>キャラ作成</Link>
		</>
	)
}

export default CharactersHome