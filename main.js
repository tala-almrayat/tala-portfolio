const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// If a cover image 404s, try the alternate-extension path (data-alt) once
// before giving up and showing the gradient placeholder.
function coverFallback(img) {
  const alt = img.getAttribute("data-alt");

  if (alt && !img.dataset.altTried) {
    img.dataset.altTried = "1";
    img.src = alt;
    return;
  }

  const thumb = img.closest(".project-thumb");

  if (thumb) {
    thumb.classList.add("cover-missing");
  }

  img.remove();
}

const state = {
  lang: "EN",
  activeCategory: "WebGames",
};

const i18n = {
  EN: {
    role: "Game & Interactive Media Designer",

    nav_projects: "Projects",
    nav_about: "About",
    nav_experience: "Experience",
    nav_contact: "Contact",

    hero_title: "Hi, I’m Tala Almrayat",

    hero_sub:
      "A Game & Interactive Media Designer who works across the full pipeline — game design, UI/UX, 3D and motion — to take an idea from concept to a playable, polished experience.",

    seeking_banner:
      "🎯 Seeking a mandatory 6-month internship (Pflichtpraktikum) in Germany · German B1 · Available from March",

    seeking_banner_2:
      "📍 Currently on an exchange semester at Technische Hochschule Brandenburg (THB) · Based in Germany · Valid residence permit.",

    cv_btn: "Download CV",
    contact_btn: "Contact",

    pill_1: "UI/UX",
    pill_2: "Game Systems",
    pill_3: "Interactive Media",

    featured_kicker: "Graduation Project",
    featured_cta: "Explore Triverse",
    featured_badge_label: "Final Grade",

    featured_hint:
      "Inside you’ll find the trailer, gameplay clips, screenshots and a detailed case study. Playable Windows build available to recruiters upon request.",

    projects_kicker: "PROJECTS",

    projects_h:
      "A selection of creative & technical work across disciplines.",

    filter_hint:
      "Browse by category — tap a tab to switch between project types.",

    about_h: "About",

    about_p:
      "A concise overview — clean, structured, and easy to scan.",

    edu_h: "Education",

    edu_degree:
      "German Jordanian University (GJU) · Bachelor’s Degree in Game Design & Media Informatics",

    exchange_note:
      "Currently an exchange student at Technische Hochschule Brandenburg (THB), Germany.",

    expertise_h: "Fields of Expertise",
    langs_h: "Languages",

    tools_h: "Software & Technical Tools",

    prog_h: "Programming & Development",

    skills_h: "Skills",

    exp_h: "Experience",

    partners_h: "Partners",

    partners_note:
      "Tip: hover or tap to flip the cards and read what I delivered.",

    contact_h: "Contact",

    contact_p:
      "For internships, collaborations, freelance work, or project-based roles.",

    contact_cta_h: "Let’s work together",

    contact_email: "Email",

    contact_back_projects: "View Projects",

    contact_back_top: "Back to top",

    links_h: "Links",

    pdf_portfolio: "Portfolio PDF",

    pdf_download: "Download PDF",

    tab_trailer: "Trailer",
    tab_gameplay: "Gameplay",
    tab_gallery: "Gallery",
    tab_case: "Case Study",

    cs_role: "Role",
    cs_tools: "Tools",
    cs_timeline: "Timeline",
    cs_grade: "Grade",

    tabs_hint:
      "Switch between the tabs above to explore the project.",

    clips_hint:
      "Pick a clip below to play a different gameplay video.",

    gallery_hint:
      "Click a thumbnail below, or use the ‹ › arrows, to browse the screenshots.",

    clip_word: "Clip",

    note_label: "Good to know",

    open_html: "Open prototype",
    open_video: "Open video",
    open_pdf: "Open PDF",
    open_image: "Open image",

    play_browser: "Open Game on itch.io ↗",

    case_role: "My Role",
    case_challenge: "Challenge",
    case_process: "Process",
    case_implementation: "Implementation",
    case_result: "Result",

    portfolio_code_note:
      "This portfolio website was designed and coded by me using HTML, CSS and JavaScript.",
  },

  DE: {
    role: "Game & Interactive Media Designerin",

    nav_projects: "Projekte",
    nav_about: "Über mich",
    nav_experience: "Erfahrung",
    nav_contact: "Kontakt",

    hero_title: "Hi, ich bin Tala Almrayat",

    hero_sub:
      "Eine Game & Interactive Media Designerin, die über die gesamte Pipeline hinweg arbeitet — Game Design, UI/UX, 3D und Motion — um aus einer Idee eine spielbare, ausgereifte Erfahrung zu machen.",

    seeking_banner:
      "🎯 Suche ein 6-monatiges Pflichtpraktikum in Deutschland · Deutsch B1 · Verfügbar ab März",

    seeking_banner_2:
      "📍 Derzeit im Austauschsemester an der Technischen Hochschule Brandenburg (THB) · In Deutschland wohnhaft · Gültiger Aufenthaltstitel.",

    cv_btn: "Lebenslauf herunterladen",
    contact_btn: "Kontakt",

    pill_1: "UI/UX",
    pill_2: "Game Systems",
    pill_3: "Interaktive Medien",

    featured_kicker: "Abschlussprojekt",

    featured_cta: "Triverse entdecken",

    featured_badge_label: "Endnote",

    featured_hint:
      "Darin findest du Trailer, Gameplay-Clips, Screenshots und eine ausführliche Case Study. Spielbarer Windows-Build für Recruiter auf Anfrage verfügbar.",

    projects_kicker: "PROJEKTE",

    projects_h:
      "Eine Auswahl kreativer & technischer Arbeiten über verschiedene Disziplinen.",

    filter_hint:
      "Nach Kategorie stöbern – Tab antippen, um zwischen den Projekttypen zu wechseln.",

    about_h: "Über mich",

    about_p:
      "Ein kompakter Überblick — klar strukturiert und leicht zu scannen.",

    edu_h: "Ausbildung",

    edu_degree:
      "German Jordanian University (GJU) · Bachelorstudium: Game Design & Media Informatics",

    exchange_note:
      "Derzeit Austauschstudentin an der Technischen Hochschule Brandenburg (THB).",

    expertise_h: "Schwerpunkte",

    langs_h: "Sprachen",

    tools_h: "Software & technische Tools",

    prog_h: "Programmierung & Entwicklung",

    skills_h: "Skills",

    exp_h: "Erfahrung",

    partners_h: "Partner",

    partners_note:
      "Tipp: Hover oder Tippen, um die Karten zu drehen und Details zu sehen.",

    contact_h: "Kontakt",

    contact_p:
      "Für Praktika, Kooperationen, Freelance-Projekte oder projektbasierte Rollen.",

    contact_cta_h: "Lass uns zusammenarbeiten",

    contact_email: "E-Mail",

    contact_back_projects: "Projekte ansehen",

    contact_back_top: "Nach oben",

    links_h: "Links",

    pdf_portfolio: "Portfolio PDF",

    pdf_download: "PDF herunterladen",

    tab_trailer: "Trailer",
    tab_gameplay: "Gameplay",
    tab_gallery: "Galerie",
    tab_case: "Case Study",

    cs_role: "Rolle",
    cs_tools: "Tools",
    cs_timeline: "Dauer",
    cs_grade: "Note",

    tabs_hint:
      "Über die Tabs oben kannst du das Projekt erkunden.",

    clips_hint:
      "Unten einen Clip auswählen, um ein anderes Gameplay-Video abzuspielen.",

    gallery_hint:
      "Unten auf ein Vorschaubild klicken oder die Pfeile ‹ › nutzen, um die Screenshots anzusehen.",

    clip_word: "Clip",

    note_label: "Gut zu wissen",

    open_html: "Prototyp öffnen",
    open_video: "Video öffnen",
    open_pdf: "PDF öffnen",
    open_image: "Bild öffnen",

    play_browser: "Spiel auf itch.io öffnen ↗",

    case_role: "Meine Rolle",
    case_challenge: "Herausforderung",
    case_process: "Prozess",
    case_implementation: "Umsetzung",
    case_result: "Ergebnis",

    portfolio_code_note:
      "Diese Portfolio-Website habe ich selbst mit HTML, CSS und JavaScript gestaltet und programmiert.",
  },
};

const educationItems = {
  EN: [
    "Interactive Media Development",
    "Game Systems & Mechanics",
    "UI/UX Design",
    "Visual Programming",
    "3D Environments & Digital Experiences",
  ],

  DE: [
    "Interaktive Medienentwicklung",
    "Game Systems & Mechanics",
    "UI/UX Design",
    "Visuelle Programmierung",
    "3D-Umgebungen & digitale Erlebnisse",
  ],
};

const expertiseItems = {
  EN: [
    "Game Development",
    "Game Design",
    "UI/UX Design",
    "Virtual Reality (VR)",
    "Augmented Reality (AR)",
    "3D Design",
    "Interactive Media",
    "Website Development",
    "Graphic Design",
  ],

  DE: [
    "Game Development",
    "Game Design",
    "UI/UX Design",
    "Virtual Reality (VR)",
    "Augmented Reality (AR)",
    "3D Design",
    "Interaktive Medien",
    "Webentwicklung",
    "Graphic Design",
  ],
};

