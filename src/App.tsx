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
import { pathAuthGoogleRedirect, pathCharacterNew, pathCharacters, pathLogin, pathTop, pathSetting, pathPlayer, pathPlayerCharacters } from "./routes/EndPoints"
import PlayerPage from "./screens/player/PlayerHome"
import PlayerCharacters from "./screens/player/PlayerCharacters"
import { message  as antMessage } from "antd"
import Setting from "./screens/setting/Setting"

function App() {

	const [messageApi, contextHolder] = antMessage.useMessage();

	return (
		<div className="w-screen">
			<BrowserRouter>
				<UserProvider>
					<TabProvider>
						<LoginStateRestore messageApi={messageApi}/>
						<Header/>
						<Routes>
							<Route path={pathTop()} element={<Top/>}/>

							<Route path={pathLogin()}
								element={<RouteGuardGuestOnly component={<Login/>} redirect={pathTop()} />}
							/>

							<Route path={pathAuthGoogleRedirect()}
								element={<RouteGuardGuestOnly component={<LoginGoogleRedirect messageApi={messageApi} />} redirect={pathTop()} />}
							/>

							<Route path={pathSetting()} element={<RouteGuardAuth component={<Setting messageApi={messageApi}/>}
								redirect={pathTop()} />}
							/>

							<Route path={pathPlayer(":playerId")} element={<PlayerPage />}/>

							<Route path={pathPlayerCharacters(":playerId")} element={<PlayerCharacters messageApi={messageApi} />}/>

							<Route path={pathCharacters()} element={<CharacterList/>}/>

							<Route path={pathCharacterNew()} element={<RouteGuardAuth component={<CreateCharacter/>}
								redirect={pathTop()} />}
							/>
						</Routes>
						<BottomTab messageApi={messageApi}/>
						{contextHolder}
					</TabProvider>
				</UserProvider>
			</BrowserRouter>
		</div>
	)
}

export default App
