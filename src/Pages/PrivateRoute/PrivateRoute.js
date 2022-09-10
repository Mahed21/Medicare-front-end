import { Navigate } from "react-router-dom";
import UseAuth from "../../Context/UseAuth";
function PrivateRoute({ children }) {
  const { user } = UseAuth();
  //   console.log(user.email);
  //   console.log(children);
  return user.email ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
