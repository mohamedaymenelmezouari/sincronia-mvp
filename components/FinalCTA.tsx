'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/lib/context'
import { translations } from '@/lib/i18n'

export default function FinalCTA() {
  const { lang } = useLanguage()
  const data = translations[lang].cta
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-teal-600"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/15 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/3 rounded-full" />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-jakarta font-800 text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            {data.headline}
          </h2>
          <p className="font-inter text-white/70 text-lg mb-10">
            {data.sub}
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <p className="font-jakarta font-700 text-white text-lg">
                {lang === 'es' ? '¡Recibido! Te contactamos pronto.' : "Got it! We'll reach out soon."}
              </p>
              <p className="text-white/60 text-sm">{email}</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={data.placeholder}
                required
                className="flex-1 bg-white/15 backdrop-blur-sm border border-white/25 text-white placeholder-white/50 font-inter text-sm px-4 py-3.5 rounded-xl focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-jakarta font-700 text-sm px-5 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-amber-400/30 hover:shadow-xl hover:shadow-amber-400/40 group whitespace-nowrap"
              >
                {data.button}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          )}

          <p className="font-inter text-sm text-white/50">{data.note}</p>
        </motion.div>
      </div>
    </section>
  )
}
