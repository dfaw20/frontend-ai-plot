import React from "react"
import Login from "./screens/auth/Login"
import LoginGoogleRedirect from "./screens/auth/LoginGoogleRedirect"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Top from "./screens/top/Top"
import { UserProvider } from './contexts/UserContext'
import Header from "./components/Header"
import LoginStateRestore from "./components/LoginStateRestore"
import { RouteGuardAuth } from "./routes/guards/RouteGuardAuth"
import { RouteGuardGuestOnly } from "./routes/guards/RouteGuardGuestOnly"
import CharacterList from "./screens/character/CharactersHome"
import CreateCharacter from "./screens/character/NewCharacter"
import BottomTab from "./components/BottomTabs"
import { TabProvider } from "./contexts/TabContext"
import { pathAuthGoogleRedirect, pathCharacterNew, pathCharacters, pathLogin, pathRoot, pathUser } from "./routes/EndPoints"
import UserHome from "./screens/user/UserHome"

function App() {
	return (
		<div className="w-screen">
			<BrowserRouter>
				<UserProvider>
					<TabProvider>
						<LoginStateRestore/>
						<Header/>
						<Routes>
							<Route path={pathRoot()} element={<Top/>}/>
							<Route path={pathLogin()}
								element={<RouteGuardGuestOnly component={<Login/>} redirect={pathRoot()} />}
							/>
							<Route path={pathAuthGoogleRedirect()}
								element={<RouteGuardGuestOnly component={<LoginGoogleRedirect />} redirect={pathRoot()} />}
							/>
							<Route path={pathUser(":user_id")}
								element={<UserHome />}/>
							<Route path={pathCharacters()}
								element={<CharacterList/>}
							/>
							<Route path={pathCharacterNew()}
								element={<RouteGuardAuth component={<CreateCharacter/>} redirect={pathLogin()} />}
							/>
						</Routes>
						<BottomTab/>
					</TabProvider>
				</UserProvider>
			</BrowserRouter>
		</div>
	)
}

export default App
