(function () {
  'use strict';

  /* ---- translation table ---- */
  /* Keys used with data-i18n (textContent): plain Unicode, no HTML entities.
     Keys used with data-i18n-html (innerHTML): HTML entities / <br> allowed.  */
  var T = {
    en: {
      /* nav */
      nav_process:  'Process',
      nav_projects: 'Projects',
      nav_roi:      'ROI Estimate',
      nav_contact:  'Contact',
      nav_cta:      'Schedule a Deep-Dive',

      /* hero */
      hero_eyebrow: 'Robotics & Process Automation',
      hero_line1:   'Turn Manual Work',
      hero_line2:   'Into Automated',
      hero_line3:   'Results.',
      hero_sub:     'From robotics prototypes to full process automation — PROTONU helps companies in hardware, software and embedded systems move faster, cut costs, and scale with confidence.',
      hero_cta:     'Request a System Audit',
      hero_compat:  'No hardware overhaul required &middot; Integrates with existing PLC &amp; SCADA systems',

      /* stats */
      stat_projects:   'Projects Delivered',
      stat_industries: 'Industries',
      stat_years:      'Years Active',

      /* proof */
      proof_eyebrow:    'Client Results',
      proof_title:      'Real results,<br>in production.',
      proof_q1_text:    '“Ibrahim joined as CTO and immediately brought structure to what was a very complex engineering challenge. He built the team, designed the electronics architecture, and kept development on track from first prototype through to shareholder demos.”',
      proof_q1_name:    'Founder, Davinci Kitchen',
      proof_q1_company: 'Davinci Kitchen',
      proof_q2_text:    '“The robotic EV charging system PROTONU developed for us eliminated the need for any driver interaction at the charge port — the simulation was accurate, the integration clean, and delivery was on schedule.”',
      proof_q2_name:    'Engineering Lead, Kopernikus Automotive',
      proof_q2_company: 'Kopernikus Automotive',

      /* process */
      process_eyebrow: 'The Process',
      process_title:   'Three steps.<br>Real results.',
      process_intro:   'Every project follows the same rigorous method — built around your goals, your constraints, and your timeline.',
      process_1_title: 'Discover & Define',
      process_1_desc:  'We map your current workflow, pinpoint the biggest automation opportunities and agree on measurable goals before a single line of code is written.',
      process_2_title: 'Prototype & Validate',
      process_2_desc:  'A working prototype — hardware, software or both — proves the concept with your team. Iterate fast, validate early, avoid expensive late-stage surprises.',
      process_3_title: 'Deploy & Optimise',
      process_3_desc:  'We deploy the production solution, measure real-world performance against your goals, and fine-tune until the results speak for themselves.',

      /* projects */
      projects_eyebrow: 'Case Studies',
      projects_title:   'Selected Work',
      projects_hint:    'Click any project to explore',

      /* roi */
      roi_eyebrow:        'Free Estimate',
      roi_title:          'How much could<br>you save?',
      roi_sub:            'Enter your current operation below for an instant estimate. A scoping call unlocks the full financial model tailored to your process.',
      roi_cta:            'Get Your Detailed Report →',
      roi_note:           'Pick your slot instantly — no waiting, no sales rep, no obligation.',
      roi_label_industry: 'Industry',
      roi_label_hours:    'Manual hours&nbsp;/ day on target task',
      roi_label_workers:  'Workers on this task',
      roi_label_rate:     'Avg. hourly labour cost (&euro;)',
      roi_out_saving:     'Est. annual saving',
      roi_out_payback:    'Typical payback period',
      roi_disclaimer:     'Based on industry benchmarks assuming ~65&nbsp;% automation efficiency gain. Actual results vary by process complexity.',
      _roiOptions: [
        { value: '1.0',  label: 'Manufacturing' },
        { value: '1.1',  label: 'Logistics &amp; Warehousing' },
        { value: '1.05', label: 'Food &amp; Beverage' },
        { value: '0.95', label: 'Automotive' },
        { value: '0.85', label: 'Other' },
      ],

      /* compat */
      compat_label:     'Skills · Protocols · Software',
      compat_assurance: 'From PCB to pipeline &middot; Hardware, vision, software — every layer, in-house',

      /* cta banner */
      cta_eyebrow:  'Let’s Build Something',
      cta_title:    'Ready to automate<br>your next project?',
      cta_sub:      'Book a free 30-minute strategy call. We’ll audit your process, identify automation opportunities, and walk through your ROI projection — no sales pitch, no obligation.',
      cta_schedule: 'Schedule Your Free Audit',
      cta_whatsapp: 'Message on WhatsApp',

      /* footer + modal */
      footer_copy: '&copy; PROTONU 2018 &ndash; {year} All Rights Reserved.',
      modal_visit: 'Visit Website',
    },

    de: {
      nav_process:  'Prozess',
      nav_projects: 'Projekte',
      nav_roi:      'ROI-Rechner',
      nav_contact:  'Kontakt',
      nav_cta:      'Termin vereinbaren',

      hero_eyebrow: 'Robotik & Prozessautomatisierung',
      hero_line1:   'Manuelle Arbeit',
      hero_line2:   'automatisch',
      hero_line3:   'erledigt.',
      hero_sub:     'Von Robotik-Prototypen bis zur vollständigen Prozessautomatisierung — PROTONU hilft Unternehmen in Hardware, Software und eingebetteten Systemen, schneller zu werden, Kosten zu senken und sicher zu skalieren.',
      hero_cta:     'System-Audit anfordern',
      hero_compat:  'Kein Hardware-Umbau erforderlich &middot; Integration in bestehende SPS- &amp; SCADA-Systeme',

      stat_projects:   'Abgeschlossene Projekte',
      stat_industries: 'Branchen',
      stat_years:      'Jahre Erfahrung',

      proof_eyebrow:    'Kundenergebnisse',
      proof_title:      'Echte Ergebnisse,<br>im Betrieb.',
      proof_q1_text:    '„Ibrahim übernahm die CTO-Rolle und brachte sofort Struktur in eine sehr komplexe Ingenieursaufgabe. Er baute das Team auf, entwarf die Elektronikarchitektur und hielt die Entwicklung vom ersten Prototyp bis zur Aktionärspräsentation auf Kurs.“',
      proof_q1_name:    'Gründer, Davinci Kitchen',
      proof_q1_company: 'Davinci Kitchen',
      proof_q2_text:    '„Das von PROTONU entwickelte robotische EV-Ladesystem eliminierte jegliche Fahrerinteraktion am Ladeanschluss — die Simulation war präzise, die Integration sauber und die Lieferung termingerecht.“',
      proof_q2_name:    'Engineering Lead, Kopernikus Automotive',
      proof_q2_company: 'Kopernikus Automotive',

      process_eyebrow: 'Der Prozess',
      process_title:   'Drei Schritte.<br>Echte Ergebnisse.',
      process_intro:   'Jedes Projekt folgt derselben rigorosen Methode — ausgerichtet auf Ihre Ziele, Rahmenbedingungen und Ihren Zeitplan.',
      process_1_title: 'Entdecken & Definieren',
      process_1_desc:  'Wir analysieren Ihren aktuellen Workflow, identifizieren die größten Automatisierungspotenziale und einigen uns auf messbare Ziele, bevor eine einzige Zeile Code geschrieben wird.',
      process_2_title: 'Prototyp & Validierung',
      process_2_desc:  'Ein funktionierender Prototyp — Hardware, Software oder beides — beweist das Konzept mit Ihrem Team. Schnell iterieren, früh validieren, kostspielige Spätüberraschungen vermeiden.',
      process_3_title: 'Einführen & Optimieren',
      process_3_desc:  'Wir deployen die Produktionslösung, messen die reale Performance an Ihren Zielen und optimieren, bis die Ergebnisse für sich sprechen.',

      projects_eyebrow: 'Fallstudien',
      projects_title:   'Ausgewählte Projekte',
      projects_hint:    'Klicken Sie auf ein Projekt, um mehr zu erfahren',

      roi_eyebrow:        'Kostenlose Schätzung',
      roi_title:          'Wie viel könnten<br>Sie sparen?',
      roi_sub:            'Geben Sie Ihren aktuellen Betrieb ein für eine sofortige Schätzung. Ein Beratungsgespräch erschließt das vollständige, auf Ihren Prozess zugeschnittene Finanzmodell.',
      roi_cta:            'Detaillierten Bericht anfordern →',
      roi_note:           'Sofort Termin buchen — kein Warten, kein Vertrieb, keine Verpflichtung.',
      roi_label_industry: 'Branche',
      roi_label_hours:    'Manuelle Stunden&nbsp;/ Tag bei der Zieltätigkeit',
      roi_label_workers:  'Mitarbeiter auf dieser Aufgabe',
      roi_label_rate:     'Durchschn. Stundenlohnkosten (&euro;)',
      roi_out_saving:     'Gesch. Jahreseinsparung',
      roi_out_payback:    'Typische Amortisationszeit',
      roi_disclaimer:     'Basierend auf Branchenbenchmarks mit ~65&nbsp;% Automatisierungseffizienzgewinn. Tatsächliche Ergebnisse variieren je nach Prozesskomplexität.',
      _roiOptions: [
        { value: '1.0',  label: 'Fertigung' },
        { value: '1.1',  label: 'Logistik &amp; Lagerhaltung' },
        { value: '1.05', label: 'Lebensmittel &amp; Getränke' },
        { value: '0.95', label: 'Automotive' },
        { value: '0.85', label: 'Sonstiges' },
      ],

      compat_label:     'Fähigkeiten · Protokolle · Software',
      compat_assurance: 'Von der Leiterplatte bis zur Pipeline &middot; Hardware, Vision, Software — jede Schicht, intern',

      cta_eyebrow:  'Lassen Sie uns etwas bauen',
      cta_title:    'Bereit, Ihr nächstes<br>Projekt zu automatisieren?',
      cta_sub:      'Buchen Sie ein kostenloses 30-minütiges Strategiegespräch. Wir prüfen Ihren Prozess, identifizieren Automatisierungspotenziale und gehen Ihre ROI-Projektion durch — kein Verkaufsgespräch, keine Verpflichtung.',
      cta_schedule: 'Kostenloses Audit buchen',
      cta_whatsapp: 'Nachricht auf WhatsApp',

      footer_copy: '&copy; PROTONU 2018 &ndash; {year} Alle Rechte vorbehalten.',
      modal_visit: 'Website besuchen',
    },

    nl: {
      nav_process:  'Proces',
      nav_projects: 'Projecten',
      nav_roi:      'ROI-schatting',
      nav_contact:  'Contact',
      nav_cta:      'Plan een gesprek',

      hero_eyebrow: 'Robotica & Procesautomatisering',
      hero_line1:   'Handmatig werk',
      hero_line2:   'automatisch',
      hero_line3:   'geregeld.',
      hero_sub:     'Van robotica-prototypes tot volledige procesautomatisering — PROTONU helpt bedrijven in hardware, software en embedded systemen sneller te werken, kosten te verlagen en met vertrouwen te schalen.',
      hero_cta:     'Systeemaudit aanvragen',
      hero_compat:  'Geen hardware-renovatie nodig &middot; Integreert met bestaande PLC- &amp; SCADA-systemen',

      stat_projects:   'Opgeleverde projecten',
      stat_industries: 'Sectoren',
      stat_years:      'Jaar actief',

      proof_eyebrow:    'Klantresultaten',
      proof_title:      'Echte resultaten,<br>in productie.',
      proof_q1_text:    '„Ibrahim trad aan als CTO en bracht direct structuur in een zeer complexe technische uitdaging. Hij bouwde het team op, ontwierp de elektronica-architectuur en hield de ontwikkeling op koers van eerste prototype tot aandeelhoudersdemo’s.“',
      proof_q1_name:    'Oprichter, Davinci Kitchen',
      proof_q1_company: 'Davinci Kitchen',
      proof_q2_text:    '„Het robotische EV-laadsysteem dat PROTONU voor ons ontwikkelde, elimineert elke interactie van de bestuurder bij de laadpoort — de simulatie was nauwkeurig, de integratie strak en de levering was op tijd.“',
      proof_q2_name:    'Engineering Lead, Kopernikus Automotive',
      proof_q2_company: 'Kopernikus Automotive',

      process_eyebrow: 'Het proces',
      process_title:   'Drie stappen.<br>Echte resultaten.',
      process_intro:   'Elk project volgt dezelfde rigoureuze methode — afgestemd op uw doelen, beperkingen en tijdlijn.',
      process_1_title: 'Ontdekken & Definiëren',
      process_1_desc:  'We brengen uw huidige workflow in kaart, bepalen de grootste automatiseringskansen en spreken meetbare doelen af voordat er één regel code wordt geschreven.',
      process_2_title: 'Prototype & Valideren',
      process_2_desc:  'Een werkend prototype — hardware, software of beide — bewijst het concept met uw team. Snel itereren, vroeg valideren, dure verrassingen vermijden.',
      process_3_title: 'Implementeren & Optimaliseren',
      process_3_desc:  'We zetten de productieoplossing live, meten de prestaties in de praktijk en finetunen totdat de resultaten voor zichzelf spreken.',

      projects_eyebrow: 'Cases',
      projects_title:   'Geselecteerd werk',
      projects_hint:    'Klik op een project om meer te lezen',

      roi_eyebrow:        'Gratis schatting',
      roi_title:          'Hoeveel kunt<br>u besparen?',
      roi_sub:            'Voer uw huidige situatie in voor een directe schatting. Een intakegesprek ontsluit het volledige financiële model op maat van uw proces.',
      roi_cta:            'Ontvang uw gedetailleerd rapport →',
      roi_note:           'Direct een afspraak inplannen — geen wachten, geen verkoper, geen verplichtingen.',
      roi_label_industry: 'Sector',
      roi_label_hours:    'Handmatige uren&nbsp;/ dag voor deze taak',
      roi_label_workers:  'Medewerkers op deze taak',
      roi_label_rate:     'Gem. uurloonkosten (&euro;)',
      roi_out_saving:     'Gesch. jaarlijkse besparing',
      roi_out_payback:    'Typische terugverdientijd',
      roi_disclaimer:     'Gebaseerd op branchebenchmarks met ~65&nbsp;% automatiseringsefficiëntiewinst. Werkelijke resultaten variëren per procescomplexiteit.',
      _roiOptions: [
        { value: '1.0',  label: 'Productie' },
        { value: '1.1',  label: 'Logistiek &amp; Opslag' },
        { value: '1.05', label: 'Voeding &amp; Dranken' },
        { value: '0.95', label: 'Automotive' },
        { value: '0.85', label: 'Overig' },
      ],

      compat_label:     'Vaardigheden · Protocollen · Software',
      compat_assurance: 'Van PCB tot pipeline &middot; Hardware, vision, software — elke laag, intern',

      cta_eyebrow:  'Laten we iets bouwen',
      cta_title:    'Klaar om uw volgende<br>project te automatiseren?',
      cta_sub:      'Boek een gratis 30-minuten strategiegesprek. We auditen uw proces, identificeren automatiseringskansen en nemen uw ROI-projectie door — geen verkoopgespräch, geen verplichtingen.',
      cta_schedule: 'Plan uw gratis audit',
      cta_whatsapp: 'Stuur een WhatsApp',

      footer_copy: '&copy; PROTONU 2018 &ndash; {year} Alle rechten voorbehouden.',
      modal_visit: 'Website bezoeken',
    },

    fr: {
      nav_process:  'Processus',
      nav_projects: 'Projets',
      nav_roi:      'Estimation ROI',
      nav_contact:  'Contact',
      nav_cta:      'Prendre rendez-vous',

      hero_eyebrow: 'Robotique & Automatisation des procédés',
      hero_line1:   'Transformer le travail',
      hero_line2:   'manuel en résultats',
      hero_line3:   'automatisés.',
      hero_sub:     'Des prototypes robotiques à l’automatisation complète des procédés — PROTONU aide les entreprises en matériel, logiciel et systèmes embarqués à aller plus vite, réduire les coûts et se développer en confiance.',
      hero_cta:     'Demander un audit système',
      hero_compat:  'Aucune refonte matérielle requise &middot; S’intègre aux systèmes PLC &amp; SCADA existants',

      stat_projects:   'Projets livrés',
      stat_industries: 'Secteurs',
      stat_years:      'Années d’activité',

      proof_eyebrow:    'Résultats clients',
      proof_title:      'De vrais résultats,<br>en production.',
      proof_q1_text:    '« Ibrahim a rejoint l’équipe en tant que CTO et a immédiatement apporté de la structure à un défi d’ingénierie très complexe. Il a constitué l’équipe, conçu l’architecture électronique et maintenu le développement sur les rails du premier prototype aux démos actionnaires. »',
      proof_q1_name:    'Fondateur, Davinci Kitchen',
      proof_q1_company: 'Davinci Kitchen',
      proof_q2_text:    '« Le système de recharge EV robotique développé par PROTONU a supprimé toute interaction du conducteur — la simulation était précise, l’intégration propre et la livraison dans les délais. »',
      proof_q2_name:    'Responsable ingénierie, Kopernikus Automotive',
      proof_q2_company: 'Kopernikus Automotive',

      process_eyebrow: 'Le processus',
      process_title:   'Trois étapes.<br>De vrais résultats.',
      process_intro:   'Chaque projet suit la même méthode rigoureuse — construite autour de vos objectifs, de vos contraintes et de votre calendrier.',
      process_1_title: 'Découvrir & Définir',
      process_1_desc:  'Nous cartographions votre flux de travail actuel, identifions les plus grandes opportunités d’automatisation et convenons d’objectifs mesurables avant qu’une seule ligne de code ne soit écrite.',
      process_2_title: 'Prototyper & Valider',
      process_2_desc:  'Un prototype fonctionnel — matériel, logiciel ou les deux — prouve le concept avec votre équipe. Itérer vite, valider tôt, éviter les mauvaises surprises tardives.',
      process_3_title: 'Déployer & Optimiser',
      process_3_desc:  'Nous déployons la solution de production, mesurons les performances réelles par rapport à vos objectifs et ajustons jusqu’à ce que les résultats parlent d’eux-mêmes.',

      projects_eyebrow: 'Études de cas',
      projects_title:   'Projets sélectionnés',
      projects_hint:    'Cliquez sur un projet pour explorer',

      roi_eyebrow:        'Estimation gratuite',
      roi_title:          'Combien pourriez-vous<br>économiser ?',
      roi_sub:            'Saisissez votre opération actuelle pour une estimation instantanée. Un appel de cadrage débloque le modèle financier complet adapté à votre processus.',
      roi_cta:            'Obtenir votre rapport détaillé →',
      roi_note:           'Choisissez votre créneau instantanément — pas d’attente, pas de commercial, pas d’obligation.',
      roi_label_industry: 'Secteur',
      roi_label_hours:    'Heures manuelles&nbsp;/ jour sur la tâche cible',
      roi_label_workers:  'Employés sur cette tâche',
      roi_label_rate:     'Coût horaire moyen (&euro;)',
      roi_out_saving:     'Économie annuelle est.',
      roi_out_payback:    'Délai de retour typique',
      roi_disclaimer:     'Basé sur des benchmarks sectoriels supposant ~65&nbsp;% de gain d’efficacité. Les résultats réels varient selon la complexité du processus.',
      _roiOptions: [
        { value: '1.0',  label: 'Industrie manufacturière' },
        { value: '1.1',  label: 'Logistique &amp; Entreposage' },
        { value: '1.05', label: 'Agroalimentaire' },
        { value: '0.95', label: 'Automobile' },
        { value: '0.85', label: 'Autre' },
      ],

      compat_label:     'Compétences · Protocoles · Logiciels',
      compat_assurance: 'Du PCB au pipeline &middot; Matériel, vision, logiciel — chaque couche, en interne',

      cta_eyebrow:  'Construisons quelque chose',
      cta_title:    'Prêt à automatiser<br>votre prochain projet ?',
      cta_sub:      'Réservez un appel stratégique gratuit de 30 minutes. Nous auditerons votre processus, identifierons les opportunités d’automatisation et passerons en revue votre projection ROI — pas d’argumentaire de vente, pas d’obligation.',
      cta_schedule: 'Planifier votre audit gratuit',
      cta_whatsapp: 'Message sur WhatsApp',

      footer_copy: '&copy; PROTONU 2018 &ndash; {year} Tous droits réservés.',
      modal_visit: 'Visiter le site',
    },

    es: {
      nav_process:  'Proceso',
      nav_projects: 'Proyectos',
      nav_roi:      'Estimación ROI',
      nav_contact:  'Contacto',
      nav_cta:      'Agendar una llamada',

      hero_eyebrow: 'Robótica & Automatización de procesos',
      hero_line1:   'Convierte el trabajo',
      hero_line2:   'manual en resultados',
      hero_line3:   'automatizados.',
      hero_sub:     'Desde prototipos robóticos hasta la automatización completa de procesos — PROTONU ayuda a empresas de hardware, software y sistemas embebidos a ir más rápido, reducir costes y escalar con confianza.',
      hero_cta:     'Solicitar una auditoría',
      hero_compat:  'Sin necesidad de renovar hardware &middot; Se integra con sistemas PLC &amp; SCADA existentes',

      stat_projects:   'Proyectos entregados',
      stat_industries: 'Industrias',
      stat_years:      'Años activos',

      proof_eyebrow:    'Resultados de clientes',
      proof_title:      'Resultados reales,<br>en producción.',
      proof_q1_text:    '«Ibrahim se incorporó como CTO y aportó estructura de inmediato a un reto de ingeniería muy complejo. Formó el equipo, diseñó la arquitectura electrónica y mantuvo el desarrollo en marcha desde el primer prototipo hasta las demostraciones a accionistas.»',
      proof_q1_name:    'Fundador, Davinci Kitchen',
      proof_q1_company: 'Davinci Kitchen',
      proof_q2_text:    '«El sistema robótico de recarga de vehículos eléctricos que PROTONU desarrolló para nosotros eliminó cualquier interacción del conductor en el conector de carga — la simulación fue precisa, la integración limpia y la entrega puntual.»',
      proof_q2_name:    'Responsable de ingeniería, Kopernikus Automotive',
      proof_q2_company: 'Kopernikus Automotive',

      process_eyebrow: 'El proceso',
      process_title:   'Tres pasos.<br>Resultados reales.',
      process_intro:   'Cada proyecto sigue el mismo método riguroso — construido alrededor de sus objetivos, sus limitaciones y su calendario.',
      process_1_title: 'Descubrir & Definir',
      process_1_desc:  'Mapeamos su flujo de trabajo actual, identificamos las mayores oportunidades de automatización y acordamos objetivos medibles antes de que se escriba una sola línea de código.',
      process_2_title: 'Prototipar & Validar',
      process_2_desc:  'Un prototipo funcional — hardware, software o ambos — prueba el concepto con su equipo. Iterar rápido, validar pronto, evitar costosas sorpresas tardías.',
      process_3_title: 'Implementar & Optimizar',
      process_3_desc:  'Desplegamos la solución de producción, medimos el rendimiento real frente a sus objetivos y ajustamos hasta que los resultados hablen por sí mismos.',

      projects_eyebrow: 'Casos de éxito',
      projects_title:   'Trabajo seleccionado',
      projects_hint:    'Haz clic en un proyecto para explorar',

      roi_eyebrow:        'Estimación gratuita',
      roi_title:          '¿Cuánto podría<br>ahorrar?',
      roi_sub:            'Introduzca su operación actual para una estimación instantánea. Una llamada de alcance desbloquea el modelo financiero completo adaptado a su proceso.',
      roi_cta:            'Obtener su informe detallado →',
      roi_note:           'Reserve su espacio al instante — sin esperas, sin comerciales, sin compromiso.',
      roi_label_industry: 'Sector',
      roi_label_hours:    'Horas manuales&nbsp;/ día en la tarea objetivo',
      roi_label_workers:  'Trabajadores en esta tarea',
      roi_label_rate:     'Coste laboral por hora (&euro;)',
      roi_out_saving:     'Ahorro anual est.',
      roi_out_payback:    'Período de retorno típico',
      roi_disclaimer:     'Basado en benchmarks del sector asumiendo ~65&nbsp;% de ganancia en eficiencia. Los resultados reales varían según la complejidad del proceso.',
      _roiOptions: [
        { value: '1.0',  label: 'Fabricación' },
        { value: '1.1',  label: 'Logística &amp; Almacenamiento' },
        { value: '1.05', label: 'Alimentación &amp; Bebidas' },
        { value: '0.95', label: 'Automotriz' },
        { value: '0.85', label: 'Otro' },
      ],

      compat_label:     'Habilidades · Protocolos · Software',
      compat_assurance: 'Del PCB al pipeline &middot; Hardware, visión, software — cada capa, en casa',

      cta_eyebrow:  'Construyamos algo juntos',
      cta_title:    '¿Listo para automatizar<br>su próximo proyecto?',
      cta_sub:      'Reserve una llamada estratégica gratuita de 30 minutos. Auditaremos su proceso, identificaremos oportunidades de automatización y repasaremos su proyección de ROI — sin discurso de ventas, sin compromiso.',
      cta_schedule: 'Programar su auditoría gratuita',
      cta_whatsapp: 'Mensaje por WhatsApp',

      footer_copy: '&copy; PROTONU 2018 &ndash; {year} Todos los derechos reservados.',
      modal_visit: 'Visitar el sitio web',
    },
  };

  var LANGS = ['en', 'de', 'nl', 'fr', 'es'];

  function detectLang() {
    var stored = localStorage.getItem('protonu_lang');
    if (stored && LANGS.indexOf(stored) !== -1) return stored;
    var nav = (navigator.language || '').slice(0, 2).toLowerCase();
    return LANGS.indexOf(nav) !== -1 ? nav : 'en';
  }

  function applyLang(lang) {
    var t = T[lang] || T.en;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.dataset.i18n;
      if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.dataset.i18nHtml;
      if (t[key] !== undefined) {
        el.innerHTML = t[key].replace('{year}', new Date().getFullYear());
      }
    });

    /* rebuild ROI industry select */
    var sel = document.getElementById('roiIndustry');
    if (sel && t._roiOptions) {
      var cur = sel.value;
      sel.innerHTML = '';
      t._roiOptions.forEach(function (opt) {
        var o = document.createElement('option');
        o.value = opt.value;
        o.innerHTML = opt.label;
        sel.appendChild(o);
      });
      if (cur) sel.value = cur;
    }

    /* update switcher active state */
    document.querySelectorAll('.lang-switcher__btn[data-lang]').forEach(function (btn) {
      var isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
    var trigger = document.getElementById('langBtn');
    if (trigger) {
      var cur2 = trigger.querySelector('.lang-switcher__current');
      if (cur2) cur2.textContent = lang.toUpperCase();
    }

    localStorage.setItem('protonu_lang', lang);
  }

  function initSwitcher() {
    var btn  = document.getElementById('langBtn');
    var menu = document.getElementById('langMenu');
    if (!btn || !menu) return;

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    document.addEventListener('click', function () {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });

    menu.addEventListener('click', function (e) {
      var target = e.target.closest('[data-lang]');
      if (!target) return;
      applyLang(target.dataset.lang);
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  }

  function init() {
    initSwitcher();
    applyLang(detectLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
