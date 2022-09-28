import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Auth/Login";
import Home from "./Home";
import BaseLayout from "./BaseLayout";
import Register from "./Auth/Register";
import CreateForm from "./CreateForm.js/CreateForm";
import AuthContextProvider from "./contexts/AuthContextProvider";
import { RequireAuth } from "./helper/RequireAuth";
import { RequireNotAuth } from "./helper/RequireNotAuth";

function App() {
	return (
		<AuthContextProvider>
			<Router>
				<Routes>
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
