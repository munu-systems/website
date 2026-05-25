# Website TODO

## High priority

- [x] Add favicon — simple μν mark or just "μ" for browser tab
- [x] Mobile nav — add hamburger menu, currently nav links hidden on mobile with no alternative
- [x] Open Graph + social meta tags — og:title, og:description, og:image on all pages for Twitter/LinkedIn/Slack sharing
- [x] Add `<meta name="description">` to all pages for SEO

## Medium priority

- [x] Rename "Read the Manifesto" CTA on index.html — changed to "How it works"
- [x] Get Started page — add "What you get" section showing the three CLI commands (compile, run, node) with one-line descriptions
- [x] Get Started page — fix "Embedded" deployment target card, replaced comment with cargo add command
- [x] Use Cases page — Embedded Systems section subtitle changed to "Verified firmware on bare metal — no OS, no heap"
- [x] Use Cases page — Formal Verification syntax updated to match current patterns (parenthesized clauses, commas)
- [ ] Ecosystem page — inferris and munu-code GitHub links will 404 since repos aren't published yet, make links non-clickable or remove href

## Low priority

- [x] Blog page — removed from nav and footer until there's actual content (page still accessible via direct URL)

## Context for next session

- Local dev server: `python3 -m http.server 8000 --directory /Users/rivergod/dev/munu-projects/website`
- Site is live at munu.hk (GitHub Pages, master branch, CNAME configured)
- Git remote: git@github.com:munu-systems/website.git (SSH key access may need `! git push`)
- Munu codebase at /Users/rivergod/dev/munu-projects/munu/ — cross-reference for accuracy
- New munu test suite at /Users/rivergod/dev/munu/tests/tests/phase_2_tests/ — current syntax examples
- Website-old reference at /Users/rivergod/dev/munu-projects/website-old/ (React JSX, has Datalog and compiler pipeline sections we haven't ported)
- Contract syntax: `pub contract Name(params) -> [Type] behaviour { do: ... must: ... } { body }` — behaviour is optional
- Spawn syntax in contracts: `let x = spawn nu_function(args);` for nu functions, `let x = ContractName(args);` for contracts
- `lazy mu` keyword makes functions return WaitNeeded immediately
- The codebase is at v3.0+, 36-opcode ISA, no_std kernel, MPL-2.0 license
- There are unpushed commits — user needs to `! git push`
