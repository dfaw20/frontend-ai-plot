import React, { useEffect, useState } from "react"
import axios from "axios"
import { apiGetPlayer, apiPlotsByPlayer } from "../../network/Api"
import FloatingActionButton from "../../components/FloatingActionButton"
import { useParams } from 'react-router-dom';
import { Player } from "../../entities/Player"
import { MessageInstance } from "antd/es/message/interface"
import { Divider } from "antd"
import { Link } from "react-router-dom"
import { pathPlayer } from "../../routes/EndPoints"
import { useUser } from "../../contexts/UserContext"
import { Plot } from "../../entities/Plot"
import PlotListItem from "../../components/PlotListItem"

interface PlayerPlotsProps {
	messageApi: MessageInstance
}

function PlayerPlots(props: PlayerPlotsProps) {
	const {user} = useUser()
	const {playerId} = useParams()
	const [playerObject, setPlayerObject] = useState<Player>()
	const [plots, setPlots] = useState<Plot[]>()
	
	function loadUserPlots(player: Player) {
		if (player != null) {
			axios.get<Plot[]>(apiPlotsByPlayer(player.ID.toString()))
			.then((res) => {
				console.log(res.data)
				setPlots(res.data)
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
				loadUserPlots(res.data)
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
			<div className="text-lg flex items-center justify-center">
				{
					playerObject != null ? <Link to={pathPlayer(playerObject.ID.toString())}>
						{playerObject.DisplayName}
					</Link> : null
				}
			</div>
			<Divider className="my-2"/>
			{
				plots == null || plots.length === 0 ? 
				(<div className="mx-4">作成済みのシナリオはありません</div>)
				: (
					<>
					{plots?.map((plot) => {
						return <div key={plot.ID}>
							<PlotListItem plot={plot} editable={editable()} />
						</div>
					})}
					</>
				)
			}
			
			{
				editable() ? <FloatingActionButton/> : null
			}
		</div>
	)
}

export default PlayerPlots