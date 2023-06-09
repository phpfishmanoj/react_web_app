import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import router from '../router';
import { useStateContext } from '../ContextProvider';

export default function PostForm() {
    const [model, setModel] = useState({
        id: "",
        title: "",
        body: "",
    });

    const params = useParams();
    const { getSinglePost, savePost } = useStateContext();

    useEffect(() => {
        if (!params.id) {
            return;
        }
        // fetch("https://jsonplaceholder.typicode.com/posts/" + params.id)
        //     .then((res) => res.json())
        //     .then((post) => {
        //         setModel(post);
        //     });
        setModel(getSinglePost(params.id))
    }, []);

    function onSubmit(ev) {
        ev.preventDefault();
        // if (model.id) {
        //     fetch("https://jsonplaceholder.typicode.com/posts/" + model.id, {
        //         method: "PUT",
        //         body: JSON.stringify(model),
        //     })
        //         .then((res) => res.json())
        //         .then((res) => {
        //             router.navigate("/")
        //         });
        // } else {
        //     fetch("https://jsonplaceholder.typicode.com/posts/", {
        //         method: "PUT",
        //         body: JSON.stringify(model),
        //     })
        //         .then((res) => res.json())
        //         .then((res) => {
        //             router.navigate("/")
        //         });

        // }

        savePost(model);
        router.navigate("/")
    }

    return (
        <div>
            <Link to="/" className="btn btn-outline-secondary">Back</Link>
            {/* <pre>
                {JSON.stringify(model, undefined, 2)}
            </pre> */}
            <form onSubmit={onSubmit}>
                <h1>
                    {model.id ? "Edit Post" : "Create new Post"}
                </h1>
                <div className="mb-3">
                    <input value={model.title} onInput={(ev) => setModel({ ...model, title: ev.target.value })} type="text" className="form-control" placeholder="Post Title" />
                    <textarea value={model.body} onInput={(ev) => setModel({ ...model, body: ev.target.value })} className="form-control" placeholder="Post Body"></textarea>
                    <p>
                        <button disabled={!model.title || !model.body} className="btn btn-success" type="submit">
                            Submit
                        </button>
                    </p>
                </div>
            </form >
        </div >
    );
}