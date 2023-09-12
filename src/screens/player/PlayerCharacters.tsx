import React, { useEffect, useState } from "react"
import { Character } from "../../entities/Character"
import axios from "axios"
import { apiCharactersByPlayer, apiGetPlayer } from "../../network/Api"
import FloatingActionButton from "../../components/FloatingActionButton"
import CharacterListItem from "../../components/CharacterListItem"
import { useParams } from 'react-router-dom';
import { Player } from "../../entities/Player"
import { MessageInstance } from "antd/es/message/interface"
import { Divider } from "antd"

interface PlayerCharactersProps {
	messageApi: MessageInstance
}

function PlayerCharacters(props: PlayerCharactersProps) {
	const [playerObject, setPlayerObject] = useState<Player>()
	const [characters, setCharacters] = useState<Character[]>()
	const {playerId} = useParams()
	
	function loadUserCharacters(player: Player) {
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

	function loadPlayer() {
		if (playerId != null) {
			axios.get<Player>(apiGetPlayer(playerId))
			.then((res) => {
				console.log(res.data)
				setPlayerObject(res.data)
				loadUserCharacters(res.data)
			})
		} else {
			props.messageApi.warning('ユーザが存在しません')
		}
	}

	useEffect(() => {
		loadPlayer()
	}, [])	

	return (<div className="pb-40">
			<div className="mx-4 text-lg flex items-center justify-center">
				{playerObject?.DisplayName}
			</div>
			<Divider className="my-2"/>
			{characters?.map((character) => {
				return <div key={character.ID}>
					<CharacterListItem character={character} />
				</div>
			})}
			<FloatingActionButton/>
		</div>
	)
}

export default PlayerCharacters