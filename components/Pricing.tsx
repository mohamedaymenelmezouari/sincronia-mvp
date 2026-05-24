'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Zap } from 'lucide-react'
import { useLanguage } from '@/lib/context'
import { translations } from '@/lib/i18n'

const planAccent = [
  'border-gray-200 dark:border-dark-border',
  'border-teal-600 shadow-xl shadow-teal-600/15 dark:border-teal-500',
  'border-gray-200 dark:border-dark-border',
]
const planBg = [
  'bg-white dark:bg-dark-card',
  'bg-teal-600 dark:bg-teal-600',
  'bg-white dark:bg-dark-card',
]
const planText = [
  'text-gray-900 dark:text-white',
  'text-white',
  'text-gray-900 dark:text-white',
]
const planSubText = [
  'text-gray-500 dark:text-gray-400',
  'text-white/70',
  'text-gray-500 dark:text-gray-400',
]
const planFeatureText = [
  'text-gray-600 dark:text-gray-300',
  'text-white/90',
  'text-gray-600 dark:text-gray-300',
]
const planCheckBg = [
  'bg-teal-50 dark:bg-teal-600/10',
  'bg-white/20',
  'bg-teal-50 dark:bg-teal-600/10',
]
const planCheckColor = [
  'text-teal-600 dark:text-teal-400',
  'text-white',
  'text-teal-600 dark:text-teal-400',
]
const planCtaBg = [
  'border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white dark:border-teal-500 dark:text-teal-400 dark:hover:bg-teal-600 dark:hover:text-white',
  'bg-white text-teal-600 hover:bg-teal-50',
  'border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white dark:border-teal-500 dark:text-teal-400 dark:hover:bg-teal-600 dark:hover:text-white',
]

export default function Pricing() {
  const { lang } = useLanguage()
  const [annual, setAnnual] = useState(false)
  const data = translations[lang].pricing

  return (
    <section id="pricing" className="mesh-bg">
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
          <p className="font-inter text-gray-500 dark:text-gray-400 mb-8">{data.subtitle}</p>

          {/* Annual toggle */}
          <div className="inline-flex items-center gap-3 bg-gray-100 dark:bg-dark-card rounded-xl p-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-lg text-sm font-jakarta font-600 transition-all duration-200 ${
                !annual
                  ? 'bg-white dark:bg-teal-600 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              {data.monthly}
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-lg text-sm font-jakarta font-600 transition-all duration-200 flex items-center gap-2 ${
                annual
                  ? 'bg-white dark:bg-teal-600 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              {data.annual}
              <span className="bg-amber-400 text-white text-[10px] font-700 px-1.5 py-0.5 rounded-full">
                {data.save}
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {data.plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border-2 ${planAccent[i]} ${planBg[i]} p-7 flex flex-col`}
            >
              {/* Popular badge */}
              {i === 0 && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-amber-400 text-white text-xs font-jakarta font-700 px-3 py-1 rounded-full shadow-md">
                    <Zap className="w-3 h-3 fill-white" />
                    {data.popular}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-jakarta font-800 text-xl mb-1 ${planText[i]}`}>{plan.name}</h3>
                <p className={`text-xs ${planSubText[i]} mb-4`}>{plan.limit}</p>

                <div className="flex items-end gap-1">
                  {i === 2 && (
                    <span className={`text-sm font-inter ${planSubText[i]} mb-1`}>{data.from}</span>
                  )}
                  <span className={`font-jakarta font-800 text-4xl ${planText[i]}`}>
                    €{annual ? plan.priceAnnual : plan.price}
                  </span>
                  <span className={`text-xs ${planSubText[i]} mb-1.5`}>
                    {annual ? plan.unitAnnual : plan.unit}
                  </span>
                </div>

                {annual && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`text-xs mt-1 ${i === 1 ? 'text-white/60' : 'text-gray-400'}`}
                  >
                    {lang === 'es' ? `vs €${plan.price}/mes` : `vs €${plan.price}/mo`}
                  </motion.p>
                )}
              </div>

              <ul className="space-y-3 flex-1 mb-6">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-2.5">
                    <div className={`w-4 h-4 ${planCheckBg[i]} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Check className={`w-2.5 h-2.5 ${planCheckColor[i]}`} />
                    </div>
                    <span className={`text-sm font-inter ${planFeatureText[i]}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <div>
                <a
                  href="#cta"
                  className={`flex items-center justify-center gap-2 w-full font-jakarta font-700 text-sm py-3 rounded-xl transition-all duration-200 group ${planCtaBg[i]}`}
                >
                  {data.cta}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <p className={`text-center text-xs mt-2 ${planSubText[i]}`}>{data.ctaSub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-gray-400 dark:text-gray-500 mt-8"
        >
          {lang === 'es'
            ? '¿Tienes más de 50 empleados? '
            : 'More than 50 employees? '}
          <a href="#cta" className="text-teal-600 dark:text-teal-400 hover:underline font-500">
            {lang === 'es' ? 'Hablemos.' : "Let's talk."}
          </a>
        </motion.p>
      </div>
    </section>
  )
}
