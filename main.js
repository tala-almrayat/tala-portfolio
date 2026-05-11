const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const state = {
  lang: "EN",
  activeCategory: "WebGames",
};

const i18n = {
  EN: {
    role: "Game Design & Media Informatics",
    nav_projects: "Projects",
    nav_about: "About",
    nav_experience: "Experience",
    nav_contact: "Contact",
    hero_title: "Hi, I’m Tala Almrayat",
    hero_sub: "Designing interactive worlds & digital experiences — with a focus on game systems, UI/UX, and creative technology.",
    cv_btn: "Download CV",
    contact_btn: "Contact",
    pill_1: "UI/UX",
    pill_2: "Game Systems",
    pill_3: "Interactive Media",
    projects_kicker: "PROJECTS",
    projects_h: "A selection of creative & technical work across disciplines.",
    about_h: "About",
    about_p: "A concise overview — clean, structured, and easy to scan.",
    edu_h: "Education",
    edu_degree: "Bachelor’s Degree in Game Design & Media Informatics",
    expertise_h: "Fields of Expertise",
    langs_h: "Languages",
    tools_h: "Software & Technical Tools",
    prog_h: "Programming & Development",
    skills_h: "Skills",
    exp_h: "Experience",
    partners_h: "Partners",
    partners_note: "Tip: hover to flip the cards and read what I delivered.",
    certs_h: "Certifications",
    contact_h: "Contact",
    contact_p: "For internships, collaborations, freelance work, or project-based roles.",
    contact_cta_h: "Let’s work together",
    contact_email: "Email",
    contact_back_projects: "View Projects",
    contact_back_top: "Back to top",
    links_h: "Links",
    pdf_portfolio: "Portfolio PDF",
    pdf_download: "Download PDF",
  },
  DE: {
    role: "Game Design & Media Informatics",
    nav_projects: "Projekte",
    nav_about: "Über mich",
    nav_experience: "Erfahrung",
    nav_contact: "Kontakt",
    hero_title: "Hi, ich bin Tala Almrayat",
    hero_sub: "Ich gestalte interaktive Welten & digitale Erlebnisse — mit Fokus auf Game Systems, UI/UX und kreative Technologie.",
    cv_btn: "Lebenslauf herunterladen",
    contact_btn: "Kontakt",
    pill_1: "UI/UX",
    pill_2: "Game Systems",
    pill_3: "Interaktive Medien",
    projects_kicker: "PROJEKTE",
    projects_h: "Eine Auswahl kreativer & technischer Arbeiten über verschiedene Disziplinen.",
    about_h: "Über mich",
    about_p: "Ein kompakter Überblick — klar strukturiert und leicht zu scannen.",
    edu_h: "Ausbildung",
    edu_degree: "Bachelorstudium: Game Design & Media Informatics",
    expertise_h: "Schwerpunkte",
    langs_h: "Sprachen",
    tools_h: "Software & technische Tools",
    prog_h: "Programmierung & Entwicklung",
    skills_h: "Skills",
    exp_h: "Erfahrung",
    partners_h: "Partner",
    partners_note: "Tipp: Hover, um die Karten zu drehen und Details zu sehen.",
    certs_h: "Zertifikate",
    contact_h: "Kontakt",
    contact_p: "Für Praktika, Kooperationen, Freelance-Projekte oder projektbasierte Rollen.",
    contact_cta_h: "Lass uns zusammenarbeiten",
    contact_email: "E-Mail",
    contact_back_projects: "Projekte ansehen",
    contact_back_top: "Nach oben",
    links_h: "Links",
    pdf_portfolio: "Portfolio PDF",
    pdf_download: "PDF herunterladen",
  },
};

const educationItems = {
  EN: ["Interactive Media Development", "Game Systems & Mechanics", "UI/UX Design", "Visual Programming", "3D Environments & Digital Experiences"],
  DE: ["Interaktive Medienentwicklung", "Game Systems & Mechanics", "UI/UX Design", "Visuelle Programmierung", "3D-Umgebungen & digitale Erlebnisse"],
};

const expertiseItems = {
  EN: ["Virtual Reality (VR)", "Augmented Reality (AR)", "3D Design", "Game Development", "Website Development", "Programming", "UX/UI Design", "Graphic Design"],
  DE: ["Virtual Reality (VR)", "Augmented Reality (AR)", "3D Design", "Game Development", "Webentwicklung", "Programmierung", "UX/UI Design", "Graphic Design"],
};

