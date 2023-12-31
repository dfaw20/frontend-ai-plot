import React from "react"
import { 
	GiBookmarklet,
	GiMushroomHouse,
	GiCrystalWand,
	GiCastle,
} from "react-icons/gi"
import { TabCode, useTab } from "../contexts/TabContext"
import { useNavigate } from "react-router-dom"
import { useUser } from "../contexts/UserContext"
import { pathTop, pathPlayerCharacters, pathPlayerStories, pathPlayerPlots } from "../routes/EndPoints"
import { IconType } from "react-icons"
import { MessageInstance } from "antd/es/message/interface"
import { plotCommon } from "../texts/words"

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
	const Icon = props.icon

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
	const {activeTab, updateActiveTab} = useTab()
	const navigate = useNavigate()

	if (user == null) {
		return <></>
	}
	
	const handleTabClick = (tabCode: TabCode) => {
		updateActiveTab(tabCode)	
		switch (tabCode) {
		case "tabA":
			navigate(pathTop())
			break
		case "tabB":
			if (user == null) {
				props.messageApi.open({
					type: 'error',
					content: 'ログインしていません',
				})
				return
			}
			navigate(pathPlayerStories(user.ID.toString()))
			break
		case "tabC":
			if (user == null) {
				props.messageApi.open({
					type: 'error',
					content: 'ログインしていません',
				})
				return
			}
			navigate(pathPlayerCharacters(user.ID.toString()))
			break
		case "tabD":
			if (user == null) {
				props.messageApi.open({
					type: 'error',
					content: 'ログインしていません',
				})
				return
			}
			navigate(pathPlayerPlots(user.ID.toString()))
			break
		}
	}

	return (
		<>
			<div className=" text-gray-700 fixed bottom-0 left-0 w-full h-16 flex justify-around items-center z-10 py-1">
				<TabItem
					activeTab={activeTab}
					handleTabClick={handleTabClick}
					tabCode={'tabA'}
					text={'ホーム'}
					icon={GiMushroomHouse}
				/>
				<TabItem
					activeTab={activeTab}
					handleTabClick={handleTabClick}
					tabCode={'tabB'}
					text={'ライブラリ'}
					icon={GiBookmarklet}
				/>
				<TabItem
					activeTab={activeTab}
					handleTabClick={handleTabClick}
					tabCode={'tabC'}
					text={'キャラ'}
					icon={GiCrystalWand}
				/>
				<TabItem
					activeTab={activeTab}
					handleTabClick={handleTabClick}
					tabCode={'tabD'}
					text={plotCommon}
					icon={GiCastle}
				/>
			</div>
		</>
	)
}

export default BottomTabs

