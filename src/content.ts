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
  status: 'Top 20 Team',
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
    'An electric thruster powered by space dust, letting spacecrafts refuel in space rather than relying on propellant from Earth.',
    selected: {
    value: 'Top 20 Team',
    label: 'Selected for the Liftoff Challenge 2026/27',
  },
} as const

export const why = {
  eyebrow: 'Why',
  title: 'Every kilogram of propellant starts on Earth.',
  body: [
    'It has to be launched, then carried for the whole mission. The further you go, the more you need, and the more you carry just to move it.',
    'Dust covers the Moon and many asteroids. A thruster that runs on it turns another world into a fuel depot.',
  ],
} as const

export const concept = {
  eyebrow: 'Concept',
  title: 'How dust becomes thrust.',
  stages: [
    { id: '01', title: 'Feed', detail: 'A steady, controlled stream of dust.' },
    { id: '02', title: 'Charge', detail: 'Each grain picks up charge on contact with an electrode.' },
    { id: '03', title: 'Accelerate', detail: 'Electric fields fire the grains out the back, pushing the spacecraft forward.' },
  ],
  priorArt:
    'The building blocks exist. Researchers at Kiel University have charged and accelerated microparticles by contact [1], and dust accelerators are standard tools in impact research [2, 3]. What’s still open is a continuous stream strong enough to propel a spacecraft. That’s what DUSTRA is working on.',
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

export const progress: { eyebrow: string; title: string; phases: Phase[] } = {
  eyebrow: 'Progress',
  title: 'Where we are.',
  phases: [
    {
      window: 'Autumn 2026',
      title: 'Design & simulation',
      state: 'active',
      summary: 'Designing and simulating the hopper and charger, and preparing the first tests.',
    },
    {
      window: 'Early 2027',
      title: 'Laboratory prototype',
      state: 'planned',
      summary: 'Build the accelerator, integrate the full system and take meaningful measurements.',
    },
    {
      window: 'Beyond',
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
  blurb: 'Five mechanical engineering students at ETH Zurich.',
  members: [
    {
      name: 'Lennart Gröger',
      role: 'Particle feed',
      bio: 'Designs the hopper and feed that deliver a steady stream of dust.',
    },
    {
      name: 'Ada Batu Yıldırım',
      role: 'Electronics',
      bio: 'Develops the high-voltage electronics that power charging and acceleration.',
    },
    {
      name: 'Marie Frühauf',
      role: 'Particle charging',
      bio: 'Studies how grains pick up charge on contact, and how to make it reliable.',
    },
    {
      name: 'Loïc Cabon',
      role: 'Machine learning',
      bio: 'Builds models that speed up particle simulations and design work.',
    },
    {
      name: 'Saskia Tristani',
      role: 'Acceleration',
      bio: 'Designs the accelerator and simulates its fields and particle trajectories.',
    },
  ],
}

export const contact = {
  eyebrow: 'Contact',
  title: 'Work with us.',
  ask: 'We’re looking for high-voltage and materials expertise, access to test facilities, and partners and sponsors interested in particle charging and space propulsion.',
} as const
