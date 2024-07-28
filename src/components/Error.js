import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <>
        <h1>Error: {error.status}</h1>
        <h2>{error.statusText}</h2>
        </>
    )
}

export default Error;