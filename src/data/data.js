import logoJs from "../assets/skills/logo-js.svg";
import logoFigma from "../assets/skills/logo-figma.svg";
import logoNode from "../assets/skills/logo-node.svg";
import logoReact from "../assets/skills/logo-react.svg";
import logoRedux from "../assets/skills/logo-redux.svg";
import logoVsCode from "../assets/skills/logo-vscode.svg";

export const heroSection = {
	greeting: {
		tr: "Merhaba👋",
		en: "Hi👋",
	},

	intoductoryText: {
		tr: "Ben Alişan. Full-stack yazılımcıyım. Sağlam ve ölçeklenebilir frontend projeleri geliştirebiliyorum. Görüşelim!",
		en: "I’m Alişan. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!",
	},

	currentOccupation: {
		tr: "sfsdfsdafsdf",
		en: "Currently Freelancing for UX, UI, & Web Design Project. Invite me to join your team -> pratamaiosi@gmail.com",
	},
};

export const skills = [
	{ name: {tr: "JAVASCRIPT", en: "JAVASCRIPT", style: {"font-family": "'Inter', sans-serif", }}, logo: logoJs },
	{ name: {tr: "REACT", en: "REACT", style: {"font-family": "'Inter', sans-serif", }}, logo: logoReact },
    { name: {tr: "FIGMA", en: "FIGMA", style: {"font-family": "'Inter', sans-serif", }}, logo: logoFigma},
    { name: {tr: "NODE", en: "NODE", style: {"font-family": "'Inter', sans-serif", }}, logo: logoNode},
    { name: {tr: "REDUX", en: "REDUX", style: {"font-family": "'Inter', sans-serif", }}, logo: logoRedux},
    { name: {tr: "VS CODE", en: "VS CODE", style: {"font-family": "'Inter', sans-serif", }}, logo: logoVsCode}
];
