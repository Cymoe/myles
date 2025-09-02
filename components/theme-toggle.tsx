"use client"

import * as React from "react"
import { useTheme } from "./theme-provider"

type Theme = "light" | "dark" | "ocean" | "sunset"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    const themeOrder: Theme[] = ["light", "ocean", "sunset", "dark"]
    const currentIndex = themeOrder.indexOf(theme as Theme)
    const nextIndex = (currentIndex + 1) % themeOrder.length
    setTheme(themeOrder[nextIndex])
  }

  const getTogglePosition = () => {
    switch(theme) {
      case "light": return "translate-x-1"
      case "ocean": return "translate-x-[1.875rem]"
      case "sunset": return "translate-x-[3.625rem]"
      case "dark": return "translate-x-[5.375rem]"
      default: return "translate-x-1"
    }
  }

  const getThemeIcon = () => {
    switch(theme) {
      case "light": return <span className="text-green-600 text-lg">🍃</span>
      case "ocean": return <span className="text-blue-500 text-lg">🌊</span>
      case "sunset": return <span className="text-orange-500 text-lg">🌅</span>
      case "dark": return <span className="text-purple-400 text-lg">🌙</span>
      default: return <span className="text-gray-500 text-lg">🍃</span>
    }
  }

  const getBackgroundColor = () => {
    switch(theme) {
      case "light": return "bg-gray-300"
      case "ocean": return "bg-blue-300/70"
      case "sunset": return "bg-orange-300/70"
      case "dark": return "bg-gray-700"
      default: return "bg-gray-300"
    }
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={cycleTheme}
        className={`relative inline-flex h-9 w-[7.5rem] items-center rounded-full ${getBackgroundColor()} transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900 ocean:focus:ring-offset-blue-900 sunset:focus:ring-offset-orange-100 border border-gray-400 dark:border-gray-600 ocean:border-blue-400 sunset:border-orange-400`}
        role="switch"
        aria-label="Toggle theme"
      >
        <span className="sr-only">Toggle theme</span>
        <span
          className={`${getTogglePosition()} inline-flex h-7 w-7 transform items-center justify-center rounded-full bg-white dark:bg-gray-900 ocean:bg-blue-50 sunset:bg-orange-50 shadow-lg transition-transform duration-300 border border-gray-300 dark:border-gray-700 ocean:border-blue-300 sunset:border-orange-300`}
        >
          {getThemeIcon()}
        </span>
      </button>
    </div>
  )
}

