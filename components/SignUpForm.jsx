"use client";

import { useState } from "react";

export default function SignUpForm(){
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleSubmit(event){
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "Signup failed");
      }
      setMessage(`Welcome, ${data.user.name}! Your account was created.`);
      form.reset();
    } catch (e) {
      setError(e.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name" className="label">Name</label>
        <input id="name" name="name" type="text" className="input" required />
      </div>
      <div className="field">
        <label htmlFor="email" className="label">Email</label>
        <input id="email" name="email" type="email" className="input" required />
      </div>
      <div className="field">
        <label htmlFor="password" className="label">Password</label>
        <input id="password" name="password" type="password" className="input" required />
      </div>
      <div className="hero-actions">
        <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
          {isSubmitting ? "Signing up…" : "Sign up"}
        </button>
        <a className="btn" href="/explore">Browse first</a>
      </div>
      <div aria-live="polite" className="card-text" style={{ marginTop: 12 }}>
        {message && <span>{message}</span>}
        {error && <span style={{ color: "#c0392b" }}>{error}</span>}
      </div>
    </form>
  );
}
