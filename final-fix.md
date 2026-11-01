# GoLonger - Final Website Fix Plan

**App:** GoLonger
**Bundle ID:** `com.greystone.golonger`
**Site:** https://golonger.app
**Scope:** marketing site + public support/legal pages
**Created:** 1 November 2026

**Goal:** make the public website review-safe for App Store submission, remove every review and health claim, publish real Contact / Help / FAQ / Health Disclaimer pages, and eliminate all dead links.

---

## 0. Confirmed blockers from the live audit

These are observed on the live site and must be fixed before submission.

### Broken or placeholder URLs

| URL | Current | Required |
|---|---|---|
| `https://golonger.app/privacy-policy` | 200 | Keep working |
| `https://golonger.app/terms-of-use` | 200 | Keep working |
| `https://golonger.app/contact` | **404** | Publish |
| `https://golonger.app/help` | **404** | Publish or alias |
| `https://golonger.app/faq` | **404** | Publish or alias |
| `https://golonger.app/health-disclaimer` | **404** | Publish |

### Placeholder links on the homepage

- “Contact us” → `#`
- “Help center” → `#`
- “FAQ” → `#`
- “Health disclaimer” → `#`
- App Store badge → `#`
- Google Play badge → `#`
- “What’s new” → `#`

### In-app link

- The app’s `CONTACT_URL` points to `/contact`, which currently returns 404.
- **Contact, Help, FAQ, and Health Disclaimer links are 404 or `#`.** This is a hard App Review failure under **1.5**, **2.1(a)**, **5.1.1(i)**, and **1.4.1**.

### Why this matters

A reviewer who taps Contact, Help, FAQ, or Health Disclaimer gets a 404 or an inert `#` link. That alone is enough to produce a rejection. Publishing these pages is the single highest-value website fix.

---

## 1. Decisions needed before building

| # | Decision | Recommended default |
|---|---|---|
| 1 | Support email | Keep **`hello@golonger.app`** - already used in both legal pages. Only switch to `support@` if the mailbox exists. |
| 2 | Company block on Contact | `Golonger` + real country / legal entity. |
| 3 | Copy posture | **Neutral fitness language**: “guided pelvic floor exercise sessions.” No outcomes, no sexual-performance promises. |
| 4 | Store links | If there is no live listing, **remove both badges** and the fake download CTA. |
| 5 | Response promise | “Usually within two business days” - only if you can honour it. |
| 6 | Privacy/Terms edits | **Include them.** The current policy contradicts the new analytics opt-in and claims no cross-border transfer. |

> **Alignment risk:** the website can be made neutral, but the app still contains an “erectile” onboarding goal, and the name/mascot remain suggestive. Apple compares the site to the app. Website-only fixes reduce risk; they do not remove the 1.4.1 / 2.3.6 / 2.3.8 exposure.

---

## 2. Remove every review and testimonial

**Files**

- `src/app/page.tsx` - remove `<Testimonials />` and its import.
- Delete `src/components/landing/testimonials.tsx`.
- `src/components/landing/header.tsx` - remove the “Reviews” nav item.
- `src/components/landing/footer.tsx` - remove the “Reviews” link from Product.

**Replace with** a short, factual **“How it works”** section so the page does not look empty:

1. Open the app and choose a session.
2. Follow the on-screen video, timer, and cues.
3. Keep a record of completed sessions on your device.

No star ratings, review counts, “Verified user” labels, quotes, or screenshots implying reviews.

**Acceptance**

```bash
grep -riE "review|testimonial|verified user|4\.8|12,400|what people are saying" src
```

Returns nothing.

---

## 3. Remove health, medical, and efficacy claims

Replace promotional claims with factual feature descriptions.