const languageItems = {
  EN: [
    "Arabic — Native",
    "English —  B2",
    "German — B1",
  ],

  DE: [
    "Arabisch — Muttersprache",
    "Englisch — B2",
    "Deutsch — B1",
  ],
};

const programming = [
  "C#",
  "Unity",
  "OOP",
  "C++",
  "C",
  "HTML",
  "CSS",
  "JavaScript",
  "Kotlin",
  "SQL",
  "Database Systems",
];

const skills = [
  "Creative Problem Solving",
  "Interactive Thinking",
  "Visual Storytelling",
  "Cross-disciplinary Design & Development",
  "Team Collaboration",
  "Digital Experience Design",
  "Game & Interaction Design",
  "Prototyping",
  "Strong Visual Composition",
];

const tools = [
  {
    name: "Adobe Photoshop",
    badge: "Ps",
    icon: "./assets/icons/assetsiconsps.svg.svg",
    descEN: "Image editing & compositing",
    descDE: "Bildbearbeitung & Compositing",
  },

  {
    name: "Adobe Illustrator",
    badge: "Ai",
    icon: "./assets/icons/assetsiconsai.svg.svg",
    descEN: "Vector design & layout",
    descDE: "Vektordesign & Layout",
  },

  {
    name: "Adobe Animate",
    badge: "An",
    icon: "./assets/icons/assetsiconsan.svg.svg",
    descEN: "2D animation workflows",
    descDE: "2D-Animation Workflows",
  },

  {
    name: "Adobe InDesign",
    badge: "Id",
    icon: "./assets/icons/assetsiconsid.svg.svg",
    descEN: "Editorial & layout design",
    descDE: "Editorial- & Layout-Design",
  },

  {
    name: "Blender",
    badge: "Bl",
    icon: "./assets/icons/assetsiconsblender.svg.svg",
    descEN: "3D modeling & scenes",
    descDE: "3D-Modelling & Szenen",
  },

  {
    name: "Unity",
    badge: "Un",
    icon: "./assets/icons/assetsiconsunity.svg.svg",
    descEN: "Real-time interactive projects",
    descDE: "Interaktive Echtzeit-Projekte",
  },

  {
    name: "Unreal Engine",
    badge: "UE",
    icon: "./assets/icons/assetsiconsunreal.svg.svg",
    descEN: "Real-time 3D & interactive",
    descDE: "Echtzeit-3D & Interaktiv",
  },

  {
    name: "Figma",
    badge: "Fi",
    icon: "./assets/icons/assetsiconsfigma.svg.svg",
    descEN: "UI/UX & prototyping",
    descDE: "UI/UX & Prototyping",
  },
];

const experience = [
  {
    roleEN: "Game Development Trainee",

    roleDE:
      "Praktikantin im Bereich Spieleentwicklung",

    org: "Tamatem Games",

    periodEN: "June – July 2026",
    periodDE: "Juni – Juli 2026",

    bulletsEN: [
      "Hands-on training in game development at a mobile games studio",
      "Worked on game prototyping, gameplay flow and level feel",
      "Collaborated with designers and developers inside a real production pipeline",
    ],

    bulletsDE: [
      "Praxisnahe Ausbildung in der Spieleentwicklung bei einem Mobile-Games-Studio",
      "Arbeit an Game-Prototyping, Gameplay-Flow und Level-Feeling",
      "Zusammenarbeit mit Designer:innen und Entwickler:innen in einem echten Produktionsprozess",
    ],
  },

  {
    roleEN: "UI/UX & Digital Media Intern",

    roleDE:
      "Praktikum im Bereich UI/UX & Digital Media",

    org: "Tomandora",

    periodEN: "August 2022 – 2023",
    periodDE: "August 2022 – 2023",

    bulletsEN: [
      "Developed digital brand identities",
      "Created high-fidelity designs for different platforms",
      "Supported design work with AI tools for ideation, visual refinement, and workflow efficiency",
    ],

    bulletsDE: [
      "Entwicklung digitaler Markenidentitäten",
      "Erstellung von High-Fidelity-Designs für verschiedene Plattformen",
      "Unterstützung von Designprozessen mit KI-Tools für Ideenfindung, visuelle Optimierung und effizientere Workflows",
    ],
  },

  {
    roleEN: "Graphic Design Intern",

    roleDE: "Praktikum im Bereich Grafikdesign",

    org: "Dar Al-Funoun",

    periodEN: "2021",
    periodDE: "2021",

    bulletsEN: [
      "Designed logo concepts and visual identity elements",
      "Worked on magazine layouts, print visuals, and presentation materials",
    ],

    bulletsDE: [
      "Gestaltung von Logo-Konzepten und visuellen Identitätselementen",
      "Arbeit an Magazinlayouts, Print-Visuals und Präsentationsmaterialien",
    ],
  },
];

const partners = {
  EN: [
    {
      name: "Mercy Corps",
      tag: "Slides",
      desc: "Illustrated slide decks via Tomandora.",
    },

    {
      name: "Ministry of Youth",
      tag: "Layout",
      desc: "Illustrator-based slides for youth programs.",
    },

    {
      name: "USAID",
      tag: "Visuals",
      desc: "Layout and visuals for presentation decks.",
    },

    {
      name: "ActionAid",
      tag: "Decks",
      desc: "Branded, illustrated presentation materials.",
    },

    {
      name: "WomenMark",
      tag: "Awareness",
      desc: "Visuals for awareness campaigns.",
    },

    {
      name: "Ministry of Local Administration",
      tag: "Slides",
      desc: "Formal slides for institutional use.",
    },
  ],

  DE: [
    {
      name: "Mercy Corps",
      tag: "Folien",
      desc: "Illustrierte Folien über Tomandora.",
    },

    {
      name: "Ministry of Youth",
      tag: "Layout",
      desc: "Illustrator-Folien für Jugendprogramme.",
    },

    {
      name: "USAID",
      tag: "Visuals",
      desc: "Layout und Visuals für Präsentationen.",
    },

    {
      name: "ActionAid",
      tag: "Decks",
      desc: "Illustrierte Materialien im Corporate Design.",
    },

    {
      name: "WomenMark",
      tag: "Awareness",
      desc: "Visuals für Awareness-Kampagnen.",
    },

    {
      name: "Ministry of Local Administration",
      tag: "Folien",
      desc: "Formale Folien für institutionelle Zwecke.",
    },
  ],
};

const projectCategories = [
  {
    key: "WebGames",
    EN: "Interactive & Games",
    DE: "Interaktiv & Games",
  },

  {
    key: "Graphic",
    EN: "Graphic & Visual Design",
    DE: "Grafik & Visual Design",
  },

  {
    key: "Motion3D",
    EN: "Motion & 3D",
    DE: "Motion & 3D",
  },
];

/* =====================================================
   FEATURED PROJECT — TRIVERSE
===================================================== */

const featuredProject = {
  id: "triverse",

  titleEN: "Triverse",
  titleDE: "Triverse",

  descEN:
    "A playable 3D adventure developed in Unity, combining game systems, level design, UI/UX, character switching and interactive environmental mechanics.",

  descDE:
    "Ein spielbares 3D-Adventure, entwickelt in Unity, das Game Systems, Level Design, UI/UX, Charakterwechsel und interaktive Umweltmechaniken verbindet.",

  tags: [
    "Graduation Project",
    "Unity",
    "C#",
    "Blender",
  ],

  theme: "theme-triverse",

  grade: "100 / 100",

  icon:
    "./assets/triverse/game%20icon.jpeg",

  gallery: [
    "./assets/triverse/all%203d.jpeg",
    "./assets/triverse/menu.jpeg",
    "./assets/triverse/forest.jpeg",
    "./assets/triverse/lava.jpeg",
    "./assets/triverse/ice.jpeg",
    "./assets/triverse/deer.jpeg",
    "./assets/triverse/girls.jpeg",
    "./assets/triverse/items.jpeg",
    "./assets/triverse/sc1.jpeg",
  ],

  gameplay: [
    "./assets/triverse/v1.mp4",
    "./assets/triverse/v2.mp4",
    "./assets/triverse/v3.mp4",
    "./assets/triverse/v4.mp4",
    "./assets/triverse/v5.mp4",
  ],

  demo:
    "./assets/triverse/trailer.mp4",

  type: "video",

  /* Public itch.io project page. The private download key is intentionally NOT stored in the portfolio code. */
  playable: "https://tala-almrayat.itch.io/triverse",
};

