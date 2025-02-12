function Box(props: any) {
  return (
    <div className="box">
      <h1>{props.heading}</h1>
      <hr />
      {props.content}
    </div>
  );
}

export default Box;
