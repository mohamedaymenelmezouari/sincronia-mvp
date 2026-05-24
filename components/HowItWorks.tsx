'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Brain, CheckCircle, ArrowRight, Check } from 'lucide-react'
import { useLanguage } from '@/lib/context'
import { translations } from '@/lib/i18n'

const stepIcons = [MessageCircle, Brain, CheckCircle]
const stepColors = ['bg-teal-600', 'bg-amber-400', 'bg-green-500']
const stepTextColors = ['text-teal-600 dark:text-teal-400', 'text-amber-500 dark:text-amber-400', 'text-green-600 dark:text-green-400']
const stepBgLight = ['bg-teal-50 dark:bg-teal-600/10', 'bg-amber-50 dark:bg-amber-400/10', 'bg-green-50 dark:bg-green-500/10']

export default function HowItWorks() {
  const { lang } = useLanguage()
  const data = translations[lang].how

  return (
    <section id="how" className="mesh-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-jakarta font-800 text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            {data.title}
          </h2>
          <div className="w-16 h-1 bg-teal-600 mx-auto rounded-full" />
        </motion.div>

        {/* 3-step flow */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 mb-20">
          {data.steps.map((step, i) => {
            const Icon = stepIcons[i]
            return (
              <div key={i} className="relative flex-1 flex flex-col md:flex-row items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="w-full max-w-xs mx-auto md:mx-0"
                >
                  <div className="bg-white dark:bg-dark-card rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border p-6 text-center md:text-left relative">
                    {/* Step number badge */}
                    <div className="absolute -top-3 left-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-jakarta font-700 px-2.5 py-1 rounded-full">
                      {step.label}
                    </div>

                    <div className={`w-12 h-12 ${stepBgLight[i]} rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0`}>
                      <Icon className={`w-6 h-6 ${stepTextColors[i]}`} />
                    </div>
                    <h3 className="font-jakarta font-700 text-lg text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="font-inter text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Accent dot */}
                    <div className={`absolute bottom-4 right-4 w-2 h-2 ${stepColors[i]} rounded-full`} />
                  </div>
                </motion.div>

                {/* Arrow between steps */}
                {i < data.steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.15 + 0.3 }}
                    className="hidden md:flex items-center justify-center w-12 flex-shrink-0"
                  >
                    <div className="w-8 h-8 bg-gray-100 dark:bg-dark-border rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    </div>
                  </motion.div>
                )}

                {/* Mobile connector */}
                {i < data.steps.length - 1 && (
                  <div className="md:hidden w-px h-6 bg-gray-200 dark:bg-dark-border mx-auto mt-2" />
                )}
              </div>
            )
          })}
        </div>

        {/* Feature highlights grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-dark-card rounded-3xl border border-gray-100 dark:border-dark-border p-8 shadow-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-600/10 transition-colors group"
              >
                <div className="w-5 h-5 bg-teal-100 dark:bg-teal-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-teal-600 transition-colors">
                  <Check className="w-3 h-3 text-teal-600 dark:text-teal-400 group-hover:text-white transition-colors" />
                </div>
                <span className="font-inter text-sm text-gray-700 dark:text-gray-300 leading-snug">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
