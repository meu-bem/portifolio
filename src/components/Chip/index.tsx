interface ChipProps {
  technology: Technology
}

interface HSL {
  h: number,
  s: number,
  l: number,
}

interface Technology {
  label: string,
  color: HSL,
}

export const technologies: Technology[] = [
  {
    label: "Python",
    color: {h: 20, s: 97, l: 35},
  },
  {
    label: "JavaScript",
    color: {h: 40, s: 97, l: 35},
  },
  {
    label: "Java",
    color: {h: 60, s: 97, l: 35},
  },
  {
    label: "PHP",
    color: {h: 80, s: 97, l: 35},
  },
  {
    label: "HTML5",
    color: {h: 100, s: 97, l: 35},
  },
  {
    label: "CSS3",
    color: {h: 120, s: 97, l: 35},
  },
  {
    label: "node.js",
    color: {h: 140, s: 97, l: 35},
  },
  {
    label: "Express",
    color: {h: 160, s: 97, l: 35},
  },
  {
    label: "MySQL",
    color: {h: 180, s: 97, l: 35},
  },
  {
    label: "Sqlite",
    color: {h: 200, s: 97, l: 35},
  },
  {
    label: "Docker",
    color: {h: 220, s: 97, l: 35},
  },
  {
    label: "Git",
    color: {h: 240, s: 97, l: 35},
  },
  {
    label: "GitHub",
    color: {h: 260, s: 97, l: 35},
  },
  {
    label: "Jenkins",
    color: {h: 280, s: 97, l: 35},
  },
  {
    label: "Gerrit",
    color: {h: 300, s: 97, l: 35},
  },
  {
    label: "ReactJS",
    color: {h: 320, s: 97, l: 35},
  }
]

const Chip = ({
  technology,
}: ChipProps) => (
  <p
    style={{
      backgroundImage: `linear-gradient(0deg, hsl(${technology.color.h}, ${technology.color.s}%, ${technology.color.l}%), hsl(${technology.color.h}, ${technology.color.s}%, ${technology.color.l+12}%)`,
      width: "max-content",
      padding: "4px 8px",
      color: "#fff",
      borderRadius: "4px",
      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
    }}
  >
    {technology.label}
  </p>
);

export default Chip;