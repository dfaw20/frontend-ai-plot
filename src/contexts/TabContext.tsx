import React, { createContext, useContext, useState, ReactNode } from 'react'

export type TabCode = 'tabA' | 'tabB' | 'tabC';

interface TabContextType {
	activeTab: TabCode|null;
	updateActiveTab: (tabCode: TabCode) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined)

export const useTab = (): TabContextType => {
	const context = useContext(TabContext)
	if (context === undefined) {
		throw new Error('useTab must be used within a TabProvider')
	}
	return context
}

interface TabProviderProps {
  children: ReactNode;
}

export const TabProvider: React.FC<TabProviderProps> = ({ children }) => {
	const [activeTab, setActiveTab] = useState<TabCode|null>(null)
	
	function updateActiveTab(tabCode: TabCode) {
		setActiveTab(tabCode)
	}

	return (
		<TabContext.Provider value={{ activeTab, updateActiveTab }}>
			{children}
		</TabContext.Provider>
	)
}
