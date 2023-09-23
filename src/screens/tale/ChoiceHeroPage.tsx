import React, { useEffect, useState } from "react"
import { Character } from "../../entities/Character"
import axios from "axios"
import { apiCharactersByPlayer, apiGetCharacter } from "../../network/Api"
import CharacterListItem from "../../components/CharacterListItem"
import { Link, useParams } from 'react-router-dom'
import { MessageInstance } from "antd/es/message/interface"
import { Button, Divider } from "antd"
import { useUser } from "../../contexts/UserContext"
import CharacterDetailItem from "../../components/CharacterDetailItem"
import { pathTalePlotChoice as pathTalePlotChoice } from "../../routes/EndPoints"

interface ChoiceHeroPageProps {
	messageApi: MessageInstance
}

function ChoiceHeroPage(props: ChoiceHeroPageProps) {
	const {user} = useUser()
	const {characterId} = useParams()
	const [heroCharacters, setHeroCharacters] = useState<Character[]>()
	const [targetCharacter, setTargetCharacter] = useState<Character>()
	
	function loadHeroCharacters() {
		if (user != null) {
			axios.get<Character[]>(apiCharactersByPlayer(user.ID.toString()))
				.then((res) => {
					setHeroCharacters(res.data)
				})
				.catch(() => {
					props.messageApi.warning('ユーザが読み込めません')		
				})
		} else {
			props.messageApi.warning('ユーザが存在しません')
		}
	}

	function loadCharacter() {
		if (characterId != null) {
			axios.get<Character>(apiGetCharacter(characterId))
				.then((res) => {
					setTargetCharacter(res.data)
				})
				.catch(() => {
					props.messageApi.warning('キャラクターが読み込めません')		
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
					{heroCharacters?.map((heroCharacter) => {
						return <div key={heroCharacter.ID}>
							<CharacterListItem character={heroCharacter} editable={false} actionArea={
								<Link to={pathTalePlotChoice(targetCharacter.ID.toString(), heroCharacter.ID.toString())}>
									<Button>
										選択
									</Button>
								</Link>
							} />
						</div>
					})}
				</div> : null
			}
		</>
	)
}

export default ChoiceHeroPage