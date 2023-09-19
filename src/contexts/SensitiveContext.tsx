import React, { createContext, useContext, useState, ReactNode } from 'react'
import { SensitiveItem } from '../entities/Sensitive';

interface SensitiveContextType {
	open: (sensitiveItem: SensitiveItem) => void
	isOpen: (sensitiveItem: SensitiveItem) => boolean
	throughItems: Set<string>
}

const SensitiveContext = createContext<SensitiveContextType | undefined>(undefined)

export const useSensitive = (): SensitiveContextType => {
	const context = useContext(SensitiveContext)
	if (context === undefined) {
		throw new Error('useSensitive must be used within a SensitiveProvider')
	}
	return context
}

interface SensitiveProviderProps {
  children: ReactNode;
}

export const SensitiveProvider: React.FC<SensitiveProviderProps> = ({ children }) => {

	const [throughItems, setThroughItems] = useState<Set<string>>(new Set())

	function toKey(sensitiveItem: SensitiveItem): string {
		return sensitiveItem.targetCode + '-' + sensitiveItem.target.ID
	}

	const open = (item: SensitiveItem) => {
		setThroughItems(new Set([...Array.from(throughItems), toKey(item)]))
	}

	const isOpen = (item: SensitiveItem) => {
		return throughItems.has(toKey(item))
	}

	return (
		<SensitiveContext.Provider value={
			{ 
				open,
				isOpen,
				throughItems
			}
		}>
			{children}
		</SensitiveContext.Provider>
	)
}
