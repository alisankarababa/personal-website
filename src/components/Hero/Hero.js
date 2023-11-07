import "./Hero.css"
import { page_en } from "../../data/data";
import { useTheme } from "../../contexts/ContextTheme";
import { useLanguage } from "../../contexts/ContextLanguage";

const { heroData } = page_en;

export default function Hero () {
    const {eTheme, theme} = useTheme();
    const {eLanguage, language} = useLanguage();

    return ( 
		<div className="hero-wrapper">
			<section className="sec-hero custom-container">
                <div className="hero__text">
                    <p className="hero__greeting">{heroData.greeting}</p>
                    <p className="hero__introduction">{heroData.intoductoryText}</p>
                    <div className="hero__links">
                        {
                            heroData.links.map( link => (
                                <a href={link.to}><img src={ eTheme.dark === theme ? link.logoThemeDark : link.logoThemeLight } alt="logo-link"/></a>
                            ))
                        }
                    </div>
                    {
                        eLanguage.en === language ? 
                        (
                        <>
                        <p className="hero__current-occupation">Currently <span className="clr-1769FF">{heroData.status}</span> for <span className="clr-1769FF">{heroData.project}</span> Project</p>
                        <p className="hero__invite">{heroData.inviteMsg} <span className="clr-1769FF">{heroData.email}</span></p>
                        </>
                        ) : 
                        (
                        <>
                        <p className="hero__current-occupation">Şu an bir <span className="clr-1769FF">{heroData.project}</span> projesinde <span className="clr-1769FF">{heroData.status} olarak çalışıyorum</span></p>
                        <p className="hero__invite">{heroData.inviteMsg} <span className="clr-1769FF">{heroData.email}</span></p>
                        </>
                        )
                    }

                </div>
                <div className="hero__img">
                    <img src={heroData.img} alt="img"/>
                </div>
            </section>
        </div>
    );
}
