import "./Hero.css"

import { page_en } from "../../data/data";

const { heroData } = page_en;
const isDarkTheme = false; //TODO after adding dark the context update this. This just a test



export default function Hero () {
    return ( 
		<div className="hero-wrapper">
			<section className="sec-hero custom-container">
                <div className="hero__text">
                    <p className="hero__greeting">{heroData.greeting}</p>
                    <p className="hero__introduction">{heroData.intoductoryText}</p>
                    <div className="hero__links">
                        {
                            heroData.links.map( link => (
                                <a href={link.to}><img src={ isDarkTheme ? link.logoDark : link.logo } alt="logo"/></a>
                            ))
                        }
                    </div>
                </div>
                <div className="hero__img">
                    <img src={heroData.img} alt="img"/>
                </div>
            </section>
        </div>
    );
}
