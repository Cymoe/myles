"use client";  // Add this line at the top

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion';
import { Orbitron } from 'next/font/google'
import localFont from 'next/font/local'
import { Dialog } from '@headlessui/react';
import { usePathname } from 'next/navigation';

const googleOrbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif'],
})

const localOrbitron = localFont({
  src: '../public/fonts/Orbitron/static/Orbitron-Regular.ttf',
  display: 'swap',
  fallback: ['sans-serif'],
})

const getOrbitronFont = () => {
  try {
    return googleOrbitron.className
  } catch (error) {
    console.error('Failed to load Google Font:', error)
    return localOrbitron.className
  }
}

const orbitronClass = getOrbitronFont()

const navigation = [
  { name: 'Now', href: '/now' },
  { name: 'Posts', href: '/blog' },
  { name: 'Resources', href: '/#resources' },
  { name: 'About', href: '/#about' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/#about') {
      return pathname === '/' || pathname === '/#about';
    }
    return pathname === href;
  };

  return (
    <header className="bg-black text-white">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-3 sm:py-6" aria-label="Global">
        <div className="flex items-center justify-between lg:justify-center lg:relative">
          <div className="lg:absolute lg:left-0">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className={`text-2xl font-light ${orbitronClass}`}>MK</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors duration-200 hover:bg-white hover:text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`text-lg font-thin leading-6 transition-colors duration-200 ${
                  isActive(item.href) 
                    ? 'text-white font-medium' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="-m-1.5 p-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className={`text-2xl font-light ${orbitronClass}`}>MK</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-4 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-center rounded-lg px-3 py-2 text-2xl font-light leading-9 text-white hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
            >
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 transition-colors duration-200 hover:bg-white hover:text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="divide-y divide-gray-500/10">
                  {navigation.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block py-4 text-7xl font-thin leading-none transition-colors duration-200 hover:bg-white hover:text-black text-center ${
                        index === 0 ? 'pt-2' : ''
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
