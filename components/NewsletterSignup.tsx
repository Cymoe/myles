"use client";  // Add this line at the top

// components/NewsletterSignup.tsx
import React, { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your newsletter signup logic here
    console.log('Signing up with email:', email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button type="submit" className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-4 py-2 rounded">Read for Free</button>
    </form>
  );
}
