import {User} from "../User/User.tsx";
import {useCallback, useMemo} from "react";
import {useFetch} from "../../hooks/useFetch.tsx";

export const Users = () => {
    console.log('users');
    const users = useFetch();

    // Мемоізує (кешує) масив чисел [11, 22, 33].
    const arr: number[] = useMemo(() => {
        return [11, 22, 33];
    }, []);

    // Мемоізує (кешує) функцію foo
    const foo = useCallback(() => {
        console.log('test');
    }, []);

    // Звичайна функція створює нове посилання при кожному рендері. Хук useCallback кешує функцію між рендерами.
    return (
        <div>
            {
                users.map(value => <User item={value} foo={foo} arr={arr}/>)
            }
        </div>
    );
};