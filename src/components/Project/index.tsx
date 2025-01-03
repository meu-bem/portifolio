import bocadinhas from "../../assets/projects/portifolio_bocadinhas.png";

const Project = () => (
  <div className="window" style={{
    width: 320,
  }}>
    <div className="title-bar">
      <div className="title-bar-text">Bocadinhas</div>
    </div>
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "1rem",
        boxSizing: "border-box"
      }}
    >
      <img src={bocadinhas} alt="" />
      <div className="window-body">
        <p> There are just so many possibilities</p>
      </div>
      <span
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "2rem",
        }}
      >
        <input type="Submit" value="Demo" />
      </span>
    </div>
  </div>
)

export default Project;