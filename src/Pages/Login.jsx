import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../component/PageNav";
import { useAuth } from "../context/FakeAuthContext";
import Button from "../component/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const { login, isAutheticated } = useAuth();
  const navigate = useNavigate;

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) login;
    console.log("hh");
  }

  useEffect(
    function () {
      if (isAutheticated) {
        navigate("/app");
      }
    },
    [isAutheticated, navigate]
  );

  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type={"primary"}>Login</Button>
        </div>
      </form>
    </main>
  );
}

/*
3) Inside an effect, check whether `isAuthenticated === true`. If so, programatically navigate to `/app`
4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js`
5) Handle logout button by calling `logout()` and navigating back to `/`
*/
