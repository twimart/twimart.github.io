export const personal = {
  name: "Thomas WIMART",
  title: "Network & Security Engineer",
  subtitle: "Thales · UniLaSalle Amiens",
  email: "thomaswimart@pm.me",
  website: "www.thomaswimart.fr",
  location: "Lille, France",
  languages: "FR · EN (C1 - TOEIC)",
  linkedin: "https://www.linkedin.com/in/thomas-wimart",
  github: "https://github.com/twimart",
  cv: "/cv.pdf",
};

export const stats = [
  { value: { en: "50+", fr: "50+" }, key: "devices" },
  { value: { en: "3 yrs", fr: "3 ans" }, key: "thales" },
  { value: { en: "Sept. 2026", fr: "Sept. 2026" }, key: "available" },
];

export const nowUsing = ["Omarchy", "Hyprland", "Proton", "iPhone"];

export const experiences = [
  {
    role: "Network & Security Engineer",
    company: "Thales",
    period: "Sept. 2023 – Present",
    duration: "3 years",
    location: "Lambersart — Defence & National Security",
    description: [
      "Integration and production rollout of around fifty network devices (routers, switches, Stormshield/Fortinet firewalls), including non-regression checks in operational conditions",
      "Routing and filtering: OSPF, VRRP, advanced static routing, VLAN segmentation, flow policies — Stormshield application filtering, site-to-site IPsec, bridge mode",
      "Network diagnostics with Wireshark and physical TAP capture probes — e.g. tracing application latency in a sensitive production environment",
      "Configuration versioning (Git/Bitbucket) and Ansible deployments; industrialised several playbooks and Bash scripts for recurring operations",
      "Internal tool referent: only team member proficient on a complex proprietary integration/test platform that reproduces production conditions",
      "Final-year project — Proxmox lab: dedicated VMs for centralised SSH/web access to the fleet, removing per-device cabling; estimated ~50% cut in integration time",
    ],
    tags: ["Stormshield", "Fortinet", "Cisco", "OSPF", "IPsec", "Ansible", "Proxmox"],
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
    items: ["Cisco", "Stormshield", "Fortinet", "OSPF", "VRRP", "VLAN", "IPsec", "Fiber Optic"],
  },
  {
    category: "Security",
    icon: "🔒",
    items: ["Application filtering", "Firewalls", "Wireshark", "TAP probes", "VPN", "SSH", "Log analysis"],
  },
  {
    category: "Automation",
    icon: "⚙️",
    items: ["Ansible", "Bash", "Python", "Git", "GitLab", "Bitbucket", "Jira"],
  },
  {
    category: "Systems",
    icon: "🐧",
    items: ["Linux (Debian/Ubuntu)", "Omarchy / Arch", "Proxmox", "VMware", "Windows Server", "Zabbix"],
  },
];

export const certifications = [
  {
    name: "CCNA",
    academic: true,
    issuer: {
      en: "Cisco Networking Academy",
      fr: "Cisco Networking Academy",
    },
    description: {
      en: "Coursework followed as part of the engineering degree — not the official Cisco exam.",
      fr: "Cours suivis dans le cadre du diplôme d'ingénieur — ce n'est pas l'examen Cisco officiel.",
    },
    icon: "📡",
  },
  {
    name: "NDG Linux Essentials",
    academic: false,
    issuer: {
      en: "Cisco NetAcad",
      fr: "Cisco NetAcad",
    },
    description: {
      en: "Certification covering basic Linux commands and concepts.",
      fr: "Certification sur les commandes et concepts Linux de base.",
    },
    icon: "🐧",
  },
];

