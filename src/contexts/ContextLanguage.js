import { createContext, useContext, useState } from "react";

const ContextLanguage = createContext();

export function useLanguage() {
	return useContext(ContextLanguage);
}

export function ContextLanguageProvider({ children }) {
	const eLanguage = Object.freeze({
		tr: "tr",
		en: "en",
	});

	const [language, setLanguage] = useState(eLanguage.en);

	function switchLanguage(newLanguage) {
		if (Object.values(eLanguage).indexOf(newLanguage) === -1) {
			return;
		}

		setLanguage(newLanguage);
	}

	return (
		<ContextLanguage.Provider value={{eLanguage, language, switchLanguage }}>
			{children}
		</ContextLanguage.Provider>
	);
}