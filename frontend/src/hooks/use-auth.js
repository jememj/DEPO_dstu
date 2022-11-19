import { useSelector } from "react-redux";

export function useAuth() {
  const { token, logIn } = useSelector((state) => state.userSlice);

  return {
    isAuth: !!logIn,
    token,
  };
}
