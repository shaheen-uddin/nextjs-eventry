"use client";

import useAuth from "@/app/hooks/useAuth";

import Link from "next/link";
import { useRouter } from "next/router";

export default function SigninOut() {
  const { auth, setAuth } = useAuth();
  const router = useRouter();

  const logout = () => {
    setAuth(null);
  };
  return (
    <div>
      {auth ? (
        <>
          <span className="mx-2">Hello, {auth?.name}</span>
          <span className="mx-1"> | </span>
          <a className="cursor-pointer" onClick={logout}>
            Logout
          </a>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
}
