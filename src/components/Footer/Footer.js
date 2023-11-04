import "./Footer.css";
import { page_en } from "../../data/data";

const { footerData } = page_en;

export function FooterMsg({ children, ...rest }) {
	return <p {...rest}>{children}</p>;
}

export function FooterLink({ children, ...rest }) {
	return <a {...rest}>{children}</a>;
}

const isDarkTheme = false; //TODO after adding dark the context update this. This just a test

export default function Footer(params) {
	
    function linkInLineStyle(link) {
        
        let  style = null;
        if(isDarkTheme && link.styleDark)
            style = link.styleDark;
        else
            style = link.style;

        return style;
    }
    
    
    return (
		<div className="footer-wrapper">
			<footer className="footer custom-container">
				<FooterMsg className="footer__msg">{footerData.msg}</FooterMsg>

                <div className="footer__links">
				    {footerData.links.map((link) => (
                        <FooterLink className="link" key={link.name} href={link.to} style={linkInLineStyle(link)}>{link.name}</FooterLink>
                        ))}
                </div>
			</footer>
		</div>
	);
}
