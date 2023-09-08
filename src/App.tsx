import React from "react";
import "./App.css";
import Login from "./screens/Login";
import LoginGoogleRedirect from "./screens/LoginGoogleRedirect";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import { UserProvider } from './contexts/UserContext';
import Header from "./components/Header";
import LoginStateRestore from "./components/LoginStateRestore";
import MyPage from "./screens/MyPage";
import { RouteGuardAuth } from "./routes/RouteGuardAuth";
import { RouteGuardGuestOnly } from "./routes/RouteGuardGuestOnly";
import CharacterList from "./screens/character/CharacterList";
import CreateCharacter from "./screens/character/CreateCharacter";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<UserProvider>
					<LoginStateRestore/>
					<Header/>
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/login"
							element={<RouteGuardGuestOnly component={<Login/>} redirect={"/"} />}
						/>
						<Route path="/auth/google/callback"
							element={<RouteGuardGuestOnly component={<LoginGoogleRedirect />} redirect={"/"} />}
						/>
						<Route path="/mypage" 
							element={<RouteGuardAuth component={<MyPage />} redirect={"/login"} />}/>
						<Route path="/characters"
							element={<RouteGuardAuth component={<CharacterList/>} redirect={"/login"} />}
						/>
						<Route path="/characters/create"
							element={<RouteGuardAuth component={<CreateCharacter/>} redirect={"/login"} />}
						/>
					</Routes>
				</UserProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
