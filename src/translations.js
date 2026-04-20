export const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      articles: 'Articles',
      contact: 'Contact',
    },
    hero: {
      badge: 'Available for new opportunities',
      cta_contact: 'Get in touch',
      cta_work: 'View my work',
      scroll: 'Scroll',
      typewriter: ['Network Engineer', 'Security Specialist', 'Linux Enthusiast', 'Thales Apprentice'],
    },
    about: {
      label: 'Introduction',
      title: 'About Me',
      p1: [
        "I'm a 3rd-year apprentice engineering student specialising in",
        'Computer Networks & Cybersecurity',
        ', currently on a work-study contract at',
        'Thales',
        ' in Lambersart.',
      ],
      p2: 'My day-to-day work involves configuring and deploying network equipment (routers, switches, firewalls), validating complex network configurations, and writing technical documentation.',
      p3: [
        "Beyond networking, I'm passionate about",
        'Linux, automation, and AI',
        ". I'm always looking to expand my skill set and explore new technologies.",
      ],
      facts: { company: 'Company', school: 'School', location: 'Location', languages: 'Languages' },
    },
    experience: {
      label: 'Background',
      title: 'Experience & Education',
      subtitle: 'My professional journey and academic background.',
      work: 'Work Experience',
      education: 'Education',
    },
    skills: {
      label: 'Expertise',
      title: 'Technical Skills',
      subtitle: 'Technologies and tools I work with on a daily basis.',
    },
    projects: {
      label: 'Work',
      title: 'Projects',
      subtitle: "Things I've built and worked on.",
      view_details: 'View details',
      coming_soon: 'More projects coming soon',
      coming_soon_sub: 'Stay tuned!',
      tech_stack: 'Tech Stack',
      live_site: 'Live site',
      status: { live: 'Live', 'in-progress': 'In Progress' },
    },
    articles: {
      label: 'Writing',
      title: 'Articles & Thoughts',
      subtitle: 'Notes on Linux, privacy, security and the tools I care about.',
      read_more: 'Read more',
    },
    contact: {
      label: 'Say Hello',
      title: 'Get In Touch',
      subtitle: "I'm currently open to new opportunities. Whether you have a question, a project idea, or just want to connect — my inbox is always open.",
      body: 'The best way to reach me is via email or LinkedIn. I typically respond within 24 hours.',
      cta: 'Send me an email',
    },
    footer: {
      built: 'Built with React · Vite · Framer Motion',
    },
    personal: {
      title: 'Network & Security Engineer',
      subtitle: 'Apprentice Engineer at Thales · UniLaSalle Amiens',
      bio: "Apprentice Network & Security Engineer currently on work-study at Thales. Experienced in network equipment configuration and deployment, system administration and cybersecurity. Curious and versatile, I'm also interested in Linux, AI and automation.",
    },
    experiences: [
      {
        role: 'Apprentice Network & Security Engineer',
        description: [
          'Configuration and deployment of network equipment (routers, switches, firewalls)',
          'Testing and validation of network configurations: OSPF, rsyslog, routing protocols',
          'Installation and commissioning of equipment',
          'Development of an optimisation method for installation and testing processes',
          'Writing procedures and technical documentation',
        ],
      },
      {
        role: 'Network Intern',
        description: [
          'Implementation of network mockups',
          'Optical fibre cabling audit',
          'Follow-up and support of network technicians on assignment',
        ],
      },
      {
        role: 'IT Department Intern',
        description: [
          'Deployment and administration of Active Directory',
          'Maintenance and replacement of IT equipment',
          'User support (helpdesk level 1)',
        ],
      },
    ],
    education: [
      {
        degree: 'Engineering Degree — Computer Networks & IoT',
        school: 'UniLaSalle Amiens',
        description: 'Work-study programme — Computer Networks & Cybersecurity track',
      },
      {
        degree: 'BTS SIO — Infrastructure, Services & Networks',
        school: 'Édouard Gand High School',
        description: 'Specialisation in system administration, networks and security',
      },
    ],
    skillCategories: ['Networking', 'Security', 'Systems & Tools', 'Languages'],
    projectDescriptions: {
      'Personal Portfolio': 'Design and development of a personal portfolio website, showcasing technical skills, projects, articles and experience. Built with React and Vite, with smooth animations via Framer Motion and a fully responsive dark UI.',
      'Smart Recipes': 'Mobile app that suggests recipes based on available ingredients. Features barcode scanning via OpenFoodFacts, a fuzzy-matching algorithm computing ingredient availability (0–100%), and an offline-first architecture with Hive local storage and automatic Firestore sync. Includes 50+ French recipes scraped from Marmiton.',
    },
  },

  fr: {
    nav: {
      about: 'À propos',
      experience: 'Expérience',
      skills: 'Compétences',
      projects: 'Projets',
      articles: 'Articles',
      contact: 'Contact',
    },
    hero: {
      badge: 'Disponible pour de nouvelles opportunités',
      cta_contact: 'Me contacter',
      cta_work: 'Voir mon travail',
      scroll: 'Défiler',
      typewriter: ['Ingénieur Réseaux', 'Spécialiste Sécurité', 'Passionné Linux', 'Apprenti Thales'],
    },
    about: {
      label: 'Introduction',
      title: 'À propos',
      p1: [
        "Je suis étudiant en 3ème année d'ingénierie spécialisé en",
        'Réseaux Informatiques & Cybersécurité',
        ', actuellement en alternance chez',
        'Thales',
        ' à Lambersart.',
      ],
      p2: "Mon quotidien consiste à configurer et déployer des équipements réseau (routeurs, switches, pare-feu), valider des configurations réseau complexes et rédiger de la documentation technique.",
      p3: [
        'Au-delà des réseaux, je suis passionné par',
        "Linux, l'automatisation et l'IA",
        '. Je cherche constamment à élargir mes compétences et à explorer de nouvelles technologies.',
      ],
      facts: { company: 'Entreprise', school: 'École', location: 'Localisation', languages: 'Langues' },
    },
    experience: {
      label: 'Parcours',
      title: 'Expérience & Formation',
      subtitle: 'Mon parcours professionnel et académique.',
      work: 'Expérience Professionnelle',
      education: 'Formation',
    },
    skills: {
      label: 'Expertise',
      title: 'Compétences Techniques',
      subtitle: 'Technologies et outils utilisés au quotidien.',
    },
    projects: {
      label: 'Réalisations',
      title: 'Projets',
      subtitle: "Ce que j'ai construit et sur quoi j'ai travaillé.",
      view_details: 'Voir les détails',
      coming_soon: "D'autres projets à venir",
      coming_soon_sub: 'Restez connecté !',
      tech_stack: 'Stack Technique',
      live_site: 'Site en ligne',
      status: { live: 'En ligne', 'in-progress': 'En cours' },
    },
    articles: {
      label: 'Blog',
      title: 'Articles & Réflexions',
      subtitle: "Notes sur Linux, la vie privée, la sécurité et les outils qui comptent.",
      read_more: 'Lire la suite',
    },
    contact: {
      label: 'Bonjour',
      title: 'Me Contacter',
      subtitle: "Je suis actuellement ouvert à de nouvelles opportunités. Que vous ayez une question, une idée de projet ou que vous souhaitiez simplement échanger — ma boîte mail est toujours ouverte.",
      body: "Le meilleur moyen de me contacter est par email ou LinkedIn. Je réponds généralement sous 24 heures.",
      cta: "M'envoyer un email",
    },
    footer: {
      built: 'Développé avec React · Vite · Framer Motion',
    },
    personal: {
      title: 'Ingénieur Réseaux & Sécurité',
      subtitle: 'Apprenti Ingénieur chez Thales · UniLaSalle Amiens',
      bio: "Apprenti Ingénieur Réseaux & Sécurité en alternance chez Thales. Expérimenté en configuration et déploiement d'équipements réseau, administration système et cybersécurité. Curieux et polyvalent, je m'intéresse également à Linux, à l'IA et à l'automatisation.",
    },
    experiences: [
      {
        role: 'Apprenti Ingénieur Réseaux & Sécurité',
        description: [
          "Configuration et déploiement d'équipements réseau (routeurs, switches, pare-feu)",
          'Tests et validation de configurations réseau : OSPF, rsyslog, protocoles de routage',
          "Installation et mise en service d'équipements",
          "Développement d'une méthode d'optimisation des processus d'installation et de test",
          'Rédaction de procédures et de documentation technique',
        ],
      },
      {
        role: 'Stagiaire Réseaux',
        description: [
          'Mise en place de maquettes réseau',
          'Audit de câblage fibre optique',
          'Suivi et accompagnement de techniciens réseau en mission',
        ],
      },
      {
        role: 'Stagiaire Département Informatique',
        description: [
          "Déploiement et administration d'Active Directory",
          "Maintenance et remplacement d'équipements informatiques",
          'Support utilisateurs (helpdesk niveau 1)',
        ],
      },
    ],
    education: [
      {
        degree: 'Diplôme Ingénieur — Réseaux Informatiques & IoT',
        school: 'UniLaSalle Amiens',
        description: 'Formation en alternance — Parcours Réseaux & Cybersécurité',
      },
      {
        degree: 'BTS SIO — Infrastructure, Services & Réseaux',
        school: 'Lycée Édouard Gand',
        description: "Spécialisation en administration système, réseaux et sécurité",
      },
    ],
    skillCategories: ['Réseaux', 'Sécurité', 'Systèmes & Outils', 'Langues'],
    projectDescriptions: {
      'Personal Portfolio': "Conception et développement d'un site portfolio personnel, mettant en avant mes compétences techniques, projets, articles et expériences. Réalisé avec React et Vite, avec des animations fluides via Framer Motion et une interface sombre entièrement responsive.",
      'Smart Recipes': "Application mobile suggérant des recettes selon les ingrédients disponibles. Intègre un scan de codes-barres via OpenFoodFacts, un algorithme de correspondance floue calculant la disponibilité des ingrédients (0–100%) et une architecture offline-first avec stockage Hive et synchronisation automatique Firestore. Plus de 50 recettes françaises extraites de Marmiton.",
    },
  },
};
