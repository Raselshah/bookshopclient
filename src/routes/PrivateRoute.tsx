import auth from "@/firebase.init";
import { ReactNode } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const [user, loading, error] = useAuthState(auth);

  const { pathname } = useLocation();

 

  if (!user?.uid) {
    return <Navigate to="/register" state={{ path: pathname }} />;
  }

  return children;
}
