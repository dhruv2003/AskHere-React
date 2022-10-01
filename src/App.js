import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Home from "./components/Home";
import BaseLayout from "./components/BaseLayout";
import Register from "./components/Auth/Register";
import CreateForm from "./components/CreateForm/CreateForm";
import AuthContextProvider from "./contexts/AuthContextProvider";
import { RequireAuth } from "./helper/RequireAuth";
import { RequireNotAuth } from "./helper/RequireNotAuth";
import UserForm from "./components/UserForm";

function App() {
	return (
		<AuthContextProvider>
			<Router>
				<Routes>
					<Route  exact path="/form/:id" element={<UserForm/>}/>
					<Route element={<RequireNotAuth />}>
						<Route exact path="/login" element={<Login />} />
						<Route exact path="/register" element={<Register />} />
					</Route>
					<Route element={<RequireAuth />}>
						<Route element={<BaseLayout />}>
							<Route exact path="/" element={<Home />} />
							<Route exact path="/createform" element={<CreateForm />} />
						</Route>
					</Route>
				</Routes>
			</Router>
		</AuthContextProvider>
	);
}

export default App;
