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

		console.log('load')

		axios.get<Character[]>(apiCharactersByUser(user.ID.toString()))
			.then((res) => {
				console.log(res.data)
				setCharacters(res.data)
			})
	}

	useEffect(() => {
		loadUserCharacters()
	}, [user])	

	return (
		<>
			{characters?.map((chara) => {
				return <div key={chara.ID}>{chara.Name}</div>
			})}
		</>
	)
}

export default UserCharacters