const languageItems = {
  EN: ["Arabic", "English", "German"],
  DE: ["Arabisch", "Englisch", "Deutsch"],
};

const programming = ["HTML", "CSS", "JavaScript", "OOP", "C", "C++", "SQL", "Kotlin", "Database Systems"];

const skills = [
  "Creative Problem Solving",
  "Interactive Thinking",
  "Visual Storytelling",
  "Cross-disciplinary Design & Development",
  "Team Collaboration",
  "Digital Experience Design",
  "Adaptive Learning",
  "Strong Visual Composition",
];

const tools = [
  { name: "Adobe Photoshop", badge: "Ps", icon: "./assets/icons/assetsiconsps.svg.svg", descEN: "Image editing & compositing", descDE: "Bildbearbeitung & Compositing" },
  { name: "Adobe Illustrator", badge: "Ai", icon: "./assets/icons/assetsiconsai.svg.svg", descEN: "Vector design & layout", descDE: "Vektordesign & Layout" },
  { name: "Adobe Animate", badge: "An", icon: "./assets/icons/assetsiconsan.svg.svg", descEN: "2D animation workflows", descDE: "2D-Animation Workflows" },
  { name: "Adobe InDesign", badge: "Id", icon: "./assets/icons/assetsiconsid.svg.svg", descEN: "Editorial & layout design", descDE: "Editorial- & Layout-Design" },
  { name: "Blender", badge: "Bl", icon: "./assets/icons/assetsiconsblender.svg.svg", descEN: "3D modeling & scenes", descDE: "3D-Modelling & Szenen" },
  { name: "Unity", badge: "Un", icon: "./assets/icons/assetsiconsunity.svg.svg", descEN: "Real-time interactive projects", descDE: "Interaktive Echtzeit-Projekte" },
  { name: "Unreal Engine", badge: "UE", icon: "./assets/icons/assetsiconsunreal.svg.svg", descEN: "Real-time 3D & interactive", descDE: "Echtzeit-3D & Interaktiv" },
  { name: "Figma", badge: "Fi", icon: "./assets/icons/assetsiconsfigma.svg.svg", descEN: "UI/UX & prototyping", descDE: "UI/UX & Prototyping" },
];

const experience = [
  {
    roleEN: "UI/UX & Digital Media Intern",
    roleDE: "Praktikum im Bereich UI/UX & Digital Media",
    org: "Tomandora",
    periodEN: "August 2022 – 2023",
    periodDE: "August 2022 – 2023",
    bulletsEN: ["Developed digital brand identities", "Created high-fidelity designs for different platforms"],
    bulletsDE: ["Entwicklung digitaler Markenidentitäten", "Erstellung von High-Fidelity-Designs für verschiedene Plattformen"],
  },
  {
    roleEN: "Graphic Design Intern",
    roleDE: "Praktikum im Bereich Grafikdesign",
    org: "Dar Al-Funoun",
    periodEN: "2021",
    periodDE: "2021",
    bulletsEN: ["Designed logo concepts and visual identity elements", "Worked on magazine layouts, print visuals, and presentation materials"],
    bulletsDE: ["Gestaltung von Logo-Konzepten und visuellen Identitätselementen", "Arbeit an Magazinlayouts, Print-Visuals und Präsentationsmaterialien"],
  },
];

const certifications = {
  EN: [
    { title: "Animation / Talal Abu-Ghazaleh (2026)", file: "./assets/certs/animation-certificate.pdf" },
    { title: "German B1 – GJU DaF", file: "./assets/certs/gju-daf-b1.pdf" },
    { title: "English B2 – CEFR", file: "./assets/certs/english-b2-cefr.pdf" },
  ],
  DE: [
    { title: "Animation / Talal Abu-Ghazaleh (2026)", file: "./assets/certs/animation-certificate.pdf" },
    { title: "Deutsch B1 – GJU DaF", file: "./assets/certs/gju-daf-b1.pdf" },
    { title: "Englisch B2 – CEFR", file: "./assets/certs/english-b2-cefr.pdf" },
  ],
};

