// import { Link } from "react-router-dom";
// import { FaMoon } from "react-icons/fa";
// import { IoMdSunny } from "react-icons/io";
// import { useState, useEffect } from "react";
// import NavLinks from "./NavLinks";

// function Navbar() {
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "winter");

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === "winter" ? "dracula" : "winter");
//   };

//   return (
//     <div>
//       <div className="navbar site-container">
//         <div className="navbar-start">
//           <Link className="font-bold text-lg" to="/">
//             Kitchen App
//           </Link>
//         </div>
          
//         <div className="navbar-center">
//           <ul className="menu menu-horizontal">
//             <NavLinks />
//           </ul>
//         </div>

//         <div className="navbar-end">
//           <label className="swap swap-rotate mr-12">
//             <input
//               type="checkbox"
//               onChange={toggleTheme}
//               checked={theme === "dracula"}
//             />
//             {/* Soon icon */}
//             <IoMdSunny className="swap-on fill-current w-7 h-7" />
//             {/* Mon icon */}
//             <FaMoon className="swap-off fill-current w-7 h-7" />
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;


import { Link } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "winter");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "winter" ? "dracula" : "winter");
  };

  return (
    <div>
      <div className="navbar site-container">
        <div className="navbar-start">
          <Link className="font-bold text-lg" to="/">
            Kitchen App
          </Link>
        </div>
          
        <div className="navbar-center">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end">
          <label className="swap swap-rotate mr-12">
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "dracula"}
            />
            {/* Sun icon */}
            <IoMdSunny className="swap-on fill-current w-7 h-7" />
            {/* Moon icon */}
            <FaMoon className="swap-off fill-current w-7 h-7" />
          </label>
        </div>
      </div>
      {/* Horizontal line */}
      <hr className="border-t border-gray-300 mt-2" />
    </div>
  );
}

export default Navbar;
