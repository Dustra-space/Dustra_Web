/**
 * All public copy lives here.
 *
 * Rule for this file: keep the long-term vision separate from what DUSTRA has
 * done so far, credit prior results to the researchers who published them,
 * and do not add unmeasured performance figures or flight dates.
 */

export const site = {
  name: 'DUSTRA',
  field: 'Electrostatic dust propulsion',
  institution: 'ETH Zurich',
  email: 'lgroeger@ethz.ch',
  contactPerson: 'Lennart Gröger',
  contactRole: 'Project lead',
} as const

export const challenge = {
  name: 'Liftoff Challenge 2026/27',
  status: 'Top 20 teams',
  organisers: 'ETH Zurich | Space',
  url: 'https://www.liftoff-challenge.ch/',
} as const

export const nav = [
  { href: '#concept', label: 'Concept' },
  { href: '#progress', label: 'Progress' },
  { href: '#team', label: 'Team' },
] as const

export const hero = {
  eyebrow: 'Electrostatic dust propulsion',
  title: 'Propellant from space.',
  summary:
    'An electric thruster powered by space dust, letting spacecrafts refuel in space rather than haul every kilogram from Earth.',
    selected: {
    value: 'Top 20 Team',
    label: 'Selected for the Liftoff Challenge 2026/27',
  },
} as const

export const why = {
  eyebrow: 'Why',
  title: 'Every kilogram of propellant starts on Earth.',
  body: [
    'Propellant adds to the mass that has to be launched and then carried through a mission. For long-distance transport and large cargo, that burden grows quickly.',
    'If processed material from the Moon or asteroids can serve as reaction mass, spacecraft could replenish along the way instead.',
  ],
} as const

export const concept = {
  eyebrow: 'Concept',
  title: 'How dust becomes thrust.',
  body: [
    'Give a solid particle an electric charge, then accelerate it through an electric field. Ejecting those particles carries momentum away and produces a reaction force.',
    'We’re investigating contact charging: particles pick up charge when they touch a charged surface. The challenge is turning that into a reliable, continuous flow at a useful scale.',
  ],
  stages: [
    { id: '01', title: 'Feed', detail: 'Deliver prepared particles to the charging surface in a controlled flow.' },
    { id: '02', title: 'Charge', detail: 'Transfer charge through contact with an electrode surface.' },
    { id: '03', title: 'Accelerate', detail: 'Use electric fields to turn electrical energy into particle motion.' },
  ],
  priorArt:
    'Researchers in Kiel demonstrated contact charging and acceleration with fine electrode structures, and dust accelerators are established tools for impact research. Continuous propulsion at a useful mass flow is the open question DUSTRA is investigating.',
} as const

export const sources = [
  {
    n: 1,
    text: 'T. Trottenberg, V. Schneider & H. Kersten. Research toward an Electrostatic Microparticle Thruster based on Contact Charging. IEPC-2011-231 (2011).',
    href: null,
  },
  {
    n: 2,
    text: 'A. Mocker et al. A 2 MV Van de Graaff accelerator as a tool for planetary and impact physics research. Review of Scientific Instruments (2011).',
    href: 'https://doi.org/10.1063/1.3637461',
  },
  {
    n: 3,
    text: 'Y. Li et al. Upgrades of a Small Electrostatic Dust Accelerator at the University of Stuttgart. Applied Sciences (2023).',
    href: 'https://doi.org/10.3390/app13074441',
  },
] as const

export type Phase = {
  window: string
  title: string
  state: 'active' | 'planned' | 'future'
  summary: string
}

export const progress: { eyebrow: string; title: string; intro: string; phases: Phase[] } = {
  eyebrow: 'Progress',
  title: 'Where we are.',
  intro: 'Each step is guided by what we learn from the one before it.',
  phases: [
    {
      window: 'Now',
      title: 'Design & Simulation',
      state: 'active',
      summary: 'Accelerator designed in CAD, with particle simulations and mission calculations behind it.',
    },
    {
      window: 'Next',
      title: 'Laboratory Prototype',
      state: 'planned',
      summary: 'Build it and measure how well charging and acceleration work in practice.',
    },
    {
      window: 'Later',
      title: 'Scaling',
      state: 'future',
      summary: 'Find out whether it can run continuously and become a real thruster.',
    },
  ],
}

export type Member = {
  name: string
  role: string
  /** One sentence on what this person does on DUSTRA (current work, not past projects). */
  bio: string
  /** Path to a square photo in /public, e.g. 'team/lennart.jpg'. Initials show until set. */
  photo?: string
  linkedin?: string
}

export const team: { eyebrow: string; title: string; blurb: string; members: Member[] } = {
  eyebrow: 'Team',
  title: 'The people behind DUSTRA.',
  blurb:
    'Five mechanical engineering students at ETH Zurich, covering simulation, structures, electronics, machine learning, and mechanical design.',
  // TODO: replace each placeholder with one sentence on what this person does on DUSTRA.
  members: [
    {
      name: 'Lennart Gröger',
      role: 'Particle Feed',
      bio: 'Designs the hopper and feed system that delivers a steady, controlled flow of dust to the charging stage.',
    },
    {
      name: 'Ada Batu Yıldırım',
      role: 'Electronics & Simulation',
      bio: 'Develops the high-voltage electronics and control that power the charging and acceleration stages.',
    },
    {
      name: 'Marie Frühauf',
      role: 'Particle charging',
      bio: 'Works on contact charging: how grains pick up charge at the electrode surface, and how to make it reliable.',
    },
    {
      name: 'Loïc Cabon',
      role: 'Machine Learning',
      bio: 'Builds machine-learning models that speed up particle simulations and help us explore designs faster.',
    },
    {
      name: 'Saskia Tristani',
      role: 'Acceleration',
      bio: 'Designs the electrostatic accelerator and simulates its fields and particle trajectories to shape the first prototype.',
    },
  ],
}

export const contact = {
  eyebrow: 'Contact',
  title: 'Work with us.',
  ask: 'We’re looking for high-voltage and materials expertise, access to test facilities, and partners and sponsors interested in particle charging and space propulsion.',
} as const
