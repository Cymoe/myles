"use client";  // Add this line at the top

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Posts', href: '/blog' },
  { name: 'Now', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Invest', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-black text-white">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl flex items-center justify-between py-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/home" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold">Myles Kameron</span>
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
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-sm font-semibold leading-6 transition-colors duration-200 hover:text-gray-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
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
              <div className="flex items-center justify-between">
                <Link href="/home" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <span className="text-2xl font-bold">Myles Kameron</span>
                </Link>
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
                      className={`block py-3 text-base font-semibold leading-7 transition-colors duration-200 hover:bg-white hover:text-black text-center ${
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
