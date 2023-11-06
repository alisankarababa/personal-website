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
import imgHero from "../assets/hero/img-hero.jpg"
import logoLinkedIn from "../assets/hero/LinkedIn.svg"
import logoLinkedInDarkTheme from "../assets/hero/LinkedIn-darkTheme.svg"
import logoGithub from "../assets/hero/github.png"
import logoGithubDarkTheme from "../assets/hero/github-darkTheme.png"



const images = Object.freeze({

    hero: {
        imgHero,
        logoLinkedIn,
        logoLinkedInDarkTheme,
        logoGithub,
        logoGithubDarkTheme
    },
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


//TODO add hero section to tr page too
export const page_tr = {
	heroData: {
        greeting: "Merhaba👋",
		intoductoryText: "Ben Alişan. Full-stack yazılımcıyım. Sağlam ve ölçeklenebilir frontend projeleri geliştiriyorum. Görüşelim!",
        occupation: "Şu an UX, UI, & Web Tasarımı projeleri yapıyorum. -> Beni takımınızda görmek için -> alisankarababa@gmail.com",
        img: images.hero.imgHero,
        links: [
            { to: linkGithub, logo: images.hero.logoLinkedIn, logoDark: images.hero.logoLinkedInDarkTheme }, //TODO fix link to property
            { to: linkGithub, logo: images.hero.logoGithub, logoDark: images.hero.logoGithubDarkTheme }
        ]
    },
    
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
                    style: { backgroundColor: "white" },
                    styleDark: { backgroundColor: clr525252 },

                },
                links: [
                    {text: "View on Github", to: linkGithub},
                    {text: "Go to app", to: linkGithub, hasLogo: true},
                ],
                image: images.projects.picRandomJokes,

                style: {backgroundColor: clrBlueDDEEFE},
                styleDark : {backgroundColor: clr2D3235},
            },
            {
                title: "Are you bored?", 
                summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
                technologies: {
                    list: ["react", "redux", "vercel", "axios", "router"],
                    style: { backgroundColor: "white" },
                    styleDark: { backgroundColor: clr525252 },
                },
                links: [
                    {text: "View on Github", to: linkGithub},
                    {text: "Go to app", to: linkGithub, hasLogo: true},
                ],
                image: images.projects.picAreYouBored,

                style: {backgroundColor: clrD9F6F1},
                styleDark: {backgroundColor: clr495351}
            },
            
        ],

        linkLogo: logoArrowRight,
        linkLogoDark: logoArrowRightWhite,
    },

    profileData: {

        title: "Profil",
        basicInfo: {
            title: {text: "Temel Bilgiler", style: { color: clrBlue1769FF } },
            info: [
                {label: "Doğum Tarihi",  text: "21-02-1994"},
                {label: "İkamet Şehri", text: "İstanbul"},
                {label: "Eğitim Durumu", text: "Boğaziçi Üniversitesi, Fizik Lisans, 2020" },
                {label: "Tercih Ettiği Rol", text: "Full Stack Developer"},
            ]
        },

        aboutMe: {
            title: "Hakkımda",
            paragraphs: [
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
                "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
            ]
        }

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
    
    heroData: {
        greeting: "Hello👋",
        intoductoryText: "I’m Alişan. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!",
        occupation: "Currently Freelancing for UX, UI, & Web Design Project. Invite me to join your team -> alisankarababa@gmail.com",
        img: images.hero.imgHero,
        links: [
            { to: linkGithub, logo: images.hero.logoLinkedIn, logoDark: images.hero.logoLinkedInDarkTheme }, //TODO fix link to property
            { to: linkGithub, logo: images.hero.logoGithub, logoDark: images.hero.logoGithubDarkTheme }
        ]
    },

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

    profileData: {

        title: "Profile",
        basicInfo: {
            title: {text: "Basic Information", style: { color: clrBlue1769FF } },
            info: [
                {label: "Date of Birth",  text: "21-02-1994"},
                {label: "Current City", text: "İstanbul"},
                {label: "Education", text: "Bogazici University, BS Physics, 2020" },
                {label: "Preferred Role", text: "Full Stack Developer"},
            ]
        },

        aboutMe: {
            title: "About Me",
            paragraphs: [
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
                "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
            ]
        }

    },

    projectsData: {
        title: "Projects",
        list: [
            {
                title: "Random Jokes", 
                summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
                technologies: {
                    list: ["redux", "vercel", "axios", "router"],
                    style: { backgroundColor: "white" },
                    styleDark: { backgroundColor: clr525252 },
                },
                links: [
                    {text: "View on Github", to: linkGithub},
                    {text: "Go to app", to: linkGithub, hasLogo: true},
                ],
                style: {backgroundColor: clrBlueDDEEFE},
                styleDark : {backgroundColor: clr2D3235},
                image: images.projects.picRandomJokes,

            },
            {
                title: "Are you bored?", 
                summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
                technologies: {
                    list: ["react", "redux", "vercel", "axios", "router"],
                    style: { backgroundColor: "white" },
                    styleDark: { backgroundColor: clr525252 },
                },
                links: [
                    {text: "View on Github", to: linkGithub},
                    {text: "Go to app", to: linkGithub, hasLogo: true},
                ],
                image: images.projects.picAreYouBored,

                style: {backgroundColor: clrD9F6F1},
                styleDark: {backgroundColor: clr495351}
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