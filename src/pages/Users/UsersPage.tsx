import {Link} from "react-router-dom";

export const UsersPage = () => {
    return (
        <div>
            <Link className="mr-3" to="/users/jsonplaceholder"><span>JsonPlaceholder</span></Link>
            <Link to="/users/dummyjson"><span>DummyJson</span></Link>
        </div>
    );
};