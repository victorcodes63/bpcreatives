export const BRAND = {
  name: "BP Creatives",
  tagline: "PR & Communications",
  slogan: "Strategy with soul",
  email: "hello@bpcreatives.africa",
  phone: "0112 836 147",
  phoneTel: "+254112836147",
  location: "Baraza Media Lab, Riverside, Nairobi, Kenya",
  logo: "/images/bp-creatives-logo-new.png",
} as const;

export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bpcreatives.africa",
} as const;

export const CONTACT = {
  officeHours: "Monday to Friday, 8:30 AM to 5:30 PM EAT",
  timezone: "Kenya Time (EAT)",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.839203080227!2d36.78951571227992!3d-1.2693672987132054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f175b3f7aa65b%3A0x491f261632ec0035!2sBaraza%20Media%20Lab!5e0!3m2!1sen!2ske!4v1781066813736!5m2!1sen!2ske",
} as const;

export const CONTACT_FAQ = [
  {
    question: "What kind of brands do you work with?",
    answer:
      "We partner with startups, established brands, and organisations across hospitality, food and beverage, retail, lifestyle, and corporate sectors. If your story deserves to be told with strategy and soul, we want to hear from you.",
  },
  {
    question: "Do you work with brands outside Nairobi?",
    answer:
      "Yes. While we are based in Nairobi, we serve brands across Kenya and work with media outlets, partners, and audiences throughout the country and beyond.",
  },
  {
    question: "What should I include in my message?",
    answer:
      "Share your brand, your goals, your timeline, and any specific services you have in mind. The more context you provide, the more meaningful our first conversation will be.",
  },
] as const;

export const CONTACT_PROCESS = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We begin by listening. Your brand, your goals, your audience, and the opportunity ahead deserve our full attention before any strategy takes shape.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "We craft a tailored approach with clear deliverables, timelines, and the right mix of services shaped around what your brand needs most.",
  },
  {
    step: "03",
    title: "Partnership",
    description:
      "We embed with your team, execute with precision, and measure what matters. The goal is momentum that endures long after the campaign ends.",
  },
] as const;

export const BRAND_VALUES = [
  {
    title: "Authenticity",
    description:
      "We tell stories that ring true, because credibility is the foundation of every brand relationship we build.",
    icon: "heart" as const,
  },
  {
    title: "Excellence",
    description:
      "We hold ourselves to the highest standard in strategy, craft, and delivery. Every campaign. Every detail.",
    icon: "award" as const,
  },
  {
    title: "Strategic Partnership",
    description:
      "We work alongside you as an extension of your team, aligned on goals and invested in your long term success.",
    icon: "handshake" as const,
  },
  {
    title: "Artistry",
    description:
      "We bring creative vision and craft to every brief, turning strategy into work that feels intentional, distinctive, and beautifully made.",
    icon: "palette" as const,
  },
  {
    title: "Professionalism",
    description:
      "From first briefing to final report, we bring discipline, reliability, and respect to every interaction.",
    icon: "briefcase" as const,
  },
] as const;

export const STORY_BEATS = [
  {
    kicker: "Narrative",
    label: "We are storytellers.",
    highlight: "storytellers",
    description:
      "We find the narrative in every brand, crafting messages, content, and campaigns that move people to listen, care, and act.",
    image: "/images/story-1.jpg",
    imageAlt: "Creative team mapping brand ideas with sticky notes",
  },
  {
    kicker: "Strategy",
    label: "We are strategists.",
    highlight: "strategists",
    description:
      "We read the landscape, align on goals, and build PR and communications plans designed for clarity, impact, and measurable results.",
    image: "/images/story-2.jpg",
    imageAlt: "Professional team reviewing strategy together in a meeting",
  },
  {
    kicker: "Partnership",
    label: "We are BP Creatives.",
    highlight: "BP Creatives",
    description:
      "Strategy with soul. A Nairobi team devoted to helping brands connect, influence, and grow across Kenya.",
    image: "/images/about-us-section.png",
    imageAlt: "BP Creatives lounge with gold logo and green accent wall",
  },
] as const;

export { SERVICES, SERVICE_SUMMARIES, getServiceHref } from "@/lib/services";

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/#work" },
  { label: "Events", href: "/events" },
] as const;

export const PARTNERSHIP_APPROACH = [
  {
    title: "We listen first",
    description:
      "Every partnership begins with understanding your brand, your audience, and the story you want to tell.",
    icon: "users" as const,
  },
  {
    title: "We strategise with intent",
    description:
      "We build tailored communications plans shaped around your goals, your market, and the moments that matter most.",
    icon: "target" as const,
  },
  {
    title: "We execute with craft",
    description:
      "From press and content to events and social, we deliver work that reflects your standards and earns genuine attention.",
    icon: "megaphone" as const,
  },
  {
    title: "We measure what matters",
    description:
      "We track outcomes that reflect real impact: visibility, sentiment, engagement, and the reputation you are building.",
    icon: "award" as const,
  },
] as const;

/** Saved for future use when client logos are onboarded */
export const CLIENTS = [
  "Kuku King",
  "Artcaffé",
  "Java House",
  "Tribe Hotel",
  "The Alchemist",
] as const;

export const CREATIVE_FOCUS = [
  { name: "Hospitality", category: "Brand Storytelling" },
  { name: "Food & Beverage", category: "Launch & Visibility" },
  { name: "Fashion & Retail", category: "Creative Direction" },
  { name: "Lifestyle", category: "Content & Social" },
] as const;

export const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/#work" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "X", href: "https://x.com" },
] as const;

export const EVENTS = {
  headline: "Something is coming",
  description:
    "BP Creatives is preparing to host its first event later this year. A gathering for brands, creators, and communicators who believe in strategy with soul.",
  ctaLabel: "Register Your Interest",
  ctaHref: "/contact",
} as const;
