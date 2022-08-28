import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

const RouteGuard = (props: RouteGuardProps) => {
  const { element, isAuthorized = false } = props;

  if (!isAuthorized) return <Navigate to="/login"></Navigate>;

  return element;
};

export default RouteGuard;

interface RouteGuardProps {
  element: ReactElement;
  isAuthorized: boolean;
}
