import { Link } from "react-router-dom";
import { MdCellWifi } from "react-icons/md";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="bg-primary-subtle p-2 d-flex justify-content-between align-items-center">
        <span className="text-primary fs-4 fw-bold">My Company</span>
        <div className="d-flex gap-4">
          <Link to={"/"}><FaHome /><span>Home</span></Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/product"}>Product</Link>
          <Link to={"/contact-us"}>Contact Us</Link>
          <Link to={"/Login"}>Login</Link>
          <Link to={"/Register"}>Register</Link>
        </div>
        <div className="d-flex gap-3">
          <Link to={"/login"}>
            <button className="btn btn-outline-primary fs-5"><RiLoginCircleFill /><span>Login</span></button>
          </Link>
          <Link to={"/register"}>
            <button className="btn btn-primary fs-5"><MdCellWifi /><span>Register kro</span></button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
