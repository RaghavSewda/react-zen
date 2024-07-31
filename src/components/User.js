import { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  return (
    <>
      <p> Count: {count}</p>
      <p> Count2: {count2}</p>
      <h3>{name}</h3>
      <h4>Location: {location}</h4>
    </>
  );
};

export default User;
