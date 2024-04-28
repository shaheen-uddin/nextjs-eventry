"use client";

import { performLogin } from "@/app/actions";
import useAuth from "@/app/hooks/useAuth";
import { useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState("");
  const { setAuth } = useAuth();

  async function onSubmit(evt) {
    evt.preventDefault();
    try {
      //console.log(evt.currentTarget);
      const formData = new FormData(evt.currentTarget);
      //console.log(formData);
      await performLogin(formData);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <div>{error}</div>
      <form className="login-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          type="submit"
          className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
        >
          Login
        </button>
      </form>
    </>
  );
}
