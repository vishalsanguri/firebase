import React from "react";

export default function Login(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasaccount,
    setHasaccount,
    emailerror,
    passworderror,
  } = props;
  return (
    <section className="login">
      <div>
        <label>Username</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>{email.emailerror}</p>
        <label>Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>{passworderror}</p>
      </div>
    </section>
  );
}
