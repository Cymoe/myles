import React from 'react';
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Blog</h1>
        <nav>
          <Button variant="ghost" asChild>
            <a href="/home">Home</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="/blog">Blog</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
