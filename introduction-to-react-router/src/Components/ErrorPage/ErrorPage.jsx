import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>কিরে এই যায়গায় কি !!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page Not found</h3>
                    <p>Press go Home button where you form</p>
                    <Link to="/"><button>Go Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;