const triverseCaseStudy = {
  roleEN:
    "Lead Game Designer & Technical Developer",

  roleDE:
    "Lead Game Designerin & technische Entwicklerin",

  tools:
    "Unity (C#) · Blender · Figma · Photoshop",

  timelineEN: "2 months",

  timelineDE: "2 Monate",

  deliverablesEN:
    "Playable prototype · System architecture · Level layouts · Design documentation",

  deliverablesDE:
    "Spielbarer Prototyp · Systemarchitektur · Level-Layouts · Design-Dokumentation",

  overviewEN:
    "Triverse is a 3D fantasy adventure built in Unity, centered on environmental pollution tracking, character switching and level exploration. The goal was a playable prototype where the systems, UI and level design work together as one clear feedback loop — not separate pieces stitched together.",

  overviewDE:
    "Triverse ist ein 3D-Fantasy-Adventure, entwickelt in Unity, mit Fokus auf Umweltverschmutzungs-Tracking, Charakterwechsel und Level-Exploration. Ziel war ein spielbarer Prototyp, bei dem Systeme, UI und Level-Design als ein klarer Feedback-Loop zusammenspielen — nicht als lose aneinandergereihte Teile.",

  sections: [
    {
      titleEN: "Design Challenge",
      titleDE: "Design-Herausforderung",

      icon: "🧩",

      bodyEN: [
        "Problem: environmental state changes (pollution levels) needed to feel clear and meaningful without cluttering the screen.",
        "Solution: tied pollution tracking directly into the gameplay loop — clearing a zone visibly restores its environment — and built a contextual HUD that only surfaces pollution data when it’s relevant.",
      ],

      bodyDE: [
        "Problem: Veränderungen des Umweltzustands (Verschmutzungsgrad) mussten klar und bedeutsam wirken, ohne den Bildschirm zu überladen.",
        "Lösung: Das Verschmutzungs-Tracking direkt in den Spielablauf eingebunden — das Abschließen einer Zone stellt sichtbar die Umwelt wieder her — und ein kontextabhängiges HUD gebaut, das Verschmutzungsdaten nur bei Relevanz anzeigt.",
      ],
    },

    {
      titleEN: "Core Systems",
      titleDE: "Kernsysteme",

      icon: "⚙️",

      bodyEN: [
        "Character-switching system in C#, built with a modular state-pattern so each character’s movement, abilities and animation triggers stay isolated and easy to extend.",
        "Real-time pollution-tracking system per zone: completing objectives triggers visible material and lighting changes, so progress is felt, not just read off a HUD.",
      ],

      bodyDE: [
        "Charakterwechsel-System in C#, mit modularem State-Pattern, sodass Bewegung, Fähigkeiten und Animations-Trigger jedes Charakters isoliert und leicht erweiterbar bleiben.",
        "Echtzeit-Verschmutzungs-Tracking pro Zone: Abgeschlossene Ziele lösen sichtbare Material- und Lichtveränderungen aus, sodass Fortschritt spürbar ist statt nur angezeigt.",
      ],
    },

    {
      titleEN: "Level Design Process",
      titleDE: "Level-Design-Prozess",

      icon: "🗺️",

      bodyEN: [
        "Grayboxed environments in Unity/Blender first to test player flow and sightlines before placing final assets.",
        "Paced hazard intensity across levels to guide exploration naturally rather than forcing a fixed path.",
        "Brought in and optimized custom environment assets for real-time use in Unity.",
      ],

      bodyDE: [
        "Environments zuerst in Unity/Blender grob geblockt, um Spielfluss und Sichtlinien zu testen, bevor finale Assets platziert wurden.",
        "Gefahren-Intensität über die Level hinweg abgestuft, um Exploration natürlich zu lenken statt einen festen Pfad zu erzwingen.",
        "Eigene Environment-Assets eingebunden und für den Echtzeit-Einsatz in Unity optimiert.",
      ],
    },

    {
      titleEN:
        "UI/UX & Player Feedback",

      titleDE:
        "UI/UX & Spieler-Feedback",

      icon: "🎛️",

      bodyEN: [
        "Designed the HUD (health, status, pollution meter) in Figma, then implemented it in Unity UI (UGUI).",
        "Checked HUD readability for colour contrast so status indicators stay legible for colour-blind players.",
        "Paired key interactions with visual and audio feedback so actions feel responsive.",
      ],

      bodyDE: [
        "HUD (Gesundheit, Status, Verschmutzungsanzeige) in Figma entworfen, dann in Unity UI (UGUI) umgesetzt.",
        "Lesbarkeit des HUDs auf Farbkontrast geprüft, damit Statusanzeigen auch für farbenblinde Spieler:innen erkennbar bleiben.",
        "Wichtige Interaktionen mit visuellem und akustischem Feedback verbunden, damit sich Aktionen reaktionsschnell anfühlen.",
      ],
    },

    {
      titleEN: "Reflection",
      titleDE: "Reflexion",

      icon: "💡",

      bodyEN: [
        "What worked: the modular character system made adding new interactions fast without breaking existing ones.",
        "What I learned: balancing dense 3D environments with a stable frame rate needs performance planning from the start, not after the fact.",
        "Next step: adding a WebGL build so the game can be tested directly in the browser from this portfolio.",
      ],

      bodyDE: [
        "Was gut funktioniert hat: Das modulare Charaktersystem machte neue Interaktionen schnell umsetzbar, ohne Bestehendes zu brechen.",
        "Was ich gelernt habe: Dichte 3D-Umgebungen mit stabiler Framerate zu balancieren, erfordert Performance-Planung von Anfang an.",
        "Nächster Schritt: Ein WebGL-Build hinzufügen, damit das Spiel direkt im Browser über dieses Portfolio getestet werden kann.",
      ],
    },
  ],
};

/* =====================================================
   PROJECTS
===================================================== */

