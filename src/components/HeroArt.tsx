/**
 * Static hero background: a wide planetary horizon with a soft rust
 * atmosphere. The drifting dust on top is DustField. Drawn on a 1440×900 canvas.
 */

export default function HeroArt() {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMax slice"
      className="h-full w-full"
      aria-hidden="true"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <radialGradient id="horizon-fill" cx="50%" cy="0%" r="60%">
          <stop offset="0%" stopColor="#ece6e1" />
          <stop offset="100%" stopColor="#f6f3f0" />
        </radialGradient>
        {/* Halo just outside the limb (r 2600): fades from rust at the edge to nothing */}
        <radialGradient id="atmosphere" gradientUnits="userSpaceOnUse" cx="720" cy="3340" r="2720">
          <stop offset="0.95" stopColor="#7a2500" stopOpacity="0" />
          <stop offset="0.956" stopColor="#7a2500" stopOpacity="0.3" />
          <stop offset="0.968" stopColor="#7a2500" stopOpacity="0.14" />
          <stop offset="0.985" stopColor="#7a2500" stopOpacity="0.04" />
          <stop offset="1" stopColor="#7a2500" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="horizon-glow" cx="50%" cy="100%" r="55%">
          <stop offset="0%" stopColor="#7a2500" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#7a2500" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Warm glow sitting on the horizon */}
      <rect x="-400" y="300" width="2240" height="600" fill="url(#horizon-glow)" />

      {/* Atmosphere: a soft rust halo, the old planet glow in our colours */}
      <circle cx="720" cy="3340" r="2720" fill="url(#atmosphere)" />

      {/* Planetary limb */}
      <circle cx="720" cy="3340" r="2600" fill="url(#horizon-fill)" stroke="rgba(122,37,0,0.35)" strokeWidth="1.5" />
    </svg>
  )
}
