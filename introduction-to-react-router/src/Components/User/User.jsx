import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id,name,username,email} = user;
    // console.log(address);

    const userStyle = {
        border: '2px solid yellowgreen',
        padding: '10px',
        borderRadius:'10px'
    }


    return (
        <div style={userStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>UserName: {username}</p>
            {/* <p>Address: {address}</p> */}
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
                <button>Click me</button>
            </Link>
        </div>
    );
};

export default User;