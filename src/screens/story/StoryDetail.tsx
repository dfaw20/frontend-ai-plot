import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Story } from "../../entities/Story"
import axios from "axios"
import { apiGetStory, apiStoryGenerateChat } from "../../network/Api"
import { makeBearerToken } from "../../repository/Storage"
import { MessageInstance } from "antd/es/message/interface"
import { StoryGenerateReq } from "../../types/post_data/Story"

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
			.catch((err) => {
				console.log(err)
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
		} else {
			props.messageApi.warning('ストーリーが存在しません')
		}
	}

	useEffect(() => {
		loadStory()
	}, [])

	return (
		<>
			<div>{storyObj?.Text}</div>
		</>
	)
}

export default StoryDetail