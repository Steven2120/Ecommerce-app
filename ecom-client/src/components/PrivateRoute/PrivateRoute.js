import { useNavigate, Routes } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...args }) => {
  const navigate = useNavigate();
  return (
    <Routes
      {...args}
      render={(props) =>
        localStorage.getItem("authToken") ? (
          <Component {...props} />
        ) : (
          navigate("/login")
        )
      }
    />
  );
};

export default PrivateRoute;
