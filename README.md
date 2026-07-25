# AFPSAT Reviewer, Netlify + Supabase

This is the SQLite version converted for Netlify Functions and Supabase. SQLite was removed because Netlify function storage is ephemeral. Supabase now stores users, hashed OTPs, hashed session tokens, topics, questions, and per-user progress.

## Deploy steps

1. Create a Supabase project.
2. In Supabase, open **SQL Editor**, paste `supabase/schema.sql`, and run it.
3. Locally, install dependencies and seed the 25 topics and 250 questions:

```bash
npm install
cp .env.example .env
# Fill SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env
npm run seed
```

4. Push this folder to GitHub. In Netlify choose **Add new project**, import the repository, leave the publish directory as `public`, and deploy.
5. In Netlify, open **Project configuration > Environment variables** and add these variables for Functions: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `OTP_SECRET`, `APP_ORIGIN`, `SESSION_DAYS`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, and `MAIL_FROM`.
6. Redeploy after adding variables. Netlify documents that function variables need the Functions scope and changes take effect after a new deploy.

## Local test

```bash
npm run dev
```

Without SMTP, development OTPs are printed by the function runtime. For production, configure SMTP. Never expose `SUPABASE_SERVICE_ROLE_KEY` in browser code, commit `.env`, or use the service key as a client-side variable.

## Security model

Email verification and admin approval are separate. A verified account still cannot log in until the configured admin approves it. Passwords use Node scrypt, OTP values are stored as HMAC hashes with expiry and attempt limits, sessions use random HttpOnly SameSite cookies with hashed tokens in Supabase, state-changing authenticated requests require CSRF tokens, and auth endpoints are rate-limited.

The footer credit is included: **Vibe coded by: EdSu**.
