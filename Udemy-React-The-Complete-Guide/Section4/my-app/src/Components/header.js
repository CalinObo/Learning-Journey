function Header(props) {
  return (
    <header>
      <img src={props.src} alt={props.alt} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </header>
  );
}

export default Header;