| Location | Current | Replace with |
|---|---|---|
| `layout.tsx` title | “Pelvic Floor Training for Sexual Health & Wellness” | “Golonger - Guided Pelvic Floor Exercise App” |
| `layout.tsx` description | “Go longer, feel stronger… strength, flexibility, and sexual health.” | “Guided pelvic floor exercise sessions with video, timers, and reminders. No account required.” |
| `hero.tsx` H1 | “GO LONGER / STRONGER / INSIDE OUT” | “GUIDED / PELVIC FLOOR / TRAINING” |
| `hero.tsx` body | “Guided pelvic floor training for sexual health and wellness. Five minutes a day…” | “Short, guided pelvic floor exercise sessions you can follow at home. No account required.” |
| `features.tsx` | “Five-minute routines that adapt to your strength…” | “Short guided routines you can follow at your own pace.” |
| `features.tsx` | “Track reps, holds, and milestones as your pelvic floor gets stronger week by week.” | “See your completed sessions and streaks in one place.” |
| `features.tsx` | “Science-backed / grounded in pelvic floor physiotherapy” | “Structured sessions / clear on-screen timing and instructions.” |
| `features.tsx` | “Your health data stays on your device. No accounts, no sharing, no ads.” | “No account required. Your exercise history is stored on your device.” |
| `features.tsx` | “Confidence, restored / Better strength and control support your wellness and your relationships.” | “Follow-along video - clear demonstrations with timers and cues.” |
| `features.tsx` intro | “Short, science-backed sessions…” | “Short guided sessions you can do at home.” |
| `footer.tsx` | “Guided pelvic floor training for strength, flexibility, and sexual health and wellness.” | “Guided pelvic floor exercise sessions. No account required.” |
| `footer.tsx` | “Strength, confidence, intimacy - trained daily.” | “Guided pelvic floor training, in your pocket.” |
| `privacy-policy/page.tsx` | “designed to improve pelvic floor strength and flexibility for sexual health and wellness” | “a mobile app that provides guided pelvic floor exercise sessions” |
| `privacy-policy/page.tsx` | repeated “health data / health-related data” | “exercise history and session data” |
| `terms-of-use/page.tsx` | “helps you build pelvic floor strength, flexibility, and control” | “provides guided pelvic floor exercise sessions” |
| `README.md` | “help increase pelvic floor strength” | “guided pelvic floor exercise sessions” |

**Approved vocabulary:** guided, sessions, video, timer, cues, reminders, session history, streaks, on-device, no account required, works offline.

**Banned vocabulary:** science-backed, clinically proven, physiotherapy, improves, treats, cures, restores, boosts, results, guaranteed, “last longer”, “stronger erections”, “five minutes a day” (unless verified against the actual timer).

**Keep the disclaimer language** in Terms, and strengthen it by linking to the new page. Removing claims does not mean removing disclaimers.

**Acceptance**

```bash
grep -riE "science|physio|improve|treat|cure|restore|confidence|intimacy|sexual health|erectile|results|guarantee" src
```

Only intentional disclaimer text should remain (e.g. “does not provide medical treatment”).

---

## 4. Publish the Contact page (email-first)

Modeled on the calm, text-first structure of `https://thejcbsnbrand.com/contact`.

**New file:** `src/app/contact/page.tsx`
**Metadata:** title `Contact - Golonger`; description `Contact Golonger support by email.`

**Layout**

1. Existing `Header`.
2. `grid-bg` hero band: eyebrow `SUPPORT`, `page-title` **CONTACT**, `Last updated · November 1, 2026`.
3. `max-w-3xl` body.
4. Existing `Footer`.
5. “← Back to home” link above the content, matching the legal pages.

**Draft copy**

> **Contact**
>
> Golonger is the app behind guided pelvic floor exercise sessions. If you have a question, need help, or want to reach us for any reason, email is the fastest way.
>
> **Email us**
>
> **hello@golonger.app** ← large `mailto:` link, primary colour, underlined on hover
>
> We read every message and reply as quickly as we can, usually within two business days.
>
> **What to write about**
>
> - **App support** - bugs or questions about the app. Please include your app version, device model, and iOS version.
> - **Subscriptions and billing** - restore purchases, billing questions, and cancellation. App Store refunds are handled by Apple.
> - **Privacy and data** - deletion requests and analytics questions.
> - **Legal** - questions about our Privacy Policy, Terms of Use, or Health Disclaimer.
>
> **Company**
>
> Golonger
> [Country]
>
> For the fastest response, please email us rather than using social channels.

**Implementation notes**

- No contact form. A static export has no backend, and a broken form is worse than none.
- Use a real `mailto:` with a subject: `mailto:hello@golonger.app?subject=Golonger%20support`.
- The email text itself is the link - accessible and familiar to reviewers.
- Add `Contact` to the header nav.
- Add `contact` to the footer Support column.
- Set the App Store **Support URL** to `https://golonger.app/contact` (or `/support`).

