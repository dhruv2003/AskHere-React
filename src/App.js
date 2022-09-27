import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Auth/Login";
import Home from "./Home";
import BaseLayout from "./BaseLayout";
import Register from "./Auth/Register";
import CreateForm from "./CreateForm.js/CreateForm";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route exact path="/register" element={<Register />} />
				<Route element={<BaseLayout />}>
					<Route exact path="/dashboard" element={<Home />} />
					<Route exact path="/createform" element={<CreateForm />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
