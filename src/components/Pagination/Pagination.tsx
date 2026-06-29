import {useSearchParams} from "react-router-dom";
import type { IBaseResponse } from "../../models/IBaseResponse";

export const Pagination = ({total, limit}: IBaseResponse) => {
    const [searchParams, setSearchParams] = useSearchParams({page: '1'});

    const minPage: number = 1;
    const maxPage: number = total > 0 ? (total / limit) : 1;

    let currentPage = Number(searchParams.get('page') || '1')
    return (
        <div className="flex items-center justify-center gap-4 py-6">
            <button className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:hover:bg-gray-100" onClick={() => {setSearchParams({page: (--currentPage).toString()})}} disabled={currentPage <= minPage}>prev</button>
            <button className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:hover:bg-gray-100" onClick={() => {setSearchParams({page: (++currentPage).toString()})}} disabled={currentPage >= maxPage}>next</button>
        </div>
    );
};