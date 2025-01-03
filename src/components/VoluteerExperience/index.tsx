import Section from "../Section";
import SectionItem, { SectionItemProps } from "../SectionItem";

const items: SectionItemProps[] = [
  {
    title: "IT Week at the University",
    period: [2019, 2021, 2022],
    description: "Event held by the Center in which I study with various activities aimed at the dissemination and creation of works in the area of ​​information technology.",
    role: "UI Designer adn Full Stack Developer",
    actitivies: [
      "I’ve coordinated activities such as the Academic Works Workshop and organization of gifts to the students.",
      "I’ve taught a workshop and a mini-course on computational tools.",
      "I’ve worked as the author of the event's visual identity for 3 years.",
    ],
  },
  {
    title: "Application of Simulations and Tests in High School in Itacoatiara",
    period: ["August/2019", "July/2021"],
    description: "Project for application of simulation and tests using proprietary software Visual Class and Visual Class Net Server.",
    role: "UI Designer adn Full Stack Developer",
    actitivies: [
      "I’ve created all the assets and other visual elements for the project's applications during the period I was a volunteer.",
    ],
    obeservation: "The applications created by the project enabled personalized analysis of student performance, improving the teaching methodologies where they were applied.",
  },
  {
    title: "Ballerini Comunity",
    period: ["July/2021", "Currently"],
    description: "A community of over 40,000 members dedicated to helping developers have a great network and share knowledge.",
    actitivies: [
      "I am responsible for planning and coordinating events within the community, in addition to contacting personalities in the area to add knowledge to our members.",
      "I work with the development of bots to assist in the interaction of members in events that run in the community.",
    ],
  },
]

const VoluteerExperience = () => (
  <Section
    title="Voluteer Experience"
  >
    {items.map(item => <SectionItem {...item} />)}
  </Section>
)

export default VoluteerExperience;