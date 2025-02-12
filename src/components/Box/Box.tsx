import "./styles.css";

function Box(props: any) {
  return (
    <div className="box">
      <div className="heading-box">
        <h1>{props.heading}</h1>
        <hr />
      </div>
      {props.content}
    </div>
  );
}

export default Box;
