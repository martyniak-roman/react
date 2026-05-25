import {Link} from "react-router-dom";

export const PostsPage = () => {
    return (
        <div>
            <Link className="mr-3" to="/posts/jsonplaceholder"><span>JsonPlaceholder</span></Link>
            <Link to="/posts/dummyjson"><span>DummyJson</span></Link>
        </div>
    );
};