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
      badge: 'Agente IA para clínicas dentales y salones',
      headline: 'Tu coordinador de turnos trabaja 24/7. Y no cobra extra.',
      subheadline:
        'SincronIA gestiona el cuadrante de tu clínica o salón, cubre bajas y evita multas por ti. Solo dices qué necesitas.',
      cta1: 'Solicita tu piloto gratis',
      cta2: 'Ver demo',
      chat: {
        t1: 'Oye, la higienista Ana no puede venir mañana. Necesito cubrir sus citas de 9-14h',
        t2: 'Entendido 🤖 Revisando disponibilidad para las citas de mañana 9-14h...',
        t3: '✅ Laura Gómez disponible y confirmada. Pacientes notificados.',
        t4: '📋 Registro de jornada actualizado. Conforme al convenio de sanidad privada.',
        t5: '¡Perfecto, gracias! 🙌',
        manager: 'Directora',
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
          desc: 'Horas semanales perdidas coordinando manualmente higienistas, auxiliares y recepción.',
        },
        {
          stat: '+€6.000',
          title: 'Multas por incumplir el convenio',
          desc: 'Una sola infracción laboral en sanidad privada puede costar más que un año de cualquier software.',
        },
        {
          stat: 'Sin control',
          title: 'Bajas de última hora',
          desc: 'Un WhatsApp a las 7am y los pacientes del día se quedan sin profesional asignado.',
        },
        {
          stat: '>35%',
          title: 'Rotación en clínicas y salones',
          desc: 'La alta rotación en el sector multiplica la carga de gestión sobre el director/a.',
        },
      ],
    },
    how: {
      title: 'Cómo funciona SincronIA',
      steps: [
        {
          label: 'Paso 1',
          title: 'El director/a habla por WhatsApp',
          desc: 'Envías un mensaje en lenguaje natural. Sin formularios, sin apps nuevas que aprender.',
        },
        {
          label: 'Paso 2',
          title: 'La IA genera el cuadrante',
          desc: 'El agente respeta el convenio sectorial, las especialidades del equipo y las disponibilidades.',
        },
        {
          label: 'Paso 3',
          title: 'Confirmación automática',
          desc: 'Cada empleado recibe su turno. El registro de jornada queda guardado y firmado.',
        },
      ],
      features: [
        'Sin app que instalar para empleados',
        'Convenio de sanidad privada y peluquería integrado',
        'Registro de jornada automático',
        'Coordinación con agenda de citas',
        'Cobertura inter-clínicas / salones (Fase 2)',
        'Panel web para el director/a',
      ],
    },
    calculator: {
      title: '¿Cuánto te cuesta hacer turnos?',
      subtitle: 'Descubre tu ahorro real en segundos.',
      staff: 'Empleados en plantilla',
      hours: 'Horas/semana en cuadrantes',
      rate: 'Coste hora director/a',
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
            '1 clínica o salón',
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
            'Coordinación con agenda de citas',
            'KPIs y analítica de turnos',
            'Gestión de vacaciones',
            'Soporte prioritario',
            'Hasta 3 centros',
          ],
        },
        {
          name: 'Network',
          price: '299',
          priceAnnual: '239',
          unit: '/mes',
          unitAnnual: '/mes',
          limit: 'Multi-centro / cadenas',
          features: [
            'Todo lo de Pro',
            'Marketplace de turnos cruzados',
            'Cobertura entre centros',
            'API + integraciones de agenda',
            'Gestor de cuenta dedicado',
            'Centros ilimitados',
          ],
        },
      ],
      cta: 'Empezar gratis',
      ctaSub: '30 días gratis · Sin tarjeta',
      from: 'Desde',
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Necesitan mis empleados instalar algo?',
          a: 'No. Los empleados reciben sus turnos por WhatsApp (el que ya usan). Solo el director/a accede al panel web opcional. Cero fricción para tu equipo.',
        },
        {
          q: '¿Es legal la cesión de personal entre clínicas o salones?',
          a: 'Sí, bajo la modalidad de "puesta a disposición" o acuerdos bilaterales entre centros del mismo grupo. SincronIA solo propone coberturas dentro del marco legal y siempre requiere confirmación del director/a.',
        },
        {
          q: '¿El agente cumple el convenio de sanidad privada y peluquería?',
          a: 'Sí. Los convenios de sanidad privada y de peluquería/estética están integrados en la lógica del agente: descansos mínimos, horas máximas, festivos, registro de jornada... Todo se valida automáticamente antes de confirmar cualquier turno.',
        },
        {
          q: '¿Puedo cancelar cuando quiera?',
          a: 'Absolutamente. Sin permanencia, sin penalizaciones. Cancelas cuando quieras desde tu panel. Exportas todos tus datos en cualquier momento.',
        },
        {
          q: '¿Cómo se integra con mi software de agenda de citas?',
          a: 'El agente funciona de forma autónoma desde el día 1. En el plan Pro y Network ofrecemos API REST + webhooks para integrarse con softwares como Clinicpro, Gesden, Fresha o cualquier agenda con API. El plan Starter no requiere ninguna integración.',
        },
        {
          q: '¿Qué pasa si el agente comete un error?',
          a: 'Ninguna acción es irreversible sin tu confirmación. Puedes revisar y modificar cualquier turno desde el panel web o por WhatsApp. Además, el agente aprende de tus correcciones para mejorar continuamente.',
        },
      ],
    },
    cta: {
      headline: 'Recupera tus horas. Evita las multas. Empieza hoy.',
      sub: 'Únete a las clínicas y salones que ya gestionan sus turnos con IA.',
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
      badge: 'AI agent for dental clinics & salons',
      headline: 'Your shift coordinator works 24/7. And doesn\'t charge overtime.',
      subheadline:
        'SincronIA handles scheduling for your clinic or salon, covers absences, and keeps you compliant. Just tell it what you need.',
      cta1: 'Request your free pilot',
      cta2: 'Watch demo',
      chat: {
        t1: 'Hey, hygienist Ana can\'t make it tomorrow. I need to cover her 9-14h appointments',
        t2: 'Got it 🤖 Checking availability to cover tomorrow\'s 9-14h slots...',
        t3: '✅ Laura Gómez available and confirmed. Patients notified.',
        t4: '📋 Work log updated. Fully compliant with private healthcare labor law.',
        t5: 'Perfect, thanks! 🙌',
        manager: 'Director',
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
          desc: 'Hours wasted every week manually coordinating hygienists, assistants, and reception.',
        },
        {
          stat: '+€6,000',
          title: 'Fines for labor violations',
          desc: 'A single labor infraction in private healthcare can cost more than a full year of any software.',
        },
        {
          stat: 'No control',
          title: 'Last-minute absences',
          desc: 'A WhatsApp at 7am and the day\'s patients are left without a professional assigned.',
        },
        {
          stat: '>35%',
          title: 'Turnover in clinics & salons',
          desc: 'High staff turnover multiplies the scheduling burden on every clinic director.',
        },
      ],
    },
    how: {
      title: 'How SincronIA works',
      steps: [
        {
          label: 'Step 1',
          title: 'Director sends a WhatsApp',
          desc: 'You send a message in plain language. No forms, no new apps to learn.',
        },
        {
          label: 'Step 2',
          title: 'AI generates the schedule',
          desc: 'The agent respects the sector\'s labor law, staff specialties, and availabilities automatically.',
        },
        {
          label: 'Step 3',
          title: 'Automatic confirmation',
          desc: 'Each employee receives their shift. Work log saved and signed automatically.',
        },
      ],
      features: [
        'No app to install for staff',
        'Private healthcare & salon labor law built-in',
        'Automatic work log',
        'Appointment calendar coordination',
        'Cross-clinic / cross-salon coverage (Phase 2)',
        'Web dashboard for clinic directors',
      ],
    },
    calculator: {
      title: 'How much does scheduling cost you?',
      subtitle: 'Discover your real savings in seconds.',
      staff: 'Staff count',
      hours: 'Hours/week on scheduling',
      rate: 'Director hourly cost',
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
            '1 clinic or salon',
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
            'Appointment calendar coordination',
            'Shift KPIs & analytics',
            'Holiday management',
            'Priority support',
            'Up to 3 locations',
          ],
        },
        {
          name: 'Network',
          price: '299',
          priceAnnual: '239',
          unit: '/mo',
          unitAnnual: '/mo',
          limit: 'Multi-location / chains',
          features: [
            'Everything in Pro',
            'Cross-shift marketplace',
            'Cross-location coverage',
            'API + calendar integrations',
            'Dedicated account manager',
            'Unlimited locations',
          ],
        },
      ],
      cta: 'Start free',
      ctaSub: '30 days free · No card',
      from: 'From',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          q: 'Do my employees need to install anything?',
          a: 'No. Employees receive their shifts via WhatsApp (the one they already use). Only the director accesses the optional web dashboard. Zero friction for your team.',
        },
        {
          q: 'Is cross-location staffing legal?',
          a: 'Yes, under staff secondment agreements or bilateral arrangements between locations in the same group. SincronIA only proposes coverage within the legal framework and always requires director confirmation.',
        },
        {
          q: 'Does the agent comply with private healthcare and salon labor agreements?',
          a: 'Yes. The private healthcare and hairdressing/aesthetics collective agreements are built into the agent\'s logic: minimum rest periods, maximum hours, holiday pay, work logs... Everything is validated automatically before confirming any shift.',
        },
        {
          q: 'Can I cancel anytime?',
          a: 'Absolutely. No commitment, no penalties. Cancel anytime from your dashboard. Export all your data whenever you want.',
        },
        {
          q: 'How does it integrate with my appointment software?',
          a: 'The agent works autonomously from day 1. Pro and Network plans offer REST API + webhooks to integrate with tools like Clinicpro, Gesden, Fresha, or any calendar with an API. Starter requires no integration.',
        },
        {
          q: 'What if the agent makes a mistake?',
          a: 'No action is irreversible without your confirmation. You can review and modify any shift from the web dashboard or via WhatsApp. The agent also learns from your corrections to continuously improve.',
        },
      ],
    },
    cta: {
      headline: 'Reclaim your hours. Avoid fines. Start today.',
      sub: 'Join the clinics and salons already managing their shifts with AI.',
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
