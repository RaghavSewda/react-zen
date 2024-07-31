import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
        avatar_url: "default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/RaghavSewda");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    // console.log("component did update");
  }
  componentWillUnmount() {
    // console.log("component will unmount");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h3>{name}</h3>
        <h4> Location: {location}</h4>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;

// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

// --------MOUNTING--------
//
// Constructor (dummy)
// Render (dummy)
//     <HTML Dummy>
// Component Did Mount
//     <API Call>
//     <this .setState -> State variable is updated
//
// --------UPDATE---------
//
//   render(API data)
//   <HTML (new API DATA)>
//   component Did Update
