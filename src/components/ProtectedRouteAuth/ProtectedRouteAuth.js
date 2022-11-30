import { Navigate } from "react-router-dom";

export default function ProtectedRouteAuth({ component: Component, ...props }) {
  return props.isLoggedIn ? <Navigate to="/" /> : <Component {...props} /> ;
}