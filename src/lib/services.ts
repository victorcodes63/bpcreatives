export const SERVICE_ICONS = [
  "target",
  "message-square",
  "pen-line",
  "trending-up",
  "calendar",
  "users",
  "shield",
] as const;

export type ServiceIcon = (typeof SERVICE_ICONS)[number];

export type ServiceProcessStep = {
  step: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  overview: string[];
  deliverables: string[];
  process: ServiceProcessStep[];
  icon: ServiceIcon;
  metaDescription: string;
};

export const SERVICES: readonly Service[] = [
  {
    slug: "strategic-pr-media-relations",
    title: "Strategic PR & Media Relations",
    tagline: "Earned visibility that shapes how markets see your brand.",
    shortDescription:
      "Strategic media outreach, press relations, and narrative placement that put your brand in the right conversations.",
    overview: [
      "Strong brands are built in the public square as much as in the boardroom. Our strategic PR and media relations practice helps you define the story you want told, then places it where journalists, editors, and industry voices are already listening.",
      "From Nairobi to regional and international outlets, we craft pitches, press materials, and spokesperson readiness that align with your business goals—not vanity coverage for its own sake.",
      "Whether you are launching a product, entering a new market, or reframing your reputation, we connect your message to the media landscape with discipline, relationships, and clear outcomes.",
    ],
    deliverables: [
      "PR strategy and messaging frameworks aligned to business goals",
      "Press release and media kit development",
      "Media list building and targeted journalist outreach",
      "Interview and spokesperson coaching",
      "Press conference and media briefing support",
      "Coverage tracking and narrative reporting",
      "Ongoing media relationship stewardship",
    ],
    process: [
      {
        step: "Discover",
        description:
          "We audit your brand position, news value, audiences, and competitive media landscape.",
      },
      {
        step: "Plan",
        description:
          "We define angles, timelines, key messages, and the outlets that matter for your goals.",
      },
      {
        step: "Execute",
        description:
          "We pitch, place, and support interviews—handling logistics so your team stays focused.",
      },
      {
        step: "Measure",
        description:
          "We report on coverage quality, reach, and narrative consistency with recommendations for what comes next.",
      },
    ],
    icon: "target",
    metaDescription:
      "Strategic PR and media relations in Nairobi, Kenya. BP Creatives builds press strategy, outreach, and coverage that earns attention and trust.",
  },
  {
    slug: "brand-strategy",
    title: "Brand Strategy",
    tagline: "Clarity and consistency that turn audiences into advocates.",
    shortDescription:
      "Positioning, voice, and brand architecture that help you stand out and stay memorable across every touchpoint.",
    overview: [
      "A brand is more than a logo—it is the promise people believe you will keep. We work with leadership and marketing teams to articulate who you are, who you serve, and why you matter in a crowded market.",
      "Our brand strategy work spans positioning, messaging hierarchies, tone of voice, and visual and verbal alignment so every channel tells the same story with confidence.",
      "For organisations scaling across East Africa or refining after growth, we bring structure to instinct—giving your teams a shared language for decisions, campaigns, and partnerships.",
    ],
    deliverables: [
      "Brand discovery workshops and stakeholder interviews",
      "Market and audience insight synthesis",
      "Brand positioning and value proposition development",
      "Messaging architecture and tone-of-voice guidelines",
      "Brand narrative and elevator story development",
      "Competitive differentiation mapping",
      "Implementation roadmaps for marketing and communications teams",
    ],
    process: [
      {
        step: "Discover",
        description:
          "We listen to leadership, customers, and internal teams to understand perception and ambition.",
      },
      {
        step: "Plan",
        description:
          "We shape positioning, pillars, and messaging that reflect reality and stretch toward your vision.",
      },
      {
        step: "Execute",
        description:
          "We deliver guidelines and toolkits your teams can apply across campaigns, sales, and partnerships.",
      },
      {
        step: "Measure",
        description:
          "We review adoption, feedback, and market signals—and refine where the story needs sharpening.",
      },
    ],
    icon: "message-square",
    metaDescription:
      "Brand strategy and positioning for brands in Kenya and East Africa. BP Creatives defines voice, messaging, and identity that resonate and endure.",
  },
  {
    slug: "content-creation-storytelling",
    title: "Content Creation & Storytelling",
    tagline: "Stories that inform, inspire, and move people to act.",
    shortDescription:
      "Editorial, visual, and campaign content crafted to tell your story beautifully across every platform.",
    overview: [
      "Audiences scroll past noise every day. We help you break through with content rooted in truth, culture, and craft—whether that is a founder profile, a campaign film brief, or a month of social storytelling.",
      "Our team blends journalistic discipline with creative execution, producing work that feels human, on-brand, and built for the channels where your people actually spend time.",
      "From long-form articles and case studies to short-form video scripts and branded series, we create assets that support PR, social, events, and sales—not isolated posts that disappear overnight.",
    ],
    deliverables: [
      "Content strategy and editorial calendars",
      "Blog posts, articles, and thought leadership pieces",
      "Social-first copy and carousel concepts",
      "Video and photography creative direction",
      "Case studies and customer success stories",
      "Newsletter and email narrative development",
      "Campaign storytelling toolkits for internal and partner use",
    ],
    process: [
      {
        step: "Discover",
        description:
          "We align on audience, channels, brand voice, and the outcomes each content stream should support.",
      },
      {
        step: "Plan",
        description:
          "We build themes, formats, and production schedules that balance quality with speed to market.",
      },
      {
        step: "Execute",
        description:
          "We write, brief, and coordinate creation—partnering with specialists where production scale is needed.",
      },
      {
        step: "Measure",
        description:
          "We review engagement, sentiment, and message pull-through—and iterate on what resonates.",
      },
    ],
    icon: "pen-line",
    metaDescription:
      "Content creation and brand storytelling in Nairobi. BP Creatives produces editorial, social, and campaign content that connects and converts.",
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    tagline: "Consistent presence, community growth, and content that performs.",
    shortDescription:
      "End-to-end social media management that builds community, protects brand tone, and drives measurable engagement.",
    overview: [
      "Social media is where reputation is reinforced daily. We manage your channels with the same strategic rigour as traditional PR—grounded in brand strategy, responsive to culture, and tuned for the platforms that matter to your audience.",
      "From content planning and community management to campaign bursts around launches and events, we keep your brand active, approachable, and aligned with business priorities.",
      "We work across Instagram, LinkedIn, Facebook, X, and emerging platforms relevant to Kenyan and regional audiences—adapting format and tone without losing who you are.",
    ],
    deliverables: [
      "Platform-specific social strategy and KPI alignment",
      "Monthly content calendars and post creation",
      "Community management and audience engagement",
      "Paid social creative support and briefing (where applicable)",
      "Influencer and creator collaboration coordination",
      "Social listening and sentiment snapshots",
      "Performance reporting with actionable recommendations",
    ],
    process: [
      {
        step: "Discover",
        description:
          "We review current channels, analytics, competitors, and brand guidelines to establish a baseline.",
      },
      {
        step: "Plan",
        description:
          "We define content pillars, posting rhythm, and community rules that reflect your voice and goals.",
      },
      {
        step: "Execute",
        description:
          "We publish, engage, and escalate issues quickly—keeping your brand present and professional.",
      },
      {
        step: "Measure",
        description:
          "We report on growth, engagement, and content performance—and refine the mix monthly.",
      },
    ],
    icon: "trending-up",
    metaDescription:
      "Social media management for brands in Kenya. BP Creatives handles strategy, content, community, and reporting across key platforms.",
  },
  {
    slug: "event-planning-execution",
    title: "Event Planning & Execution",
    tagline: "Experiences that bring your brand to life and leave a lasting impression.",
    shortDescription:
      "Concept-to-completion event planning and PR amplification for launches, activations, and corporate gatherings.",
    overview: [
      "Events are moments where strategy becomes tangible. We design and execute experiences—from intimate press breakfasts to large-scale launches—that reflect your brand standards and create stories worth sharing.",
      "Our team coordinates venues, vendors, run-of-show, guest experience, and media integration so every detail supports your objectives: awareness, relationships, sales, or celebration.",
      "Based in Nairobi with regional execution capability, we understand local logistics, cultural nuance, and the production partners who deliver under pressure.",
    ],
    deliverables: [
      "Event concept development and creative direction",
      "Budget planning and vendor sourcing",
      "Venue scouting, contracts, and logistics management",
      "Guest list strategy, invitations, and RSVP management",
      "Run-of-show, staffing, and on-site coordination",
      "Media and influencer attendance programmes",
      "Post-event recap content and coverage follow-up",
    ],
    process: [
      {
        step: "Discover",
        description:
          "We clarify objectives, audience, scale, and success metrics before any creative or logistics work begins.",
      },
      {
        step: "Plan",
        description:
          "We build timelines, budgets, vendor briefs, and experience flows with contingency built in.",
      },
      {
        step: "Execute",
        description:
          "We manage production and on-site delivery—so your team can host, speak, and connect with guests.",
      },
      {
        step: "Measure",
        description:
          "We capture attendance, feedback, media outcomes, and content assets for ongoing communications.",
      },
    ],
    icon: "calendar",
    metaDescription:
      "Event planning and execution in Nairobi, Kenya. BP Creatives delivers launches, activations, and corporate events with strategic PR support.",
  },
  {
    slug: "community-engagement-partnerships",
    title: "Community Engagement & Strategic Partnerships",
    tagline: "Relationships that extend your reach and deepen trust.",
    shortDescription:
      "Community programmes and partnership strategies that build loyalty, advocacy, and long-term brand equity.",
    overview: [
      "Brands grow faster when they belong to something larger than themselves. We design community engagement and partnership programmes that connect you with audiences, causes, and collaborators in authentic, mutually beneficial ways.",
      "From stakeholder mapping and NGO collaborations to creator ecosystems and B2B alliances, we help you show up consistently—not only when a campaign calendar demands it.",
      "Our approach balances visibility with substance: partnerships should advance your mission, protect your reputation, and create stories your audiences want to share.",
    ],
    deliverables: [
      "Stakeholder and community landscape mapping",
      "Partnership strategy and ideal-partner profiling",
      "Outreach, negotiation support, and MOU framing",
      "Co-branded campaign and activation concepts",
      "Community programming and ambassador frameworks",
      "CSR and purpose-led initiative communications",
      "Partnership performance and relationship reporting",
    ],
    process: [
      {
        step: "Discover",
        description:
          "We identify communities, causes, and partners aligned with your values and commercial goals.",
      },
      {
        step: "Plan",
        description:
          "We structure programmes, timelines, and governance so collaborations are clear and sustainable.",
      },
      {
        step: "Execute",
        description:
          "We support outreach, launch communications, and ongoing engagement across touchpoints.",
      },
      {
        step: "Measure",
        description:
          "We track relationship health, participation, and brand impact—and recommend portfolio adjustments.",
      },
    ],
    icon: "users",
    metaDescription:
      "Community engagement and strategic partnerships in East Africa. BP Creatives builds alliances and programmes that grow trust and reach.",
  },
  {
    slug: "crisis-communication-reputation",
    title: "Crisis Communication & Reputation Management",
    tagline: "Preparedness and response when stakes are highest.",
    shortDescription:
      "Crisis communication planning and reputation management that protect trust and guide stakeholders through uncertainty.",
    overview: [
      "Reputation is built over years and tested in hours. We help organisations prepare for crises before they happen—and respond with clarity, speed, and empathy when they do.",
      "Our reputation management practice covers issues monitoring, scenario planning, spokesperson readiness, and stakeholder communications across media, social, employees, and regulators where relevant.",
      "In high-pressure moments, we provide calm strategic counsel, draft holding statements and Q&As, and coordinate channels so mixed messages do not compound the problem.",
    ],
    deliverables: [
      "Crisis communication plans and escalation protocols",
      "Issues and reputation risk assessments",
      "Spokesperson training and media interview prep",
      "Holding statements, press releases, and stakeholder updates",
      "Social media crisis response playbooks",
      "Post-crisis narrative recovery programmes",
      "Ongoing reputation monitoring and counsel retainers",
    ],
    process: [
      {
        step: "Discover",
        description:
          "We map vulnerabilities, audiences, and existing protocols to understand your readiness gap.",
      },
      {
        step: "Plan",
        description:
          "We build playbooks, roles, templates, and approval flows tailored to your organisation.",
      },
      {
        step: "Execute",
        description:
          "When issues arise, we activate response teams, draft communications, and advise leadership in real time.",
      },
      {
        step: "Measure",
        description:
          "We assess sentiment recovery, lesson learned, and programme updates to strengthen future resilience.",
      },
    ],
    icon: "shield",
    metaDescription:
      "Crisis communication and reputation management in Kenya. BP Creatives helps brands prepare for, respond to, and recover from high-stakes issues.",
  },
] as const;

export function getServiceHref(slug: string): string {
  return `/services/${slug}`;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((service) => service.slug);
}

/** Card-friendly shape used across homepage and footer */
export const SERVICE_SUMMARIES = SERVICES.map(
  ({ slug, title, shortDescription, icon }) => ({
    slug,
    title,
    shortDescription,
    icon,
  }),
);
