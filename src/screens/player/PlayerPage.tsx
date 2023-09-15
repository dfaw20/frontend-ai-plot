import { MessageInstance } from "antd/es/message/interface"
import React, { useEffect, useState } from "react"
import { Player } from "../../entities/Player"
import axios from "axios"
import { apiGetPlayer } from "../../network/Api"
import { Link, useParams } from "react-router-dom"
import { pathPlayerCharacters, pathPlayerPlots } from "../../routes/EndPoints"
import { Button } from "antd"
import { LuUserSquare } from 'react-icons/lu'
import { useUser } from "../../contexts/UserContext"
import UserDisplayNameEditForm from "../../components/UserDisplayNameEditForm"

interface PlayerPageProps {
	messageApi: MessageInstance
}

function PlayerPage(props: PlayerPageProps) {
	const [player, setPlayer] = useState<Player>()
	const {playerId} = useParams()
	const {user} = useUser()

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
		<div className="mt-8">
			{
				player != null ? 
					<div className="flex h-screen justify-center">
						<div className="text-center">
							<div className="flex items-center justify-center">
								<LuUserSquare size={32}/>
							</div>
		
							<div className="text-xl mt-4">
								{user != null && user.ID === player.ID ? 
									<UserDisplayNameEditForm messageApi={props.messageApi}/> : 
									player.DisplayName}
							</div>

							<div className="mt-8">
								<Link to={pathPlayerCharacters(player.ID.toString())}>
									<Button>
										キャラクター
									</Button>
								</Link>
							</div>

							<div className="mt-8">
								<Link to={pathPlayerPlots(player.ID.toString())}>
									<Button>
										シナリオ
									</Button>
								</Link>
							</div>
						</div>
					</div>
					: null
			}
		</div>
	)
}

export default PlayerPage