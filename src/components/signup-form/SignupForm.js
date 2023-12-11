"use client";

import { signIn, useSession } from "next-auth/react";
import styles from "./SignupForm.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/router";

const SignupForm = () => {
  const { status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/user/profile");
    }
  }, [status, router]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    fetch("/api/signup", {
      method: POST,
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    }).then((res) => {
      if (res.ok) {
        signIn();
      }
    });
  };
  return (
    <div className={styles.signupForm}>
      <form onSubmit={handleFormSubmit}>
        <h1>Inscription</h1>
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="******" />
        <input type="submit" value="S'inscrire" />
      </form>
    </div>
  );
};

export default SignupForm;
