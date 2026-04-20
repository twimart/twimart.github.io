export const personal = {
  name: "Thomas WIMART",
  title: "Network & Security Engineer",
  subtitle: "Apprentice Engineer at Thales · UniLaSalle Amiens",
  email: "hiring.drizzly415@aleeas.com",
  website: "www.thomaswimart.fr",
  location: "Amiens, France",
  linkedin: "https://www.linkedin.com/in/thomas-wimart",
  github: "https://github.com/twimart",
  bio: "Apprentice Network & Security Engineer currently on work-study at Thales. Experienced in network equipment configuration and deployment, system administration and cybersecurity. Curious and versatile, I'm also interested in Linux, AI and automation.",
};

export const experiences = [
  {
    role: "Apprentice Network & Security Engineer",
    company: "Thales",
    period: "Sept. 2023 – Present",
    duration: "2+ years",
    location: "Lambersart, Hauts-de-France",
    description: [
      "Configuration and deployment of network equipment (routers, switches, firewalls)",
      "Testing and validation of network configurations: OSPF, rsyslog, routing protocols",
      "Installation and commissioning of equipment",
      "Development of an optimisation method for installation and testing processes",
      "Writing procedures and technical documentation",
    ],
    tags: ["Cisco", "OSPF", "Firewalls", "Documentation"],
  },
  {
    role: "Network Intern",
    company: "Axians",
    period: "Nov. – Dec. 2022",
    duration: "2 months",
    location: "Camon, Hauts-de-France",
    description: [
      "Implementation of network mockups",
      "Optical fibre cabling audit",
      "Follow-up and support of network technicians on assignment",
    ],
    tags: ["Fiber Optic", "Network Design"],
  },
  {
    role: "IT Department Intern",
    company: "Amiens School District Office",
    period: "May – Jun. 2022",
    duration: "2 months",
    location: "Amiens, Hauts-de-France",
    description: [
      "Deployment and administration of Active Directory",
      "Maintenance and replacement of IT equipment",
      "User support (helpdesk level 1)",
    ],
    tags: ["Active Directory", "Windows", "Helpdesk"],
  },
];

export const education = [
  {
    degree: "Engineering Degree — Computer Networks & IoT",
    school: "UniLaSalle Amiens",
    period: "Sept. 2023 – Jul. 2026",
    description: "Work-study programme — Computer Networks & Cybersecurity track",
    icon: "🎓",
  },
  {
    degree: "BTS SIO — Infrastructure, Services & Networks",
    school: "Édouard Gand High School",
    period: "Sept. 2021 – Jul. 2023",
    description: "Specialisation in system administration, networks and security",
    icon: "📘",
  },
];

export const skills = [
  {
    category: "Networking",
    icon: "🌐",
    items: ["Cisco", "Aruba", "OSPF", "VLAN", "TFTP", "Routing Protocols", "Fiber Optic Cabling"],
  },
  {
    category: "Security",
    icon: "🔒",
    items: ["Stormshield", "Fortinet", "Firewalls", "Proxy Server", "SSH", "VPN"],
  },
  {
    category: "Systems & Tools",
    icon: "⚙️",
    items: ["Linux", "Active Directory", "GitLab", "Jira", "Bitbucket"],
  },
  {
    category: "Languages",
    icon: "💬",
    items: ["French (Native)", "English (C1)"],
  },
];

export const certifications = [
  {
    name: "NDG Linux Essentials",
    issuer: "Cisco NetAcad",
    description: "Certification attesting to knowledge of basic Linux commands and concepts.",
    icon: "🐧",
  },
];

