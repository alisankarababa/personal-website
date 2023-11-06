import { createContext, useContext, useState } from "react";

const ContextTheme = createContext();

export function useTheme() {
	return useContext(ContextTheme);
}

export function ContextThemeProvider({ children }) {
	const eTheme = Object.freeze({
		dark: "dark",
		light: "light",
	});

	const [theme, setTheme] = useState(eTheme.light);

	function toggleTheme() {
		setTheme(eTheme.light === theme ? eTheme.dark : eTheme.light);
	}

	return (
		<ContextTheme.Provider value={{ eTheme, theme, toggleTheme }}>
			{children}
		</ContextTheme.Provider>
	);
}