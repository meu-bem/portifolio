import Section from "../Section";
import SectionItem, { SectionItemProps } from "../SectionItem";

const items: SectionItemProps[] = [
  {
    title: "Scientific research (Kariti)",
    period: ["August/2021", "August/2022"],
    description: "Project for the development of a web application for the creation, correction and management of objective tests.",
    role: "UI Designer adn Full Stack Developer",
    actitivies: [
      "I’ve designed and tested the prototypes of the screens necessary for the creation of the final project.",
      "I’ve developed the system for creating, reorienting and correcting answer sheets.",
      "I’ve designed and developed the database(Sqlite) and the web interface to interact with the system.",
    ],
    obeservation: "We published a paper describing the development and functioning of the system (http://revista.faculdadeprojecao.edu.br/index.php/Projecao4/article/view/1814). The project is available to the entire community as a open source project (https://github.com/karitisystem/kariti).",
  },
  {
    title: "Research Project at the University (TaxAM)",
    period: ["August/2021", "December 2022"],
    description: "Project for the development of tools for the analysis of soils degraded by the extraction of ores.",
    role: "Full Stack Developer",
    actitivies: [
      "Using the Python programming language, I’ve developed some scripts to catalog microorganisms present in soil samples.",
      "I’ve used Artificial Intelligence through libraries like K-means to group similar samples.",
      "I’ve designed and developed the web interfaces to visualize the generated data.",
    ],
    obeservation: "We are still working on it because it requires the creation of some modules, but its deadline is planned for December 2022.",
  },
]

const PracticeExperience = () => (
  <Section
    title="Practice Experience"
  >
    {items.map(item => <SectionItem {...item} />)}
  </Section>
)

export default PracticeExperience;