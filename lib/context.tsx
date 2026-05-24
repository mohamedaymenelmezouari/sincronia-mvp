'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { translations, Lang } from './i18n'

interface LangContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (section: string, key: string, index?: number, subKey?: string) => string
  tArr: <T>(section: string, key: string) => T[]
}

const LangContext = createContext<LangContextType | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  function t(section: string, key: string, index?: number, subKey?: string): string {
    const sectionData = (translations[lang] as Record<string, unknown>)[section] as Record<string, unknown>
    if (!sectionData) return `${section}.${key}`
    if (index !== undefined && subKey !== undefined) {
      const arr = sectionData[key] as Record<string, unknown>[]
      return (arr?.[index]?.[subKey] as string) ?? ''
    }
    return (sectionData[key] as string) ?? `${section}.${key}`
  }

  function tArr<T>(section: string, key: string): T[] {
    const sectionData = (translations[lang] as Record<string, unknown>)[section] as Record<string, unknown>
    return (sectionData?.[key] as T[]) ?? []
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t, tArr }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLanguage must be used within LangProvider')
  return ctx
}
