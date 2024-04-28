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
  try {
    const credential = {};
    credential.email = formData.get("email");
    credential.password = formData.get("password");
    const found = await findUserByCredentials(credential);
    console.log("PerfomLogin, found: ", found);
    return found;
  } catch (error) {
    throw error;
  }
}

export { registerUser, performLogin };
