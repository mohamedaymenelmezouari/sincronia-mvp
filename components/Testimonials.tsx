'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useLanguage } from '@/lib/context'
import { translations } from '@/lib/i18n'

const restaurantBrands = [
  'Taberna del Sur',
  'Grupo Alcázar',
  'La Brasserie',
  'El Jardín BCN',
  'Mesón Central',
]

export default function Testimonials() {
  const { lang } = useLanguage()
  const data = translations[lang].testimonials

  return (
    <section id="testimonials" className="bg-white dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-jakarta font-800 text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-3">
            {data.title}
          </h2>
          <p className="font-inter text-gray-500 dark:text-gray-400">{data.subtitle}</p>
          <div className="w-16 h-1 bg-teal-600 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-14 max-w-2xl mx-auto">
          {data.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-jakarta font-800 text-2xl sm:text-3xl text-teal-600 dark:text-teal-400 mb-1">
                {stat.value}
              </p>
              <p className="font-inter text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {data.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-gray-50 dark:bg-dark-bg rounded-2xl p-6 border border-gray-100 dark:border-dark-border relative card-hover"
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-5 text-teal-100 dark:text-teal-600/20">
                <Quote className="w-8 h-8 fill-current" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(item.rating)].map((_, si) => (
                  <Star key={si} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="font-inter text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-5 relative z-10">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-jakarta font-700 text-sm">
                    {item.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-jakarta font-700 text-sm text-gray-900 dark:text-white leading-tight">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 leading-tight mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-100 dark:border-dark-border pt-10"
        >
          <p className="text-center text-xs font-inter text-gray-400 mb-6 uppercase tracking-widest">
            {lang === 'es' ? 'Confían en nosotros' : 'Trusted by'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {restaurantBrands.map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="font-jakarta font-700 text-sm text-gray-300 dark:text-gray-600 hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
