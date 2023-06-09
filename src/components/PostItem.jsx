import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useStateContext } from "../ContextProvider";

export default function PostItem({ post, onDelete = () => { } }) {

    const { deletePost } = useStateContext();

    function onDeleteClickPost(post) {
        if (!window.confirm("Are you want to delete post?")) {
            return;
        }
        // fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        //     method: "DELETE"
        // })
        //     .then((res) => {
        //         if (res.status == 200) {
        //             onDelete(post)
        //         }
        //     });

        deletePost(post.id);
    }

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h1 className="card-title">
                    {post.title}
                </h1>
                <p className="card-text">
                    {post.body}
                </p>

                <div className="text-end">
                    <Link to={`/edit/${post.id}`} className="btn btn-primary me-3">Edit</Link>
                </div>
                <div className="text-end">
                    <button onClick={() => onDeleteClickPost(post)} className="btn btn-danger">Delete</button>
                </div>


            </div>
        </div>
    );
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired
}