import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <h1>About Us</h1>
        <UserClass name="Raghav Sewda" location="Delhi" />
      </>
    );
  }
}

export default About;