const partners = {
  EN: [
    { name: "Mercy Corps", tag: "Slides • Illustration", desc: "Designed and illustrated presentation slides through Tomandora, focusing on clean layouts and visual clarity." },
    { name: "Ministry of Youth", tag: "Illustrator • Layout", desc: "Created structured Illustrator-based slide designs for youth initiatives through Tomandora." },
    { name: "USAID", tag: "Slides • Visual System", desc: "Contributed to professional slide design projects, handling layout and visual elements using Adobe Illustrator." },
    { name: "ActionAid", tag: "Brand-aligned Decks", desc: "Developed illustrated presentation materials aligned with project branding and communication goals." },
    { name: "WomenMark", tag: "Awareness Visuals", desc: "Designed presentation visuals supporting awareness and development-focused initiatives." },
    { name: "Ministry of Local Administration", tag: "Institutional Slides", desc: "Prepared formal Illustrator-based presentation slides for institutional use." },
  ],

  DE: [
    { name: "Mercy Corps", tag: "Folien • Illustration", desc: "Gestaltung und Illustration von Präsentationsfolien über Tomandora mit Fokus auf klare Layouts und visuelle Klarheit." },
    { name: "Ministry of Youth", tag: "Illustrator • Layout", desc: "Strukturierte Folienlayouts in Adobe Illustrator für Jugendinitiativen erstellt." },
    { name: "USAID", tag: "Folien • Visual System", desc: "Mitarbeit an professionellen Präsentationsdesigns und visuellen Elementen." },
    { name: "ActionAid", tag: "Branding • Decks", desc: "Illustrierte Präsentationsmaterialien abgestimmt auf Branding und Kommunikationsziele." },
    { name: "WomenMark", tag: "Awareness • Visuals", desc: "Präsentationsvisuals für Awareness- und Entwicklungsinitiativen gestaltet." },
    { name: "Ministry of Local Administration", tag: "Institutionelle Folien", desc: "Formale Präsentationsfolien für institutionelle Nutzung vorbereitet." },
  ],
};

const projectCategories = [
  { key: "WebGames", EN: "Web & Games", DE: "Web & Games" },
  { key: "Tamatem", EN: "Tamatem Web Game", DE: "Tamatem Web Game" },
  { key: "Graphic", EN: "Graphic & Visual Design", DE: "Grafik & Visual Design" },
  { key: "Motion3D", EN: "Motion & 3D", DE: "Motion & 3D" },
];

