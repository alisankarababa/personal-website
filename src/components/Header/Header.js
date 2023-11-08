import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useLanguage } from "../../contexts/ContextLanguage";
import { useTheme } from "../../contexts/ContextTheme";

export default function Header() {

    const { eLanguage, language, switchLanguage } = useLanguage();
    const { eTheme, theme } = useTheme();

    function LanguageSelect() {

        switch (language) {
            case eLanguage.tr:
                return <span className="clr-777777"><span onClick={() => switchLanguage(eLanguage.en)} className="clr-1769FF language-select">İNGİLİZCE</span>' YE GEÇ </span>
            case eLanguage.en:
                return <span className="clr-777777">SWITCH TO <span onClick={() => switchLanguage(eLanguage.tr)} className="clr-1769FF language-select">TURKISH</span></span> 
            default:
                return <span></span>;
        }
    }

    function ThemeText() {

        switch (language) {
            case eLanguage.tr:
                return <span className={ eTheme.dark === theme ? "clr-grayD9": "clr-777777"}> 
                {
                    eTheme.dark === theme ? "GÜNDÜZ MODU" : "GECE MODU"
                }
                </span>

            case eLanguage.en:
                return <span className={ eTheme.dark === theme ? "clr-grayD9": "clr-777777"}> 
                {
                    eTheme.dark === theme ? "LIGHT MODE" : "DARK MODE"
                }
                </span>
        
            default:
                return <span></span>
        }
        
        
    }

	return (
        <div className="header-wrapper">
        <header className="header custom-container">
            <div className="header__theme">
                <ToggleSwitch />
                <ThemeText />
            </div>
            <LanguageSelect />
        </header>
        </div>
    );
}
