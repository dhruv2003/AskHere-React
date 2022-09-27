import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Auth/Login";
import Home from "./Home";
import BaseLayout from "./BaseLayout";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route element={<BaseLayout />}>
					<Route exact path="/dashboard" element={<Home />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
