import { useAuth } from "../../hooks/useAuth";

export default function Username() {
  const { user } = useAuth();

  return <h4> {user.displayName || user.email} </h4>;
}
