import {type FC, memo} from "react";

export const User: FC<{ foo: () => void }> = memo(() => {
    console.log('user');
    return (
        <div>user</div>
    );
});