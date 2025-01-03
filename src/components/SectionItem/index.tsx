type Period = number[] | string[];

export interface SectionItemProps {
  title: string,
  period: Period,
  description?: string,
  role?: string,
  actitivies?: string[],
  obeservation?: string,
}

const parsePeriod = (period: Period) => (
  period.length == 2 ? period.map(timeBullet => timeBullet.toString()).join(' - ') : period.map(timeBullet => timeBullet.toString()).join(' / ')
)

const SectionItem = ({
  actitivies,
  description,
  period,
  role,
  title,
  obeservation,
}: SectionItemProps) => (
  <p
    style={{
      display: "flex",
      flexDirection: "column",
      gap: ".5rem",
    }}
  >
    <span
      style={{
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <b>{title}</b>
      <b>{parsePeriod(period)}</b>
    </span>
    {description && <p>{description}</p>}
    {role && <em>{role}</em>}
    {
      actitivies &&
      <ul>
      {actitivies.map(activity => <li>{activity}</li>)}
    </ul>
    }
    {obeservation && <p>{obeservation}</p>}
  </p>
)

export default SectionItem;