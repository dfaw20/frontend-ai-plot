import React from "react";
import Login from "./screens/Login";
import LoginGoogleRedirect from "./screens/LoginGoogleRedirect";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Top from "./screens/Top";
import { UserProvider } from './contexts/UserContext';
import Header from "./components/Header";
import LoginStateRestore from "./components/LoginStateRestore";
import UserHome from "./screens/member/MemberPage";
import { RouteGuardAuth } from "./routes/RouteGuardAuth";
import { RouteGuardGuestOnly } from "./routes/RouteGuardGuestOnly";
import CharacterList from "./screens/character/CharacterList";
import CreateCharacter from "./screens/character/CreateCharacter";
import BottomTab from "./components/BottomTabs";
import { TabProvider } from "./contexts/TabContext";

function App() {
	return (
		<div className="w-screen">
			<BrowserRouter>
				<UserProvider>
					<TabProvider>
						<LoginStateRestore/>
						<Header/>
						<Routes>
							<Route path="/" element={<Top/>}/>
							<Route path="/login"
								element={<RouteGuardGuestOnly component={<Login/>} redirect={"/"} />}
							/>
							<Route path="/auth/google/callback"
								element={<RouteGuardGuestOnly component={<LoginGoogleRedirect />} redirect={"/"} />}
							/>
							<Route path="/u/:user_id" 
								element={<RouteGuardAuth component={<UserHome />} redirect={"/login"} />}/>
							<Route path="/characters"
								element={<RouteGuardAuth component={<CharacterList/>} redirect={"/login"} />}
							/>
							<Route path="/characters/create"
								element={<RouteGuardAuth component={<CreateCharacter/>} redirect={"/login"} />}
							/>
						</Routes>
						<BottomTab/>
					</TabProvider>
				</UserProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
