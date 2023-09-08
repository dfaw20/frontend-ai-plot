import React, { useState } from "react"
import { Character } from "../../entities/Character"
import axios from "axios"

function UserCharacters() {
	const [characters, SetCharacters] = useState<Character>()

	axios.get()

	return (
		<>
		</>
	)
}

export default UserCharacters