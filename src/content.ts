// ============================================================
// CONTENT — this is the only file you need to edit.
// Anything marked [EDIT] is placeholder copy waiting for your
// own words. Everything else (links, labels) is real data you
// can tweak freely. The components in App.tsx just render this.
// ============================================================

export const site = {
  name: "Saraf Ray",
  // Section headers — rename freely.
  sections: {
    about: "About Me",
    work: "Work",
    projects: "Projects",
    education: "Education",
    contact: "Contact",
  },
  // Shown under your name. Keep it to one line.
  tagline: "Full-stack developer building live sports data systems.",
  location: "Brooklyn, NY",
  email: "sarafiskray@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/sarafiskray" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/saraf-ray-3a181814a/" },
    { label: "Email", href: "mailto:sarafiskray@gmail.com" },
  ],
};

// ------------------------------------------------------------
// INTRO — a few sentences about who you are. Written in first
// person, plain voice. [EDIT] — replace with your own words.
// ------------------------------------------------------------
export const intro: string[] = [
  "[EDIT] Hello — I'm Saraf. I'm a software engineer from Brooklyn. For the past five years I've been building the systems that move live sports data: APIs, ingestion pipelines, and the tools that keep them honest.",
  "[EDIT] A second short paragraph is optional. Kevin-style sites often add one personal line here — what you're reading, what you do off the clock. Or delete this paragraph entirely.",
];

// ------------------------------------------------------------
// WORK — your current role. Deliberately written like a normal
// "what I do" section, not a job application. [EDIT] all of it.
// ------------------------------------------------------------
export const work = {
  company: "SportsDataIO",
  role: "Full-Stack Developer",
  period: "2021 — present",
  summary:
    "[EDIT] One or two sentences on what you do, in your voice. e.g.: I build and maintain the systems that ingest, store, and distribute millions of live sports data points a day — C#/.NET on the back end, React on the front.",
  // Short lines, not resume bullets. Each one is a thing you've
  // built or own. Keep them terse; detail belongs in conversation.
  highlights: [
    "[EDIT] Global Sports API — technical lead. ~100 sports, thousands of leagues, real-time.",
    "[EDIT] NFL coverage system — solo redesign of the company's most business-critical product.",
    "[EDIT] Internal React tools used daily by a non-technical operations team.",
  ],
};

// ------------------------------------------------------------
// PROJECTS — quality over quantity. Three is plenty.
// ------------------------------------------------------------
export type Project = {
  title: string;
  href?: string; // omit to render without a link
  meta: string; // small mono line: stack, year, context
  description: string;
};

export const projects: Project[] = [
  {
    title: "NBA Player Comparison Tool",
    href: "https://sarafiskray.github.io/nets-app/",
    meta: "React · Recharts · live NBA data",
    description:
      "[EDIT] Compare recent player performances with live data. Originally built in 2021; due for a rebuild — and when you rebuild it, update this line to say so.",
  },
  {
    title: "Landlord Watchlist",
    href: "https://landlordwatchlist.com/",
    meta: "Python · Flask · SQL — NYC Office of the Public Advocate",
    description:
      "[EDIT] Data modeling, scraping, and a REST API for the Public Advocate's public list of the city's worst landlords.",
  },
  {
    title: "RFID Traffic Sign Management",
    meta: "C# · SQL · RFID — Vermont Agency of Transportation",
    description:
      "[EDIT] A traffic signage inventory system built with a UVM research team, funded by VTrans. I built the handheld iPad scanner system. Published at the 2020 Transportation Research Board conference and in IEEE Transactions on Intelligent Transportation Systems.",
  },
  {
    title: "Raspberry Pi Car Music Player",
    meta: "Python · Kivy — university project",
    description:
      "[EDIT] An offline music player built into an old Prius, designed for the parts of Vermont where cell signal goes to die.",
  },
];

// ------------------------------------------------------------
// EDUCATION — schools listed newest-first. The `detail` line is
// optional per entry (delete the property to omit it).
// ------------------------------------------------------------
export type School = {
  name: string;
  place: string;
  credential: string;
  period: string;
  detail?: string;
};

export const education: School[] = [
  {
    name: "University of Vermont",
    place: "Burlington, VT",
    credential: "B.S. Computer Science, Spanish minor",
    period: "2020",
    detail: "[EDIT] Optional line — e.g. the semester at Universidad de Alicante, Spain.",
  },
  {
    name: "Stuyvesant High School",
    place: "New York, NY",
    credential: "",
    period: "2016",
    detail: "[EDIT] Optional line — e.g. the year at Woodstock School, India.",
  },
];

// One line about languages, shown at the end of Education.
export const languages =
  "[EDIT] Trilingual — English (fluent), Spanish (fluent), Bengali (conversational).";

// ------------------------------------------------------------
// FOOTER
// ------------------------------------------------------------
export const colophon =
  "Built with React + TypeScript. Set in Spectral & IBM Plex Mono.";
