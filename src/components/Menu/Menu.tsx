import {NavLink} from "react-router-dom";

export const Menu = () => {
return (
    <nav className="border-b border-neutral-200 bg-white">
      <ul className="mx-auto px-6 h-14 flex items-center gap-6">
        <li>
          <NavLink 
            to='/cars' 
            end
            className={({ isActive }) => 
              `text-xs font-medium tracking-wide transition-colors ${
                isActive ? 'text-neutral-950 font-semibold' : 'text-neutral-400 hover:text-neutral-600'
              }`
            }
          >
            Cars
          </NavLink>
        </li>

        <li>
          <NavLink 
            to='/cars/create' 
            className={({ isActive }) => 
              `text-xs font-medium tracking-wide transition-colors ${
                isActive ? 'text-neutral-950 font-semibold' : 'text-neutral-400 hover:text-neutral-600'
              }`
            }
          >
            Create
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};