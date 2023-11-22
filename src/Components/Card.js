export default function Card(props) {
  const imagePath = require(`../games/${props.image}`);
  return (
    <>
      <div className="card">
        <img src={imagePath} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}
