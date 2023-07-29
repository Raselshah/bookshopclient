import auth from "@/firebase.init";
import { ReactNode } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps): JSX.Element {
  const [user, loading] = useAuthState(auth);
  const { pathname } = useLocation();

  if (loading) {
    // Show a loader or any placeholder while waiting for authentication check
    return <div>Loading...</div>;
  }

  if (!user?.uid) {
    // Redirect to "/register" if the user is not authenticated
    return <Navigate to="/register" state={{ path: pathname }} />;
  }

  // Show the 'children' if the user is authenticated
  return <>{children}</>;
}
