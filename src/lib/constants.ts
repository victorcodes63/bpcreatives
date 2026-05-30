export const BRAND = {
  name: "BP Creatives",
  tagline: "PR & Communications",
  slogan: "Strategy with soul",
  email: "hello@bpcreatives.co.ke",
  phone: "0112 836 147",
  phoneTel: "+254112836147",
  location: "Nairobi, Kenya",
} as const;

export const CONTACT = {
  responseTime: "Within 48 hours",
  officeHours: "Monday – Friday, 9:00 AM – 6:00 PM EAT",
  timezone: "East Africa Time (EAT)",
} as const;

export const CONTACT_FAQ = [
  {
    question: "What types of clients do you work with?",
    answer:
      "We partner with startups, established brands, and enterprises across hospitality, F&B, retail, lifestyle, and corporate sectors — anywhere a story needs to be told with strategy and soul.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "After your initial inquiry, we aim to schedule a discovery call within 48 hours. Most engagements kick off within two to three weeks, depending on scope and timeline.",
  },
  {
    question: "Do you work with clients outside Nairobi?",
    answer:
      "Absolutely. While we're based in Nairobi, we serve clients across Kenya and East Africa, with experience placing stories in regional and international media as well.",
  },
  {
    question: "What should I include in my message?",
    answer:
      "Share your brand, goals, timeline, and any specific services you're interested in. The more context you provide, the more tailored our first conversation will be.",
  },
] as const;

export const CONTACT_PROCESS = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We listen first — understanding your brand, goals, audience, and the challenge or opportunity ahead.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "We craft a tailored approach with clear deliverables, timelines, and the right mix of services for your needs.",
  },
  {
    step: "03",
    title: "Partnership",
    description:
      "We embed with your team, execute with excellence, and measure what matters — building momentum that lasts.",
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
      "We hold ourselves to the highest standard in strategy, craft, and delivery — every campaign, every detail.",
    icon: "award" as const,
  },
  {
    title: "Strategic Partnership",
    description:
      "We work alongside you as an extension of your team, aligned on goals and invested in your long-term success.",
    icon: "handshake" as const,
  },
  {
    title: "Activity",
    description:
      "We stay proactive in the market — moving ideas forward, seizing opportunities, and keeping momentum behind your brand.",
    icon: "zap" as const,
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
      "We find the narrative in every brand — crafting messages, content, and campaigns that move people to listen, care, and act.",
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
      "Strategy with soul — a Nairobi team obsessed with helping brands connect, influence, and grow across Kenya and East Africa.",
    image: "/images/story-partnership-v2.jpg",
    imageAlt: "BP Creatives modern office in Nairobi",
  },
] as const;

export { SERVICES, SERVICE_SUMMARIES, getServiceHref } from "@/lib/services";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/#work" },
  { label: "Clients", href: "/#clients" },
  { label: "Contact", href: "/contact" },
] as const;

export const STATS = [
  { value: "50+", label: "Happy Clients", icon: "users" as const },
  { value: "200+", label: "Campaigns Delivered", icon: "megaphone" as const },
  { value: "8+", label: "Years of Experience", icon: "globe" as const },
  { value: "100%", label: "Commitment", icon: "award" as const },
] as const;

export const CLIENTS = [
  "Kuku King",
  "Artcaffé",
  "Java House",
  "Tribe Hotel",
  "The Alchemist",
] as const;

export const FEATURED_WORK = [
  { name: "Kuku", category: "Food & Beverage" },
  { name: "Haven Lounge", category: "Hospitality" },
  { name: "Zuri Collection", category: "Fashion & Retail" },
  { name: "Soko Nairobi", category: "Lifestyle" },
] as const;

export const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/#work" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "X", href: "https://x.com" },
] as const;
