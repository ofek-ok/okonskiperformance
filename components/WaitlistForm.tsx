"use client";
import React, { useState } from "react";
export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  if (submitted) return <div>Submitted</div>;
  return <form onSubmit={handleSubmit}><input type="submit" /></form>;
}