const projects = [
  {
    
  id: "wg1",
  group: "WebGames",

  titleEN:
    "GJU Clean — Facility Cleaning Platform",

  titleDE:
    "GJU Clean — Facility-Cleaning-Plattform",

  descEN:
    "A facility-cleaning application developed as a team project, combining responsive interface design with an Android application built in Kotlin and XML using Android Studio.",

  descDE:
    "Eine Facility-Cleaning-Anwendung, die als Teamprojekt entwickelt wurde und responsives Interface Design mit einer Android-App verbindet, die mit Kotlin und XML in Android Studio umgesetzt wurde.",

  tags: [
    "Kotlin",
    "XML",
    "Android Studio",
    "HTML",
    "CSS"
  ],

  cover:
    "./assets/cover/gju%20clean%20cover.png",

  coverAlt:
    "./assets/cover/gju%20clean%20cover.jpg",

  theme: "theme-gju",

  panes: [
    {
      labelEN:
        "UI Screens (HTML)",

      labelDE:
        "UI-Screens (HTML)",

      type: "html",

      src:
        "./assets/projects/gju-clean-ui.html",

      hintEN:
        "Live HTML screens — you can click and scroll inside the frame.",

      hintDE:
        "Live-HTML-Screens — im Rahmen klicken und scrollen."
    },

    {
      labelEN:
        "Final Android App",

      labelDE:
        "Finale Android-App",

      type: "video",

      src:
        "./assets/projects/GJU%20clean.mp4",

      hintEN:
        "Screen recording of the final Android application developed with Kotlin and XML in Android Studio.",

      hintDE:
        "Bildschirmaufnahme der finalen Android-App, die mit Kotlin und XML in Android Studio entwickelt wurde."
    }
  ],

  demo:
    "./assets/projects/gju-clean-ui.html",

  type: "html",

  noteEN:
    "Team project — I worked on the interface design and implementation, including HTML/CSS interface screens and the final Android application developed with Kotlin and XML in Android Studio.",

  noteDE:
    "Teamprojekt — Ich arbeitete am Interface Design und an der Umsetzung, einschließlich HTML/CSS-Interface-Screens sowie der finalen Android-App mit Kotlin und XML in Android Studio.",

  caseStudy: {
    roleEN:
      "Interface Designer & Android Developer",

    roleDE:
      "Interface Designerin & Android-Entwicklerin",

    challengeEN:
      "Turn a facility-cleaning workflow into a clear mobile application for employees and supervisors with different tasks and responsibilities.",

    challengeDE:
      "Einen Facility-Cleaning-Workflow in eine klare mobile Anwendung für Mitarbeitende und Supervisoren mit unterschiedlichen Aufgaben und Verantwortlichkeiten übertragen.",

    processEN:
      "Planned the required screens and user flow around login, task management and supervisor workflows, then designed the interface for the different user roles.",

    processDE:
      "Die benötigten Screens und den User Flow für Login, Aufgabenverwaltung und Supervisor-Workflows geplant und anschließend die Benutzeroberfläche für die verschiedenen Nutzerrollen gestaltet.",

    implementationEN:
      "Designed and coded responsive interface screens using HTML and CSS, then contributed to the final Android application developed in Android Studio using Kotlin and XML.",

    implementationDE:
      "Responsive Interface-Screens mit HTML und CSS gestaltet und umgesetzt und anschließend an der finalen Android-App mitgearbeitet, die in Android Studio mit Kotlin und XML entwickelt wurde.",

    resultEN:
      "A working facility-cleaning application with dedicated employee and supervisor interfaces, completed collaboratively as a team project.",

    resultDE:
      "Eine funktionierende Facility-Cleaning-Anwendung mit eigenen Oberflächen für Mitarbeitende und Supervisoren, die gemeinsam im Team fertiggestellt wurde."
  }
},
  

  {
    id: "wg2",
    group: "WebGames",

    titleEN:
      "Kids Game — Figma Prototype",

    titleDE:
      "Kinderspiel — Figma-Prototyp",

    descEN:
      "A fully clickable children’s learning-game prototype built in Figma, including UI screens, character art, reusable components and the complete interaction flow.",

    descDE:
      "Ein vollständig klickbarer Prototyp für ein Lernspiel für Kinder — mit UI-Screens, Charakteren, wiederverwendbaren Komponenten und vollständigem Interaktionsfluss.",

    tags: [
      "Figma",
      "Prototype",
      "UI/UX",
      "Game Design",
    ],

    cover:
      "./assets/cover/kids%20game%20cover.jpg",

    theme: "theme-figma",

    demo:
      "./assets/projects/figma.mp4",

    type: "video",

    noteEN:
      "Walkthrough of the interactive prototype: every screen, component and connection was made by me in Figma, including the character art and the reusable component library.",

    noteDE:
      "Walkthrough des interaktiven Prototyps: Alle Screens, Komponenten und Verknüpfungen habe ich in Figma erstellt — inklusive Charakter-Artwork und wiederverwendbarer Komponenten-Bibliothek.",

    caseStudy: {
      roleEN:
        "Game UI/UX Designer + Prototype Designer",

      roleDE:
        "Game UI/UX Designerin + Prototype Designerin",

      challengeEN:
        "Create a learning-game flow that feels clear and engaging for children while keeping the interface visually consistent.",

      challengeDE:
        "Einen Lernspiel-Flow entwickeln, der für Kinder klar und ansprechend ist und gleichzeitig visuell konsistent bleibt.",

      processEN:
        "Mapped the interaction flow, designed the screens and characters, and organized repeated interface elements as reusable components.",

      processDE:
        "Den Interaktionsfluss geplant, Screens und Charaktere gestaltet und wiederkehrende UI-Elemente als wiederverwendbare Komponenten organisiert.",

      implementationEN:
        "Built and connected the complete clickable prototype in Figma, including component states and screen-to-screen interactions.",

      implementationDE:
        "Den vollständigen klickbaren Prototyp in Figma aufgebaut und verknüpft — inklusive Komponenten-Zuständen und Screen-Interaktionen.",

      resultEN:
        "A complete interactive prototype demonstrating the game flow before development.",

      resultDE:
        "Ein vollständiger interaktiver Prototyp, der den Game Flow bereits vor der Entwicklung demonstriert.",
    },
  },

  {
    id: "wg3",
    group: "WebGames",

    titleEN: "Obstacle Game",
    titleDE: "Obstacle Game",

    descEN:
      "A Unity gameplay prototype focused on player movement, obstacle timing, collision-driven challenges and responsive gameplay feedback.",

    descDE:
      "Ein Unity-Gameplay-Prototyp mit Fokus auf Spielerbewegung, Hindernis-Timing, kollisionsbasierte Herausforderungen und direktes Gameplay-Feedback.",

    tags: [
      "Unity",
      "Gameplay Systems",
      "Player Movement",
      "Prototyping",
    ],

    cover:
      "./assets/cover/obstacle%20game%20cover.png",

    coverAlt:
      "./assets/cover/obstacle%20game%20cover.jpg",

    theme: "theme-obstacle",

    demo:
      "./assets/projects/obstacle%20game.mp4",

    type: "video",

    playable: "",

    caseStudy: {
      roleEN:
        "Game Designer + Unity Prototype Developer",

      roleDE:
        "Game Designerin + Unity Prototype Developer",

      challengeEN:
        "Make a simple obstacle course feel readable and responsive through movement, timing and immediate feedback.",

      challengeDE:
        "Einen Hindernis-Parcours durch Bewegung, Timing und direktes Feedback klar und reaktionsschnell gestalten.",

      processEN:
        "Built the gameplay around player movement and obstacle timing, then adjusted the challenge flow through playtesting.",

      processDE:
        "Das Gameplay rund um Spielerbewegung und Hindernis-Timing aufgebaut und den Schwierigkeitsverlauf durch Tests angepasst.",

      implementationEN:
        "Created the playable prototype in Unity and connected movement, collisions, obstacles and gameplay feedback into one gameplay loop.",

      implementationDE:
        "Den spielbaren Prototyp in Unity erstellt und Bewegung, Kollisionen, Hindernisse und Gameplay-Feedback zu einem Gameplay-Loop verbunden.",

      resultEN:
        "A playable Unity prototype demonstrating the core obstacle-game loop.",

      resultDE:
        "Ein spielbarer Unity-Prototyp, der den zentralen Obstacle-Game-Loop demonstriert.",
    },
  },

  {
    id: "wg4",
    group: "WebGames",

    titleEN: "VR Experience",
    titleDE: "VR Erfahrung",

    descEN:
      "An immersive VR interaction prototype focused on spatial navigation, environment interaction and player experience inside a real-time 3D scene.",

    descDE:
      "Ein immersiver VR-Interaktionsprototyp mit Fokus auf räumliche Navigation, Umgebungsinteraktion und Player Experience in einer Echtzeit-3D-Szene.",

    tags: [
      "VR",
      "Interaction Design",
      "3D Environment",
      "Prototyping",
    ],

    cover:
      "./assets/cover/Vr%20cover.jpg",

    theme: "theme-vr",

    demo:
      "./assets/projects/VR.mp4",

    type: "video",

    caseStudy: {
      roleEN:
        "VR Interaction + Experience Design",

      roleDE:
        "VR Interaction + Experience Design",

      challengeEN:
        "Create an immersive experience where navigation and interaction remain understandable inside a 3D environment.",

      challengeDE:
        "Eine immersive Erfahrung gestalten, in der Navigation und Interaktion innerhalb einer 3D-Umgebung verständlich bleiben.",

      processEN:
        "Focused the prototype on spatial navigation, interaction clarity and the relationship between the player and the environment.",

      processDE:
        "Den Prototyp auf räumliche Navigation, klare Interaktionen und die Beziehung zwischen Player und Umgebung fokussiert.",

      implementationEN:
        "Built and tested the VR interaction flow as a real-time prototype and documented the experience through the project video.",

      implementationDE:
        "Den VR-Interaktionsfluss als Echtzeit-Prototyp aufgebaut und getestet und die Experience im Projektvideo dokumentiert.",

      resultEN:
        "An immersive VR prototype demonstrating environment navigation and interaction design.",

      resultDE:
        "Ein immersiver VR-Prototyp, der Umgebungsnavigation und Interaction Design demonstriert.",
    },
  },
    {
    id: "g5",
    group: "Graphic",
    titleEN: "Storyboard",
    titleDE: "Storyboard",
    descEN:
      "Sequential storytelling and scene composition for animation and visual narrative.",
    descDE:
      "Visuelles Storytelling und Szenenkomposition.",
    tags: ["Storyboard"],
    cover: "./assets/cover/storyboard%20cover.jpg",
    demo: "./assets/projects/storyBoard.png",
    type: "image",
  },

  {
    id: "g2",
    group: "Graphic",
    titleEN: "Branding",
    titleDE: "Branding",
    descEN:
      "Brand identity systems including typography, colors, and digital applications.",
    descDE:
      "Markenidentitätssysteme mit Typografie und Farbgestaltung.",
    tags: ["Identity"],
    cover: "./assets/cover/branding%20cover.jpg",
    demo: "./assets/projects/Branding.png",
    type: "image",
  },

  {
    id: "g3",
    group: "Graphic",
    titleEN: "Magazine Design",
    titleDE: "Magazin Design",
    descEN:
      "Editorial design project focused on layout hierarchy and print presentation.",
    descDE:
      "Editorial-Design-Projekt mit Fokus auf Layout und Print-Präsentation.",
    tags: ["Magazine", "PDF"],
    cover: "./assets/cover/maga%20cover.jpg",
    theme: "theme-magazine",
    demo: "./assets/projects/Magazine.pdf",
    type: "pdf",
  },

  {
    id: "g4",
    group: "Graphic",
    titleEN: "Character Design",
    titleDE: "Charakterdesign",
    descEN:
      "Original character concepts focused on shape language and personality.",
    descDE:
      "Originale Charakterkonzepte mit Fokus auf Persönlichkeit.",
    tags: ["Characters"],
    cover: "./assets/cover/char%20design.jpg",
    demo: "./assets/projects/characters.png",
    type: "image",
  },

  {
    id: "g1",
    group: "Graphic",
    titleEN: "Logos",
    titleDE: "Logos",
    descEN:
      "Logo exploration and visual identity concepts for different brand directions.",
    descDE:
      "Logo-Exploration und visuelle Identitätskonzepte.",
    tags: ["Branding"],
    cover: "./assets/cover/logos%20cover.jpg",
    demo: "./assets/projects/logos.png",
    type: "image",
  },

  {
    id: "m1",
    group: "Motion3D",
    titleEN: "Cat Animation",
    titleDE: "Cat Animation",
    descEN:
      "2D animation focused on timing, character motion, and visual rhythm.",
    descDE:
      "2D-Animation mit Fokus auf Timing, Bewegung und Rhythmus.",
    tags: ["Animation", "2D", "Video"],
    cover: "./assets/cover/animation%20cover.jpg",
    theme: "theme-cat",
    demo: "./assets/projects/cat%20animate.mp4",
    type: "video",
  },

  {
    id: "m2",
    group: "Motion3D",
    titleEN: "3D Project",
    titleDE: "3D Projekt",
    descEN:
      "3D environment and rendering exploration using lighting and composition techniques.",
    descDE:
      "3D-Projekt mit Fokus auf Licht und Komposition.",
    tags: ["3D"],
    cover: "./assets/cover/3d%20cover.jpg",
    demo: "./assets/projects/3d.png",
    type: "image",
  },
];

