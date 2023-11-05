import "./Projects.css";

import { page_en } from "../../data/data";

const { projectsData } = page_en;

export function ProjectTitle({ children, ...rest }) {
	return <h2 {...rest}>{children}</h2>;
}

export function ProjectSummary({ children, ...rest }) {
	return <p {...rest}>{children}</p>;
}

export function ProjectTechnology({ children, ...rest }) {
	return <span {...rest}>{children}</span>;
}

export function ProjectLink({ children, ...rest }) {
	return <a {...rest}>{children}</a>;
}

const isDarkTheme = false; //TODO after adding dark the context update this. This just a test

export default function Projects() {
	function projectInLineStyle(project) {
		let style = null;
		if (isDarkTheme && project.styleDark) style = project.styleDark;
		else style = project.style;

		return style;
	}

	function technologyInlineStyle(tech) {
		let style = null;
		if (isDarkTheme && tech.styleDark) style = tech.styleDark;
		else style = tech.style;

		return style;
	}

	return (
		<div className="projects-wrapper">
			<section className="sec-projects custom-container">
                <h2 className="sec--title">{projectsData.title}</h2>
				<div className="sec-projects__projects">
                    {projectsData.list.map((project) => (
                        <div
                            key={project.title}
                            className="project"
                            style={projectInLineStyle(project)}
                        >
                            <div className="project--width-limiter">
                                <ProjectTitle className="project__title">
                                    {project.title}
                                </ProjectTitle>
                                <ProjectSummary className="project__summary">
                                    {project.summary}
                                </ProjectSummary>
                                <div className="project__technologies">
                                    {project.technologies.list.map((tech) => (
                                        <ProjectTechnology
                                            key={tech}
                                            className="project__technology pill"
                                            style={technologyInlineStyle(project.technologies)}
                                        >
                                            {tech}
                                        </ProjectTechnology>
                                    ))}
                                </div>
                                <div className="project__links">
                                    {project.links.map((link) => (
                                        <div key={link.text}>
                                            <a className="link" href={link.to}>
                                                {link.text}
                                            </a>
                                            {link.hasLogo && (
                                                <img
                                                    src={
                                                        isDarkTheme
                                                            ? projectsData.linkLogoDark
                                                            : projectsData.linkLogo
                                                    }
                                                    alt="img-link"
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <img
                                className="project__image"
                                src={project.image}
                                alt="img-project"
                            />
                        </div>
                    ))}
                </div>
			</section>
		</div>
	);
}
