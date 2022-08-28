import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props: LoginProps) => {
  const { setIsAuthorized } = props;
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthorized(true);
    navigate("/");
  };
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        padding: "100px",
      }}
    >
      <h1>Login Page</h1>
      <p>Click login to be authorized and access protected route.</p>
      <button
        onClick={handleLogin}
        style={{
          border: "none",
          padding: "8px 32px",
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;

interface LoginProps {
  setIsAuthorized: Dispatch<SetStateAction<boolean>>;
}
