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

const BottomTabs = () => {
	const {user} = useUser()
	const {activeTab, updateActiveTab} = useTab()
	const navigate = useNavigate()

	const handleTabClick = (tabCode: TabCode) => {
		// TODO Alert
		if (user == null) {
			return
		}

		updateActiveTab(tabCode)	
		switch (tabCode) {
		case "tabA":
			navigate(pathRoot())
			break
		case "tabB":
			navigate(pathUserStories(user.ID.toString()))
			break
		case "tabC":
			navigate(pathUserCharacters(user.ID.toString()))
			break
		}
	}

	return (
		<>
			<div className="bg-white text-gray-700 fixed bottom-0 left-0 w-full h-20 flex justify-around items-center z-10 py-2">
				<div
					className={`cursor-pointer ${activeTab === 'tabA' ? 'text-blue-500' : ''}`}
					onClick={() => handleTabClick('tabA')}>
					<GiMushroomHouse className="mx-auto" size={30}/>
					Home
				</div>
				<div
					className={`cursor-pointer ${activeTab === 'tabB' ? 'text-blue-500' : ''}`}
					onClick={() => handleTabClick('tabB')}>
					<div>
						<GiBookmarklet className="mx-auto" size={30}/>
					</div>
					<div>Story</div>
				</div>
				<div
					className={`cursor-pointer ${activeTab === 'tabC' ? 'text-blue-500' : ''}`}
					onClick={() => handleTabClick('tabC')}>
					<GiSwordsEmblem className="mx-auto" size={30}/>
					Character
				</div>

			</div>
		</>
	)
}

export default BottomTabs

