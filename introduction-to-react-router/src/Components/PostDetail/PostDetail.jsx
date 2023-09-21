import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetail = () => {
    const post = useLoaderData();

    const {postId} = useParams()
    console.log(postId);

    const navigate = useNavigate();

    const {id,title,body} = post;

    const handleClickBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h3>Post details:{id}</h3>
            <h4>Title: {title}</h4>
            <p><small>{body}</small></p>
            <button onClick={handleClickBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;