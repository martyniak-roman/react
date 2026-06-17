import {memo} from "react";

export const User = memo(() => {
    console.log('user');
    return (
        <div>user</div>
    );
});