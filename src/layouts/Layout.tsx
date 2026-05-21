import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

export const Layout = () => {
    return (
        <div>
            <header className="header">
                <div className="header__container">
                    <h1 className="header__logo">App</h1>

                    <nav className="nav">
                        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
                            Home
                        </NavLink>

                        <NavLink to="/todos" className={({ isActive }) => isActive ? "active" : ""}>
                            Todos
                        </NavLink>

                        <NavLink to="/posts" className={({ isActive }) => isActive ? "active" : ""}>
                            Posts
                        </NavLink>

                        <NavLink to="/comments" className={({ isActive }) => isActive ? "active" : ""}>
                            Comments
                        </NavLink>
                    </nav>
                </div>
            </header>

            <main className="main">
                <Outlet />
            </main>
        </div>
    );
};