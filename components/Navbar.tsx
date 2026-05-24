'use client'

import { useState, useEffect } from 'react'
import { Zap, Menu, X } from 'lucide-react'
import { useLanguage } from '@/lib/context'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: t('nav', 'features'), href: '#how' },
    { label: t('nav', 'pricing'), href: '#pricing' },
    { label: t('nav', 'why'), href: '#testimonials' },
    { label: t('nav', 'contact'), href: '#cta' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/80 dark:bg-dark-bg/80 backdrop-blur-xl shadow-sm shadow-teal-600/5 border-b border-teal-600/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center shadow-md shadow-teal-600/30 group-hover:shadow-lg group-hover:shadow-teal-600/40 transition-all duration-200">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="font-jakarta font-800 text-xl text-gray-900 dark:text-white tracking-tight">
              Sincron<span className="text-teal-600">IA</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-inter text-sm font-500 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div className="hidden sm:flex items-center gap-1 bg-gray-100 dark:bg-dark-card rounded-lg p-1">
              <button
                onClick={() => setLang('es')}
                className={`px-2.5 py-1 rounded-md text-xs font-600 font-inter transition-all duration-150 ${
                  lang === 'es'
                    ? 'bg-white dark:bg-teal-600 text-teal-600 dark:text-white shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
              >
                🇪🇸 ES
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-md text-xs font-600 font-inter transition-all duration-150 ${
                  lang === 'en'
                    ? 'bg-white dark:bg-teal-600 text-teal-600 dark:text-white shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
              >
                🇬🇧 EN
              </button>
            </div>

            {/* CTA */}
            <a
              href="#cta"
              className="hidden sm:inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-jakarta font-700 px-4 py-2 rounded-xl transition-all duration-200 shadow-md shadow-teal-600/25 hover:shadow-lg hover:shadow-teal-600/35"
            >
              {t('nav', 'cta')}
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-gray-600 dark:text-gray-300"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-cream/95 dark:bg-dark-bg/95 backdrop-blur-xl border-b border-teal-600/10"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm font-500 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex items-center gap-3">
                <div className="flex items-center gap-1 bg-gray-100 dark:bg-dark-card rounded-lg p-1">
                  <button
                    onClick={() => setLang('es')}
                    className={`px-2.5 py-1 rounded-md text-xs font-600 transition-all ${
                      lang === 'es' ? 'bg-white dark:bg-teal-600 text-teal-600 dark:text-white shadow-sm' : 'text-gray-500'
                    }`}
                  >
                    🇪🇸 ES
                  </button>
                  <button
                    onClick={() => setLang('en')}
                    className={`px-2.5 py-1 rounded-md text-xs font-600 transition-all ${
                      lang === 'en' ? 'bg-white dark:bg-teal-600 text-teal-600 dark:text-white shadow-sm' : 'text-gray-500'
                    }`}
                  >
                    🇬🇧 EN
                  </button>
                </div>
                <a
                  href="#cta"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center bg-teal-600 text-white text-sm font-jakarta font-700 px-4 py-2 rounded-xl"
                >
                  {t('nav', 'cta')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