const projects = [
  {
    id: "wg1",
    group: "WebGames",
    titleEN: "GJU Clean UI",
    titleDE: "GJU Clean UI",
    descEN: "A responsive mobile UI concept for a facility cleaning management system.",
    descDE: "Ein responsives Mobile-UI-Konzept für ein Facility-Cleaning-System.",
    tags: ["UI", "HTML", "CSS"],
    coverClass: "cover-gju",
    theme: "theme-gju",
    coverTitle: "GJU Clean",
    coverSub: "Facility Cleaning UI",
    demo: "./assets/projects/GJUClean_UI.html",
    type: "html",
  },
  {
    id: "wg2",
    group: "WebGames",
    titleEN: "Obstacle Game",
    titleDE: "Obstacle Game",
    descEN: "A gameplay prototype focused on player movement, obstacle timing, and interactive feedback.",
    descDE: "Ein Gameplay-Prototyp mit Fokus auf Bewegung, Timing und Feedback.",
    tags: ["Unity", "Gameplay", "Video"],
    coverClass: "cover-obstacle",
    theme: "theme-obstacle",
    coverTitle: "Obstacle Game",
    coverSub: "Gameplay Prototype",
    demo: "./assets/projects/obstacle%20game.mp4",
    type: "video",
  },
  {
    id: "wg3",
    group: "WebGames",
    titleEN: "VR Experience",
    titleDE: "VR Erfahrung",
    descEN: "Immersive VR interaction project exploring environment navigation and user experience.",
    descDE: "Immersives VR-Projekt mit Fokus auf Navigation und User Experience.",
    tags: ["VR", "Interaction", "Video"],
    coverClass: "cover-vr",
    theme: "theme-vr",
    coverTitle: "VR Experience",
    coverSub: "Immersive Interaction",
    demo: "./assets/projects/VR.mp4",
    type: "video",
  },
  {
    id: "tam1",
    group: "Tamatem",
    special: "tamatem",
    theme: "theme-tamatem",
    titleEN: "Tamatem Web Game — Brand-Inspired Interactive Experience",
    titleDE: "Tamatem Web Game — Brand-Inspired Interactive Experience",
    descEN: "A web game concept inspired by Tamatem’s visual identity, red and green colors, and playful tomato mascot.",
    descDE: "Ein Web-Game-Konzept inspiriert von Tamatems visueller Identität.",
    tags: ["Web Game", "Mascot", "HTML/CSS/JS"],
    demo: "./assets/projects/run-tamatem-run(4).html",
    type: "html",
  },
  {
    id: "g1",
    group: "Graphic",
    titleEN: "Logos",
    titleDE: "Logos",
    descEN: "Logo exploration and visual identity concepts for different brand directions.",
    descDE: "Logo-Exploration und visuelle Identitätskonzepte.",
    tags: ["Branding"],
    cover: "./assets/projects/logos.png",
    demo: "./assets/projects/logos.png",
    type: "image",
  },
  {
    id: "g2",
    group: "Graphic",
    titleEN: "Branding",
    titleDE: "Branding",
    descEN: "Brand identity systems including typography, colors, and digital applications.",
    descDE: "Markenidentitätssysteme mit Typografie und Farbgestaltung.",
    tags: ["Identity"],
    cover: "./assets/projects/Branding.png",
    demo: "./assets/projects/Branding.png",
    type: "image",
  },
  {
    id: "g3",
    group: "Graphic",
    titleEN: "Magazine Design",
    titleDE: "Magazin Design",
    descEN: "Editorial design project focused on layout hierarchy and print presentation.",
    descDE: "Editorial-Design-Projekt mit Fokus auf Layout und Print-Präsentation.",
    tags: ["Magazine", "PDF"],
    coverClass: "cover-magazine",
    theme: "theme-magazine",
    coverTitle: "Magazine",
    coverSub: "Editorial Layout",
    demo: "./assets/projects/Magazine.pdf",
    type: "pdf",
  },
  {
    id: "g4",
    group: "Graphic",
    titleEN: "Character Design",
    titleDE: "Charakterdesign",
    descEN: "Original character concepts focused on shape language and personality.",
    descDE: "Originale Charakterkonzepte mit Fokus auf Persönlichkeit.",
    tags: ["Characters"],
    cover: "./assets/projects/characters.png",
    demo: "./assets/projects/characters.png",
    type: "image",
  },
  {
    id: "g5",
    group: "Graphic",
    titleEN: "Storyboard",
    titleDE: "Storyboard",
    descEN: "Sequential storytelling and scene composition for animation and visual narrative.",
    descDE: "Visuelles Storytelling und Szenenkomposition.",
    tags: ["Storyboard"],
    cover: "./assets/projects/storyBoard.png",
    demo: "./assets/projects/storyBoard.png",
    type: "image",
  },
  {
    id: "m1",
    group: "Motion3D",
    titleEN: "Cat Animation",
    titleDE: "Cat Animation",
    descEN: "2D animation focused on timing, character motion, and visual rhythm.",
    descDE: "2D-Animation mit Fokus auf Timing, Bewegung und Rhythmus.",
    tags: ["Animation", "2D", "Video"],
    coverClass: "cover-cat",
    theme: "theme-cat",
    coverTitle: "Cat Animation",
    coverSub: "2D Motion Study",
    demo: "./assets/projects/cat%20animate.mp4",
    type: "video",
  },
  {
    id: "m2",
    group: "Motion3D",
    titleEN: "3D Project",
    titleDE: "3D Projekt",
    descEN: "3D environment and rendering exploration using lighting and composition techniques.",
    descDE: "3D-Projekt mit Fokus auf Licht und Komposition.",
    tags: ["3D"],
    cover: "./assets/projects/3d.png",
    demo: "./assets/projects/3d.png",
    type: "image",
  },
];

function applyI18n() {
  const dict = i18n[state.lang];
  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
}

function renderEducation() {
  const ul = $("#eduList");
  ul.innerHTML = "";
  educationItems[state.lang].forEach((t) => {
    const li = document.createElement("li");
    li.textContent = t;
    ul.appendChild(li);
  });
}

