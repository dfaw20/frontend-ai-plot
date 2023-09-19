import React, { useEffect, useState } from "react"
import { MessageInstance } from "antd/es/message/interface"
import { Plot } from "../../entities/Plot"
import { useParams } from "react-router-dom"
import { apiGetPlot } from "../../network/Api"
import axios from "axios"
import SensitiveFilter from "../../components/SensitiveFilter"
import PlotListItem from "../../components/PlotListItem"
import PlotDetailItem from "../../components/PlotDetailItem"
import { useUser } from "../../contexts/UserContext"
import { plotCommon } from "../../texts/words"

interface PlotDetailProps {
	messageApi: MessageInstance
}

function PlotDetail(props: PlotDetailProps) {

	const {user} = useUser()
	const [plot, setPlot] = useState<Plot>()
	const {plotId} = useParams()

	function loadPlot() {
		if (plotId != null) {
			axios.get<Plot>(apiGetPlot(plotId))
				.then((res) => {
					setPlot(res.data)
				})
				.catch(() => {
					props.messageApi.warning(plotCommon + 'が読み込めません')		
				})
		} else {
			props.messageApi.warning(plotCommon + 'が存在しません')
		}
	}

	function editable(): boolean {
		if (user != null && plot != null) {
			return user.ID === plot.UserID
		}

		return false
	}

	useEffect(() => {
		loadPlot()
	}, [])

	return (
		<>
			<div className="p-4">
				{plot != null ? 
						<PlotDetailItem
						 plot={plot}
						 editable={editable()}
						 />
				
					: null}
			</div>
		</>
	)
}

export default PlotDetail