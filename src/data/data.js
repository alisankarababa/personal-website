import logoJs from "../assets/skills/logo-js.svg";
import logoFigma from "../assets/skills/logo-figma.svg";
import logoNode from "../assets/skills/logo-node.svg";
import logoReact from "../assets/skills/logo-react.svg";
import logoRedux from "../assets/skills/logo-redux.svg";
import logoVsCode from "../assets/skills/logo-vscode.svg";
import logoRing from "../assets/logo-ring.svg"
import logoPill from "../assets/logo-pill.svg"
import logoArrowRight from "../assets/arrow-right.svg"
import logoArrowRightWhite from "../assets/arrow-right-white.svg"
import picRandomJokes from "../assets/projects/random-jokes.svg"
import picAreYouBored from "../assets/projects/are-you-bored.svg"



const images = Object.freeze({

    skills: {
        logoJs,
        logoFigma,
        logoNode,
        logoReact,
        logoRedux,
        logoVsCode
    },
    projects: {
        picAreYouBored,
        picRandomJokes
    }

});

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
const clrBlueDDEEFE = "#DDEEFE";
const clrBlueD9F6F1 = "#D9F6F1"
const clr2D3235 = "#2D3235";
const clr495351 = "#495351";
const clrD9F6F1 = "#D9F6F1";
const clr525252 = "#525252";


const linkGithub = "https://github.com/alisankarababa";

export const page_tr = {
	skillsData: {
		list: [
			{ name: "JAVASCRIPT", logo: images.skills.logoJs },
			{ name: "REACT", logo: images.skills.logoReact },
			{ name: "FIGMA", logo: images.skills.logoFigma },
			{ name: "NODE", logo: images.skills.logoNode },
			{ name: "REDUX", logo: images.skills.logoRedux },
			{ name: "VS CODE", logo: images.skills.logoVsCode },
		],

        logoTop : logoRing,
        logoLeft: logoPill,
	},

    projectsData: {
        title: "Projeler",
        list: [
            {
                title: "Random Jokes", 
                summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
                technologies: {
                    list: ["redux", "vercel", "axios", "router"],
                    style: { "background-color": "white" },
                    styleDark: { "background-color": clr525252 },

                },
                links: [
                    {text: "View on Github", to: linkGithub},
                    {text: "Go to app", to: linkGithub, hasLogo: true},
                ],
                image: images.projects.picRandomJokes,

                style: {"background-color": clrBlueDDEEFE},
                styleDark : {"background-color": clr2D3235},
            },
            {
                title: "Are you bored?", 
                summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
                technologies: {
                    list: ["react", "redux", "vercel", "axios", "router"],
                    style: { "background-color": "white" },
                    styleDark: { "background-color": clr525252 },
                },
                links: [
                    {text: "View on Github", to: linkGithub},
                    {text: "Go to app", to: linkGithub, hasLogo: true},
                ],
                image: images.projects.picAreYouBored,

                style: {"background-color": clrD9F6F1},
                styleDark: {"background-color": clr495351}
            },
            
        ],

        linkLogo: logoArrowRight,
        linkLogoDark: logoArrowRightWhite,
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
			{ name: "JAVASCRIPT", logo: images.skills.logoJs },
			{ name: "REACT", logo: images.skills.logoReact },
			{ name: "REDUX", logo: images.skills.logoRedux },
			{ name: "NODE", logo: images.skills.logoNode },
			{ name: "VS CODE", logo: images.skills.logoVsCode },
			{ name: "FIGMA", logo: images.skills.logoFigma },
		],
        logoTop : logoRing,
        logoLeft: logoPill,
	},

    projectsData: {
        title: "Projects",
        list: [
            {
                title: "Random Jokes", 
                summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
                technologies: {
                    list: ["redux", "vercel", "axios", "router"],
                    style: { "background-color": "white" },
                    styleDark: { "background-color": clr525252 },
                },
                links: [
                    {text: "View on Github", to: linkGithub},
                    {text: "Go to app", to: linkGithub, hasLogo: true},
                ],
                style: {"background-color": clrBlueDDEEFE},
                styleDark : {"background-color": clr2D3235},
                image: images.projects.picRandomJokes,

            },
            {
                title: "Are you bored?", 
                summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
                technologies: {
                    list: ["react", "redux", "vercel", "axios", "router"],
                    style: { "background-color": "white" },
                    styleDark: { "background-color": clr525252 },
                },
                links: [
                    {text: "View on Github", to: linkGithub},
                    {text: "Go to app", to: linkGithub, hasLogo: true},
                ],
                image: images.projects.picAreYouBored,

                style: {"background-color": clrD9F6F1},
                styleDark: {"background-color": clr495351}
            },
            
        ],

        linkLogo: logoArrowRight,
        linkLogoDark: logoArrowRightWhite,
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