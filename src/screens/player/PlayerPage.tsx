import { MessageInstance } from "antd/es/message/interface"
import React, { useEffect, useState } from "react"
import { Player } from "../../entities/Player"
import axios from "axios"
import { apiGetPlayer } from "../../network/Api"
import { Link, useParams } from "react-router-dom"
import { pathPlayerCharacters } from "../../routes/EndPoints"
import { Button } from "antd"
import { LuUserSquare } from 'react-icons/lu'

interface PlayerPageProps {
	messageApi: MessageInstance
}

function PlayerPage(props: PlayerPageProps) {
	const [player, setPlayer] = useState<Player>()
	const {playerId} = useParams()

	function loadPlayer() {
		if (playerId != null) {
			axios.get<Player>(apiGetPlayer(playerId))
				.then((res) => {
					setPlayer(res.data)
				})
		} else {
			props.messageApi.warning('ユーザが存在しません')
		}
	}

	useEffect(() => {
		loadPlayer()
	}, [])	

	return (
		<>
			{
				player != null ? 
					<div className="flex h-screen justify-center">
						<div className="text-center">
							<div className="flex items-center justify-center">
								<LuUserSquare size={32}/>
							</div>
		
							<div className="text-xl mt-4">{player.DisplayName}</div>
							<div className="mt-8">
								<Link to={pathPlayerCharacters(player.ID.toString())}>
									<Button>
								作ったキャラクター
									</Button>
								</Link>
							</div>
						</div>
					</div>
					: null
			}
		</>
	)
}

export default PlayerPage