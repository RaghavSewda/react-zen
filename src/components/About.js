import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <h1>About Us</h1>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass name="Raghav Sewda" location="Delhi" />
      </>
    );
  }
}

export default About;
