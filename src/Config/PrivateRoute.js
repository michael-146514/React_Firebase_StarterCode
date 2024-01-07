import { Navigate } from "react-router-dom";
import { auth } from "./firebase";

export function PrivateRoute({ children }) {
  const user = auth.currentUser;

  if (!user) {
    return <Navigate to="/auth" replace />;
  } else {
    return children;
  }
}
