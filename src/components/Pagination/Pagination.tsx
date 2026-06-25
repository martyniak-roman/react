import {useSearchParams} from "react-router-dom";
import type { IBaseResponse } from "../../models/IBaseResponse";

export const Pagination = ({total, limit}: IBaseResponse) => {
    const [searchParams, setSearchParams] = useSearchParams({page: '1'});

    const minPage: number = 1;
    const maxPage: number = total > 0 ? (total / limit) : 1;

    let currentPage = Number(searchParams.get('page') || '1')
    return (
        <div>
            <button onClick={() => {setSearchParams({page: (--currentPage).toString()})}} disabled={currentPage <= minPage}>prev</button>
            <button onClick={() => {setSearchParams({page: (++currentPage).toString()})}} disabled={currentPage >= maxPage}>next</button>
        </div>
    );
};