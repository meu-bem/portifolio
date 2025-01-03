import Chip, { technologies } from "../Chip";

const Chips = () => (
    technologies.map(technology => <Chip technology={technology} />)
)

export default Chips;