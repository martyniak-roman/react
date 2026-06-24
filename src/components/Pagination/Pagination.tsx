import {useSearchParams} from "react-router-dom";

export const Pagination = () => {
    const [searchParams, setSearchParams] = useSearchParams({page: '1'});

    const minPage: number = 1;
    const maxPage: number = 7

    let currentPage = Number(searchParams.get('page') || '1')
    return (
        <div>
            <button onClick={() => {setSearchParams({page: (--currentPage).toString()})}} disabled={currentPage <= minPage}>prev</button>
            <button onClick={() => {setSearchParams({page: (++currentPage).toString()})}} disabled={currentPage >= maxPage}>next</button>
        </div>
    );
};