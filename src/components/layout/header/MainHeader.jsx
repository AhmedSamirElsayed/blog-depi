import { Link, NavLink } from "react-router-dom";

const HeaderComp = () => {
  return (
    <header className=" bg-lime-400 text-white text-xl  sticky top-0">
      <div className="container py-2 flex justify-between items-center">
        <div className="logo text-4xl italic text-yellow-300">
          <Link to={"/"}>MYBlog</Link>
        </div>
        <div className="links">
          <ul className="flex items-center gap-4">
            <li>
              <NavLink
                to={"/"}
                // style={({ isActive }) => ({
                //   color: isActive ? "gold" : "inherit",
                // })}
                className={({ isActive }) => (isActive ? "text-amber-500" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                // style={({ isActive }) => ({
                //   color: isActive ? "gold" : "inherit",
                // })}
                className={({ isActive }) => (isActive ? "text-amber-500" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/blog"}
                // style={({ isActive }) => ({
                //   color: isActive ? "gold" : "inherit",
                // })}
                className={({ isActive }) => (isActive ? "text-amber-500" : "")}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to={"/logOut"}>logOut</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderComp;