/* =====================================================
   LANGUAGE / TRANSLATION
===================================================== */

function applyI18n() {
  const dict = i18n[state.lang];

  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");

    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  const portfolioCodeText =
    document.querySelector("#portfolioCodeText");

  if (portfolioCodeText) {
    portfolioCodeText.textContent =
      dict.portfolio_code_note;
  }
}

/* =====================================================
   EDUCATION
===================================================== */

function renderEducation() {
  const ul = $("#eduList");

  if (!ul) return;

  ul.innerHTML = "";

  educationItems[state.lang].forEach((t) => {
    const li = document.createElement("li");

    li.textContent = t;

    ul.appendChild(li);
  });
}

/* =====================================================
   CHIPS
===================================================== */

function renderChips(containerId, arrByLang) {
  const wrap = $(containerId);

  if (!wrap) return;

  wrap.innerHTML = "";

  arrByLang[state.lang].forEach((t) => {
    const span = document.createElement("span");

    span.className = "chip";
    span.textContent = t;

    wrap.appendChild(span);
  });
}

function renderChipList(containerId, arr) {
  const wrap = $(containerId);

  if (!wrap) return;

  wrap.innerHTML = "";

  arr.forEach((t) => {
    const span = document.createElement("span");

    span.className = "chip";
    span.textContent = t;

    wrap.appendChild(span);
  });
}

/* =====================================================
   TOOLS
===================================================== */

function renderTools() {
  const wrap = $("#toolGrid");

  if (!wrap) return;

  wrap.innerHTML = "";

  tools.forEach((t) => {
    const card = document.createElement("div");

    card.className = "tool-card";

    const desc =
      state.lang === "EN"
        ? t.descEN
        : t.descDE;

    card.innerHTML = `
      <div class="tool-icon">
        <img
          src="${t.icon}"
          alt="${t.name}"
          onerror="
            this.remove();
            this.parentElement.insertAdjacentHTML(
              'beforeend',
              '<span class=&quot;tool-badge&quot;>${t.badge}</span>'
            )
          "
        />
      </div>

      <div class="tool-info">
        <div class="tname">
          ${t.name}
        </div>

        <div class="tdesc">
          ${desc}
        </div>
      </div>
    `;

    wrap.appendChild(card);
  });
}

/* =====================================================
   EXPERIENCE
===================================================== */

function renderExperience() {
  const wrap = $("#expTimeline");

  if (!wrap) return;

  wrap.innerHTML = "";

  experience.forEach((x) => {
    const div = document.createElement("div");

    div.className = "t-item";

    const role =
      state.lang === "EN"
        ? x.roleEN
        : x.roleDE;

    const period =
      state.lang === "EN"
        ? x.periodEN
        : x.periodDE;

    const bullets =
      state.lang === "EN"
        ? x.bulletsEN
        : x.bulletsDE;

    div.innerHTML = `
      <div class="t-top">
        <div class="t-role">
          ${x.org}
        </div>

        <div class="t-date">
          ${period}
        </div>
      </div>

      <div class="t-org">
        ${role}
      </div>

      <div class="t-bullets">
        ${bullets
          .map(
            (b) =>
              `<div class="muted small">• ${b}</div>`
          )
          .join("")}
      </div>
    `;

    wrap.appendChild(div);
  });
}

/* =====================================================
   PARTNERS
===================================================== */

function renderPartners() {
  const wrap = $("#partnerGrid");

  if (!wrap) return;

  wrap.innerHTML = "";

  partners[state.lang].forEach((p) => {
    const card = document.createElement("div");

    card.className = "flip";

    card.setAttribute(
      "tabindex",
      "0"
    );

    card.innerHTML = `
      <div class="flip-inner">

        <div class="flip-face flip-front">
          <div class="p-name">
            ${p.name}
          </div>

          <div class="p-tag">
            ${p.tag}
          </div>
        </div>

        <div class="flip-face flip-back">
          <div class="p-desc">
            ${p.desc}
          </div>
        </div>

      </div>
    `;

    card.addEventListener(
      "click",
      () => {
        card.classList.toggle(
          "is-flipped"
        );
      }
    );

    card.addEventListener(
      "keydown",
      (e) => {
        if (
          e.key === "Enter" ||
          e.key === " "
        ) {
          e.preventDefault();

          card.classList.toggle(
            "is-flipped"
          );
        }
      }
    );

    wrap.appendChild(card);
  });
}

/* =====================================================
   PROJECT FILTERS
===================================================== */

function renderProjectFilters() {
  const wrap =
    $("#projectFilters");

  if (!wrap) return;

  wrap.innerHTML = "";

  wrap.setAttribute(
    "role",
    "tablist"
  );

  projectCategories.forEach(
    (cat) => {
      const count =
        projects.filter(
          (p) =>
            p.group === cat.key
        ).length;

      const isActive =
        state.activeCategory ===
        cat.key;

      const btn =
        document.createElement(
          "button"
        );

      btn.className =
        "filter-btn" +
        (isActive
          ? " active"
          : "");

      btn.type = "button";

      btn.setAttribute(
        "role",
        "tab"
      );

      btn.setAttribute(
        "aria-selected",
        String(isActive)
      );

      btn.innerHTML = `
        ${
          state.lang === "EN"
            ? cat.EN
            : cat.DE
        }

        <span class="filter-count">
          ${count}
        </span>
      `;

      btn.addEventListener(
        "click",
        () => {
          state.activeCategory =
            cat.key;

          renderProjectFilters();
          renderProjects();
        }
      );

      wrap.appendChild(btn);
    }
  );
}

/* =====================================================
   PROJECT GRID
===================================================== */

function renderProjects() {
  const wrap =
    $("#projectGrid");

  if (!wrap) return;

  wrap.innerHTML = "";

  const filtered =
    projects.filter(
      (p) =>
        p.group ===
        state.activeCategory
    );

  filtered.forEach((p) => {
    const card =
      document.createElement(
        "div"
      );

    card.className =
      "project-card";

    const title =
      state.lang === "EN"
        ? p.titleEN
        : p.titleDE;

    const desc =
      state.lang === "EN"
        ? p.descEN
        : p.descDE;

    let thumb = "";

    if (p.coverClass) {
      thumb = `
        <div class="soft-cover ${p.coverClass}">
          <div class="soft-cover-content">

            <div class="soft-cover-title">
              ${p.coverTitle}
            </div>

            <div class="soft-cover-sub">
              ${p.coverSub}
            </div>

          </div>
        </div>
      `;
    } else {
      const altAttr =
        p.coverAlt
          ? ` data-alt="${p.coverAlt}"`
          : "";

      thumb = `
        <img
          src="${p.cover}"
          ${altAttr}
          alt="${title}"
          onerror="coverFallback(this)"
        >
      `;
    }

    card.innerHTML = `
      <div class="project-thumb">
        ${thumb}
      </div>

      <div class="project-meta">

        <div class="project-title">
          ${title}
        </div>

        <div class="project-sub">
          ${desc}
        </div>

        <div class="chips project-tags">
          ${p.tags
            .map(
              (t) =>
                `<span class="chip">${t}</span>`
            )
            .join("")}
        </div>

      </div>
    `;

    card.addEventListener(
      "click",
      () =>
        openProjectModal(p)
    );

    wrap.appendChild(card);
  });
}

/* =====================================================
   SHARED MEDIA HELPERS
===================================================== */

function mediaHTML(
  type,
  src,
  title
) {
  if (type === "video") {
    return `
      <video
        class="modal-video"
        src="${src}"
        controls
        playsinline
      ></video>
    `;
  }

  if (
    type === "pdf" ||
    type === "html"
  ) {
    return `
      <iframe
        class="modal-frame"
        src="${src}"
      ></iframe>
    `;
  }

  return `
    <img
      class="modal-image"
      src="${src}"
      alt="${title}"
    >
  `;
}

