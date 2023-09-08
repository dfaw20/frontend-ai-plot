import React, { useEffect, useState } from "react"
import { Character } from "../../entities/Character"
import axios from "axios"
import { apiCharactersByUser } from "../../network/Api"
import { useUser } from "../../contexts/UserContext"

function UserCharacters() {
	const [characters, setCharacters] = useState<Character[]>()

	const {user} = useUser()
	
	function loadUserCharacters() {
		console.log('user characters')

		// TODO alert
		if (user == null) return

		axios.get<Character[]>(apiCharactersByUser(user.ID.toString()))
			.then((res) => {
				setCharacters(res.data)
			})
	}

	useEffect(() => {
		loadUserCharacters()
	}, [])	

	return (
		<>
		{characters?.map((chara) => {
			return <>{chara.Name}</>
		})}
		</>
	)
}

export default UserCharacters