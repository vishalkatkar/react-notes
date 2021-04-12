import { useState } from "react";
import { useHistory } from "react-router-dom";
import { setAppError } from "../../redux/commanActions";
import { useDispatch } from "react-redux";

export const useLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [err, setErr] = useState(null);

  const handleLogin = () => {
    try {
      if (username === "test" && password === "test") {
        setErr(null);
        history.push("/notes");
      }
      setErr("Invalid login credentials");
    } catch (error) {
      dispatch(setAppError(true));
    }
  };

  return {
    handleLogin,
    setUsername,
    setPassword,
    err,
  };
};
