import React, { useState } from "react";
import { 
	GiSwordsEmblem,
	GiBookmarklet,
	GiMushroomHouse,
} from "react-icons/gi";

export type TabCode = 'tabA' | 'tabB' | 'tabC'

const BottomTabs = () => {
	const [activeTab, setActiveTab] = useState<TabCode>('tabA'); // 初期のアクティブタブ

	const handleTabClick = (tabCode: TabCode) => {
		setActiveTab(tabCode);
	};

	return (
		<>
			<div className="bg-white text-gray-700 fixed bottom-0 left-0 w-full h-20 flex justify-around items-center z-10 py-2">
				<div
					className={`cursor-pointer ${activeTab === 'tabA' ? 'text-blue-500' : ''}`}
					onClick={() => handleTabClick('tabA')}>
					<GiSwordsEmblem className="mx-auto" size={30}/>
					Character
				</div>
				<div
					className={`cursor-pointer ${activeTab === 'tabB' ? 'text-blue-500' : ''}`}
					onClick={() => handleTabClick('tabB')}>
					<div>
						<GiBookmarklet className="mx-auto" size={30}/>
					</div>
					<div>History</div>
				</div>
				<div
					className={`cursor-pointer ${activeTab === 'tabC' ? 'text-blue-500' : ''}`}
					onClick={() => handleTabClick('tabC')}>
					<GiMushroomHouse className="mx-auto" size={30}/>
					Home
				</div>
			</div>
			<div className="bg-gray-200 p-4 min-h-screen">
				{activeTab === 'tabA' && <div>Tale</div>}
				{activeTab === 'tabB' && <div>History</div>}
				{activeTab === 'tabC' && <div>HOME</div>}
			</div>
		</>
	);
};

export default BottomTabs;

