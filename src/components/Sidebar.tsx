import { Link } from "react-router";
import { BsPlusCircleFill } from "react-icons/bs";
import { type SidebarProps } from "../libs/SidebarType";

export default function Sidebar({ userName, type }: SidebarProps) {
  return (
    <aside
      className="d-flex align-items-start flex-column p-4 bg-primary min-vh-100"
      style={{ width: "auto", height: "100%", overflowY: "auto" }}
      data-bs-theme="dark"
    >
      <div className="flex-grow-1">
        <nav className="navbar align-items-start flex-column">
          <h3 className="navbar-brand">Note App</h3>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                <BsPlusCircleFill />
                <span className="d-md-inline px-2">RandomUser</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <p className="text-white">
          {userName} :{type}
        </p>
      </div>
    </aside>
  );
}
