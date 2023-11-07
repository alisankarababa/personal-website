import { createContext, useContext, useEffect, useState } from "react";

const ContextLanguage = createContext();
const html = document.querySelector("html");

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

    useEffect(() => {
        html.setAttribute("lang", language);
    }, [language, eLanguage])

	return (
		<ContextLanguage.Provider value={{eLanguage, language, switchLanguage }}>
			{children}
		</ContextLanguage.Provider>
	);
}