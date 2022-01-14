import { useNavigate, Route } from "react-router-dom";

function PrivateRoutes({ component: element, ...args }) {
  const navigate = useNavigate();
  return (
    <Route
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
}

export default PrivateRoutes;
