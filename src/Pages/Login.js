import { Fragment, useState, useContext } from "react";
import userData from "../Data/UserData.json";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/userContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);

  const onLogin = () => {
    const isUserActive = userData.find(
      (user) => user.username === username && user.Password === password
    );
    if (isUserActive) {
      setUser(isUserActive);
      setError(null);
      navigate("/");
    } else {
      setError("Username or Password Incorrect");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center p-5 mt-4">
      <div className="w-50 border py-5 rounded-2 login-shadow">
        <div className="fs-4 text-center mb-4"> Login </div>
        <div className=" d-flex flex-column gap-2">
          {error?.includes("Username") && (
            <span className="text-center text-danger">{error}</span>
          )}
          <div className="d-flex justify-content-center">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              className="border rounded p-1 w-50"
            />
          </div>
          <div className="d-flex justify-content-center">
            <input
              type="text"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded p-1 w-50"
            />
          </div>
          <div className="d-flex justify-content-center pb-2">
            <button className="btn btn-primary w-50" onClick={onLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
