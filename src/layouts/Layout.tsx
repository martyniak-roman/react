import {Link, NavLink, Outlet} from "react-router-dom";

export const Layout = () => {
    const linkClass = ({ isActive }: { isActive: boolean }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            isActive
                ? "bg-indigo-50 text-indigo-600 font-semibold"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
        }`;

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800">
            <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
                <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
                    <Link to={"/"}><h1 className="text-xl font-bold tracking-tight text-slate-900">App</h1></Link>

                    <nav className="flex space-x-1">
                        <NavLink to="/" end className={linkClass}>
                            Home
                        </NavLink>

                        <NavLink to="/users" className={linkClass}>
                            Users
                        </NavLink>

                        <NavLink to="/posts" className={linkClass}>
                            Posts
                        </NavLink>
                    </nav>
                </div>
            </header>

            <main className="mx-auto max-w-7xl px-4 py-8">
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};