import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Story } from "../../entities/Story"
import axios from "axios"
import { apiGetStory, apiStoryGenerateChat } from "../../network/Api"
import { makeBearerToken } from "../../repository/Storage"
import { MessageInstance } from "antd/es/message/interface"
import { StoryGenerateReq } from "../../types/post_data/Story"
import SensitiveFilter from "../../components/SensitiveFilter"

interface StoryDetailProps {
	messageApi: MessageInstance
}

function StoryDetail(props: StoryDetailProps) {

	const [storyObj, setStoryObj] = useState<Story>()
	const {storyId} = useParams()

	function generateChat(story: Story) {
		const input: StoryGenerateReq = {
			StoryID: story.ID
		}
		axios.post<Story>(apiStoryGenerateChat(), input, {headers: {Authorization: makeBearerToken(),}})
			.then((res) => {
				setStoryObj(res.data)
			})
			.catch(() => {
				props.messageApi.warning('執筆に失敗しました')
			})

	}

	function loadStory() {
		if (storyId != null) {
			axios.get<Story>(apiGetStory(storyId))
				.then((res) => {
					if (!res.data.Text) {
						generateChat(res.data)
					} else {
						setStoryObj(res.data)
					}
				})
				.catch(() => {
					props.messageApi.warning('ストーリーが読み込めません')		
				})
		} else {
			props.messageApi.warning('ストーリーが存在しません')
		}
	}

	useEffect(() => {
		loadStory()
	}, [])

	return (
		<>
			<div className="p-4">
				{storyObj != null ? 
					<SensitiveFilter sensitiveContent={storyObj?.Sensitive}>
						{storyObj?.Text}
					</SensitiveFilter>
					: null}
			</div>
		</>
	)
}

export default StoryDetail