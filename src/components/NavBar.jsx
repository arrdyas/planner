import logo from "../assets/logo.png";
import CollapseNavBar from "./CollapseNavBar";
import MenuButton from "./MenuButton";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div
      className="myNav"
      style={{ alignItems: "center", backgroundColor: "#fa9bc7" }}
    >
      <Link to="/" style={{ color: "black", textDecoration: "none" }}>
        <h1>Planner</h1>
      </Link>
    </div>
  );
}
