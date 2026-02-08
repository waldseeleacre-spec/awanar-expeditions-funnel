export type Language = 'en' | 'de' | 'es';

export interface Content {
  meta: {
    siteName: string;
    domain: string;
    email: string;
    instagram: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    intro: string[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  positioning: {
    title: string;
    statement: string;
    forYou: {
      title: string;
      items: string[];
    };
    notForYou: {
      title: string;
      items: string[];
    };
  };
  quickFacts: {
    title: string;
    date: string;
    location: string;
    price: string;
    duration: string;
    travelDays: string;
  };
  team: {
    title: string;
    members: {
      name: string;
      role: string;
    }[];
  };
  program: {
    title: string;
    timeline: {
      day: string;
      date: string;
      activity: string;
    }[];
    inAldeia: {
      title: string;
      items: string[];
    };
    included: {
      title: string;
      items: string[];
    };
    notIncluded: {
      title: string;
      items: string[];
    };
  };
  safety: {
    title: string;
    preparation: {
      title: string;
      items: string[];
    };
    ethics: {
      title: string;
      statement: string;
    };
    privacy: {
      title: string;
      statement: string;
    };
  };
  faq: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  apply: {
    title: string;
    subtitle: string;
  };
  call: {
    title: string;
    subtitle: string;
  };
  thankYou: {
    title: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  footer: {
    languageSwitcher: string;
  };
}

const baseMeta = {
  siteName: 'AWANAR EXPEDITIONS',
  domain: 'awanar-expeditions.com',
  email: 'hello@awanar-expeditions.com',
  instagram: '@awanar.expeditions',
};

export const content: Record<Language, Content> = {
  en: {
    meta: baseMeta,
    hero: {
      headline: "The forest called. Now it's your turn to answer.",
      subheadline: 'A 7-day rite of passage in the Amazon. Not tourism. A crossing.',
      intro: [
        'You arrive in Cruzeiro do Sul, Acre. Two nights to land. Then a journey into the forest—by road, by river—until you reach Aldeia Timbaúba, on the banks of Rio Gregório.',
        'Five days with the community. Ceremonies. Silence. The voice of the forest.',
        'This is not a retreat. It is an invitation to meet what the forest has to show you.',
      ],
      ctaPrimary: 'Apply now',
      ctaSecondary: 'See program',
    },
    positioning: {
      title: 'This is not tourism',
      statement: 'This is a rite of passage. A structured encounter between you, the forest, and the people who have kept its wisdom for generations.',
      forYou: {
        title: 'This is for you if',
        items: [
          'You feel called to the forest, not as a tourist but as a seeker',
          'You are willing to step out of comfort and into the unknown',
          'You respect indigenous leadership and community protocols',
          'You are ready for inner work, not just outer experience',
        ],
      },
      notForYou: {
        title: 'This is not for you if',
        items: [
          'You are looking for a luxury wellness retreat',
          'You want to document everything for social media',
          'You expect guaranteed outcomes or quick fixes',
          'You are not willing to follow community guidance',
        ],
      },
    },
    quickFacts: {
      title: 'Quick facts',
      date: 'September 12–21, 2026',
      location: 'Aldeia Timbaúba, Rio Gregório, Acre, Brazil',
      price: '€2,000 (energy exchange)',
      duration: '7 days in the forest + 3 hotel nights',
      travelDays: 'September 12 (arrival) → September 21 (departure)',
    },
    team: {
      title: 'Your bridge team',
      members: [
        { name: 'Patricia', role: 'Welcome & translation' },
        { name: 'Gabriela', role: 'Ceremonial interpretation & integration' },
        { name: 'Elias', role: 'Field operations & logistics' },
      ],
    },
    program: {
      title: 'Program overview',
      timeline: [
        { day: 'Day 0', date: 'September 12', activity: 'Arrival in Cruzeiro do Sul. Hotel check-in. Landing.' },
        { day: 'Day 1', date: 'September 13', activity: 'Preparation day. Group meeting. Final briefings.' },
        { day: 'Day 2', date: 'September 14', activity: 'Travel to the forest. ~4h bus + ~6h boat. Arrival in Aldeia Timbaúba.' },
        { day: 'Days 3–7', date: 'September 15–19', activity: 'Five days in community. Ceremonies, silence, forest time.' },
        { day: 'Day 8', date: 'September 20', activity: 'Return journey to Cruzeiro do Sul. Final hotel night.' },
        { day: 'Day 9', date: 'September 21', activity: 'Departure flights.' },
      ],
      inAldeia: {
        title: 'In the community',
        items: [
          'Traditional body painting',
          'Kambo ceremony & medicinal bath',
          'Rapé ceremony',
          'Songs under the Samaúma tree',
          'Opening and closing ceremonies',
        ],
      },
      included: {
        title: 'Included',
        items: [
          'All hotel nights (2 pre + 1 post)',
          'All nights in the village',
          'Hotel breakfast',
          'Three meals per day in the village',
          'All transfers (airport, bus, boat)',
          'Spiritual guidance and ceremonies',
          'Preparation materials and group video call',
          'Integration session ~6 weeks after return',
        ],
      },
      notIncluded: {
        title: 'Not included',
        items: [
          'International and national flights',
          'Snacks, souvenirs, and personal gifts (optional)',
          'Travel insurance (required)',
        ],
      },
    },
    safety: {
      title: 'Safety, ethics & logistics',
      preparation: {
        title: 'Preparation checklist',
        items: [
          'Light, long-sleeved clothing (neutral colors)',
          'Water filter bottle (strongly recommended)',
          'Cash for snacks and gifts (Brazilian reais)',
          'Personal medications and basic first aid',
          'Insect repellent and sunscreen',
          'Headlamp or flashlight',
          'Journal for reflections',
        ],
      },
      ethics: {
        title: 'Our ethical commitment',
        statement: 'We work in direct alliance with community leadership. All activities are guided by their protocols and consent. We do not extract knowledge—we participate in relationship. Your presence supports the community directly.',
      },
      privacy: {
        title: 'Data & privacy',
        statement: 'Your application data is kept confidential and used only for expedition coordination. We do not share personal information with third parties. Ceremonial details are shared only with those who need to know for your safety and preparation.',
      },
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          question: 'Do I need to speak Portuguese?',
          answer: 'No. Our bridge team provides translation and interpretation throughout the journey. However, openness to learning a few basic phrases is appreciated.',
        },
        {
          question: 'What should I pack?',
          answer: 'You will receive a detailed packing list after your application is accepted. Essentials: light long clothing, water filter bottle, cash, personal medications, and an open mind.',
        },
        {
          question: 'How does payment work?',
          answer: 'The €2,000 energy exchange is paid in installments. A deposit secures your spot, with the balance due before departure. Payment plans are available.',
        },
        {
          question: 'Are flights included?',
          answer: 'No. You book your own flights to/from Cruzeiro do Sul (CZS). We provide guidance on routes and timing. Most participants fly via Brasília or Rio Branco.',
        },
        {
          question: 'How does the booking process work?',
          answer: '1) Apply via the form. 2) We schedule a call to align expectations. 3) If it is a fit, you receive preparation materials and payment details. 4) Pre-expedition group call. 5) We journey together.',
        },
        {
          question: 'What about the ceremonies?',
          answer: 'Ceremonial details are shared with confirmed participants during preparation. All ceremonies are optional and guided by community protocols. Your safety and consent are paramount.',
        },
      ],
    },
    apply: {
      title: 'Apply for the expedition',
      subtitle: 'This is the first step. Tell us about yourself, and we will be in touch within 48 hours.',
    },
    call: {
      title: 'Book your alignment call',
      subtitle: 'A 30-minute conversation to answer your questions and ensure this journey is right for you.',
    },
    thankYou: {
      title: 'Thank you. The forest heard you.',
      steps: [
        { title: '1. Check your email', description: 'We have sent you a confirmation. If you do not see it, check your spam folder.' },
        { title: '2. Book your call', description: 'Schedule your alignment call to discuss details and next steps.' },
        { title: '3. Receive preparation kit', description: 'After your call, you will get access to the full preparation materials.' },
      ],
    },
    footer: {
      languageSwitcher: 'Language',
    },
  },
  de: {
    meta: baseMeta,
    hero: {
      headline: 'Der Wald hat gerufen. Jetzt bist du an der Reihe.',
      subheadline: 'Ein 7-tägiger Übergangsritus im Amazonas. Kein Tourismus. Eine Überquerung.',
      intro: [
        'Du kommst in Cruzeiro do Sul, Acre an. Zwei Nächte zum Ankommen. Dann eine Reise in den Wald—auf der Straße, auf dem Fluss—bis du Aldeia Timbaúba am Ufer des Rio Gregório erreichst.',
        'Fünf Tage mit der Gemeinschaft. Zeremonien. Stille. Die Stimme des Waldes.',
        'Das ist kein Retreat. Es ist eine Einladung, dem zu begegnen, was der Wald dir zeigen möchte.',
      ],
      ctaPrimary: 'Jetzt bewerben',
      ctaSecondary: 'Programm ansehen',
    },
    positioning: {
      title: 'Das ist kein Tourismus',
      statement: 'Das ist ein Übergangsritus. Eine strukturierte Begegnung zwischen dir, dem Wald und den Menschen, die sein Wissen seit Generationen bewahrt haben.',
      forYou: {
        title: 'Das ist für dich, wenn',
        items: [
          'Du dich zum Wald gerufen fühlst, nicht als Tourist, sondern als Suchende/r',
          'Du bereit bist, aus der Komfortzone ins Unbekannte zu treten',
          'Du indigene Führung und Gemeinschaftsprotokolle respektierst',
          'Du bereit bist für innere Arbeit, nicht nur äußere Erfahrung',
        ],
      },
      notForYou: {
        title: 'Das ist nicht für dich, wenn',
        items: [
          'Du ein luxuriöses Wellness-Retreat suchst',
          'Du alles für Social Media dokumentieren willst',
          'Du garantierte Ergebnisse oder schnelle Lösungen erwartest',
          'Du nicht bereit bist, der Gemeinschaftsführung zu folgen',
        ],
      },
    },
    quickFacts: {
      title: 'Kurzinfo',
      date: '12.–21. September 2026',
      location: 'Aldeia Timbaúba, Rio Gregório, Acre, Brasilien',
      price: '2.000 € (Energieausgleich)',
      duration: '7 Tage im Wald + 3 Hotelnächte',
      travelDays: '12. September (Ankunft) → 21. September (Abreise)',
    },
    team: {
      title: 'Dein Brückenteam',
      members: [
        { name: 'Patricia', role: 'Willkommen & Übersetzung' },
        { name: 'Gabriela', role: 'Zeremonielle Interpretation & Integration' },
        { name: 'Elias', role: 'Feldoperationen & Logistik' },
      ],
    },
    program: {
      title: 'Programmübersicht',
      timeline: [
        { day: 'Tag 0', date: '12. September', activity: 'Ankunft in Cruzeiro do Sul. Hotel-Check-in. Ankommen.' },
        { day: 'Tag 1', date: '13. September', activity: 'Vorbereitungstag. Gruppentreffen. Letzte Briefings.' },
        { day: 'Tag 2', date: '14. September', activity: 'Reise in den Wald. ~4h Bus + ~6h Boot. Ankunft in Aldeia Timbaúba.' },
        { day: 'Tag 3–7', date: '15.–19. September', activity: 'Fünf Tage in der Gemeinschaft. Zeremonien, Stille, Waldzeit.' },
        { day: 'Tag 8', date: '20. September', activity: 'Rückreise nach Cruzeiro do Sul. Letzte Hotelnacht.' },
        { day: 'Tag 9', date: '21. September', activity: 'Abflüge.' },
      ],
      inAldeia: {
        title: 'In der Gemeinschaft',
        items: [
          'Traditionelle Körperbemalung',
          'Kambo-Zeremonie & Medizinbad',
          'Rapé-Zeremonie',
          'Gesänge unter dem Samaúma-Baum',
          'Eröffnungs- und Abschlusszeremonien',
        ],
      },
      included: {
        title: 'Inklusive',
        items: [
          'Alle Hotelnächte (2 vorher + 1 nachher)',
          'Alle Nächte im Dorf',
          'Hotelfrühstück',
          'Drei Mahlzeiten pro Tag im Dorf',
          'Alle Transfers (Flughafen, Bus, Boot)',
          'Spirituelle Begleitung und Zeremonien',
          'Vorbereitungsmaterialien und Gruppen-Videoanruf',
          'Integrationssession ~6 Wochen nach der Rückkehr',
        ],
      },
      notIncluded: {
        title: 'Nicht inklusive',
        items: [
          'Internationale und nationale Flüge',
          'Snacks, Souvenirs und persönliche Geschenke (optional)',
          'Reiseversicherung (erforderlich)',
        ],
      },
    },
    safety: {
      title: 'Sicherheit, Ethik & Logistik',
      preparation: {
        title: 'Vorbereitungs-Checkliste',
        items: [
          'Leichte, langärmelige Kleidung (neutrale Farben)',
          'Wasserfilterflasche (dringend empfohlen)',
          'Bargeld für Snacks und Geschenke (brasilianische Reais)',
          'Persönliche Medikamente und Basis-Erste-Hilfe',
          'Insektenschutz und Sonnencreme',
          'Stirnlampe oder Taschenlampe',
          'Tagebuch für Reflexionen',
        ],
      },
      ethics: {
        title: 'Unser ethisches Engagement',
        statement: 'Wir arbeiten in direkter Allianz mit der Gemeinschaftsführung. Alle Aktivitäten werden von deren Protokollen und Zustimmung geleitet. Wir extrahieren kein Wissen—wir partizipieren in Beziehung. Deine Anwesenheit unterstützt die Gemeinschaft direkt.',
      },
      privacy: {
        title: 'Daten & Privatsphäre',
        statement: 'Deine Bewerbungsdaten werden vertraulich behandelt und nur für die Expeditionskoordination verwendet. Wir geben keine persönlichen Informationen an Dritte weiter. Zeremonielle Details werden nur mit denen geteilt, die es für deine Sicherheit und Vorbereitung wissen müssen.',
      },
    },
    faq: {
      title: 'Häufig gestellte Fragen',
      items: [
        {
          question: 'Muss ich Portugiesisch sprechen?',
          answer: 'Nein. Unser Brückenteam bietet während der gesamten Reise Übersetzung und Interpretation. Offenheit für einige Grundphrasen zu lernen wird jedoch geschätzt.',
        },
        {
          question: 'Was soll ich einpacken?',
          answer: 'Du erhältst eine detaillierte Packliste, nachdem deine Bewerbung angenommen wurde. Essentials: leichte lange Kleidung, Wasserfilterflasche, Bargeld, persönliche Medikamente und ein offener Geist.',
        },
        {
          question: 'Wie funktioniert die Zahlung?',
          answer: 'Der Energieausgleich von 2.000 € wird in Raten gezahlt. Eine Anzahlung sichert deinen Platz, der Rest ist vor Abreise fällig. Ratenzahlungen sind möglich.',
        },
        {
          question: 'Sind Flüge inklusive?',
          answer: 'Nein. Du buchst deine eigenen Flüge nach/von Cruzeiro do Sul (CZS). Wir geben dir Hinweise zu Routen und Zeitplan. Die meisten Teilnehmer fliegen über Brasília oder Rio Branco.',
        },
        {
          question: 'Wie funktioniert der Buchungsprozess?',
          answer: '1) Bewirb dich über das Formular. 2) Wir vereinbaren einen Anruf, um Erwartungen abzugleichen. 3) Wenn es passt, erhältst du Vorbereitungsmaterialien und Zahlungsdetails. 4) Vorbereitungs-Gruppenanruf. 5) Wir reisen zusammen.',
        },
        {
          question: 'Was ist mit den Zeremonien?',
          answer: 'Zeremonielle Details werden mit bestätigten Teilnehmern während der Vorbereitung geteilt. Alle Zeremonien sind optional und werden von Gemeinschaftsprotokollen geleitet. Deine Sicherheit und Zustimmung haben oberste Priorität.',
        },
      ],
    },
    apply: {
      title: 'Bewirb dich für die Expedition',
      subtitle: 'Das ist der erste Schritt. Erzähl uns von dir, und wir melden uns innerhalb von 48 Stunden.',
    },
    call: {
      title: 'Buche deinen Abstimmungsanruf',
      subtitle: 'Ein 30-minütiges Gespräch, um deine Fragen zu beantworten und sicherzustellen, dass diese Reise richtig für dich ist.',
    },
    thankYou: {
      title: 'Danke. Der Wald hat dich gehört.',
      steps: [
        { title: '1. Prüfe deine E-Mails', description: 'Wir haben dir eine Bestätigung geschickt. Wenn du sie nicht siehst, prüfe deinen Spam-Ordner.' },
        { title: '2. Buche deinen Anruf', description: 'Plane deinen Abstimmungsanruf, um Details und nächste Schritte zu besprechen.' },
        { title: '3. Erhalte das Vorbereitungspaket', description: 'Nach deinem Anruf erhältst du Zugang zu den vollständigen Vorbereitungsmaterialien.' },
      ],
    },
    footer: {
      languageSwitcher: 'Sprache',
    },
  },
  es: {
    meta: baseMeta,
    hero: {
      headline: 'El bosque llamó. Ahora te toca a ti.',
      subheadline: 'Un rito de paso de 7 días en el Amazonas. No es turismo. Es una travesía.',
      intro: [
        'Llegas a Cruzeiro do Sul, Acre. Dos noches para aterrizar. Luego un viaje al bosque—por carretera, por río—hasta llegar a Aldeia Timbaúba, a orillas del Río Gregório.',
        'Cinco días con la comunidad. Ceremonias. Silencio. La voz del bosque.',
        'Esto no es un retiro. Es una invitación a encontrarte con lo que el bosque tiene para mostrarte.',
      ],
      ctaPrimary: 'Aplicar ahora',
      ctaSecondary: 'Ver programa',
    },
    positioning: {
      title: 'Esto no es turismo',
      statement: 'Esto es un rito de paso. Un encuentro estructurado entre tú, el bosque y las personas que han guardado su sabiduría por generaciones.',
      forYou: {
        title: 'Esto es para ti si',
        items: [
          'Sientes el llamado del bosque, no como turista sino como buscador',
          'Estás dispuesto a salir de la comodidad hacia lo desconocido',
          'Respetas el liderazgo indígena y los protocolos comunitarios',
          'Estás listo para trabajo interno, no solo experiencia externa',
        ],
      },
      notForYou: {
        title: 'Esto no es para ti si',
        items: [
          'Buscas un retiro de bienestar de lujo',
          'Quieres documentar todo para redes sociales',
          'Esperas resultados garantizados o soluciones rápidas',
          'No estás dispuesto a seguir la guía comunitaria',
        ],
      },
    },
    quickFacts: {
      title: 'Datos rápidos',
      date: '12–21 de septiembre 2026',
      location: 'Aldeia Timbaúba, Río Gregório, Acre, Brasil',
      price: '€2,000 (intercambio de energía)',
      duration: '7 días en el bosque + 3 noches de hotel',
      travelDays: '12 sept (llegada) → 21 sept (salida)',
    },
    team: {
      title: 'Tu equipo puente',
      members: [
        { name: 'Patricia', role: 'Bienvenida y traducción' },
        { name: 'Gabriela', role: 'Interpretación ceremonial e integración' },
        { name: 'Elias', role: 'Operaciones de campo y logística' },
      ],
    },
    program: {
      title: 'Resumen del programa',
      timeline: [
        { day: 'Día 0', date: '12 sept', activity: 'Llegada a Cruzeiro do Sul. Check-in hotel. Aterrizaje.' },
        { day: 'Día 1', date: '13 sept', activity: 'Día de preparación. Reunión grupal. Briefings finales.' },
        { day: 'Día 2', date: '14 sept', activity: 'Viaje al bosque. ~4h bus + ~6h bote. Llegada a Aldeia Timbaúba.' },
        { day: 'Días 3–7', date: '15–19 sept', activity: 'Cinco días en comunidad. Ceremonias, silencio, tiempo en el bosque.' },
        { day: 'Día 8', date: '20 sept', activity: 'Viaje de regreso a Cruzeiro do Sul. Última noche de hotel.' },
        { day: 'Día 9', date: '21 sept', activity: 'Vuelos de salida.' },
      ],
      inAldeia: {
        title: 'En la comunidad',
        items: [
          'Pintura corporal tradicional',
          'Ceremonia de Kambo y baño medicinal',
          'Ceremonia de Rapé',
          'Canciones bajo el árbol Samaúma',
          'Ceremonias de apertura y cierre',
        ],
      },
      included: {
        title: 'Incluido',
        items: [
          'Todas las noches de hotel (2 antes + 1 después)',
          'Todas las noches en la aldea',
          'Desayuno del hotel',
          'Tres comidas por día en la aldea',
          'Todos los traslados (aeropuerto, bus, bote)',
          'Guía espiritual y ceremonias',
          'Materiales de preparación y videollamada grupal',
          'Sesión de integración ~6 semanas después',
        ],
      },
      notIncluded: {
        title: 'No incluido',
        items: [
          'Vuelos internacionales y nacionales',
          'Snacks, souvenirs y regalos personales (opcional)',
          'Seguro de viaje (requerido)',
        ],
      },
    },
    safety: {
      title: 'Seguridad, ética y logística',
      preparation: {
        title: 'Lista de preparación',
        items: [
          'Ropa ligera de manga larga (colores neutros)',
          'Botella con filtro de agua (muy recomendado)',
          'Efectivo para snacks y regalos (reales brasileños)',
          'Medicamentos personales y botiquín básico',
          'Repelente de insectos y protector solar',
          'Linterna frontal o de mano',
          'Diario para reflexiones',
        ],
      },
      ethics: {
        title: 'Nuestro compromiso ético',
        statement: 'Trabajamos en alianza directa con el liderazgo comunitario. Todas las actividades son guiadas por sus protocolos y consentimiento. No extraemos conocimiento—participamos en relación. Tu presencia apoya directamente a la comunidad.',
      },
      privacy: {
        title: 'Datos y privacidad',
        statement: 'Los datos de tu aplicación se mantienen confidenciales y se usan solo para la coordinación de la expedición. No compartimos información personal con terceros. Los detalles ceremoniales se comparten solo con quienes necesitan saber para tu seguridad y preparación.',
      },
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          question: '¿Necesito hablar portugués?',
          answer: 'No. Nuestro equipo puente proporciona traducción e interpretación durante todo el viaje. Sin embargo, se aprecia la disposición para aprender algunas frases básicas.',
        },
        {
          question: '¿Qué debo empacar?',
          answer: 'Recibirás una lista de empaque detallada después de que se acepte tu aplicación. Esenciales: ropa ligera de manga larga, botella con filtro, efectivo, medicamentos personales y una mente abierta.',
        },
        {
          question: '¿Cómo funciona el pago?',
          answer: 'El intercambio de energía de €2,000 se paga en cuotas. Un depósito asegura tu lugar, con el saldo debido antes de la salida. Hay planes de pago disponibles.',
        },
        {
          question: '¿Los vuelos están incluidos?',
          answer: 'No. Reservas tus propios vuelos a/desde Cruzeiro do Sul (CZS). Proporcionamos orientación sobre rutas y tiempos. La mayoría de participantes vuelan vía Brasília o Rio Branco.',
        },
        {
          question: '¿Cómo funciona el proceso de reserva?',
          answer: '1) Aplica mediante el formulario. 2) Programamos una llamada para alinear expectativas. 3) Si encaja, recibes materiales de preparación y detalles de pago. 4) Videollamada grupal pre-expedición. 5) Viajamos juntos.',
        },
        {
          question: '¿Qué pasa con las ceremonias?',
          answer: 'Los detalles ceremoniales se comparten con participantes confirmados durante la preparación. Todas las ceremonias son opcionales y guiadas por protocolos comunitarios. Tu seguridad y consentimiento son primordiales.',
        },
      ],
    },
    apply: {
      title: 'Aplica para la expedición',
      subtitle: 'Este es el primer paso. Cuéntanos sobre ti, y nos pondremos en contacto dentro de 48 horas.',
    },
    call: {
      title: 'Reserva tu llamada de alineación',
      subtitle: 'Una conversación de 30 minutos para responder tus preguntas y asegurar que este viaje sea adecuado para ti.',
    },
    thankYou: {
      title: 'Gracias. El bosque te escuchó.',
      steps: [
        { title: '1. Revisa tu correo', description: 'Te hemos enviado una confirmación. Si no la ves, revisa tu carpeta de spam.' },
        { title: '2. Reserva tu llamada', description: 'Programa tu llamada de alineación para discutir detalles y siguientes pasos.' },
        { title: '3. Recibe el kit de preparación', description: 'Después de tu llamada, obtendrás acceso a los materiales completos de preparación.' },
      ],
    },
    footer: {
      languageSwitcher: 'Idioma',
    },
  },
};

export function getContent(lang: Language): Content {
  return content[lang];
}
