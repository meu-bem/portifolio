import Project from "../Project";
import Section from "../Section";

const Projects = () => (
  <Section
    title="Projects"
  >
    <span
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
      }}
    >
    <Project />
    <Project />
    <Project />
    <Project />
    <Project />
    </span>
  </Section>
)

export default Projects;