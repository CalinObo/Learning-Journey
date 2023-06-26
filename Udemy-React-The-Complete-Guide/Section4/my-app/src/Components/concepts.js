function Concepts(props) {
  // const classes = props.className;

return (
  <li className='concept'>
    <img src={props.src} alt={props.alt} />
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </li>
);
}

export default Concepts;
