import "./Footer.css";
import { useTheme } from "../../contexts/ContextTheme"
import { useData } from "../../contexts/ContextData";

export function FooterMsg({ children, ...rest }) {
	return <p {...rest}>{children}</p>;
}

export function FooterLink({ children, ...rest }) {
	return <a {...rest}>{children}</a>;
}

export default function Footer(params) {
    const { eTheme, theme } = useTheme();
    const { data } = useData();
    const { footerData } = data;

    function getClassClr(obj) {
        
        return eTheme.dark === theme && obj.colorThemeDark ? obj.colorThemeDark : obj.color;
    }
    
    return (
		<div className="footer-wrapper">
			<footer className="footer custom-container">
				<FooterMsg className="footer__msg">{footerData.msg}</FooterMsg>

                <div className="footer__links">
				    {footerData.links.map((link) => (
                        <FooterLink className={`link ${getClassClr(link)}`} 
                        key={link.name} href={link.to}>{link.name}</FooterLink>
                        ))}
                </div>
			</footer>
		</div>
	);
}
