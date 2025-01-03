interface SectionProps {
  title: string,
  children: React.ReactNode,
}

const convertTitleToID = (title: string) => (
  title.toLowerCase().replace(/ /g, '_')
)

const Section = ({
  title,
  children
}: SectionProps) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      flexWrap: "wrap",
    }}
  >
    <h3
      style={{
        margin: "1rem 0",
      }}
      title={title}
      id={convertTitleToID(title)}
    >
      {title}
    </h3>
    {children}
  </div>
)

export default Section;