import React, { useEffect, useState } from "react"
import { MessageInstance } from "antd/es/message/interface"
import { Plot } from "../../entities/Plot"
import { useParams } from "react-router-dom"
import { apiGetPlot } from "../../network/Api"
import axios from "axios"
import SensitiveFilter from "../../components/SensitiveFilter"
import PlotListItem from "../../components/PlotListItem"

interface PlotDetailProps {
	messageApi: MessageInstance
}

function PlotDetail(props: PlotDetailProps) {

	const [plot, setPlot] = useState<Plot>()
	const {plotId} = useParams()

	function loadPlot() {
		if (plotId != null) {
			axios.get<Plot>(apiGetPlot(plotId))
				.then((res) => {
					setPlot(res.data)
				})
				.catch(() => {
					props.messageApi.warning('シナリオが読み込めません')		
				})
		} else {
			props.messageApi.warning('シナリオが存在しません')
		}
	}

	useEffect(() => {
		loadPlot()
	}, [])

	return (
		<>
			<div className="p-4">
				{plot != null ? 
					<SensitiveFilter sensitiveContent={plot.Sensitive}>
						<PlotListItem
						 plot={plot}
						 editable={true}
						 revealPrompt={true}
						 actionArea={<></>}
						 />
					</SensitiveFilter>
					: null}
			</div>
		</>
	)
}

export default PlotDetail