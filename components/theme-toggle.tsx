"use client"

import * as React from "react"
import { useTheme } from "./theme-provider"
import { SparklesIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="relative inline-flex h-9 w-16 items-center rounded-full bg-gray-300 dark:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900 border border-gray-400 dark:border-gray-600"
        role="switch"
        aria-checked={theme === "dark"}
        aria-label="Toggle dark mode"
      >
        <span className="sr-only">Toggle theme</span>
        <span
          className={`${
            theme === "dark" ? "translate-x-8" : "translate-x-1"
          } inline-flex h-7 w-7 transform items-center justify-center rounded-full bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300 border border-gray-300 dark:border-gray-700`}
        >
          {theme === "light" ? (
            <span className="text-green-600 text-lg">🍃</span>
          ) : (
            <span className="text-purple-400 text-lg">🪐</span>
          )}
        </span>
      </button>
    </div>
  )
}
