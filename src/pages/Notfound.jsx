import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container d-flex flex-column vh-100 justify-content-center align-items-center">
            <h1>404 Page Not Found</h1>
            <p>Here are some helpful links:</p>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default NotFound