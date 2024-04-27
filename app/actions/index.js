"use server";

import { redirect } from "next/navigation";
import { createUser, findUserByCredentials } from "../db/queries";

async function registerUser(formData) {
  console.log(formData);
  const user = Object.fromEntries(formData);
  console.log(user);
  const created = await createUser(user);
  redirect("/login");
}

async function performLogin(formData) {
  console.log(formData);
  const credential = {};
  credential.email = formData.get("email");
  credential.password = formData.get("password");
  const found = await findUserByCredentials(credential);
  if (found) {
    redirect("/");
  } else {
    throw new Error(`User with email ${formData.get("email")} not found.`);
  }
}

export { registerUser, performLogin };
