import React, { useEffect, useState } from "react"
import { Character } from "../../entities/Character"
import axios from "axios"
import { apiCharactersByPlayer } from "../../network/Api"
import FloatingActionButton from "../../components/FloatingActionButton"
import CharacterListItem from "../../components/CharacterListItem"
import { useParams } from 'react-router-dom';
import { Player } from "../../entities/Player"
import { MessageInstance } from "antd/es/message/interface"

interface PlayerCharactersProps {
	messageApi: MessageInstance
}

function PlayerCharacters(props: PlayerCharactersProps) {
	const [player, setPlayer] = useState<Player>()
	const [characters, setCharacters] = useState<Character[]>()
	const {playerId} = useParams()
	
	function loadUserCharacters() {
		if (player != null) {
			axios.get<Character[]>(apiCharactersByPlayer(player.ID.toString()))
			.then((res) => {
				console.log(res.data)
				setCharacters(res.data)
			})
		} else {
			props.messageApi.warning('ユーザが存在しません')
		}
	}

	function load() {
		if (playerId != null) {
			axios.get<Player>(apiCharactersByPlayer(playerId))
			.then((res) => {
				console.log(res.data)
				setPlayer(res.data)
				loadUserCharacters()
			})
		} else {
			props.messageApi.warning('ユーザが存在しません')
		}
	}

	useEffect(() => {
		load()
	}, [])	

	return (<>
			{player?.DisplayName}
			{characters?.map((character) => {
				return <div key={character.ID}>
					<CharacterListItem character={character} />
				</div>
			})}
			<FloatingActionButton/>
		</>
	)
}

export default PlayerCharacters