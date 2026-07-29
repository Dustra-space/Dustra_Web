/**
 * Single source of truth for site copy.
 * Every figure below is taken from the Liftoff Challenge 2026/27 proposal.
 */

export const project = {
  name: 'Dustra',
  tagline: 'Thrust from dust.',
  summary:
    'A high-Isp electrostatic thruster that produces thrust by accelerating charged dust particles through high-voltage fields — so a spacecraft can refuel from the dust already out there instead of hauling propellant up from Earth.',
  thematicArea: 'Space propulsion',
  institution: 'ETH Zurich',
} as const

export const challenge = {
  name: 'ETH Zurich | Space — Liftoff Challenge 2026/27',
  status: 'Selected — 1 of 20 teams',
  organisers: 'ETH Zurich | Space, funded by ZKB Philanthropie Stiftung',
  url: 'https://www.liftoff-challenge.ch/',
  phases: [
    { date: '17 May 2026', title: 'Application', note: 'Proposal submitted', state: 'done' },
    { date: 'Early June 2026', title: 'Selection', note: '20 teams advance', state: 'done' },
    { date: '25 Sep 2026', title: 'Kickoff', note: 'CHF 1,000 + mentorship', state: 'next' },
    { date: '11 Dec 2026', title: 'Checkpoint', note: 'Top 10 → CHF 5,000', state: 'upcoming' },
    { date: '19 Mar 2027', title: 'Final', note: 'Jury award → CHF 10,000', state: 'upcoming' },
  ],
} as const

/** Headline figures shown under the hero. */
export const keyFigures = [
  { value: '40', unit: 'km/s', label: 'Demonstrated particle exit velocity', foot: 'Mocker et al.' },
  { value: '30', unit: 'N', label: 'Target thrust', foot: 'At full mass flow' },
  { value: '1.5', unit: 'g/s', label: 'Target propellant mass flow', foot: 'Total, multi-channel' },
  { value: '240', unit: 'kW', label: 'Electrical power required', foot: 'Moon ⇄ LEO round trip' },
] as const

/**
 * Section headings. `lead` is set in the primary colour and `trail` in grey —
 * the two-tone headline used throughout the Liftoff Challenge site.
 */
export const headings = {
  problem: {
    label: 'The problem',
    lead: 'Every kilogram beyond Earth orbit',
    trail: 'is paid for twice.',
  },
  solution: {
    label: 'The idea',
    lead: 'Charge the dust. Accelerate the dust.',
    trail: 'Skip the plasma.',
  },
  mission: { label: 'Mission case', lead: 'Moon ⇄ LEO,', trail: 'on 35 % of the ship.' },
  vision: { label: 'Impact & long-term vision', lead: 'Four things', trail: 'this unlocks.' },
  status: {
    label: 'Where we are',
    lead: 'Simulated, drawn, and checked against',
    trail: 'people who build these things.',
  },
  challenge: { label: 'The challenge', lead: 'Liftoff Challenge', trail: '2026/27' },
  roadmap: {
    label: 'Project plan',
    lead: 'From simulation to a charged',
    trail: 'particle leaving a nozzle.',
  },
  resources: {
    label: 'What we need',
    lead: 'Compute, high voltage,',
    trail: 'and two more pairs of hands.',
  },
  team: { label: 'Team', lead: 'Five mechanical engineers,', trail: 'one nozzle.' },
  contact: {
    label: 'Get in touch',
    lead: 'Interested in the engine, the physics,',
    trail: 'or funding the rig?',
  },
} as const

export const problem = {
  body: [
    'Optimistic estimates put the cost of delivering mass to lunar orbit at roughly USD 300,000 per kilogram. Beyond the Moon the cost scales exponentially with distance, because the propellant you bring must itself be accelerated — the tyranny of the rocket equation.',
    'The Artemis programme targets this with in-situ propellant, but its route depends on large quantities of water. Water on the Moon is scarce and has better uses. If humanity is to travel beyond Earth orbit routinely, it needs a propellant that is already out there — and abundant.',
  ],
  stats: [
    { value: '≈ $300,000', label: 'per kg to lunar orbit', foot: 'Astrobotic; Metzger & Autry (2022)' },
    { value: 'Exponential', label: 'cost growth past lunar orbit', foot: 'Propellant accelerates propellant' },
    { value: 'Scarce', label: 'lunar water for Artemis-style refuelling', foot: 'Contested by higher-value uses' },
  ],
} as const

