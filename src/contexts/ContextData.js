import { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";
import { useLanguage } from "./ContextLanguage";

const ContextData = createContext();

export function useData() {
	return useContext(ContextData);
}

const page_tr = {

    headerData: {
        img: "./assets/header/full-circle.svg",
        imgDark: "./assets/header/full-circle-dark.svg"
    },

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
        ring: "./assets/hero/ring.svg",
        ringDark: "./assets/hero/ring-dark.svg",
        pill: "./assets/hero/pill.svg"
    },
    
    skillsData: {
        title: "Yetenekler",
        list: [
            { name: "JAVASCRIPT", logo: "./assets/skills/logo-js.svg" },
            { name: "REACT", logo: "./assets/skills/logo-react.svg" },
            { name: "REDUX", logo: "./assets/skills/logo-redux.svg" },
            { name: "NODE", logo: "./assets/skills/logo-node.svg" },
            { name: "VS CODE", logo: "./assets/skills/logo-vscode.svg" },
            { name: "FIGMA", logo: "./assets/skills/logo-figma.svg" },
        ],
        pill: "./assets/skills/pill.svg"
    },

    projectsData: {
        title: "Projeler",
        list: [
            {
                title: "Pizza Siparişi", 
                summary: "Bir yemek sipariş sitesi. Örnek olarak bir pizza kullanılıyor. Pizza için ek malzemeler, hamur kalınlığı, boyut seçebiliyorsunuz. Son olarak müşteri ismi ve sipariş notu ile sipariş adeti seçildikten sonra siparişinizi verebiliyorsunuz. Karşınıza gelen son sayfa sipariş özetini içeriyor.",
                technologies: ["react", "vercel", "axios", "router"],
                links: [
                    {text: "View on Github", to: "https://github.com/alisankarababa/fsweb-s7-challenge-pizza"},
                    {text: "Go to app", to: "https://order-pizza-drab.vercel.app/", hasLogo: true},
                ],
                bgClrThemeLight: "bg-DDEEFE",
                bgClrThemeDark: "bg-2D3235",

                image: "./assets/projects/order-pizza.svg",
            },
            {
                title: "Anlık Hava Durumu", 
                summary: "Hava durumunu öğrenmek istediğiniz şehri ekleyebilir, isterseniz sonra silebilirsiniz. Ekranın sağ ve sol tarafında bulunan oklar ile şuan görüntülenen şehirleri değiştirebilirsiniz",
                technologies: ["react", "redux", "vercel", "axios", "router"],
                links: [
                    {text: "View on Github", to: "https://github.com/alisankarababa/weather-now"},
                    {text: "Go to app", to: "https://weather-now-alisans-projects.vercel.app/", hasLogo: true},
                ],
                image: "./assets/projects/weather-now.svg",
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
                {label: "Doğum Tarihi",  text: "21.02.1994"},
                {label: "İkamet Şehri", text: "İstanbul"},
                {label: "Eğitim Durumu", text: "Boğaziçi Üniversitesi, Fizik Lisans, 2020" },
                {label: "Tercih Ettiği Rol", text: "Full Stack Developer"},
            ]
        },

        aboutMe: {
            title: "Hakkımda",
            paragraphs: [
                "Boğaziçi Üniversitesi' nde Fizik bölümü okudum. Yeni şeyler öğrenmek her zaman ilgimi çekmiştir.",
                "Web developer olmak için yoğun bir eğitim aldım ve temel web geliştirme becerilerine sahibim. Yeni teknolojileri öğrenmeye açığım ve Web dünyasında daha fazla deneyim kazanmak için istekliyim."
            ]
        },
        ring: "./assets/profile/ring.svg"

    },

    footerData: {
        msg: "Yeni projenizde birlikte çalışalım.",
        links : [
            {name: "Github", to: "https://github.com/alisankarababa", color: "clr-1769FF"},
            {name: "Kişisel Blog", to: "#", color: "clr-black",  colorThemeDark: "clr-white"},
            {name: "Linkedin", to: "#",  color: "clr-0077B5"},
            {name: "Email", to: "#", color: "clr-AF0C48"},
        ]
    }
};

const page_en = {
    headerData: {
        img: "./assets/header/full-circle.svg",
        imgDark: "./assets/header/full-circle-dark.svg"
    },

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
        ring: "./assets/hero/ring.svg",
        ringDark: "./assets/hero/ring-dark.svg",
        pill: "./assets/hero/pill.svg"
    },

    skillsData: {
        title: "Skills",
        list: [
            { name: "JAVASCRIPT", logo: "./assets/skills/logo-js.svg" },
            { name: "REACT", logo: "./assets/skills/logo-react.svg" },
            { name: "REDUX", logo: "./assets/skills/logo-redux.svg" },
            { name: "NODE", logo: "./assets/skills/logo-node.svg" },
            { name: "VS CODE", logo: "./assets/skills/logo-vscode.svg" },
            { name: "FIGMA", logo: "./assets/skills/logo-figma.svg" },
        ],
        pill: "./assets/skills/pill.svg"
    },

    profileData: {

        title: "Profile",
        basicInfo: {
            title: "Basic Information",
            info: [
                {label: "Date of Birth",  text: "21.02.1994"},
                {label: "Current City", text: "İstanbul"},
                {label: "Education", text: "Bogazici University, BS Physics, 2020" },
                {label: "Preferred Role", text: "Full Stack Developer"},
            ]
        },

        aboutMe: {
            title: "About Me",
            paragraphs: [
                "I studied physics in Bogazici University. I have always been keen on learning new things.",
                "I studied a heavy schedule web desing course, I have the fundemental skills to build a website. I am open to new technologies, and eager to get more experience in the world of Web."
            ]
        },
        ring: "./assets/profile/ring.svg"

    },

    projectsData: {
        title: "Projects",
        list: [
            {
                title: "Order Pizza", 
                summary: "It is a pizza order web site. A pizza is used for an order form example. You can choose size, dough thickness, and extra ingredients. After typing your name, order notes, and choosing how many pizzas you want you can submit your order. After that you are redirected to a page where you can see the summary of your order.",
                technologies: ["react", "vercel", "axios", "router"],
                links: [
                    {text: "View on Github", to: "https://github.com/alisankarababa/fsweb-s7-challenge-pizza"},
                    {text: "Go to app", to: "https://order-pizza-drab.vercel.app/", hasLogo: true},
                ],
                bgClrThemeLight: "bg-DDEEFE",
                bgClrThemeDark: "bg-2D3235",

                image: "./assets/projects/order-pizza.svg",
            },
            {
                title: "Weather Now", 
                summary: "You can add cities to your list to learn current weather, and delete them if you want. You can change the displayed cities by the arrows on each side.",
                technologies: ["react", "redux", "vercel", "axios", "router"],
                links: [
                    {text: "View on Github", to: "https://github.com/alisankarababa/weather-now"},
                    {text: "Go to app", to: "https://weather-now-alisans-projects.vercel.app/", hasLogo: true},
                ],
                image: "./assets/projects/weather-now.svg",
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
    const [data, setData] = useState({});

    useEffect(() => {

        let payload = null;
        switch (language) {
            case eLanguage.tr:
                payload = page_tr;
                break;
            case eLanguage.en:
                payload = page_en;
                break;
            default:
                payload = page_tr;
                break;
        }

        axios.post("https://reqres.in/api/users", payload)
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.error(err);
        });

    }, [language, eLanguage])

	return (
		<ContextData.Provider value={{ data }}>
			{children}
		</ContextData.Provider>
	);
}