function setDemoButton(
  type,
  src
) {
  const dict =
    i18n[state.lang];

  const btn =
    $("#modalDemo");

  if (!btn) return;

  btn.href = src || "#";

  btn.target = "_blank";

  btn.textContent =
    type === "pdf"
      ? dict.open_pdf
      : type === "video"
      ? dict.open_video
      : type === "html"
      ? dict.open_html
      : dict.open_image;
}

function hintHTML(text) {
  return `
    <div class="pane-hint">
      <span class="hint-dot"></span>
      ${text}
    </div>
  `;
}

/* =====================================================
   MODAL NOTE
===================================================== */

function noteEl() {
  let el =
    document.getElementById(
      "modalNote"
    );

  if (!el) {
    el =
      document.createElement(
        "div"
      );

    el.id = "modalNote";

    el.className =
      "project-note";

    el.style.display =
      "none";

    const body =
      document.querySelector(
        ".modal-body"
      );

    const desc =
      document.getElementById(
        "modalDesc"
      );

    if (body && desc) {
      body.insertBefore(
        el,
        desc.nextSibling
      );
    } else if (body) {
      body.appendChild(el);
    }
  }

  return el;
}

/* =====================================================
   NEW — SMALL CASE STUDIES
===================================================== */

function renderMiniCaseStudy(
  project
) {
  const box =
    document.querySelector(
      "#modalCaseStudy"
    );

  if (!box) return;

  if (!project.caseStudy) {
    box.innerHTML = "";
    box.style.display =
      "none";

    return;
  }

  const cs =
    project.caseStudy;

  const isEN =
    state.lang === "EN";

  const role =
    isEN
      ? cs.roleEN
      : cs.roleDE;

  const challenge =
    isEN
      ? cs.challengeEN
      : cs.challengeDE;

  const process =
    isEN
      ? cs.processEN
      : cs.processDE;

  const implementation =
    isEN
      ? cs.implementationEN
      : cs.implementationDE;

  const result =
    isEN
      ? cs.resultEN
      : cs.resultDE;

  const labels =
    isEN
      ? {
          title:
            "Case Study",

          role:
            "My Role",

          challenge:
            "Challenge",

          process:
            "Process",

          implementation:
            "Implementation",

          result:
            "Result",
        }
      : {
          title:
            "Case Study",

          role:
            "Meine Rolle",

          challenge:
            "Herausforderung",

          process:
            "Prozess",

          implementation:
            "Umsetzung",

          result:
            "Ergebnis",
        };

  box.innerHTML = `
    <div class="mini-case-head">
      ${labels.title}
    </div>

    <div class="mini-case-grid">

      <div class="mini-case-item mini-case-role">

        <div class="mini-case-label">
          ${labels.role}
        </div>

        <div class="mini-case-text">
          ${role}
        </div>

      </div>

      <div class="mini-case-item">

        <div class="mini-case-label">
          ${labels.challenge}
        </div>

        <div class="mini-case-text">
          ${challenge}
        </div>

      </div>

      <div class="mini-case-item">

        <div class="mini-case-label">
          ${labels.process}
        </div>

        <div class="mini-case-text">
          ${process}
        </div>

      </div>

      <div class="mini-case-item">

        <div class="mini-case-label">
          ${labels.implementation}
        </div>

        <div class="mini-case-text">
          ${implementation}
        </div>

      </div>

      <div class="mini-case-item">

        <div class="mini-case-label">
          ${labels.result}
        </div>

        <div class="mini-case-text">
          ${result}
        </div>

      </div>

    </div>
  `;

  box.style.display =
    "block";
}

/* =====================================================
   PLAYABLE WEB BUILD
===================================================== */

function updatePlayableButton(
  project
) {
  const btn =
    document.querySelector(
      "#modalPlayable"
    );

  if (!btn) return;

  if (project.playable) {
    btn.href =
      project.playable;

    btn.textContent =
      project.id === "triverse"
        ? (state.lang === "EN"
            ? "Open Game on itch.io ↗"
            : "Spiel auf itch.io öffnen ↗")
        : (state.lang === "EN"
            ? "▶ Play in Browser"
            : "▶ Im Browser spielen");

    btn.style.display =
      "inline-block";
  } else {
    btn.removeAttribute(
      "href"
    );

    btn.style.display =
      "none";
  }
}

/* =====================================================
   FEATURED PROJECT — TRIVERSE
===================================================== */

let triverseGalleryIndex = 0;

function caseStudyHTML(
  project,
  cs
) {
  const dict =
    i18n[state.lang];

  const isEN =
    state.lang === "EN";

  const role =
    isEN
      ? cs.roleEN
      : cs.roleDE;

  const timeline =
    isEN
      ? cs.timelineEN
      : cs.timelineDE;

  const deliverables =
    isEN
      ? cs.deliverablesEN
      : cs.deliverablesDE;

  const overview =
    isEN
      ? cs.overviewEN
      : cs.overviewDE;

  const meta = `
    <div class="cs-meta">

      <div class="cs-meta-item">
        <span class="cs-meta-label">
          ${dict.cs_role}
        </span>

        <span class="cs-meta-value">
          ${role}
        </span>
      </div>

      <div class="cs-meta-item">
        <span class="cs-meta-label">
          ${dict.cs_tools}
        </span>

        <span class="cs-meta-value">
          ${cs.tools}
        </span>
      </div>

      <div class="cs-meta-item">
        <span class="cs-meta-label">
          ${dict.cs_timeline}
        </span>

        <span class="cs-meta-value">
          ${timeline}
        </span>
      </div>

      <div class="cs-meta-item">
        <span class="cs-meta-label">
          ${dict.cs_grade}
        </span>

        <span class="cs-meta-value">
          ${project.grade}
        </span>
      </div>

    </div>

    <div class="cs-deliverables">
      ${deliverables}
    </div>
  `;

  const sections =
    cs.sections
      .map((s) => {
        const t =
          isEN
            ? s.titleEN
            : s.titleDE;

        const body =
          isEN
            ? s.bodyEN
            : s.bodyDE;

        return `
          <div class="cs-section">

            <div class="cs-section-title">
              <span class="cs-icon">
                ${s.icon}
              </span>

              ${t}
            </div>

            <ul class="cs-list">

              ${body
                .map(
                  (b) =>
                    `<li>${b}</li>`
                )
                .join("")}

            </ul>

          </div>
        `;
      })
      .join("");

  return `
    <div class="cs-wrap">

      ${meta}

      <p class="cs-overview">
        ${overview}
      </p>

      ${sections}    </div>
  `;
}