---

## 5. Publish Help, FAQ, and Health Disclaimer pages

### 5.1 `/support` - Help centre

Short FAQ, no health claims:

- How do I restore purchases? → Settings → Restore Purchases.
- How do I manage or cancel? → App Store → Apple ID → Subscriptions.
- How do I delete my data? → Settings → Delete All Data.
- Can I turn off analytics? → Settings → Share Analytics.
- What is included? → guided sessions, timers, reminders, session history.
- Still need help? → email block + `/contact`.

### 5.2 `/health-disclaimer`

- “Golonger is a general wellness and fitness app.”
- “It does not provide medical advice, diagnosis, or treatment.”
- “The exercises are not a substitute for professional medical advice.”
- “Consult a qualified healthcare professional before starting, especially if you are pregnant, postpartum, recovering from surgery, have pelvic pain, or any medical condition.”
- “Stop immediately if you feel pain, dizziness, or discomfort and seek medical advice.”
- “No guarantee of results.”
- “If you think you have a medical emergency, contact local emergency services.”
- “Last updated” date.

### 5.3 `/help` and `/faq` aliases

Create both routes and render the same Support content, so guessed URLs and old links do not 404.

### 5.4 `not-found.tsx`

Branded 404 with links to Home, Contact, Privacy Policy, Terms of Use, Health Disclaimer.

---

## 6. Kill every dead link

### Footer (`src/components/landing/footer.tsx`)

- Product: Features → `/#features`; How it works → `/#how-it-works`; remove “What’s new”.
- Support: Contact → `/contact`; Help & FAQ → `/support`; remove the duplicate FAQ link.
- Legal: Privacy Policy → `/privacy-policy`; Terms → `/terms-of-use`; Health disclaimer → `/health-disclaimer`.
- Store badges: point to the real listing **or remove them**. Do not keep `href="#"`.
- Bottom tagline: replace per section 3.

### Header (`src/components/landing/header.tsx`)

- Features → `/#features`
- How it works → `/#how-it-works`
- Contact → `/contact`

### Hero (`src/components/landing/hero.tsx`)

- `DOWNLOAD NOW → #download` becomes either the live App Store URL or `SEE HOW IT WORKS → #features`.
- If there is no listing, use `#features` and add “Coming soon to the App Store”.

### Shared config

- Add `src/lib/site.ts` with `supportEmail`, `appStoreUrl`, `playStoreUrl`, and `legalLastUpdated`, so the email and store URLs are defined once.

**Acceptance**

```bash
grep -rn 'href="#"' src
```

Returns zero. Every internal href resolves to a route that exists in `out/`.

---

## 7. Bring Privacy Policy and Terms in line with the app

### Privacy Policy

- Change “anonymized” to “pseudonymous identifiers and usage events” - PostHog uses a persistent distinct ID.
- Add **Analytics choices**: analytics is opt-in; can be turned off in Settings → Share Analytics; consent can be withdrawn; ID reset via Delete All Data.
- Add **Delete All Data** description: clears AsyncStorage, deletes SQLite, resets PostHog ID and consent.
- Add **Retention**: local data until deleted; PostHog and RevenueCat per their policies.
- Add **International transfers**: PostHog is US-hosted; state the safeguard or disclose the transfer. Remove “no cross-border transfers.”
- Add **Third-party list** with purpose and privacy-policy links: RevenueCat, PostHog (US), Apple, Google.
- Add **Equal protection** statement for processors.
- Clarify that the optional name entered during onboarding is stored locally only.
- Update “Last updated”.

### Terms

- Neutral app description.
- Link the new `/health-disclaimer` page from the Health disclaimer section.
- Keep subscription, renewal, cancellation, refund, and age sections.
- Confirm trial/renewal wording matches the actual RevenueCat offering before publishing.
- Keep/verify the 18+ statement and governing-law entity.

**Do not** claim IP addresses are never processed unless PostHog IP capture is confirmed disabled (audit V-10).

---

## 8. Metadata, SEO, and polish

- `layout.tsx`: neutral title/description, `metadataBase: https://golonger.app`, Open Graph and Twitter fields, canonical.
- Add `robots` metadata and keep the existing `robots.txt`.
- Add `src/app/sitemap.ts` with `/`, `/contact`, `/support`, `/help`, `/faq`, `/health-disclaimer`, `/privacy-policy`, `/terms-of-use`.
- Normalise the brand spelling: the site uses “Golonger”; the audit uses “GoLonger”. Pick one and use it everywhere, including the App Store listing.
- Per-page metadata for every new route.

