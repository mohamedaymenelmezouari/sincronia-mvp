export type Lang = 'es' | 'en'

export const translations = {
  es: {
    nav: {
      features: 'Funcionalidades',
      pricing: 'Precios',
      why: 'Por qué nosotros',
      contact: 'Contacto',
      cta: 'Empieza gratis',
    },
    hero: {
      badge: 'Agente IA para hostelería',
      headline: 'Tu gerente de turnos trabaja 24/7. Y no cobra extra.',
      subheadline:
        'SincronIA gestiona el cuadrante, cubre bajas y evita multas por ti. Solo dices qué necesitas.',
      cta1: 'Solicita tu piloto gratis',
      cta2: 'Ver demo',
      chat: {
        t1: 'Oye, María está de baja mañana. Necesito cubrir su turno de 9-17h',
        t2: 'Entendido 🤖 Buscando cobertura para mañana 9-17h...',
        t3: '✅ Carlos García disponible y confirmado. Ya le notifiqué.',
        t4: '📋 Registro de jornada actualizado. Conforme al convenio.',
        t5: '¡Perfecto, gracias! 🙌',
        manager: 'Gerente',
        agent: 'SincronIA',
        typing: 'escribiendo...',
      },
    },
    problem: {
      title: '¿Te suena esto?',
      cards: [
        {
          stat: '6h/semana',
          title: 'En Excel y WhatsApp',
          desc: 'Horas semanales desperdiciadas coordinando manualmente el cuadrante de turnos.',
        },
        {
          stat: '+€6.000',
          title: 'Multas por incumplir el convenio',
          desc: 'Una sola infracción laboral puede costar más que un año de cualquier software.',
        },
        {
          stat: 'Sin control',
          title: 'Bajas de última hora',
          desc: 'Un mensaje de WhatsApp a las 7am y todo el cuadrante del día se derrumba.',
        },
        {
          stat: '>50%',
          title: 'Rotación anual en hostelería',
          desc: 'La alta rotación multiplica la carga de gestión de turnos para el gerente.',
        },
      ],
    },
    how: {
      title: 'Cómo funciona SincronIA',
      steps: [
        {
          label: 'Paso 1',
          title: 'El gerente habla por WhatsApp',
          desc: 'Envías un mensaje en lenguaje natural. Sin formularios, sin apps nuevas.',
        },
        {
          label: 'Paso 2',
          title: 'La IA genera el cuadrante',
          desc: 'El agente respeta el convenio colectivo, preferencias y disponibilidades automáticamente.',
        },
        {
          label: 'Paso 3',
          title: 'Confirmación automática',
          desc: 'Cada empleado recibe su turno. El registro de jornada queda guardado y firmado.',
        },
      ],
      features: [
        'Sin app que instalar para empleados',
        'Convenio de hostelería integrado',
        'Registro de jornada automático',
        'Previsión de demanda con IA',
        'Cobertura inter-restaurantes (Fase 2)',
        'Panel web para el gerente',
      ],
    },
    calculator: {
      title: '¿Cuánto te cuesta hacer turnos?',
      subtitle: 'Descubre tu ahorro real en segundos.',
      staff: 'Empleados en plantilla',
      hours: 'Horas/semana en cuadrantes',
      rate: 'Coste hora gerente',
      current: 'Coste actual mensual',
      savings: 'Ahorro con SincronIA',
      payback: 'Recuperas la inversión en',
      paybackUnit: 'días',
      cta: 'Empieza a ahorrar hoy',
    },
    pricing: {
      title: 'Precios transparentes, sin sorpresas',
      subtitle: 'Primer mes gratis · Sin tarjeta · Sin permanencia',
      monthly: 'Mensual',
      annual: 'Anual',
      save: 'Ahorra 20%',
      popular: 'Más popular',
      plans: [
        {
          name: 'Starter',
          price: '49',
          priceAnnual: '39',
          unit: '/mes + €3/empleado adicional',
          unitAnnual: '/mes + €3/empleado adicional',
          limit: 'Hasta 10 empleados',
          features: [
            'Agente IA por WhatsApp',
            'Compliance de convenio integrado',
            'Registro de jornada automático',
            'Notificaciones a empleados',
            'Panel web básico',
            '1 restaurante',
          ],
        },
        {
          name: 'Pro',
          price: '129',
          priceAnnual: '103',
          unit: '/mes + €2/empleado adicional',
          unitAnnual: '/mes + €2/empleado adicional',
          limit: '11–30 empleados',
          features: [
            'Todo lo de Starter',
            'Previsión de demanda con IA',
            'KPIs y analítica de turnos',
            'Gestión de vacaciones',
            'Soporte prioritario',
            'Hasta 3 restaurantes',
          ],
        },
        {
          name: 'Network',
          price: '299',
          priceAnnual: '239',
          unit: '/mes',
          unitAnnual: '/mes',
          limit: 'Multi-local / cadenas',
          features: [
            'Todo lo de Pro',
            'Marketplace de turnos cruzados',
            'Cobertura entre restaurantes',
            'API + integraciones POS',
            'Gestor de cuenta dedicado',
            'Locales ilimitados',
          ],
        },
      ],
      cta: 'Empezar gratis',
      ctaSub: '30 días gratis · Sin tarjeta',
      from: 'Desde',
    },
    testimonials: {
      title: 'Por qué confían en SincronIA',
      subtitle: 'Restaurantes reales. Resultados reales.',
      items: [
        {
          quote:
            'Antes tardaba 3 horas cada lunes haciendo el cuadrante. Ahora SincronIA lo tiene listo en 2 minutos y yo no toco nada.',
          name: 'Alejandro Morales',
          role: 'Gerente · Grupo Taberna del Sur, Madrid',
          rating: 5,
        },
        {
          quote:
            'Tuve una baja el sábado a las 8 de la mañana. El agente cubrió el turno antes de que yo terminara el café. Increíble.',
          name: 'Sandra Ruiz',
          role: 'Directora de Operaciones · Restaurante El Jardín, Barcelona',
          rating: 5,
        },
        {
          quote:
            'El registro de jornada automático me ha salvado en dos inspecciones. Cumplimos el convenio sin ni pensarlo.',
          name: 'Tomás Iglesias',
          role: 'Propietario · Brasserie Alcázar, Sevilla',
          rating: 5,
        },
      ],
      stats: [
        { value: '200+', label: 'Restaurantes activos' },
        { value: '4.8★', label: 'Valoración media' },
        { value: '€1.200', label: 'Ahorro medio/mes' },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Necesitan mis empleados instalar algo?',
          a: 'No. Los empleados reciben sus turnos por WhatsApp (el que ya usan). Solo el gerente accede al panel web opcional. Cero fricción para tu equipo.',
        },
        {
          q: '¿Es legal la cesión de personal entre restaurantes?',
          a: 'Sí, bajo la modalidad de "puesta a disposición" o acuerdos bilaterales entre empresas del mismo grupo. SincronIA solo propone coberturas dentro del marco legal y siempre requiere confirmación del gerente.',
        },
        {
          q: '¿El agente cumple el convenio colectivo de hostelería?',
          a: 'Sí. El convenio estatal de hostelería está integrado en la lógica del agente: descansos mínimos, horas máximas, pagos de festivos, registro de jornada... Todo se valida automáticamente antes de confirmar cualquier turno.',
        },
        {
          q: '¿Puedo cancelar cuando quiera?',
          a: 'Absolutamente. Sin permanencia, sin penalizaciones. Cancelas cuando quieras desde tu panel. Exportas todos tus datos en cualquier momento.',
        },
        {
          q: '¿Cómo se integra con mi sistema actual?',
          a: 'El agente funciona de forma autónoma desde el día 1. En el plan Pro y Network ofrecemos API REST + webhooks para integrarse con TPVs (Agora, ICG, etc.) y software de nóminas. El plan Starter no requiere ninguna integración.',
        },
        {
          q: '¿Qué pasa si el agente comete un error?',
          a: 'Ninguna acción es irreversible sin tu confirmación. Puedes revisar y modificar cualquier turno desde el panel web o por WhatsApp. Además, el agente aprende de tus correcciones para mejorar continuamente.',
        },
      ],
    },
    cta: {
      headline: 'Recupera tus horas. Evita las multas. Empieza hoy.',
      sub: 'Únete a los restaurantes que ya gestionan sus turnos con IA.',
      placeholder: 'tu@email.com',
      button: 'Quiero mi piloto gratis',
      note: '30 días gratis · Sin tarjeta · Sin permanencia',
    },
    footer: {
      tagline: 'El agente de IA que gestiona tus turnos.',
      privacy: 'Política de privacidad',
      terms: 'Términos',
      contact: 'Contacto',
      made: 'Hecho con IA en Madrid 🇪🇸',
    },
  },

  en: {
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      why: 'Why us',
      contact: 'Contact',
      cta: 'Start free',
    },
    hero: {
      badge: 'AI agent for hospitality',
      headline: 'Your shift manager works 24/7. And doesn\'t charge overtime.',
      subheadline:
        'SincronIA handles scheduling, covers absences, and keeps you compliant. Just tell it what you need.',
      cta1: 'Request your free pilot',
      cta2: 'Watch demo',
      chat: {
        t1: 'Hey, María is out sick tomorrow. I need to cover her 9-17h shift',
        t2: 'Got it 🤖 Searching for coverage for tomorrow 9-17h...',
        t3: '✅ Carlos García available and confirmed. Notification sent.',
        t4: '📋 Work log updated. Fully compliant with labor law.',
        t5: 'Perfect, thanks! 🙌',
        manager: 'Manager',
        agent: 'SincronIA',
        typing: 'typing...',
      },
    },
    problem: {
      title: 'Does this sound familiar?',
      cards: [
        {
          stat: '6h/week',
          title: 'On Excel and WhatsApp',
          desc: 'Hours wasted every week manually coordinating staff schedules.',
        },
        {
          stat: '+€6,000',
          title: 'Fines for labor violations',
          desc: 'A single labor infraction can cost more than a full year of any software.',
        },
        {
          stat: 'No control',
          title: 'Last-minute absences',
          desc: 'A WhatsApp message at 7am and your entire day\'s schedule falls apart.',
        },
        {
          stat: '>50%',
          title: 'Annual turnover in hospitality',
          desc: 'High turnover multiplies the scheduling burden on every manager.',
        },
      ],
    },
    how: {
      title: 'How SincronIA works',
      steps: [
        {
          label: 'Step 1',
          title: 'Manager sends a WhatsApp',
          desc: 'You send a message in plain language. No forms, no new apps to learn.',
        },
        {
          label: 'Step 2',
          title: 'AI generates the schedule',
          desc: 'The agent respects labor law, preferences, and availabilities automatically.',
        },
        {
          label: 'Step 3',
          title: 'Automatic confirmation',
          desc: 'Each employee receives their shift. Work log saved and signed automatically.',
        },
      ],
      features: [
        'No app to install for staff',
        'Hospitality labor law built-in',
        'Automatic work log',
        'AI demand forecasting',
        'Cross-restaurant coverage (Phase 2)',
        'Web dashboard for managers',
      ],
    },
    calculator: {
      title: 'How much does scheduling cost you?',
      subtitle: 'Discover your real savings in seconds.',
      staff: 'Staff count',
      hours: 'Hours/week on scheduling',
      rate: 'Manager hourly cost',
      current: 'Current monthly cost',
      savings: 'Savings with SincronIA',
      payback: 'You break even in',
      paybackUnit: 'days',
      cta: 'Start saving today',
    },
    pricing: {
      title: 'Transparent pricing, no surprises',
      subtitle: 'First month free · No card · No commitment',
      monthly: 'Monthly',
      annual: 'Annual',
      save: 'Save 20%',
      popular: 'Most popular',
      plans: [
        {
          name: 'Starter',
          price: '49',
          priceAnnual: '39',
          unit: '/mo + €3/additional staff',
          unitAnnual: '/mo + €3/additional staff',
          limit: 'Up to 10 staff',
          features: [
            'AI agent via WhatsApp',
            'Labor law compliance built-in',
            'Automatic work log',
            'Staff notifications',
            'Basic web dashboard',
            '1 restaurant',
          ],
        },
        {
          name: 'Pro',
          price: '129',
          priceAnnual: '103',
          unit: '/mo + €2/additional staff',
          unitAnnual: '/mo + €2/additional staff',
          limit: '11–30 staff',
          features: [
            'Everything in Starter',
            'AI demand forecasting',
            'Shift KPIs & analytics',
            'Holiday management',
            'Priority support',
            'Up to 3 restaurants',
          ],
        },
        {
          name: 'Network',
          price: '299',
          priceAnnual: '239',
          unit: '/mo',
          unitAnnual: '/mo',
          limit: 'Multi-venue / chains',
          features: [
            'Everything in Pro',
            'Cross-shift marketplace',
            'Cross-restaurant coverage',
            'API + POS integrations',
            'Dedicated account manager',
            'Unlimited venues',
          ],
        },
      ],
      cta: 'Start free',
      ctaSub: '30 days free · No card',
      from: 'From',
    },
    testimonials: {
      title: 'Why restaurants trust SincronIA',
      subtitle: 'Real restaurants. Real results.',
      items: [
        {
          quote:
            'It used to take me 3 hours every Monday to do the schedule. Now SincronIA has it ready in 2 minutes and I don\'t touch a thing.',
          name: 'Alejandro Morales',
          role: 'Manager · Grupo Taberna del Sur, Madrid',
          rating: 5,
        },
        {
          quote:
            'I had a staff no-show at 8am on Saturday. The agent covered the shift before I finished my coffee. Incredible.',
          name: 'Sandra Ruiz',
          role: 'Operations Director · Restaurante El Jardín, Barcelona',
          rating: 5,
        },
        {
          quote:
            'The automatic work log saved me in two labor inspections. We comply with every regulation without even thinking about it.',
          name: 'Tomás Iglesias',
          role: 'Owner · Brasserie Alcázar, Sevilla',
          rating: 5,
        },
      ],
      stats: [
        { value: '200+', label: 'Active restaurants' },
        { value: '4.8★', label: 'Average rating' },
        { value: '€1,200', label: 'Avg monthly savings' },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          q: 'Do my employees need to install anything?',
          a: 'No. Employees receive their shifts via WhatsApp (the one they already use). Only the manager accesses the optional web dashboard. Zero friction for your team.',
        },
        {
          q: 'Is cross-restaurant staffing legal?',
          a: 'Yes, under staff secondment agreements or bilateral arrangements between companies in the same group. SincronIA only proposes coverage within the legal framework and always requires manager confirmation.',
        },
        {
          q: 'Does the agent comply with hospitality collective agreements?',
          a: 'Yes. The national hospitality collective agreement is built into the agent\'s logic: minimum rest periods, maximum hours, holiday pay, work logs... Everything is validated automatically before confirming any shift.',
        },
        {
          q: 'Can I cancel anytime?',
          a: 'Absolutely. No commitment, no penalties. Cancel anytime from your dashboard. Export all your data whenever you want.',
        },
        {
          q: 'How does it integrate with my current system?',
          a: 'The agent works autonomously from day 1. Pro and Network plans offer REST API + webhooks to integrate with POS systems (Agora, ICG, etc.) and payroll software. The Starter plan requires no integration.',
        },
        {
          q: 'What if the agent makes a mistake?',
          a: 'No action is irreversible without your confirmation. You can review and modify any shift from the web dashboard or via WhatsApp. The agent also learns from your corrections to continuously improve.',
        },
      ],
    },
    cta: {
      headline: 'Reclaim your hours. Avoid fines. Start today.',
      sub: 'Join the restaurants already managing their shifts with AI.',
      placeholder: 'your@email.com',
      button: 'I want my free pilot',
      note: '30 days free · No card · No commitment',
    },
    footer: {
      tagline: 'The AI agent that manages your shifts.',
      privacy: 'Privacy policy',
      terms: 'Terms',
      contact: 'Contact',
      made: 'Made with AI in Madrid 🇪🇸',
    },
  },
} as const

export type Translations = typeof translations.es