function renderTriverseMedia(
  project,
  media
) {
  triverseGalleryIndex = 0;

  const dict =
    i18n[state.lang];

  const title =
    state.lang === "EN"
      ? project.titleEN
      : project.titleDE;

  media.innerHTML = `
    <div class="triverse-media">

      <div
        class="modal-tabs"
        id="triverseTabs"
        role="tablist"
      >

        <button
          class="modal-tab active"
          data-tab="trailer"
          type="button"
          role="tab"
          aria-selected="true"
        >
          ▶ ${dict.tab_trailer}
        </button>

        <button
          class="modal-tab"
          data-tab="gameplay"
          type="button"
          role="tab"
          aria-selected="false"
        >
          🎬 ${dict.tab_gameplay}

          <span class="tab-count">
            ${project.gameplay.length}
          </span>
        </button>

        <button
          class="modal-tab"
          data-tab="gallery"
          type="button"
          role="tab"
          aria-selected="false"
        >
          🖼 ${dict.tab_gallery}

          <span class="tab-count">
            ${project.gallery.length}
          </span>
        </button>

        <button
          class="modal-tab"
          data-tab="case"
          type="button"
          role="tab"
          aria-selected="false"
        >
          📋 ${dict.tab_case}
        </button>

      </div>

      ${hintHTML(dict.tabs_hint)}

      <div
        class="triverse-pane triverse-pane-trailer active"
        data-pane="trailer"
      >

        <video
          class="modal-video"
          src="${project.demo}"
          controls
          playsinline
        >
        </video>

      </div>

      <div
        class="triverse-pane triverse-pane-gameplay"
        data-pane="gameplay"
      >

        <video
          class="modal-video"
          id="triverseGameplayVideo"
          src="${project.gameplay[0]}"
          controls
          playsinline
        >
        </video>

        ${hintHTML(dict.clips_hint)}

        <div
          class="clip-row"
          id="triverseClipRow"
        >
        </div>

      </div>

      <div
        class="triverse-pane triverse-pane-gallery"
        data-pane="gallery"
      >

        <div class="triverse-gallery">

          <button
            class="gallery-arrow gallery-prev"
            type="button"
            aria-label="Previous"
          >
            ‹
          </button>

          <img
            class="gallery-main-img"
            id="triverseGalleryImg"
            src=""
            alt="${title} screenshot"
          >

          <button
            class="gallery-arrow gallery-next"
            type="button"
            aria-label="Next"
          >
            ›
          </button>

          <div
            class="gallery-counter"
            id="triverseGalleryCounter"
          >
          </div>

        </div>

        ${hintHTML(dict.gallery_hint)}

        <div
          class="gallery-thumbs"
          id="triverseGalleryThumbs"
        >
        </div>

      </div>

      <div
        class="triverse-pane triverse-pane-case"
        data-pane="case"
      >

        ${caseStudyHTML(
          project,
          triverseCaseStudy
        )}

      </div>

    </div>
  `;

  const tabs =
  media.querySelectorAll(
    ".modal-tab"
  );

const panes =
  media.querySelectorAll(
    ".triverse-pane"
  );

tabs.forEach((btn) => {
  btn.addEventListener(
    "click",
    () => {

      media.querySelectorAll("video").forEach((video) => {
        video.pause();
      });

      tabs.forEach((b) => {
        b.classList.remove(
          "active"
        );

        b.setAttribute(
          "aria-selected",
          "false"
        );
      });

      panes.forEach((p) => {
        p.classList.remove(
          "active"
        );
      });

      btn.classList.add(
        "active"
      );

      btn.setAttribute(
        "aria-selected",
        "true"
      );

      const target =
        media.querySelector(
          `.triverse-pane-${btn.dataset.tab}`
        );

      if (target) {
        target.classList.add(
          "active"
        );
      }
    }
  );
});

  /* ==========================
     GAMEPLAY CLIPS
  ========================== */

  const clipRow =
    media.querySelector(
      "#triverseClipRow"
    );

  project.gameplay.forEach(
    (src, i) => {

      const b =
        document.createElement(
          "button"
        );

      b.type = "button";

      b.className =
        "clip-btn" +
        (i === 0
          ? " active"
          : "");

      b.innerHTML = `
        <span class="clip-icon">
          ▶
        </span>

        ${dict.clip_word}
        ${i + 1}
      `;

      b.addEventListener(
        "click",
        () => {

          clipRow
            .querySelectorAll(
              ".clip-btn"
            )
            .forEach((x) => {
              x.classList.remove(
                "active"
              );
            });

          b.classList.add(
            "active"
          );

          const vid =
            media.querySelector(
              "#triverseGameplayVideo"
            );

          if (!vid) return;

          vid.src = src;

          vid
            .play()
            .catch(() => {});
        }
      );

      clipRow.appendChild(b);
    }
  );

  /* ==========================
     SCREENSHOT GALLERY
  ========================== */

  const thumbsWrap =
    media.querySelector(
      "#triverseGalleryThumbs"
    );

  project.gallery.forEach(
    (src, i) => {

      const t =
        document.createElement(
          "img"
        );

      t.src = src;

      t.className =
        "gallery-thumb" +
        (i === 0
          ? " active"
          : "");

      t.alt =
        `${title} thumbnail ${i + 1}`;

      t.addEventListener(
        "click",
        () =>
          setTriverseGalleryIndex(
            project,
            i,
            media
          )
      );

      thumbsWrap.appendChild(t);
    }
  );

  const prevBtn =
    media.querySelector(
      ".gallery-prev"
    );

  const nextBtn =
    media.querySelector(
      ".gallery-next"
    );

  if (prevBtn) {
    prevBtn.addEventListener(
      "click",
      () => {

        const next =
          (
            triverseGalleryIndex -
            1 +
            project.gallery.length
          ) %
          project.gallery.length;

        setTriverseGalleryIndex(
          project,
          next,
          media
        );
      }
    );
  }

  if (nextBtn) {
    nextBtn.addEventListener(
      "click",
      () => {

        const next =
          (
            triverseGalleryIndex +
            1
          ) %
          project.gallery.length;

        setTriverseGalleryIndex(
          project,
          next,
          media
        );
      }
    );
  }

  setTriverseGalleryIndex(
    project,
    0,
    media
  );
}

/* =====================================================
   TRIVERSE GALLERY INDEX
===================================================== */

function setTriverseGalleryIndex(
  project,
  index,
  media
) {
  triverseGalleryIndex =
    index;

  const image =
    media.querySelector(
      "#triverseGalleryImg"
    );

  const counter =
    media.querySelector(
      "#triverseGalleryCounter"
    );

  if (image) {
    image.src =
      project.gallery[index];
  }

  if (counter) {
    counter.textContent =
      `${index + 1} / ${project.gallery.length}`;
  }

  media
    .querySelectorAll(
      ".gallery-thumb"
    )
    .forEach((t, i) => {

      t.classList.toggle(
        "active",
        i === index
      );
    });
}

/* =====================================================
   FEATURED PROJECT CARD
===================================================== */

function renderFeaturedProject() {
  const title =
    state.lang === "EN"
      ? featuredProject.titleEN
      : featuredProject.titleDE;

  const desc =
    state.lang === "EN"
      ? featuredProject.descEN
      : featuredProject.descDE;

  const dict =
    i18n[state.lang];

  const titleEl =
    $("#featuredTitle");

  const descEl =
    $("#featuredDesc");

  const badgeEl =
    $("#featuredBadge");

  if (titleEl) {
    titleEl.textContent =
      title;
  }

  if (descEl) {
    descEl.textContent =
      desc;
  }

  if (badgeEl) {
    badgeEl.textContent =
      `${dict.featured_badge_label}: ${featuredProject.grade}`;
  }

  const tagsWrap =
    $("#featuredTags");

  if (!tagsWrap) return;

  tagsWrap.innerHTML = "";

  featuredProject.tags.forEach(
    (t) => {

      const span =
        document.createElement(
          "span"
        );

      span.className =
        "chip";

      span.textContent = t;

      tagsWrap.appendChild(
        span
      );
    }
  );
}

/* =====================================================
   OPEN TRIVERSE MODAL
===================================================== */

function openFeaturedModal() {
  const modal =
    $("#modal");

  const modalCard =
    $(".modal-card");

  if (
    !modal ||
    !modalCard
  ) {
    return;
  }

  const title =
    state.lang === "EN"
      ? featuredProject.titleEN
      : featuredProject.titleDE;

  const desc =
    state.lang === "EN"
      ? featuredProject.descEN
      : featuredProject.descDE;

  modalCard.className =
    "modal-card theme-triverse has-tabs";

  const modalTitle =
    $("#modalTitle");

  const modalDesc =
    $("#modalDesc");

  if (modalTitle) {
    modalTitle.textContent =
      title;
  }

  if (modalDesc) {
    modalDesc.textContent =
      desc;
  }

  noteEl().style.display =
    "none";

  const media =
    $("#modalMedia");

  if (media) {
    renderTriverseMedia(
      featuredProject,
      media
    );
  }

  const tags =
    $("#modalTags");

  if (tags) {
    tags.innerHTML = "";

    featuredProject.tags.forEach(
      (t) => {

        const span =
          document.createElement(
            "span"
          );

        span.className =
          "chip";

        span.textContent = t;

        tags.appendChild(span);
      }
    );
  }

  /*
    Triverse already has its own
    detailed Case Study tab,
    so the small generic Case Study
    should stay hidden here.
  */

  const smallCase =
    $("#modalCaseStudy");

  if (smallCase) {
    smallCase.innerHTML = "";
    smallCase.style.display =
      "none";
  }

  setDemoButton(
    "video",
    featuredProject.demo
  );

  updatePlayableButton(
    featuredProject
  );

  modal.classList.add(
    "show"
  );

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow =
    "hidden";
}

/* =====================================================
   GENERIC TABBED MEDIA
===================================================== */

function renderTabbedMedia(
  project,
  media,
  title
) {
  const panes =
    project.panes;

  media.innerHTML = `
    <div class="tabbed-media">

      <div
        class="modal-tabs"
        role="tablist"
      >

        ${panes
          .map(
            (p, i) => `
              <button
                class="modal-tab${
                  i === 0
                    ? " active"
                    : ""
                }"
                data-i="${i}"
                type="button"
                role="tab"
                aria-selected="${
                  i === 0
                }"
              >

                ${
                  p.type === "video"
                    ? "🎬"
                    : p.type === "pdf"
                    ? "📄"
                    : "🖥"
                }

                ${
                  state.lang === "EN"
                    ? p.labelEN
                    : p.labelDE
                }

              </button>
            `
          )
          .join("")}

      </div>

      ${panes
        .map(
          (p, i) => `
            <div
              class="tab-pane${
                i === 0
                  ? " active"
                  : ""
              }"
              data-i="${i}"
            >

              ${
                p.hintEN
                  ? hintHTML(
                      state.lang === "EN"
                        ? p.hintEN
                        : p.hintDE
                    )
                  : ""
              }

              <div class="tab-media">

                ${mediaHTML(
                  p.type,
                  p.src,
                  title
                )}

              </div>

            </div>
          `
        )
        .join("")}

    </div>
  `;

  const tabs =
    media.querySelectorAll(
      ".modal-tab"
    );

  const tabPanes =
    media.querySelectorAll(
      ".tab-pane"
    );

  tabs.forEach((btn) => {

    btn.addEventListener(
      "click",
      () => {

        const idx =
          Number(
            btn.dataset.i
          );

        tabs.forEach((b) => {
          b.classList.remove(
            "active"
          );

          b.setAttribute(
            "aria-selected",
            "false"
          );
        });

        tabPanes.forEach((p) => {
          p.classList.remove(
            "active"
          );
        });

        btn.classList.add(
          "active"
        );

        btn.setAttribute(
          "aria-selected",
          "true"
        );

        if (tabPanes[idx]) {
          tabPanes[idx]
            .classList.add(
              "active"
            );
        }

        setDemoButton(
          panes[idx].type,
          panes[idx].src
        );
      }
    );
  });

  setDemoButton(
    panes[0].type,
    panes[0].src
  );
}

