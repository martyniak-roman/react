import {type FC, memo} from "react";

export const User: FC<{ foo: () => void, arr: number[], item: { name: string } }> = memo(({arr, item}) => {
    console.log('user');
    console.log(arr);

    return (
        <div>{item.name}</div>
    );
});