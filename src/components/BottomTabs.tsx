import React from "react"
import { 
	GiSwordsEmblem,
	GiBookmarklet,
	GiMushroomHouse,
} from "react-icons/gi"
import { TabCode, useTab } from "../contexts/TabContext"
import { useNavigate } from "react-router-dom"
import { useUser } from "../contexts/UserContext"
import { pathRoot, pathUserCharacters, pathUserStories } from "../routes/EndPoints"
import { IconType } from "react-icons"
import { MessageInstance } from "antd/es/message/interface"

interface TabItemProps {
	activeTab: string|null,
	handleTabClick: (tabCode: TabCode) => void,
	tabCode: TabCode,
	text: string,
	icon: IconType
}

function TabItem(
	props: TabItemProps
) {
	const Icon = props.icon;

	return (<div
			className={`cursor-pointer ${props.activeTab === props.tabCode ? 'text-primary' : ''}`}
			onClick={() => props.handleTabClick(props.tabCode)}>
			{<Icon className="mx-auto"  size={28}/>}	
			<span className="text-xs">{props.text}</span>
		</div>)
}

interface BottomTabsProps {
	messageApi: MessageInstance,
}

const BottomTabs = (props: BottomTabsProps) => {

	const {user} = useUser()
	if (user == null) {
		return <></>
	}

	const {activeTab, updateActiveTab} = useTab()
	const navigate = useNavigate()
	
	const handleTabClick = (tabCode: TabCode) => {
		updateActiveTab(tabCode)	
		switch (tabCode) {
		case "tabA":
			navigate(pathRoot())
			break
		case "tabB":
			if (user == null) {
				props.messageApi.open({
					type: 'error',
					content: 'ログインしていません',
				});
				return
			}
			navigate(pathUserStories(user.ID.toString()))
			break
		case "tabC":
			if (user == null) {
				props.messageApi.open({
					type: 'error',
					content: 'ログインしていません',
				});
				return
			}
			navigate(pathUserCharacters(user.ID.toString()))
			break
		}
	}

	return (
		<>
			<div className="bg-white text-gray-700 fixed bottom-0 left-0 w-full h-20 flex justify-around items-center z-10 py-1">
				<TabItem
					activeTab={activeTab}
					handleTabClick={handleTabClick}
					tabCode={'tabA'}
					text={'Home'}
					icon={GiMushroomHouse}
				/>
				<TabItem
					activeTab={activeTab}
					handleTabClick={handleTabClick}
					tabCode={'tabB'}
					text={'Story'}
					icon={GiBookmarklet}
				/>
				<TabItem
					activeTab={activeTab}
					handleTabClick={handleTabClick}
					tabCode={'tabC'}
					text={'Character'}
					icon={GiSwordsEmblem}
				/>
			</div>
		</>
	)
}

export default BottomTabs

