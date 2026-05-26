import { NavLink, Outlet } from "react-router-dom";

export const UsersPage = () => {
    const tabClass = ({ isActive }: { isActive: boolean }) =>
        `inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg border transition-all ${
            isActive
                ? "bg-violet-50 text-violet-700 border-violet-200"
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
        }`;

    return (
        <div className="space-y-6">
            <div className="flex gap-3 border-b border-slate-100 pb-4">
                <NavLink to="jsonplaceholder" className={tabClass}>JsonPlaceholder</NavLink>
                <NavLink to="dummyjson" className={tabClass}>DummyJson</NavLink>
            </div>
            <Outlet />
        </div>
    );
};