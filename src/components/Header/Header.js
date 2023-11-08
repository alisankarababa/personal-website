import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useLanguage } from "../../contexts/ContextLanguage";

export default function Header() {

    const { eLanguage, language, switchLanguage } = useLanguage();

    function LanguageSelect() {

        switch (language) {
            case eLanguage.tr:
                return <span><span onClick={() => switchLanguage(eLanguage.en)} className="clr-1769FF">İNGİLİZCE</span>' YE GEÇ </span>
            case eLanguage.en:
                return <span>SWITCH TO <span onClick={() => switchLanguage(eLanguage.tr)} className="clr-1769FF">TURKISH</span></span> 
            default:
                return <span></span>;
        }
    }

	return (
        <header className="header">
            <ToggleSwitch />
            <LanguageSelect />
        </header>
    );
}
