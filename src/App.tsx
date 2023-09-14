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
import NewCharacter from "./screens/character/NewCharacter"
import BottomTab from "./components/BottomTabs"
import { TabProvider } from "./contexts/TabContext"
import { pathAuthGoogleRedirect, pathCharacterNew, pathCharacters, pathLogin, pathTop, pathSetting, pathPlayer, pathPlayerCharacters, pathPlayerPlots, pathPlotNew, pathTaleHeroChoice, pathTalePlotChoice } from "./routes/EndPoints"
import PlayerPage from "./screens/player/PlayerPage"
import PlayerCharacters from "./screens/player/PlayerCharacters"
import { message  as antMessage } from "antd"
import Setting from "./screens/setting/Setting"
import NotFoundPage from "./screens/NotFoundPage"
import PlayerPlots from "./screens/player/PlayerPlots"
import NewPlot from "./screens/plot/NewPlot"
import ChoiceHeroPage from "./screens/tale/ChoiceHeroPage"
import ChoicePlotPage from "./screens/tale/ChoicePlotPage"

function App() {

	const [messageApi, contextHolder] = antMessage.useMessage()

	return (
		<div className="w-screen">
			<BrowserRouter>
				<UserProvider>
					<TabProvider>
						<LoginStateRestore/>
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

							<Route path={pathPlayer(":playerId")} element={<PlayerPage messageApi={messageApi} />}/>

							<Route path={pathPlayerCharacters(":playerId")} element={<PlayerCharacters messageApi={messageApi} />}/>
							<Route path={pathPlayerPlots(":playerId")} element={<PlayerPlots messageApi={messageApi} />}/>

							<Route path={pathCharacters()} element={<CharacterList/>}/>

							<Route path={pathCharacterNew()} element={<RouteGuardAuth component={<NewCharacter/>}
								redirect={pathTop()} />}
							/>

							<Route path={pathPlotNew()} element={<RouteGuardAuth component={<NewPlot/>}
								redirect={pathTop()} />}
							/>

							<Route path={pathTaleHeroChoice(":characterId")} element={<RouteGuardAuth component={<ChoiceHeroPage messageApi={messageApi}/>}
								redirect={pathTop()} />}
							/>
							<Route path={pathTalePlotChoice(":targetCharacterId", ":heroCharacterId")} 
								element={<RouteGuardAuth component={<ChoicePlotPage messageApi={messageApi}/>}
									redirect={pathTop()} />}
							/>

							<Route path="*" element={<NotFoundPage/>}/>
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