export const articles = [
  {
    slug: "linux-daily-driver",
    title: "Why I Switched to Linux as My Daily Driver",
    date: "March 2025",
    readTime: "6 min read",
    category: "Linux",
    tags: ["Linux", "Open Source", "Productivity"],
    excerpt: "After years of Windows, switching to Linux felt like opening a window in a stuffy room. Here's my honest take on the transition, the tools I use, and why I'll never go back.",
    content: `
## The Breaking Point

It started with an update. Windows decided — without asking — to restart my machine during a critical task at work. That was the last straw.

I'd been curious about Linux for years (the NDG Linux Essentials cert I earned wasn't just for the résumé), but I always had excuses: "the software won't work," "it's too complex," "I don't have time to tinker." All valid concerns, all wrong.

## Choosing a Distribution

The Linux world is famously fragmented. After some research, I landed on **Fedora** — a solid middle ground between cutting-edge software and stability. If you're just starting out, **Ubuntu** or **Linux Mint** are friendlier entry points.

Key criteria I used:
- Active community and regular updates
- Good hardware support (critical for modern laptops)
- Not tied to a single commercial entity (sorry, Ubuntu/Canonical)

## What Surprised Me

**The good:**
- Boot times are genuinely faster
- Package managers (\`dnf\`, \`apt\`) make software installation trivially easy
- You understand what's running on your machine
- Terminal workflows are dramatically more powerful
- No telemetry, no ads in the Start menu, no "recommended" content

**The genuinely hard parts:**
- Some proprietary software (Adobe suite, some games) doesn't run natively — Proton/Wine bridge the gap for most things
- Initial Wi-Fi/Bluetooth drivers can be a headache on some hardware
- The learning curve is real, but it's also the point

## My Daily Setup

\`\`\`
OS:      Fedora 43 
Desktop: KDE Plasma
Shell:   Bash
Editor:  VSCodium
Browser: Brave
\`\`\`

## Is It For Everyone?

Honestly? Not yet. If you depend on specific Windows-only software for work, dual-booting is a sensible middle ground. But if you're willing to invest a few weekends into the setup, Linux pays dividends in speed, control, and privacy.

The biggest shift isn't technical — it's philosophical. Linux asks you to understand your tools rather than just consume them. For me, that's the whole point.
    `,
  },
  {
    slug: "proton-suite-privacy",
    title: "The Proton Suite: A Complete Privacy Overhaul",
    date: "February 2025",
    readTime: "8 min read",
    category: "Privacy",
    tags: ["Privacy", "Proton", "Degoogling", "Email"],
    excerpt: "I replaced Gmail, Google Drive, Google Calendar and more with Proton's suite. Here's a realistic look at what works, what's missing, and whether it's worth the switch.",
    content: `
## Why I Degoogled

Google's business model is straightforward: your attention and data are the product. Gmail scans your emails to build an advertising profile. Google Maps tracks your movements. Chrome watches your browsing history. None of this is secret — it's in the terms of service.

I'm not a conspiracy theorist. I just believe that **privacy is a default, not a premium**. The Proton ecosystem made that switch practical.

## The Proton Ecosystem

[Proton](https://proton.me) is a Swiss company, founded by CERN scientists, operating under Swiss privacy law (one of the strongest in the world). End-to-end encryption means **even Proton can't read your data**.

Here's what I replaced:

| Google Service | Proton Alternative |
|---|---|
| Gmail | Proton Mail |
| Google Drive | Proton Drive |
| Google Calendar | Proton Calendar |
| Google Passwords | Proton Pass |
| Google VPN | Proton VPN |

## Proton Mail — The Core

The email client is excellent. The web interface is clean, the mobile app works well, and the encryption is transparent. A few things to know:

- **Alias system**: I use [SimpleLogin](https://simplelogin.io) (now owned by Proton) to generate unique aliases per service. If a site gets breached, I just disable that alias.
- **Bridge**: If you need to use a desktop email client (Thunderbird, Apple Mail), Proton Bridge handles the local decryption.
- **Import**: The migration tool from Gmail works, though it takes time for large mailboxes.

## Proton Drive — The Honest Review

Good, but not perfect. Sync is reliable, the mobile apps are solid, and the E2E encryption is the real deal. The desktop client is functional but lacks the polish of Google Drive or Dropbox. Storage starts at 1GB free, 200GB on the paid plan.

## Proton VPN — Genuinely Free Tier

The free tier of Proton VPN is legitimately no-logs, with servers in 3 countries and no bandwidth limit. That's rare. I use the paid plan for the full server network and higher speeds, especially on public Wi-Fi.

## What I Miss

Honesty matters here:
- **Google Maps** has no real replacement. I use OsmAnd for navigation (OpenStreetMap-based) but it's noticeably worse for real-time traffic and business listings.
- **Google Photos** AI features (object search, auto-albums) are unmatched. I switched to self-hosted Immich — more on that in a future post.
- **Ecosystem integration** was seamless with Google. Proton is getting there, but it's not quite as tight yet.

## Is It Worth It?

Yes — especially at the ~€10/month for Proton Unlimited (which covers all services). The peace of mind alone is worth it for me. Your data stays yours, and that's increasingly rare.

Start with Proton Mail. It's the lowest-friction entry point and the most impactful swap you can make.
    `,
  },
  {
    slug: "framework-laptop-right-to-repair",
    title: "Framework Laptop: The Case for Repairable Hardware",
    date: "January 2025",
    readTime: "5 min read",
    category: "Sustainable Tech",
    tags: ["Framework", "Right to Repair", "Sustainable Tech", "Hardware"],
    excerpt: "The consumer electronics industry is built on planned obsolescence. Framework is building something different — and it's actually good hardware, not just a statement.",
    content: `
## The Problem with Modern Laptops

In the last decade, laptops became thinner, lighter, faster — and almost completely unrepairable. RAM soldered to the motherboard. Batteries glued in with industrial adhesive. SSDs proprietary and locked. A broken hinge turns a $1500 laptop into landfill.

This isn't accidental. It's a business model.

## What Framework Is Doing

[Framework](https://frame.work) makes laptops that are designed from the ground up to be repaired, upgraded, and customised. Every component — RAM, SSD, battery, screen, keyboard — is available in their marketplace. Repairs are documented. Screws are standard.

The **Framework 13** and **Framework 16** are their flagship models. I've had the chance to handle a Framework 13 in person, and the build quality is surprisingly competitive with ThinkPads.

Key technical highlights:
- **Expansion cards**: USB-C, USB-A, HDMI, SD card — you choose which ports you want, and swap them anytime
- **Standard screws**: No pentalobe, no tri-wing — just Torx T5
- **Repairability score**: 10/10 on iFixit (compared to 1/10 for most Apple hardware)
- **Linux compatibility**: Officially supported, with Fedora as a certified OS

## The Sustainability Angle

The EU's Right to Repair directive (entering into force progressively until 2027) is pushing the industry in this direction. Framework just got there first.

Extending a laptop's life by 3–4 years compared to typical replacement cycles has a meaningful carbon impact. The most sustainable device is the one you already own — or the one you can repair.

## Who Is It For?

- Developers and tech-savvy users who want control over their hardware
- Privacy-conscious users running Linux
- Anyone tired of the "buy new every 3 years" cycle

It's not for everyone — the price is competitive with equivalent ThinkPads but not budget-tier. And if you need a Mac ecosystem, there's no equivalent here.

But if you believe hardware should last a decade and manufacturers should support that, Framework is the most coherent answer currently on the market.
    `,
  },
  {
    slug: "fairphone-eos-degoogled-android",
    title: "Fairphone + /e/OS: A Fully Degoogled Android",
    date: "December 2024",
    readTime: "7 min read",
    category: "Privacy",
    tags: ["Fairphone", "/e/OS", "Android", "Privacy", "Degoogling"],
    excerpt: "What happens when you combine an ethically-sourced, repairable phone with a fully Google-free Android fork? A surprisingly daily-driveable setup — with some caveats.",
    content: `
## The Phone Problem

Your smartphone is the most personal tracking device ever invented. Android, as shipped by most manufacturers, comes bundled with Google Play Services — a deep system-level component that reports your location, app usage, and behaviour back to Google continuously.

Custom ROMs have long offered an escape, but historically required technical expertise and often broke core functionality. **/e/OS** changes that calculus significantly.

## What is /e/OS?

[/e/OS](https://e.foundation) (now rebranded as **Murena OS**) is a fork of Android with all Google components removed and replaced:

- Google Play Services → **microG** (open-source reimplementation, much less invasive)
- Google Play Store → **App Lounge** (accesses Play Store apps anonymously)
- Google Search → configurable (I use Brave Search)
- Google Maps → Magic Earth (HERE-based, offline maps)
- Google Drive → Murena Cloud (Nextcloud-based)

The key insight: *most* Android apps don't actually need Google Play Services. They use it for push notifications and licensing checks. microG handles notifications; most apps run fine.

## Fairphone: The Hardware Side

[Fairphone](https://www.fairphone.com) makes phones designed around three principles:
1. **Ethical sourcing** of materials (conflict-free minerals, fair labour)
2. **Repairability** (replaceable battery, screen, charging port — by you, at home)
3. **Longevity** (5 years of OS updates, 8 years of spare parts)

The Fairphone 5 scores **9.3/10 on iFixit**. For context, the iPhone 15 scores 7/10.

## The /e/OS + Fairphone Combo

Murena sells pre-installed /e/OS Fairphones directly. The e.foundation officially supports Fairphone models, meaning updates are prompt and stable.

**What works perfectly:**
- Banking apps (most, via microG compatibility layer)
- WhatsApp, Signal, Telegram
- Spotify, navigation apps
- Camera (decent, not flagship-tier)

**What's limited:**
- Apps requiring Google Play integrity attestation (some banking apps, Netflix DRM)
- Google Pay obviously doesn't work — use a physical card
- Push notifications can occasionally be delayed

## Should You Do It?

If you're already on a degoogling path (Proton suite, Linux), a /e/OS phone is the logical next step. The combination of Fairphone hardware and /e/OS gives you a device you actually own — one that respects your privacy, can be repaired, and will receive updates for years.

The trade-off is convenience. Some apps won't work perfectly. But if you've already decided that convenience at the cost of privacy isn't worth it, this setup delivers remarkably well.
    `,
  },
  {
    slug: "network-security-fundamentals",
    title: "Network Security Fundamentals: What Actually Matters",
    date: "November 2024",
    readTime: "9 min read",
    category: "Security",
    tags: ["Network Security", "Firewall", "VPN", "Zero Trust"],
    excerpt: "Working at Thales configuring firewalls and routing protocols daily, I've noticed most security advice online is either too vague or too academic. Here's the practical stuff.",
    content: `
## The Gap Between Theory and Practice

Security certifications love to talk about the CIA triad (Confidentiality, Integrity, Availability) and threat models. That's all valid. But what I see day-to-day at work configuring Stormshield and Fortinet firewalls is more granular than that.

This post is about practical network security — the things that actually matter in real deployments.

## 1. Segmentation First

The most impactful thing you can do for a network is **segment it**. VLANs are your best friend.

A flat network where every device can talk to every other device is a vulnerability. If one workstation gets compromised, the attacker has lateral movement to your servers, printers, IP cameras, and everything else.

A sensible segmentation model:
\`\`\`
VLAN 10 — Servers
VLAN 20 — Workstations
VLAN 30 — IoT / Printers
VLAN 40 — Guest Wi-Fi
VLAN 50 — Management (restricted access)
\`\`\`

Inter-VLAN routing goes through the firewall, which enforces policy. Now a compromised IoT device can't reach your file server.

## 2. Firewall Rules: Default Deny

Most firewalls ship with permissive defaults. The correct posture is **default deny outbound and inbound**, then whitelist explicitly.

Yes, this creates work upfront. It also means you have a documented, audited list of every allowed flow. When something breaks, you know exactly where to look. When an incident occurs, you know exactly what traffic was permitted.

For Stormshield (which I work with daily):
- Object-based rules (not IP-based) make policy readable and maintainable
- Application filtering on top of port-based rules catches protocol tunnelling
- Log everything you block, sample what you allow

## 3. VPN: Not Just for Remote Work

A VPN isn't just for employees working from home. Site-to-site VPNs with IPSec are the backbone of secure inter-site communication. Key points:

- **IKEv2** over IKEv1 — better security, faster rekeying
- **PFS (Perfect Forward Secrecy)** enabled — compromise of one session key doesn't expose past sessions
- **Certificate-based auth** over pre-shared keys where possible — PSKs get reused and shared

For personal use, Proton VPN (WireGuard protocol) is what I use and recommend.

## 4. The OSPF Misconfiguration Risk

This is specific to routing, but worth mentioning since I work with it constantly. OSPF is a trusted protocol — routers that speak OSPF to each other will accept route advertisements and modify their routing tables accordingly.

An attacker (or misconfiguration) that can inject OSPF routes can redirect traffic. Mitigation:
- **MD5 authentication** on OSPF adjacencies
- **Passive interfaces** on all non-router-facing interfaces
- Route filtering with prefix lists on area boundaries

## 5. Logging Is Not Optional

I've seen networks with firewalls generating zero logs because "storage was getting full." That's not security — that's security theatre.

At minimum:
- Centralized syslog (rsyslog or a SIEM)
- Firewall deny logs retained for 90 days
- Authentication failures alerted in real time
- NTP synchronized across all devices (timestamps are useless without this)

## The Human Layer

All of this is undermined by a single phishing email or a weak password. Technical controls matter; so does training. The best firewall configuration in the world doesn't help if an admin clicks a malicious attachment.

Security is a practice, not a product.
    `,
  },
  {
    slug: "ai-tools-developer-2025",
    title: "AI Tools for Developers in 2025: What I Actually Use",
    date: "April 2025",
    readTime: "6 min read",
    category: "AI",
    tags: ["AI", "OpenCode", "Claude", "Productivity", "Developer Tools"],
    excerpt: "The AI tooling landscape moves fast. After trying most of what's out there, here's what's actually in my daily workflow — and what turned out to be hype.",
    content: `
## The Landscape Has Settled (A Bit)

A year ago, every week brought a new "GPT killer." The market has consolidated somewhat. There are now a few genuinely excellent models (Claude, GPT-4o, Gemini) and a growing ecosystem of tooling built on top of them. The interesting question in 2025 isn't "which model?" — it's "which workflow?"

## OpenCode: AI in the Terminal

[OpenCode](https://opencode.ai) is an open-source, terminal-native AI coding assistant. Think of it as Claude Code or GitHub Copilot, but running entirely in your terminal, with support for multiple model providers.

What makes it stand out for me:
- **Terminal-first**: I spend most of my time in a terminal. A tool that integrates there without a browser tab is genuinely more ergonomic.
- **Model-agnostic**: You can swap between Claude, GPT, local models (via Ollama) from the same interface
- **Context-aware**: It reads your current directory, open files, and git history
- **Open source**: I can see exactly what's being sent to which API

My typical use: refactoring shell scripts, writing documentation, generating Ansible tasks I half-remember the syntax for.

## Claude as a Thought Partner

Beyond code, I use Claude (via the web interface and API) as a reasoning partner for architecture decisions. Not to generate code blindly, but to think through trade-offs.

A prompt that's worked well for me:
> "I'm designing a network segmentation policy for an environment with X, Y, Z constraints. Walk me through the trade-offs between approach A and approach B."

The output isn't a final answer — it's a structured way to think through a problem I already half-understand.

## What Didn't Stick

- **GitHub Copilot**: Good autocomplete, but I found it generated plausible-looking but wrong network config snippets often enough that I stopped trusting it for that use case.
- **AI-generated documentation**: Useful for first drafts, terrible for maintaining accuracy over time. I write my own docs, use AI to polish them.
- **"AI search"**: Perplexity, etc. I still use regular search + reading primary sources for anything technical. AI search summaries are too often confidently wrong on specifics.

## The Honest Take

AI tools are most valuable when you already know what you're doing and want to go faster. They're least valuable when you're learning something new and can't evaluate the output quality.

For network engineering and security work: useful for scripting, documentation, and research. Not useful for configuration that goes into production without independent review.

The workflow that works: AI generates a draft → I review and understand every line → I test in a lab → I deploy. Skip any of those steps at your peril.
    `,
  },
];

export const projects = [
  {
    title: "Personal Portfolio",
    description: "Design and development of a personal portfolio website, showcasing technical skills, projects, articles and experience. Built with React and Vite, with smooth animations via Framer Motion and a fully responsive dark UI.",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    link: "https://thomaswimart.fr",
    github: "https://github.com/twimart/twimart.github.io",
    image: "/portfolio.png",
    status: "live",
  },
  {
    title: "Smart Recipes",
    description: "Mobile app that suggests recipes based on available ingredients. Features barcode scanning via OpenFoodFacts, a fuzzy-matching algorithm computing ingredient availability (0–100%), and an offline-first architecture with Hive local storage and automatic Firestore sync. Includes 50+ French recipes scraped from Marmiton.",
    tags: ["Flutter", "Dart", "Firebase", "Node.js", "Hive", "Docker"],
    github: "https://github.com/Artek60744/Smart_Recipes",
    image: "/smart-recipe.png",
    status: "in-progress",
  },
];
