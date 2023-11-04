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


const clrBlue1769FF = "#1769FF";
const clrBlack0A0A14 = "#0A0A14";
const clrBlue0077B5 = "#0077B5";
const clrPinkAF0C48 = "#AF0C48";


const linkGithub = "https://github.com/alisankarababa";

export const page_tr = {
	skillsData: {
		list: [
			{ name: "JAVASCRIPT", logo: logoJs },
			{ name: "REACT", logo: logoReact },
			{ name: "FIGMA", logo: logoFigma },
			{ name: "NODE", logo: logoNode },
			{ name: "REDUX", logo: logoRedux },
			{ name: "VS CODE", logo: logoVsCode },
		],

	},

    footerData: {
        msg: "Let's work togetger on your next product.",
        links : [
            {name: "Github", to: linkGithub, style: {color: clrBlue1769FF}},
            {name: "Personal Blog", to: "#", style: {color: clrBlack0A0A14}, styleDark: {color: "white"}},
            {name: "Linkedin", to: "#", style: { color: clrBlue0077B5}},
            {name: "Email", to: "#", style: {color: clrPinkAF0C48}},
        ]
    }
};

export const page_en = {
	skillsData: {
		list: [
			{ name: "JAVASCRIPT", logo: logoJs },
			{ name: "REACT", logo: logoReact },
			{ name: "REDUX", logo: logoRedux },
			{ name: "NODE", logo: logoNode },
			{ name: "VS CODE", logo: logoVsCode },
			{ name: "FIGMA", logo: logoFigma },
		],
	},

    footerData: {
        msg: "Let's work togetger on your next product.",
        links : [
            {name: "Github", to: linkGithub, style: {color: clrBlue1769FF}},
            {name: "Personal Blog", to: "#", style: {color: clrBlack0A0A14}, styleDark: {color: "white"}},
            {name: "Linkedin", to: "#", style: { color: clrBlue0077B5}},
            {name: "Email", to: "#", style: {color: clrPinkAF0C48}},
        ]
    }
};