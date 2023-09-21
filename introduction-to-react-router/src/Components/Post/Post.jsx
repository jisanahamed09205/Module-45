import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id,title} = post;

    const navigate = useNavigate();

    const postStyle = {
        border: '2px solid yellowgreen',
        padding: '10px',
        borderRadius:'10px'
    }

    const handleClickBtn = () =>{
        navigate(`/post/${id}`)
    }

    return (
        <div style={postStyle}>
            <h4>Post of id: {id}</h4>
            <p>Title: {title}</p>
            <Link to={`/post/${id}`}>See all</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleClickBtn}>Click me</button>
        </div>
    );
};

export default Post;