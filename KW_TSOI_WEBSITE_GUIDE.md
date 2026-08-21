# KW Tsoi's website handbook

This guide is written for Dr. Kwok-Wing Tsoi. It assumes no programming
experience.

## The two copies of the website

Your website has two counterparts:

1. **Local working copy**
   `/Users/kwokwingtsoi/Documents/KW-Tsoi-Website`
2. **Public online copy**
   `https://kwokwingtsoi.github.io/kwtsoi.github.io/`

The local copy is your workshop. Changes there are private until you explicitly
approve publication. The online copy is what visitors see.

## The one rule to remember

Use this sequence every time:

**Ask → Preview → Correct → Approve → Publish → Check**

Never skip the preview and approval steps.

## Starting a future conversation with Codex

Open the local `KW-Tsoi-Website` folder in Codex. Then begin with:

> This is my GitHub Pages website. First inspect the files and Git status. Do
> not publish anything yet. Help me make the following change: [describe it].

This tells Codex to work locally and preserve the existing website.

## The folder in plain English

```text
KW-Tsoi-Website/
├── index.html                 the entire visible homepage
├── style.css                  colours and visual design
├── files/                     downloadable papers and documents
│   └── 2603.11615v1.pdf       a local paper copy
├── EDITING_MAP.md             a short guide to what can be edited
├── README.md                  a short folder map
├── MAINTENANCE.md             the quick maintenance checklist
└── KW_TSOI_WEBSITE_GUIDE.md   this handbook
```

The hidden `.git` folder connects the local folder to GitHub. Do not delete or
rename `.git`.

## Editing ordinary text

You can simply tell Codex:

> Change the introductory paragraph to: [paste new wording]. Change no other
> content or design. Preview it locally and wait for my approval.

Codex should edit `index.html`, validate the page, and show you the local
result. The public website is still unchanged at this stage.

## Adding a publication

Give Codex a complete citation and its preferred link:

> Add this item at the top of Publications: [paste citation]. Use this link:
> [paste DOI, arXiv, or PDF link]. Keep the current design. Preview it and do
> not publish yet.

Before approval, check:

- title and spelling;
- all authors and their order;
- year, journal, volume, and pages;
- whether the button opens the intended paper;
- whether the item belongs under Preprints or Publications.

## Keeping a PDF locally and online

A durable publication entry can have both:

- a local PDF in `files/`, which becomes part of the website when published;
- an external DOI or arXiv link, which points to the official record.

Ask Codex to keep both links when useful:

> Copy this PDF into `files/`. Add a PDF button and a separate DOI/arXiv button.
> Preview both links and wait for my approval.

Only upload papers that you are legally allowed to distribute publicly. If
unsure, use the DOI or arXiv link without uploading the PDF.

## Changing colours or layout

For design work, make the request narrow:

> Make a local backup. Change only the colour palette from green to dark blue.
> Keep all wording and sections. Preview it and wait for approval.

For a larger redesign, ask Codex to preserve the last working version as a Git
commit before editing.

## Publishing an approved change

After checking the local preview, say:

> I approve this exact version. Commit it with the message “[short description]”
> and push it to GitHub. Then check the public page and report the public links.

Examples of useful commit messages:

- `Add 2026 preprint`
- `Update current teaching`
- `Correct contact information`
- `Refresh homepage design`

Codex may ask you to sign in to GitHub. Sign in yourself; never send a password,
one-time code, or access token in chat.

## If something goes wrong

Stop publishing and say:

> Compare the public website, the current local files, and the Git history.
> Explain what changed. Do not modify anything until I approve a recovery plan.

Git records committed versions, so most publishing mistakes are reversible.

## Good habits

- Make one topic change at a time.
- Keep filenames short and descriptive.
- Preview every link before publishing.
- Never store passwords, student records, private correspondence, or
  confidential drafts in this folder.
- Keep the `files/` directory organised; use stable filenames after publishing.
- Ask Codex to check Git status at the start and end of every maintenance task.
- End each successful task by recording what was published and its public URL.

## A complete reusable prompt

Copy and adapt this prompt whenever needed:

> Open my local website at
> `/Users/kwokwingtsoi/Documents/KW-Tsoi-Website`. Inspect the website and Git
> status first. Do not publish yet. Make only this change: [describe change].
> Preserve the existing design and unrelated content. Check the wording and all
> affected links, preview the result locally, summarize exactly what changed,
> and wait for my approval before committing or pushing.
