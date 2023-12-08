import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { eroare: false };
  }
  componentDidCatch(error) {
    console.log(error)
    this.setState({ eroare: true });
  }

  render() {
    if (this.state.eroare) {
      return <p>Ceva a mers naspa</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
