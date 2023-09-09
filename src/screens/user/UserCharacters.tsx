import React, { useEffect, useState } from "react"
import { Character } from "../../entities/Character"
import axios from "axios"
import { apiCharactersByUser } from "../../network/Api"
import { useUser } from "../../contexts/UserContext"
import FloatingActionButton from "../../components/FloatingActionButton"
import CharacterListItem from "../../components/CharacterListItem"

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

	return (<>
			{characters?.map((character) => {
				return <div key={character.ID}>
					<CharacterListItem character={character} />
				</div>
			})}
			<FloatingActionButton/>
		</>
	)
}

export default UserCharacters