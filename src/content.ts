/** Public copy: project direction and status, with prior art kept separate. */

export const project = {
  name: 'Dustra',
  tagline: 'Dust to Thrust',
  summary:
    'We’re exploring how processed dust from the Moon or asteroids could become propellant — charged and accelerated electrically, so spacecraft could replenish using material already in space.',
  thematicArea: 'Electrostatic dust propulsion',
  institution: 'ETH Zurich',
} as const

export const challenge = {
  name: 'ETH Zurich | Space — Liftoff Challenge 2026/27',
  status: 'Liftoff Challenge · Top 20',
  organisers: 'ETH Zurich | Space',
  url: 'https://www.liftoff-challenge.ch/',
} as const

export const heroPrinciples = [
  { value: 'Local material', label: 'The propellant vision' },
  { value: 'Electric fields', label: 'The acceleration principle' },
  { value: 'Lab prototype', label: 'Our next step' },
] as const

export const headings = {
  problem: { label: 'The ambition', lead: 'Go further.', trail: 'Carry less from Earth.' },
  solution: { label: 'The concept', lead: 'Dust to thrust.', trail: 'Powered by electric fields.' },
  vision: { label: 'The possibilities', lead: 'A different source of propellant.', trail: 'New possibilities for transport.' },
  status: { label: 'Building now', lead: 'A space ambition.', trail: 'A laboratory starting point.' },
  roadmap: { label: 'Our path', lead: 'Understand. Test. Scale.', trail: 'One step at a time.' },
  team: { label: 'Team', lead: 'Five engineers.', trail: 'One shared ambition.' },
  contact: { label: 'Get in touch', lead: 'Help us take', trail: 'the next step.' },
} as const

export const problem = {
  body: [
    'For long-distance space transport, propellant adds to the mass that must be launched from Earth and carried through a mission. Moving large amounts of cargo makes that burden especially important.',
    'DUSTRA’s vision is to change where the propellant comes from. If processed material from the Moon or asteroids can be used as reaction mass, spacecraft could replenish along the way instead of launching their entire supply from Earth.',
  ],
  stats: [
    { value: 'Source', label: 'Material already in space', foot: 'Moon · Asteroids' },
    { value: 'Prepare', label: 'Dust suitable for charging', foot: 'Processed feedstock' },
    { value: 'Replenish', label: 'Propellant for the onward journey', foot: 'Our long-term vision' },
  ],
} as const

export const solution = {
  body: [
    'Give a solid particle an electric charge, then accelerate it through an electric field. Ejecting those particles carries momentum away and produces a reaction force.',
    'We’re investigating contact charging: particles acquire charge when they touch a charged surface. The challenge is turning that process into a reliable, continuous flow at a useful scale.',
  ],
  priorArt:
    'Kiel researchers demonstrated contact charging and acceleration using fine electrode structures. Established dust accelerators also support impact research. These results provide a starting point; continuous propulsion at useful mass flow remains the challenge DUSTRA aims to investigate.',
  stages: [
    { id: '01', title: 'Feed', detail: 'Deliver prepared particles to the charging surface in a controlled flow.' },
    { id: '02', title: 'Charge', detail: 'Transfer charge through contact with an electrode surface.' },
    { id: '03', title: 'Accelerate', detail: 'Use electric fields to turn electrical energy into particle motion.' },
    { id: '04', title: 'Measure', detail: 'Measure particle flow, speed, and delivered momentum to understand what works.' },
  ],
} as const

export const status = {
  done: [
    'An initial accelerator design in CAD.',
    'Particle simulations to explore charging and trajectories.',
    'Mission calculations to examine the transport concept.',
  ],
  next:
    'Our next step is a laboratory prototype. We’ll test particle feeding, contact charging, and acceleration, then measure the resulting flow and momentum to find out whether the approach can scale.',
  priorities: [
    'Consistent particle feeding',
    'Reliable contact charging',
    'Controlled particle acceleration',
    'Flow, speed, and momentum measurements',
  ],
} as const

export const applications = [
  {
    horizon: 'Space transport',
    note: 'The long-term ambition',
    body: 'Move cargo over long distances with propulsion that could use material sourced beyond Earth.',
    items: ['Lunar and interplanetary logistics', 'Propellant replenishment in space'],
  },
  {
    horizon: 'Local resources',
    note: 'The material opportunity',
    body: 'Explore processed lunar or asteroid material as a supply of solid-particle propellant.',
    items: ['Prepared dust as reaction mass', 'A link between resources and transport'],
  },
  {
    horizon: 'Particle research',
    note: 'A nearer-term possibility',
    body: 'The same charging and acceleration methods could support experiments with dust on Earth.',
    items: ['Particle sources and diagnostics', 'Dust-impact and materials research'],
  },
] as const

export const roadmap = [
  {
    n: 1, window: 'Now', title: 'Design & simulation', state: 'active',
    summary: 'Develop the concept and identify the questions the first experiment needs to answer.',
    goals: ['Explore charging and particle motion', 'Refine the prototype design'],
  },
  {
    n: 2, window: 'Next', title: 'Laboratory validation', state: 'planned',
    summary: 'Build a prototype and compare its behaviour with our calculations.',
    goals: ['Test feeding, charging, and acceleration', 'Measure flow, speed, and momentum'],
  },
  {
    n: 3, window: 'Longer term', title: 'Explore scaling', state: 'future',
    summary: 'Use the experimental results to assess a path toward useful continuous operation and space applications.',
    goals: ['Investigate sustained particle flow', 'Assess prepared feedstocks and propulsion potential'],
  },
] as const

export const team = {
  blurb: 'An ETH Zurich team with a background in mechanical engineering, bringing together simulation, structures, electronics, experimental work, and CAD.',
  members: [
    { name: 'Ada Batu Yıldırım', focus: 'CFD & simulation', skills: ['CFD for rocketry', 'Electronics', 'Physics simulation', 'Embedded systems', 'Management'] },
    { name: 'Marie Frühauf', focus: 'Structures & test safety', skills: ['Structures & FEA', 'MRL drone focus project', 'Safe testing', 'Sponsoring'] },
    { name: 'Loïc Cabon', focus: 'Machine learning', skills: ['Machine learning', 'Physics domain approximations'] },
    { name: 'Lennart Gröger', focus: 'Project lead', skills: ['Structures & FEA for UUVs', 'Project management', 'Experimental setups'] },
    { name: 'Saskia Tristani', focus: 'CAD', skills: ['CAD'] },
  ],
} as const

export const contact = { person: 'Lennart Gröger', role: 'Contact person', email: 'contact@dustra.space' } as const

export const sources = [
  { n: 1, text: 'T. Trottenberg, V. Schneider & H. Kersten. Research toward an Electrostatic Microparticle Thruster based on Contact Charging. IEPC-2011-231 (2011).', href: null },
  { n: 2, text: 'A. Mocker et al. A 2 MV Van de Graaff accelerator as a tool for planetary and impact physics research. Review of Scientific Instruments (2011).', href: 'https://doi.org/10.1063/1.3637461' },
  { n: 3, text: 'Y. Li et al. Upgrades of a Small Electrostatic Dust Accelerator at the University of Stuttgart. Applied Sciences (2023).', href: 'https://doi.org/10.3390/app13074441' },
] as const

export const nav = [
  { href: '#how', label: 'Concept' },
  { href: '#building', label: 'Building now' },
  { href: '#applications', label: 'Vision' },
  { href: '#roadmap', label: 'Our path' },
  { href: '#team', label: 'Team' },
] as const
