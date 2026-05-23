import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
            <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <h1 className="text-xl font-bold tracking-tight text-neutral-900">App</h1>

                    <nav className="flex items-center gap-x-1 sm:gap-x-2">
                        {[
                            { to: "/", text: "Home", end: true },
                            { to: "/products", text: "Products" },
                            { to: "/users", text: "Users" },
                            { to: "/posts", text: "Posts" },
                            { to: "/comments", text: "Comments" },
                        ].map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.end}
                                className="rounded-md px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 aria-[current=page]:bg-neutral-900 aria-[current=page]:text-white"
                            >
                                {link.text}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </header>

            <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-xs">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};