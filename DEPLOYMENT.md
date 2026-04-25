# PrepAI Deployment

Use this checklist for the first production deploy on Vercel with Neon.

## 1. Create Production Services

- Create a Neon PostgreSQL database and copy the pooled production `DATABASE_URL`.
- Create or select a Clerk production app.
- Create or select a Google Gemini API key.
- Create or select an Inngest app after the Vercel URL is available.

## 2. Configure Vercel

Import the GitHub repository into Vercel.

- Framework preset: `Next.js`
- Root directory: repository root
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: leave default

Add these environment variables in Vercel:

```env
DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
GEMINI_API_KEY=
INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=
NEXT_PUBLIC_APP_URL=https://your-vercel-domain.vercel.app
```

## 3. Deploy Database

Run migrations against the production database before or immediately after the first deploy:

```bash
DATABASE_URL="your_neon_database_url" npm run deploy:db
```

## 4. Finish Provider Setup

- In Clerk, add the Vercel production URL to allowed origins and redirect URLs.
- In Inngest, sync this endpoint after Vercel deploys:

```text
https://your-vercel-domain.vercel.app/api/inngest
```

## 5. Verify Production

- Sign up and complete onboarding.
- Confirm the user appears in Neon.
- Open dashboard and confirm AI insights load.
- Generate and save a resume.
- Take a mock interview quiz.
- Confirm Inngest sees the deployed function.
