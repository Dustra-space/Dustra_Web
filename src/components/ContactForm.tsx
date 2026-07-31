import { useId, useRef, useState } from 'react'
import { contact } from '../content'

/**
 * Endpoint for a hosted form backend (Formspree, Formspark, Web3Forms, Getform —
 * all accept a plain POST). Set VITE_CONTACT_ENDPOINT to enable real submission.
 * When it is unset the form degrades to opening a prefilled mail draft instead,
 * so the page is never a dead end.
 */
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT

type Fields = {
  name: string
  email: string
  organisation: string
  message: string
}

type Errors = Partial<Record<keyof Fields, string>>

type Status = 'idle' | 'submitting' | 'sent' | 'drafted' | 'error'

const EMPTY: Fields = { name: '', email: '', organisation: '', message: '' }

function validate(values: Fields): Errors {
  const errors: Errors = {}
  if (!values.name.trim()) errors.name = 'Please tell us your name.'
  if (!values.email.trim()) {
    errors.email = 'We need an address to reply to.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'That does not look like an email address.'
  }
  if (values.message.trim().length < 10) {
    errors.message = 'A sentence or two, so we know what to reply about.'
  }
  return errors
}

/** Compose a prefilled mail draft — the no-endpoint fallback. */
function mailtoHref(values: Fields) {
  const body = [
    values.message.trim(),
    '',
    '—',
    values.name.trim(),
    values.organisation.trim(),
    values.email.trim(),
  ]
    .filter(Boolean)
    .join('\n')

  const params = new URLSearchParams({
    subject: `Dustra enquiry — ${values.name.trim()}`,
    body,
  })
  return `mailto:${contact.email}?${params.toString()}`
}

export default function ContactForm() {
  const id = useId()
  const [values, setValues] = useState<Fields>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  /** Bots fill hidden fields; humans do not. */
  const honeypot = useRef<HTMLInputElement>(null)

  const set = (key: keyof Fields) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [key]: event.target.value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (status === 'submitting') return

    if (honeypot.current?.value) {
      setStatus('sent')
      return
    }

    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const first = document.getElementById(`${id}-${Object.keys(found)[0]}`)
      first?.focus()
      return
    }

    if (!ENDPOINT) {
      window.location.href = mailtoHref(values)
      setStatus('drafted')
      return
    }

    setStatus('submitting')
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          organisation: values.organisation.trim(),
          message: values.message.trim(),
        }),
      })
      if (!response.ok) throw new Error(`Submission failed (${response.status})`)
      setValues(EMPTY)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const field =
    'w-full rounded-md border bg-white/[0.04] px-3.5 py-2.5 text-[15px] text-chalk ' +
    'placeholder:text-grey-dark transition-colors outline-none ' +
    'focus:border-coral focus:bg-white/[0.06]'
  const ok = 'border-[color:var(--color-rule-dark)]'
  const bad = 'border-coral'

  if (status === 'sent') {
    return (
      <div
        className="mt-9 rounded-lg border border-[color:var(--color-rule-dark)] bg-white/[0.04] p-8"
        role="status"
      >
        <p className="text-chalk text-xl">Thank you — your message is on its way.</p>
        <p className="text-grey-dark mt-2.5">
          {contact.person} will reply to you directly, usually within a few days.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="btn btn-ghost-dark mt-6"
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-9 max-w-2xl">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className="label text-grey-dark mb-2 block">
            Name
          </label>
          <input
            id={`${id}-name`}
            name="name"
            value={values.name}
            onChange={set('name')}
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${id}-name-error` : undefined}
            className={`${field} ${errors.name ? bad : ok}`}
          />
          {errors.name && (
            <p id={`${id}-name-error`} className="text-coral mt-1.5 text-[13px]">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${id}-email`} className="label text-grey-dark mb-2 block">
            Email
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            value={values.email}
            onChange={set('email')}
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${id}-email-error` : undefined}
            className={`${field} ${errors.email ? bad : ok}`}
          />
          {errors.email && (
            <p id={`${id}-email-error`} className="text-coral mt-1.5 text-[13px]">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor={`${id}-organisation`} className="label text-grey-dark mb-2 block">
          Organisation <span className="normal-case">(optional)</span>
        </label>
        <input
          id={`${id}-organisation`}
          name="organisation"
          value={values.organisation}
          onChange={set('organisation')}
          autoComplete="organization"
          className={`${field} ${ok}`}
        />
      </div>

      <div className="mt-4">
        <label htmlFor={`${id}-message`} className="label text-grey-dark mb-2 block">
          Message
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={5}
          value={values.message}
          onChange={set('message')}
          placeholder="What would you like to talk about?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? `${id}-message-error` : undefined}
          className={`${field} resize-y ${errors.message ? bad : ok}`}
        />
        {errors.message && (
          <p id={`${id}-message-error`} className="text-coral mt-1.5 text-[13px]">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot — visually hidden, never announced, never tab-reachable */}
      <input
        ref={honeypot}
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute h-0 w-0 opacity-0"
      />

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === 'submitting'} className="btn btn-coral disabled:opacity-60">
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </button>
        <span className="text-grey-dark text-[13px]">
          or email{' '}
          <a
            href={`mailto:${contact.email}`}
            className="hover:text-coral underline decoration-[color:var(--color-rule-dark)] underline-offset-4 transition-colors"
          >
            {contact.email}
          </a>
        </span>
      </div>

      {status === 'error' && (
        <p role="alert" className="text-coral mt-4 text-[15px]">
          That did not go through. Please try again, or email{' '}
          <a href={`mailto:${contact.email}`} className="underline underline-offset-4">
            {contact.email}
          </a>
          .
        </p>
      )}

      {status === 'drafted' && (
        <p role="status" className="text-grey-dark mt-4 text-[15px]">
          Your mail app should have opened with the message ready to send.
        </p>
      )}
    </form>
  )
}
