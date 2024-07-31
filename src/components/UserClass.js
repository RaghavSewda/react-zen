import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log("child constructor");

    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("child Did Mount");
  }
  render() {
    console.log("child rendered");

    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <button
          onClick={() => {
            // NEVER UPDATE STATE VARIABLES DIRECTLY
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <p>Count: {count}</p>
        <h3>{name}</h3>
        <h4> Location: {location}</h4>
      </div>
    );
  }
}

export default UserClass;
