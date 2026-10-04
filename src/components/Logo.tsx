import { MARK, WORDMARK } from './logoPaths'

type Props = {
  className?: string
  /** Show only the D mark, without the wordmark. */
  markOnly?: boolean
}

/**
 * The DUSTRA logo. The wordmark takes `currentColor` (charcoal by default);
 * the D mark keeps its rust colours, so use it on light backgrounds.
 */
export default function Logo({ className = 'h-7 w-auto text-charcoal', markOnly = false }: Props) {
  const html = markOnly ? MARK : `${MARK}<path d="${WORDMARK}" fill="currentColor"/>`
  return (
    <svg
      viewBox={markOnly ? '140 1395 1070 525' : '140 1395 3100 525'}
      className={className}
      role="img"
      aria-label="DUSTRA"
      style={{ fillRule: 'evenodd', strokeLinejoin: 'round' }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
