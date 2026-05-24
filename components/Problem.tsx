'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/context'
import { translations } from '@/lib/i18n'

const icons = ['⏱', '🚨', '💬', '🔄']
const colors = [
  'from-blue-50 to-blue-50/50 border-blue-100 dark:from-blue-900/10 dark:to-blue-900/5 dark:border-blue-900/20',
  'from-red-50 to-red-50/50 border-red-100 dark:from-red-900/10 dark:to-red-900/5 dark:border-red-900/20',
  'from-orange-50 to-orange-50/50 border-orange-100 dark:from-orange-900/10 dark:to-orange-900/5 dark:border-orange-900/20',
  'from-purple-50 to-purple-50/50 border-purple-100 dark:from-purple-900/10 dark:to-purple-900/5 dark:border-purple-900/20',
]
const statColors = [
  'text-blue-600 dark:text-blue-400',
  'text-red-600 dark:text-red-400',
  'text-orange-600 dark:text-orange-400',
  'text-purple-600 dark:text-purple-400',
]

export default function Problem() {
  const { lang } = useLanguage()
  const cards = translations[lang].problem.cards
  const title = translations[lang].problem.title

  return (
    <section id="problem" className="bg-white dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-jakarta font-800 text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-gradient-to-br ${colors[i]} border rounded-2xl p-6 card-hover`}
            >
              <div className="text-3xl mb-4">{icons[i]}</div>
              <p className={`font-jakarta font-800 text-2xl mb-1 ${statColors[i]}`}>
                {card.stat}
              </p>
              <h3 className="font-jakarta font-700 text-base text-gray-900 dark:text-white mb-2">
                {card.title}
              </h3>
              <p className="font-inter text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
