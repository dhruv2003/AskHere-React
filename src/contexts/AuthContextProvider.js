import React, { createContext, useState, useEffect, useMemo } from "react";

export const AuthContext = createContext({
	isAuthenticated: null,
	setIsAuthenticated: () => {},
	user: null,
	setUser: () => {},
});

const AuthContextProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(null);
	const [user, setUser] = useState(null);

	const loadAuthUser = () => {
		const authToken = localStorage.getItem("authToken");
		if (!authToken) {
			setIsAuthenticated(true);
			return;
		}
	};

	useEffect(() => {
        
		if (user===null && (isAuthenticated === null || isAuthenticated === true)) {
			loadAuthUser();
		}
	}, [user, isAuthenticated]);

	const providerValue = useMemo(() => {
		return {
			isAuthenticated,
			setIsAuthenticated,
			user,
			setUser,
		};
	}, [isAuthenticated, setIsAuthenticated, user, setUser]);

	return (
		<AuthContext.Provider value={providerValue}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