---

## 9. Verification and release

Run in this order:

1. `bun run lint`
2. `bunx tsc --noEmit`
3. `bun run build`
4. Confirm these exist in `out/`:
   - `out/contact/index.html`
   - `out/support/index.html`
   - `out/help/index.html`
   - `out/faq/index.html`
   - `out/health-disclaimer/index.html`
   - `out/404.html`
5. Crawl `out/` for every internal link and confirm a matching file exists.
6. `grep -rn 'href="#"' src` → zero.
7. `grep -riE "review|testimonial|verified user|science-backed|clinically|improve|treat|cure|guarantee" src` → only disclaimer text.
8. Serve `out/` locally; click every header/footer link; test the mailto on desktop and phone.
9. Deploy to the existing Cloudflare Pages project.
10. Verify live:
    - `https://golonger.app/contact` → 200
    - `https://golonger.app/support` → 200
    - `https://golonger.app/help` → 200
    - `https://golonger.app/faq` → 200
    - `https://golonger.app/health-disclaimer` → 200
    - `https://golonger.app/privacy-policy` → 200
    - `https://golonger.app/terms-of-use` → 200
11. In App Store Connect, set:
    - **Support URL** = `https://golonger.app/contact`
    - **Marketing URL** = `https://golonger.app`
12. Open the live site on a phone with no cache and confirm no `#` links and no console errors.

**Definition of done**

- No reviews or ratings anywhere.
- No efficacy, medical, or sexual-performance claims.
- Contact page live with a monitored email and a stated response time.
- Help, FAQ, and Health Disclaimer live.
- Zero placeholder links or fake store badges.
- Privacy policy matches analytics consent, third-party processing, retention, and deletion.
- Every URL Apple might click returns 200.

---

## 10. Work order

1. **Unblock review:** publish `/contact`, `/support`, `/help`, `/faq`, `/health-disclaimer`; set Support URL.
2. **Remove reviews:** delete the testimonials component and all review references.
3. **Remove health claims:** neutralise hero, features, footer, metadata, legal copy.
4. **Repair links:** footer, header, hero CTA, store badges, 404 page.
5. **Privacy and Terms:** consent, third parties, transfers, retention, deletion, disclaimer link.
6. **Metadata:** title, description, Open Graph, sitemap, brand spelling.
7. **Verify and deploy:** lint, typecheck, build, link crawl, live URL check, clean-device test.

---

## 11. Still required outside this repo

These remain submission blockers and are not fixed by the website:

1. Flatten the app icon to RGB with no alpha - C-04.
2. Add an in-app health disclaimer and “consult a doctor” notice - H-01.
3. Decide how App Review gets past the hard paywall and write review notes - H-05 / V-15.
4. Update App Privacy labels and `PrivacyInfo.xcprivacy` - V-04.
5. Exclude exercise/health data from iCloud backup - H-08.
6. Obtain media licences and model releases - H-09.
7. Answer the age-rating questionnaire honestly and review the name/icon positioning - H-03 / V-07.
8. Sandbox-test purchase, restore, delayed entitlement, cancellation, offline launch, and clean-install links.

---

## 12. Acceptance checklist

- [ ] `/contact` published and returns 200.
- [ ] `/support`, `/help`, `/faq` published and return 200.
- [ ] `/health-disclaimer` published and returns 200.
- [ ] Privacy Policy and Terms of Use still return 200.
- [ ] No `href="#"` anywhere in `src`.
- [ ] All reviews and testimonials removed.
- [ ] No science-backed, medical, or efficacy claims.
- [ ] Contact page shows a real, monitored email and response expectation.
- [ ] Store badges point to a real listing or are removed.
- [ ] Privacy policy matches analytics consent, vendors, US transfer, retention, and deletion.
- [ ] Terms link to the Health Disclaimer page.
- [ ] `out/` contains every new route and `404.html`.
- [ ] Lint, typecheck, and build pass.
- [ ] Live URLs verified on desktop and phone.
- [ ] App Store Connect Support URL set to `https://golonger.app/contact`.
