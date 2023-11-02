import React from "react";
import { skills } from "../../data/data"
import "./Skills.css"


const languages = {
	tr: "tr",
	en: "en",
};

const lang = languages.en;

export function SkillLogo({ src, alt, ...rest }) {
	return <img src={src} alt={alt} {...rest} />;
}

export function SkillName({ children, className, ...rest }) {
	return (
		<span className={className} {...rest}>
			{children}
		</span>
	);
}

export function Skill({ children, ...rest }) {
	return <div {...rest}>{children}</div>;
}

export default function Skills({ className, ...rest }) {

    let classes = className ? className : "";
    classes += " sec-skills";

	return (
		<section className={classes}>
			<h2 className="sec-skills__header">Skills</h2>
			<div className="skills">
				{skills.map((skill) => (
					<Skill className="skill" key={skill.name[lang]}>
						<SkillLogo
							className="skill__logo"
							src={skill.logo}
							alt="skill-logo"
						/>
						<SkillName className="skill__name" style={skill.name.style}>
							{skill.name[lang]}
						</SkillName>
					</Skill>
				))}
			</div>
		</section>
	);
}
