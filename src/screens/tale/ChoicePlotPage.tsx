import React, { useEffect, useState } from "react"
import { Character } from "../../entities/Character"
import axios from "axios"
import { apiGetCharacter, apiRecentPlots } from "../../network/Api"
import { Link, useParams } from 'react-router-dom'
import { MessageInstance } from "antd/es/message/interface"
import { Button, Divider } from "antd"
import { useUser } from "../../contexts/UserContext"
import CharacterDetailItem from "../../components/CharacterDetailItem"
import { pathTalePlotChoice as pathTalePlotChoice } from "../../routes/EndPoints"
import { Plot } from "../../entities/Plot"
import PlotListItem from "../../components/PlotListItem"

interface ChoicePlotPageProps {
	messageApi: MessageInstance
}

function ChoicePlotPage(props: ChoicePlotPageProps) {
	const {user} = useUser()
	const {targetCharacterId, heroCharacterId} = useParams()
	const [targetCharacter, setTargetCharacter] = useState<Character>()
	const [heroCharacter, setHeroCharacter] = useState<Character>()
	const [plots, setPlots] = useState<Plot[]>()

	function loadTargetCharacter() {
		if (targetCharacterId != null) {
			axios.get<Character>(apiGetCharacter(targetCharacterId))
				.then((res) => {
					setTargetCharacter(res.data)
				})
		} else {
			props.messageApi.warning('対象キャラクターが存在しません')
		}
	}

	function loadHeroCharacter() {
		if (heroCharacterId != null) {
			axios.get<Character>(apiGetCharacter(heroCharacterId))
				.then((res) => {
					setHeroCharacter(res.data)
				})
		} else {
			props.messageApi.warning('主人公キャラクターが存在しません')
		}
	}

	function loadPlots() {
		axios.get<Plot[]>(apiRecentPlots())
			.then((res) => {
				setPlots(res.data)
			})
	}

	useEffect(() => {
		loadTargetCharacter()
		loadHeroCharacter()
		loadPlots()
	}, [user, targetCharacterId, heroCharacterId])

	return (
		<>
			{targetCharacter != null && heroCharacter != null ?
				<div className="pb-40">		
					<div>
						<CharacterDetailItem character={targetCharacter}/>
						<CharacterDetailItem character={heroCharacter}/>
					</div>

					<div className="mx-4 my-8 text-lg flex items-center justify-center">
					物語の舞台を選ぶ
					</div>
					<Divider className="my-2"/>
					{plots?.map((plot) => {
						return <div key={plot.ID}>
							<PlotListItem 
								plot={plot} 
								editable={false} 
								revealPrompt={false}
								actionArea={
								<Button>
									<Link to={pathTalePlotChoice(targetCharacter.ID.toString(), heroCharacter.ID.toString())}>
										入場
									</Link>
								</Button>
								}
							/>
						</div>
					})}
				</div> : null
			}
		</>
	)
}

export default ChoicePlotPage