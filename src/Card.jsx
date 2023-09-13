import './Card.css'

export default function Card(props) {
  return (
    <>
      <div className="project">
        <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          Link
        </a>
      </div>
    </>
  );
}
