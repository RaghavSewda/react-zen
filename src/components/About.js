import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent Did Mount");
  }

  render() {
    console.log("parent rendered");
    return (
      <>
        <h1>About Us</h1>
        <UserClass name="Raghav Sewda" location="Delhi" />
      </>
    );
  }
}

export default About;

// - parent constructor
// - parent render

//   - firstchild constructor
//   - firstchild render

//   - secondchild constructor
//   - secondchild render

//      DOM UPDATED

//   - firstchild did Mount
//   - secondchild did Mount

// -parent did Mount
