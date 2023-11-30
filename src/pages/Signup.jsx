import { useRef } from "react";
import useSignup from "../hooks/useSignup";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { NavLink, Navigate } from "react-router-dom";
import App from "../App";
function Signup() {
  const { signup, error, user } = useSignup();
  const displayName = useRef();
  const email = useRef();
  const password = useRef();

  const { dispatch } = useGlobalContext();

  const handleClick = (e) => {
    e.preventDefault();
    <App user={false} />;
    // console.log(user);

    // dispatch({ type: "SET_USER" });
    console.log("SIGN", true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(
      displayName.current.value,
      email.current.value,
      password.current.value
    );

    displayName.current.value = "";
    email.current.value = "";
    password.current.value = "";
  };
  return (
    <div className="forms">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input ref={displayName} type="text" />
        </label>
        <label>
          <span>Email:</span>
          <input ref={email} type="email" />
        </label>
        <label>
          <span>Password:</span>
          <input ref={password} type="password" />
        </label>
        <button>SignUp</button>
        {/* <Navigate to="/" onClick={handleClick}>
          CLick to pass
        </Navigate> */}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Signup;