export const solution = {
  body: [
    'Ion, Hall-effect and magnetohydrodynamic thrusters must first vaporise or ionise their propellant, and only then accelerate it. Dustra removes that step: fine dust grains are contact-charged directly, then pulled through a high-voltage field and ejected. Onboard power goes into velocity instead of phase change.',
    'Laboratory dust accelerators already reach exit speeds of up to 40 km/s — for single particles. The open problem is not velocity, it is mass flow. Our target is 1.5 g/s in total, delivered by a multi-channel architecture, which yields on the order of 30 N of thrust.',
    'Moondust is largely silicates and metallic compounds, which take charge well at the levels our specific impulse needs. That makes a lunar base a refuelling station, and it makes asteroids fuel depots.',
  ],
  stages: [
    {
      id: '01',
      title: 'Dust feed',
      detail: 'Regolith-like grains are metered into the charging channel — no vaporiser, no ioniser, no gas storage.',
    },
    {
      id: '02',
      title: 'Contact charging',
      detail: 'Grains take a positive charge on a high-potential electrode. Charge-to-mass ratio sets the achievable exhaust velocity.',
    },
    {
      id: '03',
      title: 'Electrostatic acceleration',
      detail: 'A 100–200 kV field accelerates the charged grains along the channel. Field geometry is the core design problem.',
    },
    {
      id: '04',
      title: 'Multi-channel exhaust',
      detail: 'Channels run in parallel to raise mass flux — the scaling route suggested by Y. Li (University of Stuttgart).',
    },
  ],
} as const

export const mission = {
  body: 'For a round-trip manoeuvre from the Moon to low Earth orbit and back, a 200-tonne spacecraft would spend roughly 70 tonnes of propellant in total, drawing about 240 kW of electrical power. We see Dustra flying as the second half of a hybrid stack: chemical or hydrogen propulsion for the high-thrust climb out of a gravity well, then steady dust-driven acceleration for the large delta-v legs.',
  figures: [
    { value: '200 t', label: 'Spacecraft wet mass' },
    { value: '70 t', label: 'Propellant, full round trip' },
    { value: '240 kW', label: 'Electrical power' },
    { value: 'In-situ', label: 'Refuelled at a lunar base' },
  ],
} as const

export const vision = [
  {
    n: '01',
    title: 'A simpler electric thruster',
    body: 'No vaporisation, no ionisation stage. Onboard power is spent on acceleration alone, which makes better use of every watt a spacecraft can generate.',
  },
  {
    n: '02',
    title: 'Affordable LEO → low lunar orbit',
    body: 'Silicate and metallic moondust charges well enough to serve as propellant. Ships refuel in-situ at a lunar base and stop paying to lift fuel out of Earth’s gravity well.',
  },
  {
    n: '03',
    title: 'Economical deep-space cargo',
    body: 'Higher cargo-to-fuel ratios for missions to Mars and beyond. Slower than chemical transfer — and far cheaper per kilogram delivered.',
  },
  {
    n: '04',
    title: 'Asteroid manoeuvring',
    body: 'An asteroid can be its own propellant: consumed to move itself into lunar orbit for mining, or nudged off a collision course with Earth.',
  },
] as const

export const status = {
  done: [
    'A low-level simulation environment for the engine is built and running.',
    'A first simplified engine geometry exists in CAD.',
    'Orbital-dynamics scripts estimate required Isp, mass flow, total energy and travel time.',
    'Feasibility grounded in prior dust-accelerator literature.',
    'Correspondence with Yanwei Li (University of Stuttgart), author of Li et al., on how existing accelerators behave and how he would scale them — his answer: go multi-channel.',
  ],
  next: 'Engine geometry will be optimised with an iterative optimiser. Initial calculations and simulations suggest the concept is feasible; real-world testing is what confirms it.',
  risks: [
    {
      title: 'Mass flow, not velocity',
      body: 'Exit velocity at 40 km/s is established in the literature. Charging the majority of grains at 1.5 g/s is not — this is the central unknown.',
    },
    {
      title: 'Electrostatic field design',
      body: 'Channel and electrode geometry must hold a stable field at 100–200 kV without breakdown.',
    },
    {
      title: 'Collective dust behaviour',
      body: 'Space-charge and grain–grain interaction at high particle counts are far less predictable than single-particle physics.',
    },
    {
      title: 'Ground-testing fidelity',
      body: 'A representative proof of concept wants vacuum and microgravity; both are hard to approximate on a bench.',
    },
  ],
} as const

