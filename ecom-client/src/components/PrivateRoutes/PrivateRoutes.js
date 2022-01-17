import { useNavigate, Routes } from "react-router-dom";

const PrivateRoutes = ({ component: element, ...args }) => {
  const navigate = useNavigate();
  return (
    <Routes
      {...args}
      render={(props) =>
        localStorage.getItem("authToken") ? (
          <element {...props} />
        ) : (
          navigate("/login")
        )
      }
    />
  );
};

export default PrivateRoutes;
