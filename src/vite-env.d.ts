/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Optional POST endpoint for the contact form (Formspree, Formspark,
   * Web3Forms, Getform …). When unset the form opens a prefilled mail draft.
   */
  readonly VITE_CONTACT_ENDPOINT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