export const milestones = [
  {
    n: 1,
    window: 'June – October',
    title: 'Design & simulation',
    body: 'Design a manufacturable, cost-effective prototype concept for charging and accelerating particles, using physics simulation.',
    target: 'Validation of electric fields and particle behaviour',
    state: 'active',
  },
  {
    n: 2,
    window: 'October – January',
    title: 'Prototype development',
    body: 'Build and commission the high-voltage test rig.',
    target: 'Stable operation across 100–200 kV',
    state: 'planned',
  },
  {
    n: 3,
    window: 'February – March',
    title: 'Initial experimental validation',
    body: 'Demonstrate successful particle charging and make first acceleration attempts.',
    target: 'Measurable, repeatable velocity increase',
    state: 'planned',
  },
  {
    n: 4,
    window: 'Optional',
    title: 'Iteration & scaling',
    body: 'Optimise the prototype concept to scale up, reiterate and push toward flight-relevant throughput.',
    target: '700 m/s at 1 g/s',
    state: 'stretch',
  },
] as const

export const resources = {
  needs: [
    { title: 'Euler Cluster access', body: 'Multi-physics modelling of field geometry and particle transport.' },
    { title: 'High-voltage test facility', body: 'Safe operation at approximately 250 W, 160 kV, 1 g/s.' },
    { title: 'Basic manufacturing', body: '3D printing and laser cutting for rig and channel hardware.' },
  ],
  support: [
    { title: 'D-MAVT', body: 'One or two bachelor theses, adding two full-time contributors to the effort.' },
    { title: 'D-EAPS', body: 'Expert input on mineral composition and regolith analogues.' },
  ],
  gaps: ['High-voltage systems', 'Materials science'],
} as const

export const team = {
  blurb:
    'Five sixth-semester BSc Mechanical Engineering students at ETH Zurich. The team has worked together before, and a deliberately broad spread of interests keeps the arguments productive.',
  members: [
    {
      name: 'Ada Batu Yıldırım',
      focus: 'CFD & simulation',
      skills: ['CFD for rocketry', 'Electronics', 'Physics simulation', 'Embedded systems', 'Management'],
    },
    {
      name: 'Marie Frühauf',
      focus: 'Structures & test safety',
      skills: ['Structures & FEA', 'MRL drone focus project', 'Safe testing', 'Sponsoring'],
    },
    {
      name: 'Loïc Cabon',
      focus: 'Machine learning',
      skills: ['Machine learning', 'Physics domain approximations'],
    },
    {
      name: 'Lennart Gröger',
      focus: 'Project lead',
      skills: ['Structures & FEA for UUVs', 'Project management', 'Experimental setups'],
    },
    {
      name: 'Saskia Tristani',
      focus: 'CAD',
      skills: ['CAD'],
    },
  ],
} as const

export const contact = {
  person: 'Lennart Gröger',
  role: 'Contact person',
  email: 'lgroeger@student.ethz.ch',
} as const

export const sources = [
  {
    n: 1,
    text: 'Astrobotic Technology, Inc. (n.d.). Landers.',
    href: 'https://www.astrobotic.com/lunar-delivery/landers/',
  },
  {
    n: 2,
    text: 'Metzger, P., & Autry, G. (2022). The cost of lunar landing pads with a trade study of construction methods. New Space, 11(2), 94–123.',
    href: 'https://doi.org/10.1089/space.2022.0015',
  },
  {
    n: 3,
    text: 'A. Mocker et al. A 2 MV Van de Graaff accelerator as a tool for planetary and impact physics research. Review of Scientific Instruments.',
    href: null,
  },
  {
    n: 4,
    text: 'Y. Li et al. Upgrades of a Small Electrostatic Dust Accelerator at the University of Stuttgart.',
    href: 'https://doi.org/10.3390/app13074441',
  },
] as const

export const nav = [
  { href: '#how', label: 'The idea' },
  { href: '#mission', label: 'Mission' },
  { href: '#challenge', label: 'Challenge' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#team', label: 'Team' },
] as const
