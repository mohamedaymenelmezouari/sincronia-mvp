'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, CheckCircle2, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/lib/context'
import { translations } from '@/lib/i18n'

interface ChatMessage {
  id: number
  role: 'manager' | 'agent' | 'typing'
  text: string
  delay: number
}

export default function Hero() {
  const { lang, t } = useLanguage()
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const [showTyping, setShowTyping] = useState(false)

  const chat = translations[lang].hero.chat

  const messages: ChatMessage[] = [
    { id: 1, role: 'manager', text: chat.t1, delay: 600 },
    { id: 2, role: 'typing', text: chat.typing, delay: 1400 },
    { id: 3, role: 'agent', text: chat.t2, delay: 2400 },
    { id: 4, role: 'agent', text: chat.t3, delay: 3600 },
    { id: 5, role: 'agent', text: chat.t4, delay: 4800 },
    { id: 6, role: 'manager', text: chat.t5, delay: 5800 },
  ]

  useEffect(() => {
    setVisibleMessages([])
    setShowTyping(false)

    const timers: NodeJS.Timeout[] = []

    messages.forEach((msg) => {
      if (msg.role === 'typing') {
        const showTimer = setTimeout(() => setShowTyping(true), msg.delay)
        const hideTimer = setTimeout(() => setShowTyping(false), msg.delay + 900)
        timers.push(showTimer, hideTimer)
      } else {
        const timer = setTimeout(() => {
          setVisibleMessages((prev) => [...prev, msg.id])
        }, msg.delay)
        timers.push(timer)
      }
    })

    // Loop the animation
    const loopTimer = setTimeout(() => {
      setVisibleMessages([])
      setShowTyping(false)
    }, 9000)
    timers.push(loopTimer)

    return () => timers.forEach(clearTimeout)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  const realMessages = messages.filter((m) => m.role !== 'typing')

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden mesh-bg">
      {/* Animated blob decorations */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-600/10 text-teal-600 dark:text-teal-400 text-xs font-jakarta font-700 px-3.5 py-1.5 rounded-full border border-teal-600/20 mb-6">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" />
                {t('hero', 'badge')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-jakarta font-800 text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl leading-[1.08] text-gray-900 dark:text-white mb-6"
            >
              {t('hero', 'headline')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-inter text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-lg"
            >
              {t('hero', 'subheadline')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-jakarta font-700 text-base px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-teal-600/30 hover:shadow-xl hover:shadow-teal-600/40 group"
              >
                {t('hero', 'cta1')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <button className="inline-flex items-center justify-center gap-2 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border text-gray-700 dark:text-gray-300 font-jakarta font-600 text-base px-6 py-3.5 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-border transition-all duration-200 shadow-sm">
                <div className="w-7 h-7 bg-amber-400 rounded-full flex items-center justify-center shadow-sm">
                  <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                </div>
                {t('hero', 'cta2')}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-x-6 gap-y-2"
            >
              {['Sin permanencia', 'Primer mes gratis', 'Sin tarjeta'].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: WhatsApp chat mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            {/* Phone frame */}
            <div className="relative mx-auto max-w-sm">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-teal-600/20 blur-3xl rounded-3xl transform scale-90" />

              <div className="relative bg-gray-100 dark:bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl shadow-teal-900/20 ring-1 ring-gray-200 dark:ring-gray-700">
                <div className="bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden">
                  {/* WhatsApp header */}
                  <div className="bg-teal-600 px-4 py-3 flex items-center gap-3">
                    <div className="flex items-center gap-1 mr-auto">
                      <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="ml-2">
                        <p className="text-white font-jakarta font-700 text-sm leading-none">SincronIA</p>
                        <p className="text-white/70 text-xs mt-0.5">
                          {showTyping ? chat.typing : 'en línea'}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                      ))}
                    </div>
                  </div>

                  {/* Chat area */}
                  <div
                    className="p-3 space-y-2 min-h-[320px] max-h-[340px] overflow-y-auto"
                    style={{
                      background: 'linear-gradient(180deg, #e5ded8 0%, #ddd5ce 100%)',
                    }}
                  >
                    {realMessages.map((msg) => (
                      <AnimatePresence key={`${msg.id}-${lang}`}>
                        {visibleMessages.includes(msg.id) && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.25 }}
                            className={`flex ${msg.role === 'manager' ? 'justify-end' : 'justify-start'}`}
                          >
                            {msg.role === 'agent' && (
                              <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-2 mt-auto flex-shrink-0">
                                <span className="text-white text-[9px] font-800">AI</span>
                              </div>
                            )}
                            <div
                              className={`max-w-[78%] px-3 py-2 text-xs leading-relaxed shadow-sm ${
                                msg.role === 'manager'
                                  ? 'whatsapp-bubble-manager'
                                  : 'whatsapp-bubble-agent'
                              }`}
                            >
                              {msg.text}
                              <div className={`text-[9px] mt-1 ${msg.role === 'manager' ? 'text-white/60' : 'text-gray-400'} text-right`}>
                                {new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
                                {msg.role === 'manager' && ' ✓✓'}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    ))}

                    {/* Typing indicator */}
                    <AnimatePresence>
                      {showTyping && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex items-end gap-2"
                        >
                          <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-[9px] font-800">AI</span>
                          </div>
                          <div className="bg-white dark:bg-gray-800 rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm">
                            <div className="flex gap-1 items-center h-3">
                              {[0, 1, 2].map((i) => (
                                <div
                                  key={i}
                                  className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                                  style={{ animationDelay: `${i * 0.15}s` }}
                                />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Input bar */}
                  <div className="bg-gray-100 dark:bg-gray-800 px-3 py-2 flex items-center gap-2">
                    <div className="flex-1 bg-white dark:bg-gray-700 rounded-full px-4 py-2 text-xs text-gray-400">
                      {lang === 'es' ? 'Escribe un mensaje...' : 'Type a message...'}
                    </div>
                    <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                className="absolute -top-4 -right-4 bg-white dark:bg-dark-card rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2 border border-gray-100 dark:border-dark-border"
              >
                <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-jakarta font-700 text-gray-900 dark:text-white leading-none">
                    {lang === 'es' ? 'Turno cubierto' : 'Shift covered'}
                  </p>
                  <p className="text-[10px] text-gray-400 mt-0.5">
                    {lang === 'es' ? 'en 47 segundos' : 'in 47 seconds'}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.5 }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-dark-card rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2 border border-gray-100 dark:border-dark-border"
              >
                <div className="w-7 h-7 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-sm">⚖️</span>
                </div>
                <div>
                  <p className="text-xs font-jakarta font-700 text-gray-900 dark:text-white leading-none">
                    {lang === 'es' ? '100% convenio' : '100% compliant'}
                  </p>
                  <p className="text-[10px] text-gray-400 mt-0.5">
                    {lang === 'es' ? 'validado automático' : 'auto-validated'}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