/* =====================================================
   GENERIC PROJECT MODAL
===================================================== */

function openProjectModal(
  project
) {
  const modal =
    $("#modal");

  const modalCard =
    $(".modal-card");

  if (
    !modal ||
    !modalCard
  ) {
    return;
  }

  const title =
    state.lang === "EN"
      ? project.titleEN
      : project.titleDE;

  const desc =
    state.lang === "EN"
      ? project.descEN
      : project.descDE;

  modalCard.className =
    "modal-card";

  if (project.theme) {
    modalCard.classList.add(
      project.theme
    );
  }

  const modalTitle =
    $("#modalTitle");

  const modalDesc =
    $("#modalDesc");

  if (modalTitle) {
    modalTitle.textContent =
      title;
  }

  if (modalDesc) {
    modalDesc.textContent =
      desc;
  }

  /* ==========================
     PROJECT NOTE
  ========================== */

  const note =
    noteEl();

  const noteText =
    state.lang === "EN"
      ? project.noteEN
      : project.noteDE;

  if (noteText) {
    note.innerHTML = `
      <span class="project-note-label">
        ${i18n[state.lang].note_label}
      </span>

      ${noteText}
    `;

    note.style.display =
      "block";
  } else {
    note.innerHTML = "";

    note.style.display =
      "none";
  }

  /* ==========================
     MEDIA
  ========================== */

  const media =
    $("#modalMedia");

  if (media) {
    if (
      project.panes &&
      project.panes.length
    ) {
      renderTabbedMedia(
        project,
        media,
        title
      );
    } else {
      media.innerHTML =
        mediaHTML(
          project.type,
          project.demo,
          title
        );

      setDemoButton(
        project.type,
        project.demo
      );
    }
  }

  /* ==========================
     TAGS
  ========================== */

  const tags =
    $("#modalTags");

  if (tags) {
    tags.innerHTML = "";

    project.tags.forEach(
      (t) => {

        const span =
          document.createElement(
            "span"
          );

        span.className =
          "chip";

        span.textContent =
          t;

        tags.appendChild(
          span
        );
      }
    );
  }

  /* ==========================
     CASE STUDY
  ========================== */

  renderMiniCaseStudy(
    project
  );

  /* ==========================
     PLAYABLE WEB BUILD
  ========================== */

  updatePlayableButton(
    project
  );

  /* ==========================
     OPEN MODAL
  ========================== */

  modal.classList.add(
    "show"
  );

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow =
    "hidden";
}
/* =====================================================
   CLOSE MODAL
===================================================== */

function closeModal() {
  const modal =
    $("#modal");

  if (!modal) return;

  modal.classList.remove(
    "show"
  );

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  const media =
    $("#modalMedia");

  if (media) {
    media.innerHTML = "";
  }

  const note =
    noteEl();

  note.innerHTML = "";
  note.style.display =
    "none";

  const caseStudy =
    $("#modalCaseStudy");

  if (caseStudy) {
    caseStudy.innerHTML = "";
    caseStudy.style.display =
      "none";
  }

  const playable =
    $("#modalPlayable");

  if (playable) {
    playable.removeAttribute(
      "href"
    );

    playable.style.display =
      "none";
  }

  document.body.style.overflow =
    "";
}

/* =====================================================
   LANGUAGE SWITCH
===================================================== */

function setLang(nextLang) {
  const wipe =
    $("#wipe");

  if (wipe) {
    wipe.classList.add(
      "is-on"
    );
  }

  setTimeout(
    () => {

      state.lang =
        nextLang;

      /* ======================
         CV LANGUAGE
      ====================== */

      const cvBtn =
        document.getElementById(
          "cvDownload"
        );

      if (cvBtn) {
        cvBtn.href =
          state.lang === "DE"
            ? "assets/Bewerbungsunterlagen-Tala Almrayat.pdf"
            : "assets/Merged-Tala Almrayat.pdf";
      }

      /* ======================
         LANGUAGE SLIDER
      ====================== */

      const slider =
        $(".slider");

      if (slider) {
        slider.style.transform =
          state.lang === "DE"
            ? "translateX(100%)"
            : "translateX(0%)";
      }

      /* ======================
         RE-RENDER CONTENT
      ====================== */

      applyI18n();

      renderEducation();

      renderChips(
        "#expertiseChips",
        expertiseItems
      );

      renderChips(
        "#langChips",
        languageItems
      );

      renderTools();

      renderChipList(
        "#progChips",
        programming
      );

      renderChipList(
        "#skillsChips",
        skills
      );

      renderExperience();

      renderPartners();

      renderFeaturedProject();

      renderProjectFilters();

      renderProjects();

      /* ======================
         CLOSE LANGUAGE WIPE
      ====================== */

      setTimeout(
        () => {
          if (wipe) {
            wipe.classList.remove(
              "is-on"
            );
          }
        },
        260
      );

    },
    220
  );
}

/* =====================================================
   MOUSE BACKGROUND EFFECT
===================================================== */

function initMouseFx() {
  window.addEventListener(
    "mousemove",
    (e) => {

      document.documentElement
        .style
        .setProperty(
          "--mouse-x",
          (
            e.clientX /
            window.innerWidth
          ) *
            100 +
            "%"
        );

      document.documentElement
        .style
        .setProperty(
          "--mouse-y",
          (
            e.clientY /
            window.innerHeight
          ) *
            100 +
            "%"
        );
    }
  );
}

/* =====================================================
   INITIALIZATION
===================================================== */

function init() {

  /* ======================
     YEAR
  ====================== */

  const year =
    $("#year");

  if (year) {
    year.textContent =
      new Date()
        .getFullYear();
  }

  /* ======================
     LANGUAGE SLIDER
  ====================== */

  const slider =
    $(".slider");

  if (slider) {
    slider.style.transform =
      "translateX(0%)";
  }

  /* ======================
     LANGUAGE BUTTON
  ====================== */

  const langBtn =
    $("#langBtn");

  if (langBtn) {
    langBtn.addEventListener(
      "click",
      () => {

        setLang(
          state.lang === "EN"
            ? "DE"
            : "EN"
        );
      }
    );
  }

  /* ======================
     MODAL CLOSE BUTTON
  ====================== */

  const modalClose =
    $("#modalClose");

  if (modalClose) {
    modalClose.addEventListener(
      "click",
      closeModal
    );
  }

  /* ======================
     MODAL BACKDROP
  ====================== */

  const modalBackdrop =
    $("#modalBackdrop");

  if (modalBackdrop) {
    modalBackdrop.addEventListener(
      "click",
      closeModal
    );
  }

  /* ======================
     ESC KEY
  ====================== */

  window.addEventListener(
    "keydown",
    (e) => {

      if (
        e.key === "Escape"
      ) {
        closeModal();
      }
    }
  );

  /* ======================
     FEATURED TRIVERSE IMAGE
  ====================== */

  const featuredMedia =
    $("#featuredMedia");

  if (featuredMedia) {

    featuredMedia.addEventListener(
      "click",
      openFeaturedModal
    );

    featuredMedia.addEventListener(
      "keydown",
      (e) => {

        if (
          e.key === "Enter" ||
          e.key === " "
        ) {
          e.preventDefault();

          openFeaturedModal();
        }
      }
    );
  }

  /* ======================
     FEATURED CTA BUTTON
  ====================== */

  const featuredCta =
    $("#featuredCta");

  if (featuredCta) {
    featuredCta.addEventListener(
      "click",
      openFeaturedModal
    );
  }

  /* ======================
     FIRST PAGE RENDER
  ====================== */

  applyI18n();

  renderEducation();

  renderChips(
    "#expertiseChips",
    expertiseItems
  );

  renderChips(
    "#langChips",
    languageItems
  );

  renderTools();

  renderChipList(
    "#progChips",
    programming
  );

  renderChipList(
    "#skillsChips",
    skills
  );

  renderExperience();

  renderPartners();

  renderFeaturedProject();

  renderProjectFilters();

  renderProjects();

  initMouseFx();
}

/* =====================================================
   START
===================================================== */

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    init
  );

} else {

  init();

}