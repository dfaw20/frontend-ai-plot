import React, { createContext, useContext, useState, ReactNode } from 'react'
import {User} from "../network/Api"
import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from '../repository/Storage'

export type LoginStatus = 'INIT' | 'LOGIN' | 'LOGOUT';

interface UserContextType {
	user: User | null;
	loginStatus: LoginStatus;
	login: (user: User) => void;
	logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const useUser = (): UserContextType => {
	const context = useContext(UserContext)
	if (context === undefined) {
		throw new Error('useUser must be used within a UserProvider')
	}
	return context
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
	const [loginStatus, setLoginStatus] = useState<LoginStatus>('INIT')
	const [user, setUser] = useState<User | null>(null)

	// ログイン状態を設定する関数
	const login = (user: User) => {
		setUser(user)
		setLoginStatus('LOGIN')
	}

	// ログアウト状態を設定する関数
	const logout = () => {
		setUser(null)
		setLoginStatus('LOGOUT')
		localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY)
	}

	return (
		<UserContext.Provider value={{ user, loginStatus, login, logout }}>
			{children}
		</UserContext.Provider>
	)
}
