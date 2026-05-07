# CONTENT DRAFT — pokant.live

---

## NAV

| Item | Link |
|------|------|
| Pokant (logo) | / |
| How it works | #how-it-works |
| Coverage | #coverage |
| Docs | https://api.pokant.live/docs |
| **Get pilot access** (button) | /contact |

---

## HERO

**Badge:** Filing infrastructure

**Headline:** Filing infrastructure for portals without APIs

**Subhead:** An LLM agent explores a tax portal once. We compile the trace to a deterministic script. Every filing after runs for cents.

**CTA:** Get pilot access → /contact

---

## PROBLEM FRAMING

**Headline:** The long tail has no APIs

Your customers file in hundreds of jurisdictions — Colorado alone has 70+ home-rule cities with separate portals, Louisiana has 64 parishes, Alabama has ~200 self-administered localities. No vendor has APIs for these portals. Today that means human ops teams clicking through state DOR sites, or brittle Playwright scripts that break every time a portal updates its UI.

---

## HOW IT WORKS

**Headline:** Explore once, replay forever

### 1. Explore

An LLM agent navigates the portal end-to-end — login, form entry, submission, confirmation. Every action is recorded with selectors, intent, and screenshots.

### 2. Compile

The successful trace is compiled into a deterministic, parameterized Playwright script. Field values become template parameters. No LLM needed at runtime.

### 3. Replay

Subsequent filings execute the compiled script. If the portal changes a selector or layout, a 4-tier self-healing cascade repairs the step automatically — from alternate selectors to a single-shot LLM recovery call.

---

## COVERAGE

**Headline:** Built for the jurisdictions nobody else covers

### State DOR portals

- **Colorado SUTS** — state + home-rule city filings
- **CDTFA** — California Department of Tax and Fee Administration
- **MyTax Illinois** — Illinois Department of Revenue
- **LaTAP** — Louisiana Taxpayer Access Point (state-level)
- **Louisiana Parish E-File** — parish-level filings
- **ALDOR / ONE SPOT** — Alabama Department of Revenue
- **MyDORWAY** — South Carolina Department of Revenue
- **Florida DOR** — Florida Department of Revenue
- **Texas Comptroller WebFile** — Texas sales tax filing

### Long-tail local jurisdictions

- **Colorado home-rule cities** — Denver, Aurora, Lakewood, Arvada, Boulder, and 65+ more, each with a separate portal
- **Louisiana parishes** — 64 parish-level filing portals
- **Alabama self-administered localities** — ~200 city and county portals outside ONE SPOT

---

## AUDIT-GRADE REPLAY

**Headline:** Every filing produces an audit trail

Each replay generates a timestamped record: screenshots at every step, the full action trace, and the exact field values submitted. When a state issues a notice questioning a return, pull the replay and show exactly what was filed, when, and through which form fields.

---

## CODE EXAMPLE

**Headline:** From first exploration to production filing

```python
from computeruse import ComputerUse, WorkflowCompiler, ReplayExecutor

# Explore: agent navigates Colorado SUTS once
cu = ComputerUse()
run = cu.run_task(
    url="https://suts.colorado.gov",
    task="File a sales tax return for Denver, Q1 2026",
)

# Compile: trace → deterministic, parameterized workflow
compiler = WorkflowCompiler()
wf = compiler.compile_from_steps(
    steps=run.step_data, start_url="https://suts.colorado.gov",
    name="denver_sales_tax",
)

# Replay: every filing after runs for ~$0.05, self-heals on UI changes
executor = ReplayExecutor()
result = await executor.execute(wf, params={"tax_due": "1420.00"}, page=page)
```

**Caption:** `page` is a Playwright Page object from your browser context. Full SDK docs at api.pokant.live/docs.

---

## FAQ

### What portals do you cover?

Colorado SUTS (state + home-rule cities), CDTFA, MyTax Illinois, LaTAP + Parish E-File, ALDOR / ONE SPOT, MyDORWAY, Florida DOR, and Texas Comptroller WebFile. New jurisdictions take 1–2 weeks to onboard.

### What happens when a state DOR changes the portal UI?

Replays self-heal automatically. When a selector breaks, we try alternate selectors from the compiled trace, then fall back to text and ARIA-based matching, then a single LLM call to locate the element from the page's accessibility tree. Most portal changes resolve without human intervention. If a full restructure breaks the workflow, we re-explore and recompile.

### How is this different from running our own Playwright + LLM stack?

Three things you don't have to build: (1) a pre-built library of compiled workflows for tax jurisdictions, so you skip the exploration step entirely; (2) audit-grade replay logs that tie every filing to a timestamped action trace; (3) self-healing that works across portal updates without re-recording. You pay per filing instead of maintaining browser infrastructure, LLM API costs, and on-call rotation for script breakage.

### What does a pilot look like?

Four weeks. We pick one jurisdiction together — ideally one that's painful for your ops team today. We deliver a compiled workflow, integrate it with your system via API or SDK, and run live filings. Fixed fee, no usage billing during the pilot.

### What about CAPTCHAs, MFA, and session expiry on state portals?

CAPTCHAs (reCAPTCHA, hCaptcha, Turnstile) are solved automatically during both exploration and replay. For portals that require MFA, we support persistent session cookies so you authenticate once and replay without re-authenticating until the session expires.

### Is the data we submit secure?

Credentials are encrypted at rest with AES-256-GCM using per-account derived keys. Filing data in transit is TLS-encrypted. All access is scoped to your account via row-level security on the database.

---

## FINAL CTA

**Headline:** Start with one jurisdiction

**Subhead:** Pick the portal that costs your ops team the most time. We'll have it filing autonomously in four weeks.

**CTA:** Get pilot access → /contact

---

## CONTACT PAGE

**Badge:** Pilot access

**Headline:** Let's start with one jurisdiction.

**Subhead:** Tell us which state or local portal is the biggest pain point. We'll scope a 4-week pilot and get the first filings running.

### Form fields

| Field | Placeholder | Required |
|-------|------------|----------|
| Full name | Jane Kim | Yes |
| Work email | jane@anrok.com | Yes |
| Company | Anrok | No |
| Which portal(s) are you filing on today? | Colorado SUTS, LaTAP, CDTFA... | Yes |

### Right column info

1. **We reply within one business day** and schedule a scoping call within the week.
2. **Pilot: 4 weeks, one jurisdiction.** We pick a portal together, deliver a compiled workflow, and run live filings.
3. **No usage billing during the pilot.** Fixed fee — we eat the infrastructure cost.

### Success message

Message sent. We'll be in touch within one business day. You can also reach us at avidesai0110@gmail.com.

---

## FOOTER

**Tagline:** Filing infrastructure for tax portals

**Contact:** avidesai0110@gmail.com

**Link:** Docs → https://api.pokant.live/docs

No other footer links. Remove all dead `<span>` elements.

---

## DELETIONS SUMMARY (Phase 2)

- **DELETE** `app/enterprise/page.tsx` — remove file and all nav links to /enterprise
- **DELETE** `components/testimonials-section.tsx` — fabricated testimonials
- **DELETE** `components/pricing-section.tsx` — wrong pricing for this stage/buyer
- **REMOVE** "How is Pokant different from Skyvern?" FAQ entry
- **REMOVE** rotating API reference code cards — replace with single code example above
- **REMOVE** all dead `<span>` footer links except Docs
- **REMOVE** "Get Started" / "Login" CTAs from nav and hero — replace with "Get pilot access" → /contact
- **REMOVE** "For Enterprises" CTA and nav link
