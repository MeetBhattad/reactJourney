function Card(props) {
  return (
    <div className="card" style={{ border: "8px soild black", padding: "2px" }}>
      <img
        src="https://wittee.in/wp-content/uploads/2025/09/front-68cc0e54b7abd-Royal_Blue_XS_Oversized_T-shirt.jpg"
        height="150px"
        width="150px"
      />
      <div style={{ textAlign: "center" }}>
        <h2 stlye={{ height: "10px" }}>{props.cloth}</h2>
        <h1>{props.offer}</h1>
        <h2>Shop Now!!</h2>
      </div>
    </div>
  );
}
export default Card;
