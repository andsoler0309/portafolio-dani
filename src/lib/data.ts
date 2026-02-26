export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  tags: string[];
  description: string;
  longDescription: string;
  image: string;
  year: string;
  results?: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  url: string;
}

export const siteConfig = {
  name: "Daniela Amórtegui",
  initials: "D.A.",
  title: "Content Specialist",
  tagline: "I craft stories that move people.",
  subtitle:
    "Content strategist for wellness, sports & lifestyle brands — blending narrative, data, and cultural insight to build movements, not just campaigns.",
  email: "daniela@example.com",
  linkedin: "https://linkedin.com/in/daniela-reyes",
  instagram: "https://instagram.com/daniela.creates",
  twitter: "https://twitter.com/danielacreates",
};

export const projects: Project[] = [
  {
    id: "luma-wellness",
    title: "Brand Narrative Redesign",
    client: "LUMA WELLNESS",
    category: "Content Strategy",
    tags: ["Brand Voice", "Editorial Strategy", "Wellness"],
    description:
      "Rebuilt the entire brand narrative for a DTC wellness brand — from manifesto to product storytelling — increasing organic engagement by 340%.",
    longDescription:
      "Luma Wellness was stuck in generic health-speak. I led a complete narrative overhaul: new brand voice guidelines, editorial calendar, content pillars, and a storytelling framework that connected their mushroom-based supplements to deeper themes of daily ritual and intentional living.",
    image: "/images/project-1.jpg",
    year: "2025",
    results: [
      "340% increase in organic engagement",
      "2.1M earned impressions in Q1",
      "Brand voice adopted across 12 touchpoints",
    ],
  },
  {
    id: "stride-athletics",
    title: "Community-Led Content System",
    client: "STRIDE ATHLETICS",
    category: "Content Systems",
    tags: ["Community", "UGC Strategy", "Sports"],
    description:
      "Designed a scalable content ecosystem for a running brand — merging athlete stories, data-driven editorial, and community-generated content.",
    longDescription:
      "Stride Athletics had products but no soul. I built a content system that turned their community of 50K runners into co-creators. This included a UGC framework, athlete story templates, a weekly editorial series ('Miles & Mindset'), and performance content tied to real running data.",
    image: "/images/project-2.jpg",
    year: "2025",
    results: [
      "UGC submissions increased 580%",
      "Newsletter open rate: 48%",
      "Community grew from 50K to 120K in 8 months",
    ],
  },
  {
    id: "terra-studio",
    title: "Editorial Identity & Launch",
    client: "TERRA STUDIO",
    category: "Brand Launch",
    tags: ["Launch Strategy", "Editorial", "Lifestyle"],
    description:
      "Created the editorial identity for a lifestyle studio brand — from naming conventions to the full launch content strategy across digital and physical touchpoints.",
    longDescription:
      "Terra Studio was a new concept: part yoga studio, part creative workspace, part café. I developed their editorial identity from scratch — name architecture, tone of voice, launch campaign copy, social content strategy, and an experiential content series called 'Grounded Sessions' that became their signature.",
    image: "/images/project-3.jpg",
    year: "2024",
    results: [
      "Sold out launch event (300 spots)",
      "12K followers in first 6 weeks",
      "Featured in 3 national wellness publications",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "LUMA WELLNESS",
    role: "Lead Content Strategist",
    period: "03/25 — Current",
    location: "Los Angeles",
    url: "#",
  },
  {
    company: "STRIDE ATHLETICS",
    role: "Content Director",
    period: "06/24 — 02/25",
    location: "New York",
    url: "#",
  },
  {
    company: "TERRA STUDIO",
    role: "Brand & Content Lead",
    period: "01/24 — 05/24",
    location: "Austin",
    url: "#",
  },
  {
    company: "NOURISH COLLECTIVE",
    role: "Senior Content Specialist",
    period: "08/22 — 12/23",
    location: "San Francisco",
    url: "#",
  },
  {
    company: "KINETIC MEDIA",
    role: "Content Strategist",
    period: "03/21 — 07/22",
    location: "Remote",
    url: "#",
  },
];

export const services = [
  {
    number: "01",
    title: "Brand Narrative & Voice",
    description:
      "Developing distinctive brand voices that feel human, not corporate. From manifestos to microcopy, every word is intentional.",
  },
  {
    number: "02",
    title: "Content Strategy & Systems",
    description:
      "Building scalable content ecosystems — editorial calendars, content pillars, distribution frameworks — engineered for growth.",
  },
  {
    number: "03",
    title: "Editorial & Storytelling",
    description:
      "Long-form narratives, campaign concepts, athlete stories. Content that earns attention by creating genuine emotional resonance.",
  },
  {
    number: "04",
    title: "Community & Culture",
    description:
      "Turning audiences into communities. UGC frameworks, ambassador programs, and culture-first content that builds belonging.",
  },
];

export const philosophyPoints = [
  {
    title: "Words are movement",
    body: "The right story doesn't just inform — it changes behavior. I write content that moves people from awareness to action, from consumer to advocate.",
  },
  {
    title: "Data shapes intuition",
    body: "I don't guess. Every narrative decision is grounded in audience data, performance insights, and cultural research. Strategy is where creativity meets evidence.",
  },
  {
    title: "Brands are living systems",
    body: "A brand isn't a logo file — it's an evolving conversation. I build content systems that grow, adapt, and stay authentic as the brand scales.",
  },
];
