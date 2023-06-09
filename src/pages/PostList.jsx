import React, { useEffect, useState } from "react";
import PostItem from "../components/PostItem";
import { Link } from "react-router-dom";
import { useStateContext } from "../ContextProvider";

export default function PostList() {
    //const [postList, setPostList] = useState([]);

    const { posts } = useStateContext();

    // function onDelete(post) {
    //     setPostList(postList.filter((p) => p.id != post.id));
    // }

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then((res) => res.json())
    //         .then((posts) => {
    //             setPostList(posts)
    //         });
    // }, []);

    return (
        <>
            <div>
                PostList
                <p>
                    <Link to="/new" className="btn btn-success">Add Post</Link>
                </p>
                {/* <pre>
                {JSON.stringify(postList, undefined, 2)}
            </pre> */}
                {/* {postList.map(post => (
                    <PostItem key={post.id} post={post} onDelete={onDelete} />
                ))} */}
                {posts.map(post => (
                    <PostItem key={post.id} post={post} />
                ))}
            </div>
        </>
    )
}