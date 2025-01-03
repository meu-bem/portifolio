import Section from "../Section";
import SectionItem, { SectionItemProps } from "../SectionItem";

const items: SectionItemProps[] = [
  {
    title: "Universidade do Estado do Amazonas",
    role: "Undergraduate in Computer Science",
    period: ["August/2019", "June/2024"]
  },
  {
    title: "Instituto Federal do Pará",
    role: "Computing for Internet Technician",
    period: ["August/2017", "August/2019"]
  },
]

const Education = () => (
  <Section
    title="Education"
  >
    {items.map(item => <SectionItem {...item} />)}
  </Section>
)

export default Education;