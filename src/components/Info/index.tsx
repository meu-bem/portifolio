import Chips from "../Chips";

interface Links {
  title: string,
  url: string,
}

const links: Links[] = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/mateus-do-bit",
  },
  {
    title: "GitHub",
    url: "https://github.com/meu-bem",
  },
  {
    title: "Email",
    url: "mailto:a.mateussm1.5@gmail.com"
  }
]

const Info = () => (
  <div
    style={{
      display: "flex",
      gap: "2rem",
    }}
  >
    <img
      src="https://github.com/meu-bem.png"
      alt="A imagem mostra um homem segurando um microfone, falando com um público. Ele está vestindo uma camiseta branca com um design e palavras impressas. Ao fundo, é possível ver outra pessoa parcialmente visível e uma tela projetada. A atmosfera é de um evento, como uma palestra ou workshop. O foco principal está na pessoa que está apresentando."
      style={{
        height: "400px",
      }}
    />
    <span
      style={{
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
      }}
    >
      <h1>Mateus Santos</h1>
      <h2
        style={{
          fontSize: "2rem",
          color: "rgba(0, 0, 0, .4)"
        }}
      >Software Analyst | @Instituto de Pesquisas Eldorado</h2>
      <span
        style={{
          display: "flex",
          gap: ".5rem",
          flexWrap: "wrap",
        }}
      >
        <Chips />
      </span>
      <p
        style={{
          display: "flex",
          gap: ".5rem",
        }}
      >
        {links.map((link, index) => (
          <>
            <a key={index} target="_blank" href={link.url} rel="noopener noreferrer">
              {link.title}
            </a>
            {index < links.length - 1 && "|"}
          </>
        ))}

      </p>
    </span>
  </div>
)

export default Info;