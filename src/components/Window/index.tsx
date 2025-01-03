interface WindowProps {
  barTitle?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Window = ({
  barTitle = "A Window With Stuff In It",
  children,
  style,
}: WindowProps) => (
  <div>
    <div className="title-bar">
      <div className="title-bar-text">{barTitle}</div>
      <div className="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close"></button>
      </div>
    </div>
    <div className="window" style={{
      width: "95vw",
      height: "90vh",
      ...style,
      overflowY: "auto",
    }}>
      <div
        className="window-body"
        style={{
          padding: "2rem 4rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {children}
      </div>
    </div>
  </div>
)

export default Window;