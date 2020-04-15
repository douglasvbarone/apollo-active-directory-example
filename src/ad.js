import { Client } from 'ldapts'

const client = new Client({
  url: process.env.AD_URL,
  strictDN: false,
  tlsOptions: { rejectUnauthorized: false }
})

export { client as ad }
