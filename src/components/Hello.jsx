class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      counter: 0
    };
  }

  handleClick = () => {
    // TODO: change the state of clicked to true
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    });
  }

// Build and return HTML
  render() {
    return (
      <button
        className={this.state.clicked ? 'clicked' : null}
        onClick={this.handleClick}> Hello {this.props.name}, you clicked {this.state.counter} times
      </button>
    );
  }
}
