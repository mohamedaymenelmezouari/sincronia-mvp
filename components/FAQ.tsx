'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useLanguage } from '@/lib/context'
import { translations } from '@/lib/i18n'

export default function FAQ() {
  const { lang } = useLanguage()
  const data = translations[lang].faq
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="mesh-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-jakarta font-800 text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            {data.title}
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-3">
          {data.items.map((item, i) => (
            <motion.div
              key={`${i}-${lang}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                openIndex === i
                  ? 'border-teal-200 dark:border-teal-600/30 bg-white dark:bg-dark-card shadow-md shadow-teal-600/5'
                  : 'border-gray-100 dark:border-dark-border bg-white/60 dark:bg-dark-card/60 hover:border-gray-200 dark:hover:border-dark-border'
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
                aria-expanded={openIndex === i}
              >
                <span className={`font-jakarta font-700 text-sm sm:text-base leading-snug transition-colors ${
                  openIndex === i ? 'text-teal-600 dark:text-teal-400' : 'text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400'
                }`}>
                  {item.q}
                </span>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                  openIndex === i
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 dark:bg-dark-border text-gray-400 group-hover:bg-teal-50 dark:group-hover:bg-teal-600/10 group-hover:text-teal-600'
                }`}>
                  {openIndex === i ? (
                    <Minus className="w-3 h-3" />
                  ) : (
                    <Plus className="w-3 h-3" />
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5">
                      <div className="w-full h-px bg-teal-100 dark:bg-teal-600/20 mb-4" />
                      <p className="font-inter text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
