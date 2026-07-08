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
  "Hey, my name is Saraf. I'm a software engineer from Brooklyn.",
  "Outside of work, I enjoy being outdoors, playing/watching sports, riding my bike, eating food, and learning about pretty much anything.",
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
    "I build and maintain  systems that ingest, store, and distribute millions of live sports data points a day — C#/.NET back-end, React front-end.",
  // Short lines, not resume bullets. Each one is a thing you've
  // built or own. Keep them terse; detail belongs in conversation.
  highlights: [
    "Global Sports API — technical lead. ~100 sports, thousands of leagues, real-time.",
    "Commercial APIs — around-the-clock support for sportsbooks, fantasy operators, and prediction markets that rely on accurate, up-to-the-second data.",
    "Data Operations — build tools for and provide daily support to the non-technical data operations team in Scottsdale, AZ.",
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
    meta: "React · Recharts · Live NBA data",
    description:
      "A simple tool used to compare recent NBA player performances.",
  },
  {
    title: "Landlord Watchlist",
    href: "https://landlordwatchlist.com/",
    meta: "Python · Flask · SQL · NYC Office of the Public Advocate",
    description:
      "Worked on data modeling and scraping for the Public Advocate's public list of the city's worst landlords.",
  },
  {
    title: "RFID Traffic Sign Management",
    href: "/pdf/vtransposter.pdf",
    meta: "C# · SQL · RFID · UVM · Vermont Agency of Transportation",
    description:
      "A traffic signage inventory system built in a small research team, funded by the Vermont Agency of Transportation. I built the handheld iPad scanner system, which pairs with the car-mounted reader. Published at the 2020 Transportation Research Board conference and in IEEE Transactions on Intelligent Transportation Systems.",
  },
  {
    title: "Raspberry Pi Car Music Player",
    href: "https://www.youtube.com/watch?v=ZqPi7cyNUVQ",
    meta: "Python · Kivy",
    description:
      "An offline music player built into my friend's old Prius, designed for driving on country roads with no signal.",
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
    credential: "B.A. Computer Science, Spanish Minor",
    period: "2020",
  },
  {
    name: "Stuyvesant High School",
    place: "New York, NY",
    credential: "",
    period: "2016",
  },
    {
    name: "Woodstock School",
    place: "Mussoorie, Uttarakhand, India",
    credential: "",
    period: "2014",
  },
];

// One line about languages, shown at the end of Education.
export const languages =
  "Trilingual — English, Spanish, and Bengali.  I want to get to 5 languages someday.";

// ------------------------------------------------------------
// FOOTER
// ------------------------------------------------------------
export const colophon =
  "Built with React + TypeScript. Set in Spectral & IBM Plex Mono.";
