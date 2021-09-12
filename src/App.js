import React, { useEffect, useRef, useState } from 'react'
import fire from "./fire";
import Login from "./Login";

export default function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerror, setEmailerror] = useState("");
  const [passworderror, setPassworderror] = useState("");
  const [hasaccount, setHasaccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailerror("");
    setPassworderror("");
  };
  const handleLogin = () => {
    clearErrors();

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailerror(err.message);
            break;
          case "auth/wrong-password":
            setPassworderror(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailerror(err.message);
            break;
          case "auth/weak-password":
            setPassworderror(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);
  return (
    <>
      <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasaccount={hasaccount}
        setHasaccount={setHasaccount}
        emailerror={emailerror}
        passworderror={passworderror}
      />
    </>
  );
}
