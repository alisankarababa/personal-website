import { createContext, useContext, useEffect, useState } from "react";

import { useLanguage } from "./ContextLanguage";

const ContextData = createContext();

export function useData() {
	return useContext(ContextData);
}

const page_tr = {
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
    },

    projectsData: {
        title: "Projeler",
        list: [
            {
                title: "Random Jokes", 
                summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
                technologies: ["redux", "vercel", "axios", "router"],
                links: [
                    {text: "View on Github", to: "https://github.com/alisankarababa"},
                    {text: "Go to app", to: "https://github.com/alisankarababa", hasLogo: true},
                ],
                bgClrThemeLight: "bg-DDEEFE",
                bgClrThemeDark: "bg-2D3235",

                image: "./assets/projects/random-jokes.svg",
            },
            {
                title: "Are you bored?", 
                summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
                technologies: ["react", "redux", "vercel", "axios", "router"],
                links: [
                    {text: "View on Github", to: "https://github.com/alisankarababa"},
                    {text: "Go to app", to: "https://github.com/alisankarababa", hasLogo: true},
                ],
                image: "./assets/projects/are-you-bored.svg",
                bgClrThemeLight: "bg-D9F6F1",
                bgClrThemeDark: "bg-495351",
            },
        ],

        linkLogo: "./assets/projects/arrow-right.svg",
        linkLogoDark: "./assets/projects/arrow-right-white.svg",
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
            {name: "Github", to: "https://github.com/alisankarababa", color: "clr-1769FF"},
            {name: "Personal Blog", to: "#", color: "clr-black",  colorThemeDark: "clr-white"},
            {name: "Linkedin", to: "#",  color: "clr-0077B5"},
            {name: "Email", to: "#", color: "clr-AF0C48"},
        ]
    }
};

const page_en = {
    
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
                technologies: ["redux", "vercel", "axios", "router"],
                links: [
                    {text: "View on Github", to: "https://github.com/alisankarababa"},
                    {text: "Go to app", to: "https://github.com/alisankarababa", hasLogo: true},
                ],
                bgClrThemeLight: "bg-DDEEFE",
                bgClrThemeDark: "bg-2D3235",

                image: "./assets/projects/random-jokes.svg",
            },
            {
                title: "Are you bored?", 
                summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
                technologies: ["react", "redux", "vercel", "axios", "router"],
                links: [
                    {text: "View on Github", to: "https://github.com/alisankarababa"},
                    {text: "Go to app", to: "https://github.com/alisankarababa", hasLogo: true},
                ],
                image: "./assets/projects/are-you-bored.svg",
                bgClrThemeLight: "bg-D9F6F1",
                bgClrThemeDark: "bg-495351",
            },
        ],

        linkLogo: "./assets/projects/arrow-right.svg",
        linkLogoDark: "./assets/projects/arrow-right-white.svg",
    },

    footerData: {
        msg: "Let's work togetger on your next product.",
        links : [
            {name: "Github", to: "https://github.com/alisankarababa", color: "clr-1769FF"},
            {name: "Personal Blog", to: "#", color: "clr-black",  colorThemeDark: "clr-white"},
            {name: "Linkedin", to: "#",  color: "clr-0077B5"},
            {name: "Email", to: "#", color: "clr-AF0C48"},
        ]
    }
};


export function ContextDataProvider({ children }) {
    const {eLanguage, language} = useLanguage();

   

    const [data, setData] = useState(page_en);

    useEffect(() => {

        switch (language) {
            case eLanguage.tr:
                setData(page_tr);
                break;
            case eLanguage.en:
                setData(page_en);
                break;
        
            default:
                setData(page_tr); //For now
                break;
        }

    }, [language, eLanguage])

	return (
		<ContextData.Provider value={{ data }}>
			{children}
		</ContextData.Provider>
	);
}
