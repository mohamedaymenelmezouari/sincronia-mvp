'use client'

import { Zap } from 'lucide-react'
import { useLanguage } from '@/lib/context'
import { translations } from '@/lib/i18n'

export default function Footer() {
  const { lang } = useLanguage()
  const data = translations[lang].footer

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-teal-600 rounded-lg flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white fill-white" />
            </div>
            <div>
              <span className="font-jakarta font-700 text-white">
                Sincron<span className="text-teal-400">IA</span>
              </span>
              <p className="text-xs text-gray-500 leading-none mt-0.5">{data.tagline}</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors duration-150">{data.privacy}</a>
            <a href="#" className="hover:text-white transition-colors duration-150">{data.terms}</a>
            <a href="#cta" className="hover:text-white transition-colors duration-150">{data.contact}</a>
          </nav>

          {/* Made with */}
          <p className="text-xs text-gray-600">{data.made}</p>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} SincronIA. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
        </div>
      </div>
    </footer>
  )
}
