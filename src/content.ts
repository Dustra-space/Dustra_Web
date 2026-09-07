/** Central source of truth for site copy and project claims. */

export const project = {
  name: 'Dustra',
  tagline: 'Dust to Thrust',
  summary:
    'DUSTRA develops controlled, high-throughput particle acceleration for spacecraft testing, advanced propulsion, and the future use of lunar and asteroid resources.',
  thematicArea: 'Particle acceleration & space systems',
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

export const keyFigures = [
  { value: '100–200', unit: 'kV', label: 'Experimental system target', foot: 'Not yet achieved' },
  { value: '1', unit: 'g/s', label: 'Continuous-flow target', foot: 'Not yet achieved' },
  { value: '400', unit: 'm/s', label: 'Initial velocity target', foot: 'Not yet achieved' },
  { value: '2026–27', unit: '', label: 'Core validation phase', foot: 'Development target' },
] as const

export const headings = {
  problem: { label: 'Why now', lead: 'A laboratory platform first.', trail: 'A credible path to space.' },
  solution: { label: 'The technology', lead: 'Charge particles. Control the beam.', trail: 'Measure the momentum.' },
  mission: { label: 'The physics', lead: 'Electrical energy in.', trail: 'Solid-particle kinetic energy out.' },
  vision: { label: 'Applications', lead: 'Useful in the laboratory now.', trail: 'Transformative over time.' },
  status: { label: 'What we are building', lead: 'A controlled experiment,', trail: 'built around measurable thrust.' },
  challenge: { label: 'Project history', lead: 'Liftoff Challenge', trail: '2026/27' },
  roadmap: { label: 'Technology roadmap', lead: 'Validation before products.', trail: 'Products before flight.' },
  team: { label: 'Team', lead: 'Five mechanical engineers,', trail: 'one hard physics problem.' },
  contact: { label: 'Get in touch', lead: 'Partner on the experiment,', trail: 'the test platform, or the research.' },
} as const

export const problem = {
  body: [
    'The same core capability — feeding, charging, accelerating, and measuring solid particles in vacuum — can serve real laboratory needs before it becomes a spacecraft propulsion system.',
    'DUSTRA is therefore developing an experimental platform first. Early systems could support dust-impact testing, vacuum particle research, diagnostics, and regolith-simulant experiments. Flight demonstrations and locally sourced reaction mass follow only after the underlying physics and hardware are validated.',
  ],
  stats: [
    { value: 'Now', label: 'Core laboratory validation', foot: 'Feeding · charging · measurement' },
    { value: 'Next', label: 'Research and testing equipment', foot: 'A realistic first market' },
    { value: 'Later', label: 'Propulsion and local resources', foot: 'Dependent on validation and infrastructure' },
  ],
} as const

export const solution = {
  body: [
    'DUSTRA is a controlled particle accelerator designed to convert electrical energy into the kinetic energy of a solid-particle beam. Particles are metered into vacuum, given a controlled charge, accelerated through a high-voltage field, and characterized at the exhaust.',
    'Unlike a conventional electric thruster, the near-term system is an experimental instrument, not a production engine. Its purpose is to establish repeatable charge-to-mass distributions, velocity, mass flow, beam shape, efficiency, and thrust.',
    'Practical feedstocks require preparation. Screened grains, conductive coatings, standardized micro-pellets, magnetically selected particles, plasma-assisted charging, or molten droplets may be more controllable than untreated raw regolith.',
  ],
  stages: [
    { id: '01', title: 'Controlled feed', detail: 'Meter screened grains or standardized particles into vacuum while preventing agglomeration and blockages.' },
    { id: '02', title: 'Particle charging', detail: 'Apply and measure a repeatable charge-to-mass distribution using a controlled charging process.' },
    { id: '03', title: 'High-voltage acceleration', detail: 'Accelerate micro- and nanoscale particles through a 100–200 kV experimental field while managing breakdown and contamination.' },
    { id: '04', title: 'Beam diagnostics', detail: 'Measure velocity, mass flow, thrust, divergence, efficiency, erosion, and charging effects at the exhaust.' },
  ],
} as const

export const physics = {
  body:
    'A particle beam produces thrust by carrying momentum away from the spacecraft. For mass flow ṁ and exhaust velocity vₑ, the governing ideal relationships are:',
  equations: [
    { expression: 'F = ṁvₑ', label: 'Thrust' },
    { expression: 'P = ½ṁvₑ²', label: 'Ideal kinetic power' },
    { expression: 'Iₛₚ = vₑ / g₀', label: 'Specific impulse' },
  ],
  advantage:
    'Solid particles could eventually allow spacecraft to use inexpensive, locally available reaction mass instead of carrying all propellant from Earth.',
  caveat:
    'That advantage depends on reliable processing and feed control. Raw lunar dust cannot simply be inserted into a finished engine; usable reaction mass may need screening, coating, shaping, selection, or melting.',
} as const

export const applications = [
  {
    horizon: 'Near term',
    note: 'Research equipment and services',
    items: ['Spacecraft shielding and material-impact testing', 'Lunar-dust testing', 'Vacuum particle sources', 'Particle charging and transport research', 'Regolith sorting and processing experiments', 'High-voltage accelerator research platforms'],
  },
  {
    horizon: 'Medium term',
    note: 'Subject to core validation',
    items: ['Experimental solid-particle propulsion', 'Small-body proximity operations', 'Momentum management', 'Lunar or asteroid technology demonstrations', 'Transport of standardized particles, droplets, or micro-pellets', 'Local reaction-mass utilization'],
  },
  {
    horizon: 'Long term',
    note: 'Future possibilities, not current products',
    items: ['Asteroid-mining infrastructure', 'Planetary-defense mass drivers', 'Lunar surface-to-orbit transport', 'Cislunar cargo transport', 'Orbital construction feedstock', 'Propulsion using locally sourced extraterrestrial material'],
  },
] as const

export const status = {
  done: [
    'A low-level simulation environment for the accelerator is built and running.',
    'A first simplified accelerator geometry exists in CAD.',
    'Orbital-dynamics scripts estimate specific impulse, mass flow, energy, and travel time.',
    'The concept has been checked against prior dust-accelerator literature.',
    'The team corresponded with Yanwei Li (University of Stuttgart) about accelerator behavior and multi-channel scaling.',
  ],
  next:
    'The most important current milestone is demonstrating stable, measurable thrust from a controlled solid-particle beam. The figures below are initial engineering targets, not achieved results.',
  priorities: [
    'Repeatable particle feeding in vacuum', 'Controlled charging and charge-to-mass measurement',
    'Micro- and nanoscale particle acceleration', 'Particle velocity and direct thrust measurement',
    'Beam divergence and electrical-to-kinetic efficiency', 'Electrode erosion, lifetime, and reliable high voltage',
    'Autonomous blockage and fault handling', 'Beam neutralization and spacecraft charging control',
  ],
  targets: [
    { value: '1 g/s', label: 'Continuous mass flow' },
    { value: '> 1 km/s', label: 'Initial particle velocity' },
    { value: '> 10%', label: 'Initial beam efficiency' },
    { value: '< 10°', label: 'Beam divergence' },
    { value: '≥ 1 hour', label: 'Stable early operation' },
    { value: 'Repeatable', label: 'Charge-to-mass measurement' },
    { value: 'Predictable', label: 'Electrode wear behavior' },
  ],
  risks: [
    { title: 'Particle variability', body: 'Charge-to-mass ratio and particle size can vary, changing acceleration and beam shape.' },
    { title: 'Feed reliability', body: 'Fine particles agglomerate, block channels, contaminate surfaces, and complicate steady mass flow.' },
    { title: 'High-voltage lifetime', body: 'Breakdown, electrode erosion, and accelerator contamination must remain controlled over long operation.' },
    { title: 'System effects', body: 'Beam divergence, plume contamination, neutralization, spacecraft charging, and electrical efficiency require direct measurement.' },
  ],
} as const

export const roadmap = [
  {
    n: 1, window: '2026–2027', title: 'Core validation', state: 'active',
    summary: 'Build a safe, instrumented laboratory accelerator and close the momentum balance.',
    goals: ['Safe 100–200 kV experimental power system', 'Vacuum-compatible particle injection', 'Controlled charging and acceleration', 'Velocity and mass-flow measurement', 'Thrust-balance validation', 'Lunar and asteroid regolith-simulant experiments', 'Initial efficiency and erosion characterization'],
  },
  {
    n: 2, window: '2027–2030', title: 'Research & testing products', state: 'planned',
    summary: 'Translate validated subsystems into useful laboratory equipment and services.',
    goals: ['Controlled dust-impact testing', 'Vacuum-laboratory particle sources', 'Lunar-dust and asteroid-regolith simulators', 'Spacecraft-material erosion testing', 'Charged-particle diagnostics', 'Custom accelerator test benches', 'Electrostatic transport and separation research'],
  },
  {
    n: 3, window: '2030–2034', title: 'In-space demonstration', state: 'planned',
    summary: 'Test compact, long-duration particle acceleration in the orbital environment.',
    goals: ['Compact propulsion demonstrator', 'Long-duration vacuum operation', 'Standardized particles, pellets, or molten droplets', 'Beam neutralization', 'Orbital plume characterization', 'Millinewton-to-newton demonstrations', 'Hosted-payload or small-spacecraft experiment'],
  },
  {
    n: 4, window: '2033–2038+', title: 'Extraterrestrial-resource propulsion', state: 'future',
    summary: 'Investigate propulsion and transport systems that use processed local material.',
    goals: [
      '20 km/s particle velocity at 1 g/s mass flow: 20 N thrust and 200 kW ideal kinetic power',
      'Scaled 30 N target at 20 km/s: 1.5 g/s mass flow and 300 kW ideal kinetic power',
      'Processed lunar-regolith propulsion',
      'Asteroid-surface maneuvering and despinning',
      'Local transport of mined material',
      'Cargo tugs using local reaction mass',
      'Sustained deflection using surface material',
      'Lunar mass drivers and orbital catchers',
    ],
  },
] as const

export const smallBodies = {
  mining: 'On a small body, processed local material could serve as reaction mass for despinning, repositioning, mining operations, and slow cargo transport. Very low thrust can accumulate useful momentum over long missions, but standardized feedstock is more realistic than uncontrolled raw dust.',
  defense: 'An asteroid-mounted mass driver could eject surface material to create continuous reaction thrust. This future approach is most relevant when a hazardous object is detected many years in advance. Kinetic impactors are more mature for near-term planetary defense; particle-based mass drivers would be a complementary method, not a universal replacement.',
} as const

export const team = {
  blurb: 'Five sixth-semester BSc Mechanical Engineering students at ETH Zurich. The team combines simulation, structures, machine learning, electronics, experimental setups, and CAD.',
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
  { n: 1, text: 'A. Mocker et al. A 2 MV Van de Graaff accelerator as a tool for planetary and impact physics research. Review of Scientific Instruments.', href: null },
  { n: 2, text: 'Y. Li et al. Upgrades of a Small Electrostatic Dust Accelerator at the University of Stuttgart.', href: 'https://doi.org/10.3390/app13074441' },
] as const

export const nav = [
  { href: '#how', label: 'Technology' },
  { href: '#building', label: 'Building now' },
  { href: '#applications', label: 'Applications' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#team', label: 'Team' },
] as const
