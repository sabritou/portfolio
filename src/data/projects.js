const img = (file) => `${process.env.PUBLIC_URL}/img/${file}`;

export const projects = [
  {
    id: 'fruity',
    title: 'Fruity',
    description:
      'Site de présentation pour la marque Fruity, avec un slider central en JavaScript affichant des produits frais et colorés.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/sabritou/Fruity',
    featured: true,
    color: '#ff6b35',
  },
  {
    id: 'lycloud-agency',
    title: 'LyCloud Agency',
    description:
      'Site officiel de LyCloud Agency — vitrine numérique de l\'agence de développement web.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/sabritou/LyCloudAgencyOfficiel',
    image: img('lycloud.png'),
    featured: true,
    color: '#79c5ff',
  },
  {
    id: 'lycloudnews',
    title: 'LyCloud News',
    description:
      'Magazine digital présentant les services et actualités de LyCloud Agency dans le développement web.',
    tags: ['HTML', 'SCSS', 'JavaScript'],
    github: 'https://github.com/sabritou/lycloudnews',
    image: img('lycloud.png'),
    featured: true,
    color: '#c27cff',
  },
  {
    id: 'podcastlycloud',
    title: 'Podcast LyCloud',
    description:
      'Plateforme podcast de LyCloud Agency — diffusion et présentation des épisodes audio.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/sabritou/podcastlycloud',
    color: '#a855f7',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description:
      'Mon portfolio personnel développé en React — présentation de mes compétences et projets.',
    tags: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/sabritou/portfolio',
    image: img('portfolio.png'),
    featured: true,
    color: '#6366f1',
  },
  {
    id: 'ly-ticket',
    title: 'Ly Ticket',
    description:
      'Bot Discord de support et gestion de tickets — automatisation du service client sur Discord.',
    tags: ['JavaScript', 'Discord.js', 'Node.js'],
    github: 'https://github.com/sabritou/ly-ticket',
    color: '#5865f2',
  },
  {
    id: 'resauxsocial',
    title: 'Réseaux Sociaux',
    description:
      'Application PHP de gestion et intégration des réseaux sociaux.',
    tags: ['PHP', 'MySQL', 'HTML'],
    github: 'https://github.com/sabritou/r-sauxsocial.php',
    image: img('resauc.mp4'),
    isVideo: true,
    color: '#0ea5e9',
  },
  {
    id: 'dataviz',
    title: 'DataViz',
    description:
      'Projet collectif de visualisation de données — tableaux de bord interactifs et graphiques dynamiques.',
    tags: ['JavaScript', 'D3.js', 'HTML'],
    github: 'https://github.com/sabritou/dataviz',
    image: img('dataviz.png'),
    color: '#10b981',
  },
  {
    id: 'extension-nav',
    title: 'Extension Navigateur',
    description:
      'Extension de navigateur développée en équipe — fonctionnalités custom intégrées au quotidien.',
    tags: ['JavaScript', 'Chrome API', 'HTML'],
    github: 'https://github.com/sabritou/extension-de-navigateur',
    image: img('extensionnav.jpg'),
    color: '#f59e0b',
  },
  {
    id: 'meubles',
    title: 'Plateforme Meubles',
    description:
      'Marketplace e-commerce de vente de meubles — catalogue, panier et gestion des commandes.',
    tags: ['JavaScript', 'Node.js', 'MongoDB'],
    github: 'https://github.com/sabritou/plateforme-de-vente-de-meubles',
    image: img('platformemeuble.jpg'),
    color: '#ef4444',
  },
  {
    id: 'pico8',
    title: 'Pico-8',
    description:
      'Jeu rétro développé sur la console fantasy Pico-8 — game design et programmation Lua.',
    tags: ['Lua', 'Pico-8', 'Game Dev'],
    github: 'https://github.com/sabritou/pico-8',
    image: img('pico8.jpg'),
    color: '#ec4899',
  },
  {
    id: 'sabritou',
    title: 'Sabritou',
    description: 'Mon dépôt personnel GitHub — configurations, scripts et ressources diverses.',
    tags: ['Git', 'Config'],
    github: 'https://github.com/sabritou/sabritou',
    color: '#64748b',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