function renderChips(containerId, arrByLang) {
  const wrap = $(containerId);
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
  wrap.innerHTML = "";
  arr.forEach((t) => {
    const span = document.createElement("span");
    span.className = "chip";
    span.textContent = t;
    wrap.appendChild(span);
  });
}

function renderTools() {
  const wrap = $("#toolGrid");
  wrap.innerHTML = "";
  tools.forEach((t) => {
    const card = document.createElement("div");
    card.className = "tool-card";
    const desc = state.lang === "EN" ? t.descEN : t.descDE;
    card.innerHTML = `
      <div class="tool-icon">
        <img src="${t.icon}" alt="${t.name}" onerror="this.remove(); this.parentElement.insertAdjacentHTML('beforeend','<span class=&quot;tool-badge&quot;>${t.badge}</span>')" />
      </div>
      <div class="tool-info">
        <div class="tname">${t.name}</div>
        <div class="tdesc">${desc}</div>
      </div>
    `;
    wrap.appendChild(card);
  });
}

function renderExperience() {
  const wrap = $("#expTimeline");
  wrap.innerHTML = "";
  experience.forEach((x) => {
    const div = document.createElement("div");
    div.className = "t-item";
    const role = state.lang === "EN" ? x.roleEN : x.roleDE;
    const period = state.lang === "EN" ? x.periodEN : x.periodDE;
    const bullets = state.lang === "EN" ? x.bulletsEN : x.bulletsDE;
    div.innerHTML = `
      <div class="t-top">
        <div class="t-role">${x.org}</div>
        <div class="t-date">${period}</div>
      </div>
      <div class="t-org">${role}</div>
      <div class="t-bullets">
        ${bullets.map(b => `<div class="muted small">• ${b}</div>`).join("")}
      </div>
    `;
    wrap.appendChild(div);
  });
}

function renderCerts() {
  const wrap = $("#certsList");
  wrap.innerHTML = "";
  certifications[state.lang].forEach((c) => {
    const row = document.createElement("div");
    row.className = "cert-row";
    row.innerHTML = `
      <div class="cert-title">${c.title}</div>
      <a class="btn btn-mini" href="${c.file}" download>Download</a>
    `;
    wrap.appendChild(row);
  });
}

function renderPartners() {
  const wrap = $("#partnerGrid");
  wrap.innerHTML = "";
  partners[state.lang].forEach((p) => {
    const card = document.createElement("div");
    card.className = "flip";
    card.innerHTML = `
      <div class="flip-inner">
        <div class="flip-face flip-front">
          <div class="p-name">${p.name}</div>
          <div class="p-tag">${p.tag}</div>
        </div>
        <div class="flip-face flip-back">
          <div class="p-desc">${p.desc}</div>
        </div>
      </div>
    `;
    wrap.appendChild(card);
  });
}

function renderProjectFilters() {
  const wrap = $("#projectFilters");
  wrap.innerHTML = "";
  projectCategories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (state.activeCategory === cat.key ? " active" : "");
    btn.type = "button";
    btn.textContent = state.lang === "EN" ? cat.EN : cat.DE;
    btn.addEventListener("click", () => {
      state.activeCategory = cat.key;
      renderProjectFilters();
      renderProjects();
    });
    wrap.appendChild(btn);
  });
}

function renderProjects() {
  const wrap = $("#projectGrid");
  wrap.innerHTML = "";
  const filtered = projects.filter(p => p.group === state.activeCategory);

  filtered.forEach((p) => {
    const card = document.createElement("div");
    card.className = "project-card" + (p.special === "tamatem" ? " tamatem-project-card" : "");

    const title = state.lang === "EN" ? p.titleEN : p.titleDE;
    const desc = state.lang === "EN" ? p.descEN : p.descDE;

    let thumb = "";

    if (p.special === "tamatem") {
      thumb = `<div class="tomato-mark">🍅</div><div class="tamatem-thumb-title">Tamatem Web Game</div>`;
    } else if (p.coverClass) {
      thumb = `
        <div class="soft-cover ${p.coverClass}">
          <div class="soft-cover-content">
            <div class="soft-cover-title">${p.coverTitle}</div>
            <div class="soft-cover-sub">${p.coverSub}</div>
          </div>
        </div>
      `;
    } else {
      thumb = `<img src="${p.cover}" alt="${title}">`;
    }

    card.innerHTML = `
      <div class="project-thumb ${p.special === "tamatem" ? "tamatem-thumb" : ""}">
        ${thumb}
      </div>
      <div class="project-meta">
        <div class="project-title">${title}</div>
        <div class="project-sub">${desc}</div>
        <div class="chips project-tags">
          ${p.tags.map(t => `<span class="chip">${t}</span>`).join("")}
        </div>
      </div>
    `;

    card.addEventListener("click", () => openProjectModal(p));
    wrap.appendChild(card);
  });
}

