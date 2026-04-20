export const personal = {
  name: "Thomas WIMART",
  title: "Network & Security Engineer",
  subtitle: "Apprentice Engineer at Thales · UniLaSalle Amiens",
  email: "hiring.drizzly415@aleeas.com",
  website: "www.thomaswimart.fr",
  location: "Lille, France",
  languages: "FR · EN (C1 - TOEIC)",
  linkedin: "https://www.linkedin.com/in/thomas-wimart",
  github: "https://github.com/twimart",
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
    items: ["French (Native)", "English (C1 - TOEIC)"],
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
    title: {
      en: "Why I Switched to Linux as My Daily Driver",
      fr: "Pourquoi j'ai adopté Linux au quotidien",
    },
    date: {
      en: "March 2025",
      fr: "Mars 2025",
    },
    readTime: {
      en: "2 min read",
      fr: "2 min de lecture",
    },
    category: "Linux",
    tags: ["Linux", "Open Source", "Productivity"],
    excerpt: {
      en: "After years of Windows, switching to Linux felt like opening a window in a stuffy room. Here's my honest take on the transition, the tools I use, and why I'll never go back.",
      fr: "Après des années sous Windows, passer à Linux a été comme ouvrir une fenêtre dans une pièce étouffante. Mon retour honnête sur la transition, les outils que j'utilise, et pourquoi je ne reviendrai jamais en arrière.",
    },
    content: {
      en: `
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
- Package manager (\`dnf\`) make software installation trivially easy
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
      fr: `
## Le déclic

Tout a commencé par une mise à jour. Windows a décidé — sans me demander mon avis — de redémarrer ma machine en plein milieu d'une tâche critique au travail. C'était la goutte de trop.

La curiosité pour Linux me trottait dans la tête depuis des années (la certification NDG Linux Essentials que j'ai obtenue n'était pas que pour le CV), mais j'avais toujours des excuses : "les logiciels ne tourneront pas", "c'est trop complexe", "je n'ai pas le temps de bidouiller". Des craintes légitimes. Et toutes fausses.

## Choisir une distribution

Le monde Linux est notoirement fragmenté. Après quelques recherches, j'ai opté pour **Fedora** — un bon compromis entre logiciels récents et stabilité. Pour débuter, **Ubuntu** ou **Linux Mint** sont des points d'entrée plus accessibles.

Mes critères principaux :
- Communauté active et mises à jour régulières
- Bon support matériel (crucial sur les laptops modernes)
- Pas lié à une seule entité commerciale (désolé, Ubuntu/Canonical)

## Ce qui m'a surpris

**Les bonnes surprises :**
- Les temps de démarrage sont vraiment plus rapides
- Le gestionnaire de paquet (\`dnf\`) rendent l'installation de logiciels triviale
- On comprend ce qui tourne sur sa machine
- Les workflows en terminal sont nettement plus puissants
- Pas de télémétrie, pas de pubs dans le menu démarrer, pas de contenu "recommandé"

**Les vraies difficultés :**
- Certains logiciels propriétaires (suite Adobe, certains jeux) ne tournent pas nativement — Proton/Wine comblent l'écart pour la plupart
- Les pilotes Wi-Fi/Bluetooth peuvent être pénibles sur certains appareils
- La courbe d'apprentissage est réelle, mais c'est aussi l'intérêt

## Ma configuration quotidienne

\`\`\`
OS :         Fedora 43
Bureau :     KDE Plasma
Shell :      Bash
Éditeur :    VSCodium
Navigateur : Brave
\`\`\`

## Est-ce pour tout le monde ?

Honnêtement ? Pas encore. Si vous dépendez de logiciels Windows spécifiques pour le travail, le dual-boot est un compromis raisonnable. Mais si vous êtes prêt à investir quelques week-ends dans la configuration, Linux rapporte gros en vitesse, contrôle et confidentialité.

Le plus grand changement n'est pas technique — c'est philosophique. Linux vous demande de comprendre vos outils plutôt que de les consommer. Pour moi, c'est tout l'intérêt.
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
    slug: "fairphone-eos-degoogled-android",
    title: {
      en: "Fairphone + /e/OS: A Fully Degoogled Android",
      fr: "Fairphone + /e/OS : un Android entièrement dégooglifié",
    },
    date: {
      en: "December 2024",
      fr: "Décembre 2024",
    },
    readTime: {
      en: "3 min read",
      fr: "3 min de lecture",
    },
    category: "Privacy",
    tags: ["Fairphone", "/e/OS", "Android", "Privacy", "Degoogling"],
    excerpt: {
      en: "What happens when you combine an ethically-sourced, repairable phone with a fully Google-free Android fork? A surprisingly daily-driveable setup — with some caveats.",
      fr: "Que se passe-t-il quand on combine un téléphone éthique et réparable avec un fork Android totalement sans Google ? Une configuration étonnamment utilisable au quotidien — avec quelques nuances.",
    },
    content: {
      en: `
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
      fr: `
## Le problème du smartphone

Votre smartphone est l'appareil de traçage le plus personnel jamais inventé. Android, tel que livré par la plupart des fabricants, est fourni avec Google Play Services — un composant système profond qui remonte continuellement votre localisation, l'usage de vos apps et vos comportements à Google.

Les ROMs custom offraient depuis longtemps une échappatoire, mais nécessitaient historiquement une expertise technique et cassaient souvent des fonctionnalités essentielles. **/e/OS** change significativement cette équation.

## Qu'est-ce que /e/OS ?

[/e/OS](https://e.foundation) (rebaptisé **Murena OS**) est un fork d'Android avec tous les composants Google retirés et remplacés :

- Google Play Services → **microG** (réimplémentation open source, bien moins invasive)
- Google Play Store → **App Lounge** (accède aux apps Play Store anonymement)
- Google Search → configurable (j'utilise Brave Search)
- Google Maps → Magic Earth (basé sur HERE, cartes hors ligne)
- Google Drive → Murena Cloud (basé sur Nextcloud)

L'insight clé : *la plupart* des apps Android n'ont pas vraiment besoin de Google Play Services. Elles l'utilisent pour les notifications push et les vérifications de licence. microG gère les notifications ; la plupart des apps fonctionnent bien.

## Fairphone : le côté matériel

[Fairphone](https://www.fairphone.com) fabrique des téléphones autour de trois principes :
1. **Approvisionnement éthique** des matériaux (minerais sans conflits, travail équitable)
2. **Réparabilité** (batterie, écran, port de charge remplaçables — par vous, chez vous)
3. **Longévité** (5 ans de mises à jour OS, 8 ans de pièces détachées)

Le Fairphone 5 obtient **9,3/10 sur iFixit**. Pour référence, l'iPhone 15 obtient 7/10.

## La combinaison /e/OS + Fairphone

Murena vend des Fairphone avec /e/OS préinstallé. La e.foundation supporte officiellement les modèles Fairphone, ce qui signifie des mises à jour rapides et stables.

**Ce qui fonctionne parfaitement :**
- Les apps bancaires (la plupart, via la couche de compatibilité microG)
- WhatsApp, Signal, Telegram
- Spotify, apps de navigation
- Appareil photo (correct, pas niveau flagship)

**Ce qui est limité :**
- Les apps nécessitant l'attestation d'intégrité Google Play (certaines apps bancaires, DRM Netflix)
- Google Pay ne fonctionne évidemment pas — utilisez une carte physique
- Les notifications push peuvent parfois être retardées

## Faut-il le faire ?

Si vous êtes déjà dans une démarche de dégoogleification (suite Proton, Linux), un téléphone /e/OS est la prochaine étape logique. La combinaison matériel Fairphone et /e/OS vous donne un appareil que vous possédez vraiment — qui respecte votre vie privée, peut être réparé, et recevra des mises à jour pendant des années.

La contrepartie, c'est la commodité. Certaines apps ne fonctionneront pas parfaitement. Mais si vous avez déjà décidé que la commodité au prix de la vie privée n'en vaut pas la peine, cette configuration tient étonnamment bien la route.
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
    slug: "ai-tools-developer-2025",
    title: {
      en: "AI Tools for Developers in 2025: What I Actually Use",
      fr: "Outils IA pour développeurs en 2025 : ce que j'utilise vraiment",
    },
    date: {
      en: "April 2025",
      fr: "Avril 2025",
    },
    readTime: {
      en: "2 min read",
      fr: "2 min de lecture",
    },
    category: "AI",
    tags: ["AI", "OpenCode", "Claude", "Productivity", "Developer Tools"],
    excerpt: {
      en: "The AI tooling landscape moves fast. After trying most of what's out there, here's what's actually in my daily workflow — and what turned out to be hype.",
      fr: "Le paysage des outils IA évolue vite. Après avoir tout testé ou presque, voici ce qui est réellement dans mon workflow quotidien — et ce qui n'était que du buzz.",
    },
    content: {
      en: `
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
      fr: `
## Le paysage s'est stabilisé (un peu)

Il y a un an, chaque semaine amenait un nouveau "tueur de GPT". Le marché s'est un peu consolidé. Il y a maintenant quelques modèles vraiment excellents (Claude, GPT-4o, Gemini) et un écosystème croissant d'outils construits dessus. La question intéressante en 2025 n'est plus "quel modèle ?" — c'est "quel workflow ?"

## OpenCode : l'IA dans le terminal

[OpenCode](https://opencode.ai) est un assistant de code IA open source, natif du terminal. Pensez-y comme Claude Code ou GitHub Copilot, mais tournant entièrement dans votre terminal, avec support de plusieurs fournisseurs de modèles.

Ce qui le distingue pour moi :
- **Terminal-first** : je passe la plupart de mon temps dans un terminal. Un outil qui s'y intègre sans ouvrir d'onglet navigateur est vraiment plus ergonomique.
- **Agnostique au modèle** : vous pouvez basculer entre Claude, GPT, les modèles locaux (via Ollama) depuis la même interface
- **Contextuel** : il lit votre répertoire courant, les fichiers ouverts et l'historique git
- **Open source** : je peux voir exactement ce qui est envoyé à quelle API

Mon usage typique : refactoring de scripts shell, rédaction de documentation, génération de tâches Ansible dont je me souviens à moitié de la syntaxe.

## Claude comme partenaire de réflexion

Au-delà du code, j'utilise Claude (via l'interface web et l'API) comme partenaire de raisonnement pour les décisions d'architecture. Pas pour générer du code à l'aveugle, mais pour réfléchir aux compromis.

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
