/** Rocket-and-plume mark. The body inherits `currentColor` so it reads on
 *  both the light sections and the black bands. */
export default function Logo({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="logo-plume" cx="50%" cy="88%" r="60%">
          <stop offset="0%" stopColor="#ff8f6d" />
          <stop offset="55%" stopColor="#ff5841" />
          <stop offset="100%" stopColor="#ff5841" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="none" stroke="#ff5841" strokeWidth="2.5" />
      <path d="M32 12c5 5 7.5 11 7.5 18v6h-15v-6c0-7 2.5-13 7.5-18Z" fill="currentColor" />
      <path d="M24.5 30 19 38h7Zm15 0L45 38h-7Z" fill="currentColor" opacity="0.55" />
      <ellipse cx="32" cy="46" rx="13" ry="12" fill="url(#logo-plume)" />
      <g fill="#ff5841">
        <circle cx="27" cy="47" r="1.3" />
        <circle cx="35" cy="50" r="1.1" />
        <circle cx="31" cy="43" r="1" />
        <circle cx="37" cy="44" r="0.9" />
        <circle cx="32" cy="55" r="1.1" />
      </g>
    </svg>
  )
}
