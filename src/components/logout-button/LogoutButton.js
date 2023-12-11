"use client";

import { signOut } from "next-auth/react";
const LogoutButton = () => {
  return (
    <button onClick={() => signOut({ callbackUrl: "/" })}>Déconnexion</button>
  );
};

export default LogoutButton;
