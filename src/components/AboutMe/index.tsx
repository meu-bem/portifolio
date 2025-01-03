import Section from "../Section";

const aboutMeParapgraphs = [
  "✌️ | Hi, I'm a young developer exploring the diverse worlds of technology for 4 years now, traveling from Back-end to Front-end, with many expeditions into the universe of Design.",
  "⭐ | My journey began in high school when I had the opportunity to take a technical course at the Federal Institute of Pará, where I had my first contact with programming. Alongside this exciting new world, I worked part-time as a Graphic Designer, a skill that remains useful to this day.",
  "📚 | Near the end of high school, I applied for a university entrance exam to study Computer Science at the State University of Amazonas, which I can proudly say is now a significant part of my journey.",
  "💻 | Always proactive, during my first semester in college, I was invited to volunteer in an Extension Project at the university, where I gained invaluable experience. After completing my volunteer work, I was honored to be invited to conduct my first Scientific Research Project, developing a web system for generating, correcting, and managing objective exams. Seeing my work as a developer bring value to academia through the publication of my first article was a milestone. Recognizing my good performance, my coordinator invited me again to work on a research project about soil health using Artificial Intelligence."
]

const AboutMe = () => (
  <Section
    title="About Me"
  >
    {aboutMeParapgraphs.map(paragraph => <p>{paragraph}</p>)}
  </Section>
)

export default AboutMe;