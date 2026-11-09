export const site = {
  name: "Saraf Ray",
  sections: {
    about: "About Me",
    work: "Work",
    projects: "Projects",
    education: "Education",
    contact: "Contact",
  },
  tagline: "Full-stack developer building live sports data systems.",
  location: "Brooklyn, NY",
  email: "sarafiskray@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/sarafiskray" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/saraf-ray-3a181814a/" },
    { label: "Email", href: "mailto:sarafiskray@gmail.com" },
  ],
};

export const intro: string[] = [
  "I'm Saraf, a software engineer from Brooklyn.",
  "Outside of work, I enjoy being outdoors, playing/watching sports, riding my bike, eating food, hanging with friends, and learning about pretty much anything.",
];


export const work = {
  company: "SportsDataIO",
  role: "Full-Stack Developer",
  period: "2021 — present",
  summary:
    "I build and maintain  systems that ingest, store, and distribute millions of live sports data points a day — C#/.NET back-end, React front-end.",
  highlights: [
    "Global Sports API — technical lead. ~100 sports, thousands of leagues, real-time.",
    "Commercial APIs — around-the-clock support for sportsbooks, fantasy operators, and prediction markets that rely on accurate, up-to-the-second data.",
    "Data Operations — build tools for and provide daily support to the non-technical data operations team in Scottsdale, AZ.",
  ],
};


export type Project = {
  title: string;
  href?: string;
  meta: string;
  description: string;
};

export const projects: Project[] = [
 {
  title: "NBA Stat Tool",
  href: "https://sarafiskray.github.io/nets-app-2/",
  meta: "React · TypeScript · Motion",
  description:
    "Compare NBA team stats and stats allowed over custom game and date ranges.",
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

export const languages =
  "Trilingual — English, Spanish, and Bengali.  I want to get to 5 languages someday.";
