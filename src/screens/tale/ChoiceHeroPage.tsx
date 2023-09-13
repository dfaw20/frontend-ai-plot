import React, { useEffect, useState } from "react"
import { Character } from "../../entities/Character"
import axios from "axios"
import { apiCharactersByPlayer, apiGetCharacter } from "../../network/Api"
import CharacterListItem from "../../components/CharacterListItem"
import { useParams } from 'react-router-dom';
import { MessageInstance } from "antd/es/message/interface"
import { Divider } from "antd"
import { useUser } from "../../contexts/UserContext"
import CharacterDetailItem from "../../components/CharacterDetailItem"

interface ChoiceHeroPageProps {
	messageApi: MessageInstance
}

function ChoiceHeroPage(props: ChoiceHeroPageProps) {
	const {user} = useUser()
	const {characterId} = useParams()
	const [heroCharacters, setHeroCharacters] = useState<Character[]>()
	const [targetCharacter, setTargetCharacters] = useState<Character>()
	
	function loadHeroCharacters() {
		if (user != null) {
			axios.get<Character[]>(apiCharactersByPlayer(user.ID.toString()))
			.then((res) => {
				setHeroCharacters(res.data)
			})
		} else {
			props.messageApi.warning('ユーザが存在しません')
		}
	}

	function loadCharacter() {
		if (characterId != null) {
			axios.get<Character>(apiGetCharacter(characterId))
			.then((res) => {
				setTargetCharacters(res.data)
			})
		} else {
			props.messageApi.warning('キャラクターが存在しません')
		}
	}

	useEffect(() => {
		loadHeroCharacters()
		loadCharacter()
	}, [user])

	return (
		<>
		{targetCharacter != null ?
		<div className="pb-40">		
			<div>
				<CharacterDetailItem character={targetCharacter}/>
			</div>

			<div className="mx-4 my-8 text-lg flex items-center justify-center">
				主人公を選ぶ
			</div>
			<Divider className="my-2"/>
			{heroCharacters?.map((character) => {
				return <div key={character.ID}>
					<CharacterListItem character={character} editable={false} />
				</div>
			})}
		</div> : null
		}
		</>
	)
}

export default ChoiceHeroPage