export const articles = [
  {
    slug: "omarchy-daily-driver",
    title: {
      en: "Omarchy: How I Actually Use Linux Every Day",
      fr: "Omarchy : comment j'utilise Linux au quotidien",
    },
    date: {
      en: "September 2026",
      fr: "Septembre 2026",
    },
    readTime: {
      en: "4 min read",
      fr: "4 min de lecture",
    },
    category: "Linux",
    tags: ["Omarchy", "Arch", "Hyprland", "Linux"],
    excerpt: {
      en: "I started on Fedora with KDE. I now live in Omarchy — an opinionated Arch + Hyprland setup that finally made Linux feel finished, not half-configured.",
      fr: "J'ai commencé sur Fedora avec KDE. Aujourd'hui je vis dans Omarchy — un Arch + Hyprland opiniâtre qui, pour la première fois, donne l'impression que Linux est fini, pas à moitié configuré.",
    },
    content: {
      en: `
## The Breaking Point

It started with an update. Windows decided — without asking — to restart my machine during a critical task at work. That was the last straw.

I'd been curious about Linux for years (the NDG Linux Essentials cert I earned wasn't just for the résumé), but I always had excuses: "the software won't work," "it's too complex," "I don't have time to tinker." All valid concerns, all wrong.

## The Scenic Route

The Linux world is famously fragmented. I started on **Fedora + KDE** — a solid middle ground, and still what I'd recommend as a first install. Ubuntu or Linux Mint are even friendlier.

That setup taught me the real wins: faster boots, a package manager that isn't a storefront, a machine I could actually inspect, no ads in the start menu. It also taught me the tax: drivers on some hardware, the odd proprietary app, and the endless temptation to "just tweak one more config".

## Then Omarchy Happened

[Omarchy](https://omarchy.org) is an opinionated Arch Linux distribution built around **Hyprland**. It is not trying to look like Windows or macOS. Keyboard-first, tiling windows, a single \`omarchy\` CLI for themes, updates, screenshots, the bar — the boring parts are already decided.

I run **Omarchy 4**. After years of "I'll rice it this weekend", I wanted a Linux desktop that was beautiful *and* maintained by someone else.

## My Daily Setup

\`\`\`
OS:      Omarchy 4 (Arch)
Desktop: Hyprland (Wayland)
Shell:   Bash
Browser: Brave
Mail:    Proton
\`\`\`

What I actually like, day to day:
- **Themes that apply everywhere** — terminal, bar, borders, not five config files
- **Tiling that stays out of the way** once the muscle memory lands
- **Updates as a command**, not a scavenger hunt
- A machine I understand, without spending my Sundays on it

## Is It For Everyone?

Omarchy is not the friendly on-ramp. If you want "it just works" with a mouse, Ubuntu or Fedora KDE are still better first steps — that's the path I took.

If you already live in a terminal, and you want Linux to feel like a product rather than a kit, this is the most coherent daily driver I've used.

The biggest shift still isn't technical — it's philosophical. Linux asks you to understand your tools rather than just consume them. Omarchy just makes that ask less exhausting.
      `,
      fr: `
## Le déclic

Tout a commencé par une mise à jour. Windows a décidé — sans me demander mon avis — de redémarrer ma machine en plein milieu d'une tâche critique au travail. C'était la goutte de trop.

La curiosité pour Linux me trottait dans la tête depuis des années (la certification NDG Linux Essentials que j'ai obtenue n'était pas que pour le CV), mais j'avais toujours des excuses : "les logiciels ne tourneront pas", "c'est trop complexe", "je n'ai pas le temps de bidouiller". Des craintes légitimes. Et toutes fausses.

## Le chemin des écoliers

Le monde Linux est notoirement fragmenté. J'ai commencé sur **Fedora + KDE** — un bon compromis, et ce que je recommanderais encore pour une première install. Ubuntu ou Linux Mint sont encore plus gentils.

Cette config m'a appris les vrais gains : boot plus rapide, un gestionnaire de paquets qui n'est pas une boutique, une machine que je peux inspecter, pas de pubs dans le menu démarrer. Elle m'a aussi appris la taxe : les pilotes sur certains matériels, l'appli propriétaire de trop, et la tentation sans fin de "juste tweaker encore un fichier".

## Puis Omarchy

[Omarchy](https://omarchy.org) est une distribution Arch opiniâtre, construite autour de **Hyprland**. Elle ne cherche pas à ressembler à Windows ou macOS. Clavier d'abord, fenêtres en tiling, une CLI \`omarchy\` pour les thèmes, les mises à jour, les captures, la barre — les choix ennuyeux sont déjà faits.

Je tourne sous **Omarchy 4**. Après des années de "je customiserai ça ce week-end", je voulais un bureau Linux beau *et* maintenu par quelqu'un d'autre.

## Ma configuration quotidienne

\`\`\`
OS :         Omarchy 4 (Arch)
Bureau :     Hyprland (Wayland)
Shell :      Bash
Navigateur : Brave
Mail :       Proton
\`\`\`

Ce que j'aime vraiment, au quotidien :
- **Des thèmes qui s'appliquent partout** — terminal, barre, bordures, pas cinq fichiers de conf
- **Le tiling qui disparaît** une fois la mémoire musculaire en place
- **Les mises à jour comme une commande**, pas comme une chasse au trésor
- Une machine que je comprends, sans y passer mes dimanches

## Est-ce pour tout le monde ?

Omarchy n'est pas la rampe d'accès gentille. Si vous voulez "ça marche" à la souris, Ubuntu ou Fedora KDE restent de meilleurs premiers pas — c'est le chemin que j'ai pris.

Si vous vivez déjà dans un terminal, et que vous voulez que Linux ressemble à un produit plutôt qu'à un kit, c'est le daily driver le plus cohérent que j'aie utilisé.

Le plus grand changement n'est toujours pas technique — c'est philosophique. Linux vous demande de comprendre vos outils plutôt que de les consommer. Omarchy rend juste cette demande moins épuisante.
      `,
    },
  },
  {
    slug: "proxmox-lab-integration",
    title: {
      en: "A Proxmox Lab That Cut Integration Time in Half",
      fr: "Un lab Proxmox qui divise par deux le temps d'intégration",
    },
    date: {
      en: "September 2026",
      fr: "Septembre 2026",
    },
    readTime: {
      en: "3 min read",
      fr: "3 min de lecture",
    },
    category: "Infrastructure",
    tags: ["Proxmox", "Ansible", "Linux", "Automation", "Thales"],
    excerpt: {
      en: "My final-year project at Thales: dedicated VMs so we stop walking a cable to every device. Centralised SSH and web access, Ansible on top — about 50% less integration time once it lands.",
      fr: "Mon PFE chez Thales : des VMs dédiées pour arrêter de tirer un câble vers chaque équipement. Accès SSH et web centralisés, Ansible par-dessus — environ 50 % de temps d'intégration en moins une fois en place.",
    },
    content: {
      en: `
## The Pain

Integrating network gear in a constrained environment is slow for a boring reason: you sit in front of the device. Console cable, laptop, one box at a time. Multiply that by a fleet of routers, switches and firewalls and the calendar disappears.

I wanted the same outcome — a configuration validated as if we were in production — without the physical hop.

## The Idea

Stand up a **Proxmox** virtualisation host and give each piece of equipment a dedicated VM that already has SSH and web access to the fleet. The engineer works from the VM. No more plugging a laptop into every RJ45.

That sounds small. It isn't. Cabling, finding the right port, waiting on a console, swapping laptops — that is most of an integration afternoon.

## What It Looks Like

\`\`\`
Proxmox host
  └── VM per operator / per flow
        ├── SSH jump to the devices
        ├── HTTPS to web UIs (Stormshield, Fortinet, …)
        └── Ansible inventory for the repeatable bits
\`\`\`

Two layers:
- **Access** — the VM is the cockpit. One place, one set of keys, one browser profile.
- **Automation** — Ansible playbooks and Bash scripts for the tasks we were already doing by hand (backup, push, sanity checks).

Git/Bitbucket keeps the configurations. That was already true; the lab makes it usable instead of ceremonial.

## Why Proxmox

I already live in Linux. Proxmox is Debian underneath, KVM for the VMs, a web UI that non-virtualisation people can survive. VMware is in the skill list because that's what enterprises run; Proxmox is what I can own end to end in a lab without a licence conversation.

## The 50% Number

The estimate is honest: **about half the integration time**, once the pattern is adopted — not on day one. You still write the configs. You still validate. You stop wasting the hour around the config.

The other win is quality: a VM that looks like production is a better test than a laptop on a bench.

## What I'd Tell Past Me

Don't automate the clever part first. Automate the walking around. The routing policy still needs a human. The cable does not.
      `,
      fr: `
## Le problème

Intégrer du réseau dans un environnement contraint est lent pour une raison ennuyeuse : on s'assoit devant l'équipement. Câble console, laptop, une boîte à la fois. Multipliez par un parc de routeurs, switches et pare-feux, et le calendrier disparaît.

Je voulais le même résultat — une configuration validée comme en production — sans le déplacement physique.

## L'idée

Monter un hôte de virtualisation **Proxmox** et donner à chaque flux une VM dédiée, déjà pourvue d'un accès SSH et web au parc. L'ingénieur travaille depuis la VM. Fini de brancher un laptop sur chaque RJ45.

Ça a l'air petit. Ça ne l'est pas. Le câblage, trouver le bon port, attendre une console, échanger les laptops — c'est le gros d'un après-midi d'intégration.

## À quoi ça ressemble

\`\`\`
Hôte Proxmox
  └── VM par opérateur / par flux
        ├── Saut SSH vers les équipements
        ├── HTTPS vers les interfaces web (Stormshield, Fortinet, …)
        └── Inventaire Ansible pour ce qui se répète
\`\`\`

Deux couches :
- **L'accès** — la VM est le cockpit. Un endroit, un jeu de clés, un profil navigateur.
- **L'automatisation** — playbooks Ansible et scripts Bash pour les tâches qu'on faisait déjà à la main (sauvegarde, push, contrôles de sanity).

Git/Bitbucket versionne les configurations. C'était déjà vrai ; le lab rend ça utilisable au lieu de cérémonial.

## Pourquoi Proxmox

Je vis déjà dans Linux. Proxmox, c'est du Debian en dessous, du KVM pour les VMs, une UI web que les non-spécialistes de la virtu survivent. VMware est dans la liste de compétences parce que c'est ce que les entreprises font tourner ; Proxmox, c'est ce que je peux maîtriser de bout en bout dans un lab sans discussion de licence.

## Le chiffre des 50 %

L'estimation est honnête : **environ la moitié du temps d'intégration**, une fois le schéma adopté — pas au jour un. On écrit encore les configs. On valide encore. On arrête de perdre l'heure autour de la config.

L'autre gain, c'est la qualité : une VM qui ressemble à la production teste mieux qu'un laptop sur un établi.

## Ce que je dirais à moi d'avant

N'automatisez pas d'abord la partie intelligente. Automatisez le fait de marcher. La politique de routage a encore besoin d'un humain. Le câble, non.
      `,
    },
  },
  {
    slug: "proton-suite-privacy",
    title: {
      en: "The Proton Suite: A Complete Privacy Overhaul",
      fr: "La suite Proton : une refonte complète de la vie privée",
    },
    date: {
      en: "February 2025",
      fr: "Février 2025",
    },
    readTime: {
      en: "3 min read",
      fr: "3 min de lecture",
    },
    category: "Privacy",
    tags: ["Privacy", "Proton", "Degoogling", "Email"],
    excerpt: {
      en: "I replaced Gmail, Google Drive, Google Calendar and more with Proton's suite. Here's a realistic look at what works, what's missing, and whether it's worth the switch.",
      fr: "J'ai remplacé Gmail, Google Drive, Google Calendar et plus encore par la suite Proton. Un regard réaliste sur ce qui fonctionne, ce qui manque, et si ça vaut le coup.",
    },
    content: {
      en: `
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
      fr: `
## Pourquoi j'ai quitté Google

Le modèle économique de Google est simple : votre attention et vos données sont le produit. Gmail scanne vos emails pour construire un profil publicitaire. Google Maps trace vos déplacements. Chrome observe votre historique de navigation. Rien de secret — c'est dans les conditions d'utilisation.

Je ne suis pas complotiste. Je crois simplement que **la vie privée est un droit par défaut, pas un luxe**. L'écosystème Proton a rendu ce changement praticable.

## L'écosystème Proton

[Proton](https://proton.me) est une entreprise suisse, fondée par des scientifiques du CERN, opérant sous le droit suisse sur la vie privée (l'un des plus solides au monde). Le chiffrement de bout en bout signifie que **même Proton ne peut pas lire vos données**.

Voici ce que j'ai remplacé :

| Service Google | Alternative Proton |
|---|---|
| Gmail | Proton Mail |
| Google Drive | Proton Drive |
| Google Calendar | Proton Calendar |
| Google Passwords | Proton Pass |
| Google VPN | Proton VPN |

## Proton Mail — Le cœur du système

Le client email est excellent. L'interface web est propre, l'application mobile fonctionne bien, et le chiffrement est transparent. Quelques points à connaître :

- **Système d'alias** : j'utilise [SimpleLogin](https://simplelogin.io) (racheté par Proton) pour générer des alias uniques par service. Si un site est compromis, je désactive cet alias.
- **Bridge** : si vous avez besoin d'un client email de bureau (Thunderbird, Apple Mail), Proton Bridge gère le déchiffrement local.
- **Import** : l'outil de migration depuis Gmail fonctionne, même si ça prend du temps pour les grandes boîtes.

## Proton Drive — Le bilan honnête

Bien, mais pas parfait. La synchronisation est fiable, les apps mobiles sont solides, et le chiffrement E2E est du sérieux. Le client bureau est fonctionnel mais manque du raffinement de Google Drive ou Dropbox. Le stockage commence à 1 Go gratuit, 200 Go sur l'offre payante.

## Proton VPN — Un vrai niveau gratuit

L'offre gratuite de Proton VPN est légitimement sans logs, avec des serveurs dans 3 pays et sans limite de bande passante. C'est rare. J'utilise l'offre payante pour le réseau complet de serveurs et des vitesses plus élevées, notamment sur les Wi-Fi publics.

## Ce qui me manque

L'honnêteté s'impose :
- **Google Maps** n'a pas de vraie alternative. J'utilise OsmAnd pour la navigation (basé sur OpenStreetMap) mais c'est nettement moins bon pour le trafic en temps réel et les commerces.
- **Google Photos** et ses fonctions IA (recherche par objet, albums automatiques) sont sans équivalent. Je suis passé à Immich en self-hosted — à voir dans un prochain article.
- **L'intégration écosystème** était fluide avec Google. Proton y arrive, mais ce n'est pas encore aussi cohérent.

## Ça vaut le coup ?

Oui — surtout à ~10 €/mois pour Proton Unlimited (qui couvre tous les services). La tranquillité d'esprit à elle seule en vaut le prix pour moi. Vos données restent les vôtres, et c'est de plus en plus rare.

Commencez par Proton Mail. C'est le point d'entrée le moins contraignant et le remplacement le plus impactant que vous puissiez faire.
      `,
    },
  },
  {
    slug: "framework-laptop-right-to-repair",
    title: {
      en: "Framework Laptop: The Case for Repairable Hardware",
      fr: "Framework Laptop : plaidoyer pour le matériel réparable",
    },
    date: {
      en: "January 2025",
      fr: "Janvier 2025",
    },
    readTime: {
      en: "2 min read",
      fr: "2 min de lecture",
    },
    category: "Sustainable Tech",
    tags: ["Framework", "Right to Repair", "Sustainable Tech", "Hardware"],
    excerpt: {
      en: "The consumer electronics industry is built on planned obsolescence. Framework is building something different — and it's actually good hardware, not just a statement.",
      fr: "L'industrie de l'électronique grand public repose sur l'obsolescence programmée. Framework construit quelque chose de différent — et c'est vraiment du bon matériel, pas juste un manifeste.",
    },
    content: {
      en: `
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
      fr: `
## Le problème avec les laptops modernes

Ces dix dernières années, les laptops sont devenus plus fins, plus légers, plus rapides — et presque entièrement irréparables. RAM soudée sur la carte mère. Batteries collées avec de l'adhésif industriel. SSD propriétaires et verrouillés. Une charnière cassée transforme un laptop à 1 500 € en déchet électronique.

Ce n'est pas un accident. C'est un modèle économique.

## Ce que fait Framework

[Framework](https://frame.work) fabrique des laptops conçus dès le départ pour être réparés, mis à niveau et personnalisés. Chaque composant — RAM, SSD, batterie, écran, clavier — est disponible dans leur boutique. Les réparations sont documentées. Les vis sont standard.

Le **Framework 13** et le **Framework 16** sont leurs modèles phares. J'ai eu l'occasion de manipuler un Framework 13 en vrai, et la qualité de fabrication est étonnamment compétitive avec les ThinkPads.

Points techniques clés :
- **Cartes d'extension** : USB-C, USB-A, HDMI, carte SD — vous choisissez les ports que vous voulez, échangeables à tout moment
- **Vis standard** : pas de pentalobe ni de tri-wing — juste du Torx T5
- **Score de réparabilité** : 10/10 sur iFixit (contre 1/10 pour la plupart des appareils Apple)
- **Compatibilité Linux** : officiellement supporté, avec Fedora comme OS certifié

## L'angle durabilité

La directive européenne sur le droit à la réparation (en vigueur progressivement jusqu'en 2027) pousse l'industrie dans cette direction. Framework y est simplement arrivé en premier.

Prolonger la vie d'un laptop de 3 à 4 ans par rapport aux cycles de remplacement habituels a un impact carbone réel. L'appareil le plus durable est celui que vous possédez déjà — ou celui que vous pouvez réparer.

## Pour qui ?

- Développeurs et utilisateurs avertis qui veulent contrôler leur matériel
- Utilisateurs soucieux de leur vie privée tournant sous Linux
- Tous ceux qui en ont assez du cycle "acheter neuf tous les 3 ans"

Ce n'est pas pour tout le monde — le prix est compétitif avec les ThinkPads équivalents, mais pas entrée de gamme. Et si vous avez besoin de l'écosystème Mac, il n'y a pas d'équivalent ici.

Mais si vous croyez que le matériel devrait durer dix ans et que les fabricants devraient le soutenir, Framework est la réponse la plus cohérente actuellement sur le marché.
      `,
    },
  },
  {
    slug: "grapheneos-from-iphone",
    title: {
      en: "GrapheneOS from an iPhone: Curious, Not Ready",
      fr: "GrapheneOS depuis un iPhone : curieux, pas prêt",
    },
    date: {
      en: "September 2026",
      fr: "Septembre 2026",
    },
    readTime: {
      en: "3 min read",
      fr: "3 min de lecture",
    },
    category: "Privacy",
    tags: ["GrapheneOS", "iPhone", "Privacy", "Android", "Pixel"],
    excerpt: {
      en: "I still use an iPhone. GrapheneOS is the phone OS I keep reading about — and it still feels a bit too 'root' for how I actually live. Here's the honest gap.",
      fr: "J'utilise encore un iPhone. GrapheneOS est l'OS mobile que je continue de lire — et ça reste un peu trop 'root' pour ma vraie vie. Le décalage, sans posture.",
    },
    content: {
      en: `
## Two Different Brains

On the desktop I run **Omarchy**. Mail is Proton. I care about what leaves the machine.

In my pocket I still have an **iPhone**. That isn't a plot twist — it's the honest split. The phone is the device I don't want to fight at 7:40 on a platform.

## Why GrapheneOS Keeps Coming Back

[GrapheneOS](https://grapheneos.org) is a hardened Android, officially for **Google Pixel** hardware. Verified boot, aggressive sandboxing, optional sandboxed Play services instead of a Google-shaped hole in the OS. On paper it is the grown-up answer to "I want a smartphone that isn't a tracking beacon."

It is also a *project*. Unlock the bootloader. Flash. Live with Play Integrity when a bank app gets moody. Lose iMessage, FaceTime, the Apple Watch, the "it just works" that is the whole point of the iPhone.

That's what I mean by **too root for me, for now**. Not that the OS is only for people who jailbreak for fun — GrapheneOS is well documented. It's that my phone is not a lab. My laptop is.

## What I'd Actually Gain

- A device that matches the rest of the privacy stack (Proton, Linux)
- Hardware-backed hardening I don't get on iOS, no matter what Apple's ads say
- The option to run Play services in a box, or not at all

## What I'd Pay

- A Pixel, because GrapheneOS doesn't run on an iPhone and doesn't pretend to
- Banking, payments, some government apps — the usual compatibility lottery
- The Apple ecosystem tax in reverse: photos, messages, the watch
- Time. Even a clean install is a weekend, and the first broken app is a mood

Fairphone and /e/OS are in the same family of answers. I still like the idea. I haven't daily-driven either, and I won't pretend I have.

## Where I Am

Curious. Reading the docs. Not flashing anything this month.

If I switch, it will be because a Pixel + GrapheneOS covers the 5% of phone life that currently requires an iPhone — not because I enjoyed a forum thread. Until then, the iPhone stays, and the Linux box does the serious work.
      `,
      fr: `
## Deux cerveaux différents

Sur le bureau, je tourne sous **Omarchy**. Le mail, c'est Proton. Je fais attention à ce qui sort de la machine.

Dans la poche, j'ai encore un **iPhone**. Ce n'est pas un twist — c'est le décalage honnête. Le téléphone, c'est l'appareil que je ne veux pas combattre à 7h40 sur un quai.

## Pourquoi GrapheneOS revient tout le temps

[GrapheneOS](https://grapheneos.org) est un Android durci, officiellement pour les **Google Pixel**. Verified boot, sandboxing agressif, services Play optionnels et isolés au lieu d'un trou en forme de Google dans l'OS. Sur le papier, c'est la réponse adulte à "je veux un smartphone qui n'est pas une balise."

C'est aussi un *projet*. Déverrouiller le bootloader. Flasher. Vivre avec Play Integrity quand l'appli bancaire fait des siennes. Perdre iMessage, FaceTime, l'Apple Watch, le "ça marche" qui est tout l'intérêt de l'iPhone.

C'est ça que je veux dire par **trop root pour moi, pour l'instant**. Pas que l'OS soit réservé à ceux qui jailbreakent pour le sport — GrapheneOS est bien documenté. C'est que mon téléphone n'est pas un lab. Mon laptop, oui.

## Ce que je gagnerais vraiment

- Un appareil aligné avec le reste de la stack vie privée (Proton, Linux)
- Un durcissement matériel que iOS ne me donne pas, quelles que soient les pubs Apple
- La possibilité de faire tourner les services Play dans une boîte — ou pas du tout

## Ce que je paierais

- Un Pixel, parce que GrapheneOS ne tourne pas sur iPhone et ne le prétend pas
- Banque, paiement, certaines apps admin — la loterie de compatibilité habituelle
- La taxe écosystème Apple à l'envers : photos, messages, la montre
- Du temps. Même une install propre, c'est un week-end, et la première app cassée, c'est une humeur

Fairphone et /e/OS sont dans la même famille de réponses. L'idée me plaît toujours. Je n'ai daily-drive ni l'un ni l'autre, et je ne vais pas le prétendre.

## Où j'en suis

Curieux. Je lis la doc. Je ne flashe rien ce mois-ci.

Si je change, ce sera parce qu'un Pixel + GrapheneOS couvre les 5 % de vie téléphone qui exigent encore un iPhone — pas parce que j'ai aimé un thread. En attendant, l'iPhone reste, et la machine Linux fait le vrai travail.
      `,
    },
  },
  {
    slug: "network-security-fundamentals",
    title: {
      en: "Network Security Fundamentals: What Actually Matters",
      fr: "Fondamentaux de la sécurité réseau : ce qui compte vraiment",
    },
    date: {
      en: "November 2024",
      fr: "Novembre 2024",
    },
    readTime: {
      en: "3 min read",
      fr: "3 min de lecture",
    },
    category: "Security",
    tags: ["Network Security", "Firewall", "VPN", "Zero Trust"],
    excerpt: {
      en: "Working at Thales configuring firewalls and routing protocols daily, I've noticed most security advice online is either too vague or too academic. Here's the practical stuff.",
      fr: "En configurant des pare-feux et des protocoles de routage chez Thales au quotidien, j'ai constaté que la plupart des conseils sécurité en ligne sont soit trop vagues, soit trop théoriques. Voici ce qui compte en pratique.",
    },
    content: {
      en: `
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
      fr: `
## L'écart entre théorie et pratique

Les certifications sécurité adorent parler de la triade CIA (Confidentialité, Intégrité, Disponibilité) et des modèles de menaces. Tout cela est valide. Mais ce que je vois au quotidien chez Thales en configurant des pare-feux Stormshield et Fortinet est plus granulaire.

Cet article parle de sécurité réseau pratique — ce qui compte vraiment dans les déploiements réels.

## 1. La segmentation avant tout

La chose la plus impactante que vous puissiez faire pour un réseau, c'est de le **segmenter**. Les VLANs sont vos meilleurs alliés.

Un réseau plat où chaque appareil peut parler à tous les autres est une vulnérabilité. Si un poste de travail est compromis, l'attaquant a un mouvement latéral vers vos serveurs, imprimantes, caméras IP et tout le reste.

Un modèle de segmentation sensé :
\`\`\`
VLAN 10 — Serveurs
VLAN 20 — Postes de travail
VLAN 30 — IoT / Imprimantes
VLAN 40 — Wi-Fi invités
VLAN 50 — Management (accès restreint)
\`\`\`

Le routage inter-VLAN passe par le pare-feu, qui applique la politique. Un appareil IoT compromis ne peut plus atteindre votre serveur de fichiers.

## 2. Règles pare-feu : refus par défaut

La plupart des pare-feux sont livrés avec des configurations permissives. La bonne posture est **refus par défaut en entrée et en sortie**, puis liste blanche explicite.

Oui, cela crée du travail en amont. Cela signifie aussi que vous avez une liste documentée et auditée de chaque flux autorisé. Quand quelque chose casse, vous savez exactement où chercher. En cas d'incident, vous savez exactement quel trafic était permis.

Pour Stormshield (que j'utilise quotidiennement) :
- Les règles basées sur des objets (et non sur des IPs) rendent la politique lisible et maintenable
- Le filtrage applicatif en plus des règles par port détecte le tunneling de protocoles
- Loguer tout ce qu'on bloque, échantillonner ce qu'on autorise

## 3. VPN : pas seulement pour le télétravail

Un VPN ne sert pas qu'aux employés en remote. Les VPNs site-à-site avec IPSec sont l'épine dorsale de la communication sécurisée entre sites. Points clés :

- **IKEv2** plutôt qu'IKEv1 — meilleure sécurité, renouvellement de clés plus rapide
- **PFS (Perfect Forward Secrecy)** activé — la compromission d'une clé de session n'expose pas les sessions passées
- **Authentification par certificat** plutôt que par clés pré-partagées — les PSK sont réutilisées et partagées

Pour un usage personnel, Proton VPN (protocole WireGuard) est ce que j'utilise et recommande.

## 4. Le risque de misconfiguration OSPF

C'est spécifique au routage, mais ça mérite d'être mentionné car je travaille avec quotidiennement. OSPF est un protocole de confiance — les routeurs qui se parlent en OSPF acceptent les annonces de routes et modifient leurs tables de routage en conséquence.

Un attaquant (ou une mauvaise configuration) capable d'injecter des routes OSPF peut rediriger le trafic. Atténuation :
- **Authentification MD5** sur les adjacences OSPF
- **Interfaces passives** sur toutes les interfaces non orientées routeur
- Filtrage de routes avec des listes de préfixes aux limites de zone

## 5. La journalisation n'est pas optionnelle

J'ai vu des réseaux avec des pare-feux ne générant aucun log parce que "le stockage se remplissait". Ce n'est pas de la sécurité — c'est du théâtre de la sécurité.

Au minimum :
- Syslog centralisé (rsyslog ou un SIEM)
- Logs de refus du pare-feu conservés 90 jours
- Alertes en temps réel sur les échecs d'authentification
- NTP synchronisé sur tous les équipements (les horodatages sont inutiles sans ça)

## La couche humaine

Tout cela est mis à mal par un seul email de phishing ou un mot de passe faible. Les contrôles techniques comptent ; la formation aussi. La meilleure configuration de pare-feu du monde n'aide pas si un admin clique sur une pièce jointe malveillante.

La sécurité est une pratique, pas un produit.
      `,
    },
  },
  {
    slug: "ai-tools-developer-2026",
    title: {
      en: "AI Tools in 2026: What I Actually Use",
      fr: "Outils IA en 2026 : ce que j'utilise vraiment",
    },
    date: {
      en: "September 2026",
      fr: "Septembre 2026",
    },
    readTime: {
      en: "3 min read",
      fr: "3 min de lecture",
    },
    category: "AI",
    tags: ["AI", "Grok", "Terminal", "Productivity", "Developer Tools"],
    excerpt: {
      en: "The interesting question is no longer which model. It's which workflow survives contact with real network configs. Here's what's still in mine.",
      fr: "La question intéressante n'est plus quel modèle. C'est quel workflow survit au contact de vraies configs réseau. Voici ce qui reste dans le mien.",
    },
    content: {
      en: `
## The Landscape Has Settled (A Bit)

The market has names now. A few models are actually good. The interesting question in 2026 still isn't "which model?" — it's "which workflow?"

## AI in the Terminal

I live in a terminal on Omarchy. The assistants that stuck are the ones that sit there with the repo, not in a browser tab.

What I want from the tool:
- **Terminal-first**: no extra chrome
- **The files in front of me**: current directory, git, the config I actually opened
- **A model I can swap**: useful when one provider is having a day

My typical use: refactoring shell scripts, writing documentation, generating Ansible tasks I half-remember the syntax for. Lately that's often **Grok** in the terminal — same job, less tab-switching.

## A Thought Partner, Not an Oracle

Beyond code, I use a chat model as a reasoning partner for architecture decisions. Not to generate configs blindly, but to think through trade-offs.

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
      fr: `
## Le paysage s'est stabilisé (un peu)

Le marché a des noms, maintenant. Quelques modèles sont vraiment bons. La question intéressante en 2026 n'est toujours pas "quel modèle ?" — c'est "quel workflow ?"

## L'IA dans le terminal

Je vis dans un terminal sous Omarchy. Les assistants qui restent sont ceux qui s'assoient là, avec le dépôt, pas dans un onglet navigateur.

Ce que je demande à l'outil :
- **Terminal-first** : pas de chrome en trop
- **Les fichiers sous les yeux** : le répertoire courant, git, la config que j'ai vraiment ouverte
- **Un modèle que je peux changer** : utile le jour où un fournisseur a un jour sans

Mon usage typique : refactoring de scripts shell, rédaction de documentation, génération de tâches Ansible dont je me souviens à moitié de la syntaxe. En ce moment, c'est souvent **Grok** dans le terminal — même boulot, moins d'onglets.

## Un partenaire de réflexion, pas un oracle

Au-delà du code, j'utilise un modèle de chat comme partenaire de raisonnement pour les décisions d'architecture. Pas pour générer des configs à l'aveugle, mais pour réfléchir aux compromis.

Un prompt qui m'a bien servi :
> "Je conçois une politique de segmentation réseau pour un environnement avec les contraintes X, Y, Z. Explique-moi les compromis entre l'approche A et l'approche B."

Le résultat n'est pas une réponse finale — c'est une façon structurée d'aborder un problème que je comprends déjà à moitié.

## Ce qui n'a pas duré

- **GitHub Copilot** : bonne auto-complétion, mais j'ai trouvé qu'il générait des snippets de config réseau d'apparence plausible mais erronés assez souvent pour que j'arrête de lui faire confiance dans ce cas.
- **Documentation générée par IA** : utile pour les premiers jets, catastrophique pour maintenir l'exactitude dans le temps. J'écris ma propre documentation, j'utilise l'IA pour la peaufiner.
- **"Recherche IA"** : Perplexity, etc. J'utilise encore la recherche classique et la lecture de sources primaires pour tout ce qui est technique. Les résumés de recherche IA sont trop souvent faux avec assurance sur les détails.

## Le bilan honnête

Les outils IA sont les plus utiles quand vous savez déjà ce que vous faites et que vous voulez aller plus vite. Ils sont les moins utiles quand vous apprenez quelque chose de nouveau et que vous ne pouvez pas évaluer la qualité des réponses.

Pour le travail en ingénierie réseau et sécurité : utile pour les scripts, la documentation et la recherche. Pas utile pour des configurations qui partent en production sans revue indépendante.

Le workflow qui fonctionne : l'IA génère un brouillon → je revois et comprends chaque ligne → je teste en lab → je déploie. Sautez l'une de ces étapes à vos risques et périls.
      `,
    },
  },
];

export const projects = [
  {
    id: "proxmox-lab",
    title: "Proxmox Integration Lab",
    tags: ["Proxmox", "Ansible", "Bash", "Linux", "SSH"],
    status: "in-progress",
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    link: "https://thomaswimart.fr",
    github: "https://github.com/twimart/twimart.github.io",
    image: "/portfolio.png",
    status: "live",
  },
  {
    id: "smart-recipes",
    title: "Smart Recipes",
    tags: ["Flutter", "Dart", "Firebase", "Node.js", "Hive", "Docker"],
    github: "https://github.com/Artek60744/Smart_Recipes",
    image: "/smart-recipe.png",
    status: "concept",
  },
  {
    id: "unipark",
    title: "UniPark",
    tags: ["C++", "ESP32", "FIWARE", "MQTT", "Docker", "Node-RED", "Grafana"],
    github: "https://github.com/Nearuppp/UniPark",
    image: "/unipark.jpg",
    status: "concept",
  },
];
