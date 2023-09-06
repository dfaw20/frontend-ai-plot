import React, { createContext, useContext, useState, ReactNode } from 'react';
import {TokenResult, User} from "../network/Api";
import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from '../repository/Storage';

interface UserContextType {
  user: User | null;
  login: (tokenResult: TokenResult) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error('useUser must be used within a UserProvider');
	}
	return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);

	// ログイン状態を設定する関数
	const login = (tokenResult: TokenResult) => {
		setUser(tokenResult.user);
		localStorage.setItem(
			LOCAL_STORAGE_ACCESS_TOKEN_KEY,
			tokenResult.token.access_token
		);
	};

	// ログアウト状態を設定する関数
	const logout = () => {
		setUser(null);
	};

	return (
		<UserContext.Provider value={{ user, login, logout }}>
			{children}
		</UserContext.Provider>
	);
};
