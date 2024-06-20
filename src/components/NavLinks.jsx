import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "CreateRecipe",
    link: "/createrecipe",
  },
  {
    id:3,
    text: "Card",
    link:"/card",
  },
  {
    id:4,
    text: "CardDetails",
    link:"carddetails",
  }
];

function NavLinks() {
  return (
    <>
    {links.map((link) => {
      return (
        <li key={link.id}>
          <Link to={link.link}>{link.text}</Link>
        </li>
      );
    })}
  </>
  );
}

export default NavLinks;
