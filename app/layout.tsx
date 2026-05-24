import type { Metadata } from 'next'
import './globals.css'
import { LangProvider } from '@/lib/context'

export const metadata: Metadata = {
  title: 'SincronIA — El agente de IA que gestiona tus turnos',
  description:
    'SincronIA gestiona el cuadrante de turnos de tu restaurante por WhatsApp, cubre bajas automáticamente y garantiza el cumplimiento del convenio colectivo.',
  keywords: 'gestión turnos restaurante, software hostelería, agente IA turnos, planificación turnos hostelería',
  openGraph: {
    title: 'SincronIA — El agente de IA que gestiona tus turnos',
    description: 'Automatiza el cuadrante de tu restaurante con IA. Sin apps, por WhatsApp, 100% conforme al convenio.',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-inter">
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  )
}
