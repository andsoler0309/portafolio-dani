export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  tags: string[];
  description: string;
  longDescription: string;
  image: string;
  imageLayout?: "cover" | "float";
  shadowColor?: string;
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
    "Estratega de contenidos con +7 años construyendo narrativas de marca, ecosistemas editoriales y resultados medibles. Combino data, estructura y storytelling para crear contenido que posiciona y convierte.",
  email: "daniela@example.com",
  linkedin: "https://linkedin.com/in/daniela-reyes",
  instagram: "https://instagram.com/daniela.creates",
  twitter: "https://twitter.com/danielacreates",
};

export const projects: Project[] = [
  {
    id: "mercado-libre",
    title: "Estrategia del ecosistema de contenidos para Mercado Libre",
    client: "MERCADO LIBRE",
    category: "UX Writer",
    tags: ["Brand Voice", "Editorial Strategy", "Wellness"],
    description:
      "Lideré y estructuré el ecosistema integral de contenidos para flujos clave del producto, alineando storytelling, data y equipos multidisciplinarios para garantizar coherencia de marca, claridad en la experiencia y resultados medibles a gran escala.",
    longDescription:
      "Luma Wellness was stuck in generic health-speak. I led a complete narrative overhaul: new brand voice guidelines, editorial calendar, content pillars, and a storytelling framework that connected their mushroom-based supplements to deeper themes of daily ritual and intentional living.",
    image: "/images/project-1.jpg",
    shadowColor: "#FFE600",
    year: "2025",
    results: [
      "340% increase in organic engagement",
      "2.1M earned impressions in Q1",
      "Brand voice adopted across 12 touchpoints",
    ],
  },
  {
    id: "triario",
    title: "Gestión de proyectos de comunicación digital para Triario",
    client: "TRIARIO",
    category: "Project Manager",
    tags: ["Community", "UGC Strategy", "Sports"],
    description:
      "Lideré la ejecución integral de proyectos de contenido y comunicación para múltiples marcas, coordinando equipos multidisciplinarios y gestionando flujos en HubSpot para asegurar cumplimiento, coherencia estratégica y resultados en todo el funnel.",
    longDescription:
      "Stride Athletics had products but no soul. I built a content system that turned their community of 50K runners into co-creators. This included a UGC framework, athlete story templates, a weekly editorial series ('Miles & Mindset'), and performance content tied to real running data.",
    image: "/images/project-2.jpg",
    imageLayout: "cover",
    year: "2025",
    results: [
      "UGC submissions increased 580%",
      "Newsletter open rate: 48%",
      "Community grew from 50K to 120K in 8 months",
    ],
  },
  {
    id: "mesfix",
    title: "Estrategia Integral de Contenidos y Posicionamiento de Marca",
    client: "MESFIX",
    category: "Communications Specialist",
    tags: ["Launch Strategy", "Editorial", "Lifestyle"],
    description:
      "Diseñé y ejecuté la estrategia 360 de contenidos digitales (redes, blog, SEO, PR e influenciadores), liderando la narrativa de marca en momentos clave de crecimiento y optimizando el desempeño con base en métricas y resultados.",
    longDescription:
      "Terra Studio was a new concept: part yoga studio, part creative workspace, part café. I developed their editorial identity from scratch — name architecture, tone of voice, launch campaign copy, social content strategy, and an experiential content series called 'Grounded Sessions' that became their signature.",
    image: "/images/project-3.jpg",
    imageLayout: "cover",
    year: "2024",
    results: [
      "Sold out launch event (300 spots)",
      "12K followers in first 6 weeks",
      "Featured in 3 national wellness publications",
    ],
  },
  {
    id: "dattis",
    title: "Gestión y Análisis de Contenidos Digitales",
    client: "DATTIS",
    category: "Analista de comunicación digital",
    tags: ["Campaign", "Video Content", "Sports"],
    description:
      "Construí parrillas editoriales y realicé seguimiento de métricas para distintas marcas, optimizando contenido y campañas digitales a partir de resultados y comportamiento de audiencia.",
    longDescription:
      "Forma Running needed more than ads — they needed a narrative engine. I architected a 360° campaign built around the concept 'Every Stride Tells a Story,' producing a hero mini-documentary, athlete interview series, data-driven training content, and a content hub that unified blog, video, and community contributions into a single storytelling platform.",
    image: "/images/project-4.jpg",
    imageLayout: "cover",
    year: "2024",
    results: [
      "4.8M campaign impressions",
      "Content hub became #1 organic acquisition channel",
      "62% increase in brand search volume",
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

export interface PersonalProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  gradient: string;
  image?: string;
  url?: string;
}

export const personalProjects: PersonalProject[] = [
  {
    id: "dani-cruza-metas",
    title: "Substack Blog: DaniCruzaMetas",
    tagline: "DaniCruzaMetas | Narrativa Larga y Storytelling Deportivo",
    description:
      "Espacio editorial donde transformo mi experiencia como maratonista amateur en reflexiones sobre disciplina, identidad y bienestar, aplicando estructura narrativa y coherencia de marca en formato long-form.",
    tags: ["Newsletter", "Editorial", "Culture"],
    gradient: "linear-gradient(135deg, #1A2E1A 0%, #8B9D77 50%, #A8B89A 100%)",
    image: "/images/personal-project-1.jpg",
  },
  {
    id: "instagram-crecimiento",
    title: "Instagram en Crecimiento",
    tagline: "Estrategia de Contenido y Crecimiento Orgánico en Running",
    description:
      "Desarrollo contenido en formatos cortos (reels, carruseles y guiones narrativos) optimizando storytelling, consistencia y análisis de engagement para construir comunidad en el ecosistema de deporte y bienestar.",
    tags: ["Podcast", "Interviews", "Founders"],
    gradient: "linear-gradient(135deg, #C4704A 0%, #D4896A 50%, #FAF7F2 100%)",
    image: "/images/personal-project-2.jpg",
  },
  {
    id: "fut-fem-colombia",
    title: "FutFem Colombia",
    tagline: "Estrategia y Creación de Contenido para Instagram Deportivo",
    description:
      "Desarrollo contenido sobre fútbol femenino para la cuenta de FutFemColombia, aplicando estructura editorial, claridad informativa y enfoque en engagement para fortalecer comunidad y visibilidad del deporte.",
    tags: ["Zine", "Photography", "Movement"],
    gradient: "linear-gradient(135deg, #D4C5B0 0%, #8B9D77 50%, #1A2E1A 100%)",
    image: "/images/personal-project-3.jpg",
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
