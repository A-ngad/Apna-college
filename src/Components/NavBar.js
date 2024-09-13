import { Link } from "react-router-dom";
import UserContext from "../Context/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="d-flex justify-content-between p-3">
      <div>
        <img
          src="https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/6efdd5e7f0d663cf231d0f2040be0a1e.png"
          width="100"
          height="40"
        />
      </div>
      <div className="d-flex gap-3">
        <Link to="/" className="text-dark text-decoration-none">
          {" "}
          Topics{" "}
        </Link>
        {user ? (
          <span
            className="text-dark text-decoration-none"
            onClick={handleLogout}
          >
            {" "}
            LogOut{" "}
          </span>
        ) : (
          <Link to="/login" className="text-dark text-decoration-none">
            {" "}
            Login{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
