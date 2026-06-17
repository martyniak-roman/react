import {User} from "../User/User.tsx";
import {useCallback, useEffect, useState} from "react";


export const Users = () => {
    console.log('users');

    const [users, setUsers] = useState([]);

    // За допомогою useCallback ми закешували цю функцію і тепер вона відпрацює один раз
    const foo = useCallback(() => {
        console.log('test');
    }, [])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });

        return () => {
            console.log('unsubscribe');
        }

    }, []);

    return (
        <div>users component
            <User foo={foo}/>

        </div>
    );
};