import React from 'react';
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl flex justify-between items-center">
        <h1 className="text-2xl font-bold">Myles Kameron</h1>
        <nav>
          <Button variant="ghost" asChild>
            <a href="/home">Posts</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="/blog">Now</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="/blog">About</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="/blog">Invest</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
