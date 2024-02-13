/* eslint-disable react/prop-types */
import { Route, Redirect } from "react-router-dom";
import { isAuthenticate, isAdmin } from "../../../utils/api";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticate() && !isAdmin() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default ProtectedRoute;
