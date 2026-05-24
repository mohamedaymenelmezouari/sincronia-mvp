'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import * as Slider from '@radix-ui/react-slider'
import { TrendingDown, TrendingUp, Calendar, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/context'
import { translations } from '@/lib/i18n'

function useAnimatedValue(target: number, duration = 600) {
  const [value, setValue] = useState(0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const start = performance.now()
    const from = value
    const to = target

    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(from + (to - from) * eased))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target])

  return value
}

export default function Calculator() {
  const { lang } = useLanguage()
  const data = translations[lang].calculator

  const [staff, setStaff] = useState(15)
  const [hours, setHours] = useState(8)
  const [rate, setRate] = useState(30)

  const currentMonthly = Math.round(hours * rate * 4.33)
  const savingsAmount = Math.round(currentMonthly * 0.85)
  const planCost = staff <= 10 ? 49 : staff <= 30 ? 129 : 299
  const netSavings = savingsAmount - planCost
  const paybackDays = netSavings > 0 ? Math.round((planCost / netSavings) * 30) : 0

  const animatedCurrent = useAnimatedValue(currentMonthly)
  const animatedSavings = useAnimatedValue(savingsAmount)
  const animatedPayback = useAnimatedValue(paybackDays)

  return (
    <section id="calculator" className="bg-white dark:bg-dark-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Sliders */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 dark:bg-dark-bg rounded-2xl p-6 border border-gray-100 dark:border-dark-border space-y-8"
          >
            {/* Staff slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="font-jakarta font-600 text-sm text-gray-700 dark:text-gray-300">
                  {data.staff}
                </label>
                <span className="font-jakarta font-800 text-teal-600 text-lg">{staff}</span>
              </div>
              <Slider.Root
                value={[staff]}
                onValueChange={([v]) => setStaff(v)}
                min={5}
                max={50}
                step={1}
                data-radix-slider-root=""
              >
                <Slider.Track data-radix-slider-track="">
                  <Slider.Range data-radix-slider-range="" />
                </Slider.Track>
                <Slider.Thumb data-radix-slider-thumb="" aria-label={data.staff} />
              </Slider.Root>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>5</span>
                <span>50</span>
              </div>
            </div>

            {/* Hours slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="font-jakarta font-600 text-sm text-gray-700 dark:text-gray-300">
                  {data.hours}
                </label>
                <span className="font-jakarta font-800 text-teal-600 text-lg">{hours}h</span>
              </div>
              <Slider.Root
                value={[hours]}
                onValueChange={([v]) => setHours(v)}
                min={2}
                max={15}
                step={1}
                data-radix-slider-root=""
              >
                <Slider.Track data-radix-slider-track="">
                  <Slider.Range data-radix-slider-range="" />
                </Slider.Track>
                <Slider.Thumb data-radix-slider-thumb="" aria-label={data.hours} />
              </Slider.Root>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>2h</span>
                <span>15h</span>
              </div>
            </div>

            {/* Rate slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="font-jakarta font-600 text-sm text-gray-700 dark:text-gray-300">
                  {data.rate}
                </label>
                <span className="font-jakarta font-800 text-teal-600 text-lg">€{rate}/h</span>
              </div>
              <Slider.Root
                value={[rate]}
                onValueChange={([v]) => setRate(v)}
                min={15}
                max={60}
                step={5}
                data-radix-slider-root=""
              >
                <Slider.Track data-radix-slider-track="">
                  <Slider.Range data-radix-slider-range="" />
                </Slider.Track>
                <Slider.Thumb data-radix-slider-thumb="" aria-label={data.rate} />
              </Slider.Root>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>€15</span>
                <span>€60</span>
              </div>
            </div>

            {/* Plan badge */}
            <div className="bg-teal-50 dark:bg-teal-600/10 rounded-xl px-4 py-3 border border-teal-100 dark:border-teal-600/20">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {lang === 'es' ? 'Plan recomendado' : 'Recommended plan'}:{' '}
                <span className="font-jakarta font-700 text-teal-600 dark:text-teal-400">
                  {staff <= 10 ? 'Starter (€49/mes)' : staff <= 30 ? 'Pro (€129/mes)' : 'Network (€299/mes)'}
                </span>
              </p>
            </div>
          </motion.div>

          {/* Output cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-2xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-inter text-sm text-red-600 dark:text-red-400 mb-1 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4" />
                    {data.current}
                  </p>
                  <p className="font-jakarta font-800 text-4xl text-red-700 dark:text-red-400">
                    €{animatedCurrent.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {hours}h × €{rate} × 4.33 {lang === 'es' ? 'semanas' : 'weeks'}
                  </p>
                </div>
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-xl flex items-center justify-center">
                  <span className="text-lg">💸</span>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 dark:bg-teal-600/10 border border-teal-100 dark:border-teal-600/20 rounded-2xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-inter text-sm text-teal-600 dark:text-teal-400 mb-1 flex items-center gap-1.5">
                    <TrendingDown className="w-4 h-4" />
                    {data.savings}
                  </p>
                  <p className="font-jakarta font-800 text-4xl text-teal-700 dark:text-teal-400">
                    €{animatedSavings.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {lang === 'es' ? '85% reducción de tiempo' : '85% time reduction'}
                  </p>
                </div>
                <div className="w-10 h-10 bg-teal-100 dark:bg-teal-600/20 rounded-xl flex items-center justify-center">
                  <span className="text-lg">🚀</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-400/10 border border-amber-100 dark:border-amber-400/20 rounded-2xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-inter text-sm text-amber-600 dark:text-amber-400 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {data.payback}
                  </p>
                  <p className="font-jakarta font-800 text-4xl text-amber-700 dark:text-amber-400">
                    {animatedPayback} {data.paybackUnit}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {lang === 'es' ? 'retorno de inversión' : 'return on investment'}
                  </p>
                </div>
                <div className="w-10 h-10 bg-amber-100 dark:bg-amber-400/20 rounded-xl flex items-center justify-center">
                  <span className="text-lg">📈</span>
                </div>
              </div>
            </div>

            <a
              href="#cta"
              className="flex items-center justify-center gap-2 w-full bg-teal-600 hover:bg-teal-700 text-white font-jakarta font-700 text-base py-4 rounded-xl transition-all duration-200 shadow-lg shadow-teal-600/25 hover:shadow-xl hover:shadow-teal-600/35 group"
            >
              {data.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
