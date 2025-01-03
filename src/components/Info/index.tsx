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
      <h2>Software Analyst</h2>
      <a href="https://www.linkedin.com/company/instituto-de-pesquisas-eldorado">
        <h3>Instituto de Pesquisas Eldorado</h3>
      </a>
    </span>
  </div>
)

export default Info;