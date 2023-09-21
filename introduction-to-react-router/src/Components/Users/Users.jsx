import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './users.css'

const Users = () => {

    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <p>Fantastic users is here.welcome!</p>
            <div className="users">
            {
                users.map((user)=> <User key={user.id} user={user}></User>)
            }
        </div>
        </div>
    );
};

export default Users;