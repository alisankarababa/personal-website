import logoRing from "../assets/logo-ring.svg"
import logoPill from "../assets/logo-pill.svg"
import logoArrowRight from "../assets/arrow-right.svg"
import logoArrowRightWhite from "../assets/arrow-right-white.svg"
import picRandomJokes from "../assets/projects/random-jokes.svg"
import picAreYouBored from "../assets/projects/are-you-bored.svg"



const images = Object.freeze({

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
const clr2D3235 = "#2D3235";
const clr495351 = "#495351";
const clrD9F6F1 = "#D9F6F1";
const clr525252 = "#525252";


const linkGithub = "https://github.com/alisankarababa";


export const page_tr = {
    heroData: {
        greeting: "Merhaba👋",
		intoductoryText: "Ben Alişan. Full-stack yazılımcıyım. Sağlam ve ölçeklenebilir frontend projeleri geliştiriyorum. Görüşelim!",
        img: "/assets/hero/img-hero.jpg",
        links: [
            { to: "https://github.com/alisankarababa", logoThemeLight: "./assets/hero/logo-linkedin-theme-light.svg", logoThemeDark: "./assets/hero/logo-linkedin-theme-dark.svg" }, 
            { to: "https://github.com/alisankarababa", logoThemeLight: "./assets/hero/logo-github-theme-light.svg", logoThemeDark: "./assets/hero/logo-github-theme-dark.svg" }
        ],
        status: "Freelancer",
        project: "UX, UI, & Web Design",
        inviteMsg: "Beni takımınıza davet etmek için ->",
        email: "alisankarababa@gmail.com",
    },
    
    skillsData: {
		list: [
			{ name: "JAVASCRIPT", logo: "./assets/skills/logo-js.svg" },
			{ name: "REACT", logo: "./assets/skills/logo-react.svg" },
			{ name: "REDUX", logo: "./assets/skills/logo-redux.svg" },
			{ name: "NODE", logo: "./assets/skills/logo-node.svg" },
			{ name: "VS CODE", logo: "./assets/skills/logo-vscode.svg" },
			{ name: "FIGMA", logo: "./assets/skills/logo-figma.svg" },
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
            title: "Temel Bilgiler",
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
        img: "/assets/hero/img-hero.jpg",
        links: [
            { to: "https://github.com/alisankarababa", logoThemeLight: "./assets/hero/logo-linkedin-theme-light.svg", logoThemeDark: "./assets/hero/logo-linkedin-theme-dark.svg" }, 
            { to: "https://github.com/alisankarababa", logoThemeLight: "./assets/hero/logo-github-theme-light.svg", logoThemeDark: "./assets/hero/logo-github-theme-dark.svg" }
        ],

        status: "Freelancing",
        project: "UX, UI, & Web Design",
        inviteMsg: "Invite me to join your team ->",
        email: "alisankarababa@gmail.com",
    },

	skillsData: {
		list: [
			{ name: "JAVASCRIPT", logo: "./assets/skills/logo-js.svg" },
			{ name: "REACT", logo: "./assets/skills/logo-react.svg" },
			{ name: "REDUX", logo: "./assets/skills/logo-redux.svg" },
			{ name: "NODE", logo: "./assets/skills/logo-node.svg" },
			{ name: "VS CODE", logo: "./assets/skills/logo-vscode.svg" },
			{ name: "FIGMA", logo: "./assets/skills/logo-figma.svg" },
		],
        logoTop : logoRing,
        logoLeft: logoPill,
	},

    profileData: {

        title: "Profile",
        basicInfo: {
            title: "Basic Information",
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