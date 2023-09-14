import React, { useEffect, useState } from "react"
import { Character } from "../../entities/Character"
import axios from "axios"
import { apiCharactersByPlayer, apiGetPlayer } from "../../network/Api"
import FloatingActionButton from "../../components/FloatingActionButton"
import CharacterListItem from "../../components/CharacterListItem"
import { useNavigate, useParams } from 'react-router-dom'
import { Player } from "../../entities/Player"
import { MessageInstance } from "antd/es/message/interface"
import { Button, Divider } from "antd"
import { Link } from "react-router-dom"
import { pathCharacterNew, pathPlayer, pathTaleHeroChoice } from "../../routes/EndPoints"
import { useUser } from "../../contexts/UserContext"

interface PlayerCharactersProps {
	messageApi: MessageInstance
}

function PlayerCharacters(props: PlayerCharactersProps) {
	const {user} = useUser()
	const {playerId} = useParams()
	const [playerObject, setPlayerObject] = useState<Player>()
	const [characters, setCharacters] = useState<Character[]>()
	const navigate = useNavigate()
	
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
	}, [playerId])

	function editable(): boolean {
		if (user != null && playerObject != null) {
			return user.ID === playerObject.ID
		}

		return false
	}

	return (<div className="pb-40">
		<div className="mx-4 text-lg flex items-center justify-center">
			{
				playerObject != null ? <Link to={pathPlayer(playerObject.ID.toString())}>
					{playerObject.DisplayName}
				</Link> : null
			}
		</div>
		<Divider className="my-2"/>
		{characters?.map((character) => {
			return <div key={character.ID}>
				<CharacterListItem character={character} editable={editable()} actionArea={				
					<Link to={pathTaleHeroChoice(character.ID.toString())}>
						<Button>物語を綴る</Button>
					</Link>
				} />
			</div>
		})}
		{
			editable() ? <FloatingActionButton onHandleClick={
				() => {
					navigate(pathCharacterNew())
				}
			}/> : null
		}
	</div>
	)
}

export default PlayerCharacters