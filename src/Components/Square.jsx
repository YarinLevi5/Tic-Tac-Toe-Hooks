const squareStyle = {
  width: "150px",
  height: "150px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "40px",
  color: "black",
};
function Square({ value, click, children }) {
  return (
    <div className="square" style={squareStyle} onClick={click}>
      {value}
      {children}
    </div>
  );
}

export default Square;