function openProjectModal(project) {
  const modal = $("#modal");
  const modalCard = $(".modal-card");
  const title = state.lang === "EN" ? project.titleEN : project.titleDE;
  const desc = state.lang === "EN" ? project.descEN : project.descDE;

  modalCard.className = "modal-card";
  if (project.theme) modalCard.classList.add(project.theme);

  $("#modalTitle").textContent = title;
  $("#modalDesc").textContent = desc;

  const media = $("#modalMedia");

  if (project.type === "video") {
    media.innerHTML = `<video class="modal-video" src="${project.demo}" controls playsinline></video>`;
  } else if (project.type === "pdf") {
    media.innerHTML = `<iframe class="modal-frame" src="${project.demo}"></iframe>`;
  } else if (project.type === "html") {
    media.innerHTML = `<iframe class="modal-frame" src="${project.demo}"></iframe>`;
  } else {
    media.innerHTML = `<img class="modal-image" src="${project.demo}" alt="${title}">`;
  }

  const tags = $("#modalTags");
  tags.innerHTML = "";
  project.tags.forEach((t) => {
    const span = document.createElement("span");
    span.className = "chip";
    span.textContent = t;
    tags.appendChild(span);
  });

  $("#modalDemo").href = project.demo || "#";
  $("#modalDemo").target = "_blank";
  $("#modalDemo").textContent =
    project.type === "pdf" ? "Open PDF" :
    project.type === "video" ? "Open Video" :
    "Open Project";

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  $("#modal").classList.remove("show");
  $("#modal").setAttribute("aria-hidden", "true");
  $("#modalMedia").innerHTML = "";
}

function setLang(nextLang) {
  const wipe = $("#wipe");
  wipe.classList.add("is-on");

  setTimeout(() => {
    state.lang = nextLang;
    const cvBtn = document.getElementById("cvDownload");

if (cvBtn) {
  cvBtn.href =
    state.lang === "DE"
      ? "assets/Bewerbungsunterlagen-Tala Almrayat.pdf"
      : "assets/Merged-Tala Almrayat.pdf";
}
    $(".slider").style.transform = state.lang === "DE" ? "translateX(100%)" : "translateX(0%)";

    applyI18n();
    renderEducation();
    renderChips("#expertiseChips", expertiseItems);
    renderChips("#langChips", languageItems);
    renderTools();
    renderChipList("#progChips", programming);
    renderChipList("#skillsChips", skills);
    renderExperience();
    renderPartners();
    renderCerts();
    renderProjectFilters();
    renderProjects();

    setTimeout(() => wipe.classList.remove("is-on"), 260);
  }, 220);
}

function initMouseFx() {
  window.addEventListener("mousemove", (e) => {
    document.documentElement.style.setProperty("--mouse-x", (e.clientX / window.innerWidth) * 100 + "%");
    document.documentElement.style.setProperty("--mouse-y", (e.clientY / window.innerHeight) * 100 + "%");
  });
}

function init() {
  $("#year").textContent = new Date().getFullYear();
  $(".slider").style.transform = "translateX(0%)";

  $("#langBtn").addEventListener("click", () => {
    setLang(state.lang === "EN" ? "DE" : "EN");
  });

  $("#modalClose").addEventListener("click", closeModal);
  $("#modalBackdrop").addEventListener("click", closeModal);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  applyI18n();
  renderEducation();
  renderChips("#expertiseChips", expertiseItems);
  renderChips("#langChips", languageItems);
  renderTools();
  renderChipList("#progChips", programming);
  renderChipList("#skillsChips", skills);
  renderExperience();
  renderPartners();
  renderCerts();
  renderProjectFilters();
  renderProjects();
  initMouseFx();
}

init();