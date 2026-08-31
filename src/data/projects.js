const media = (file) => `${process.env.PUBLIC_URL}/img/${file}`;

export const projects = [
  {
    id: 'fruity',
    title: 'Fruity',
    description:
      'Site de présentation pour la marque Fruity, avec un slider central en JavaScript affichant des produits frais et colorés.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    video: media('fruity.mp4'),
    featured: true,
    color: '#E8435A',
  },
  {
    id: 'lycloud-agency',
    title: 'LyCloud Agency',
    description:
      'Site officiel de LyCloud Agency — vitrine numérique de l\'agence de développement web.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    video: media('lycloud-agency.mp4'),
    featured: true,
    color: '#79c5ff',
  },
  {
    id: 'lycloudnews',
    title: 'LyCloud News',
    description:
      'Magazine digital présentant les services et actualités de LyCloud Agency dans le développement web.',
    tags: ['HTML', 'SCSS', 'JavaScript'],
    video: media('lycloudnews.mp4'),
    featured: true,
    color: '#c27cff',
  },
  {
    id: 'podcastlycloud',
    title: 'Podcast LyCloud',
    description:
      'Plateforme podcast de LyCloud Agency — diffusion et présentation des épisodes audio.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    video: media('podcastlycloud.mp4'),
    color: '#a855f7',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description:
      'Mon portfolio personnel développé en React — présentation de mes compétences et projets.',
    tags: ['React', 'JavaScript', 'CSS'],
    image: media('portfolio.png'),
    featured: true,
    color: '#6366f1',
  },
  {
    id: 'bizlio',
    title: 'Bizlio lec',
    description:
      'Site vitrine pour une entreprise de petits travaux électriques — remplacement et pose de prises.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    video: media('bizlio.mp4'),
    color: '#2563eb',
  },
  {
    id: 'ly-ticket',
    title: 'Ly Ticket',
    description:
      'Bot Discord de support et gestion de tickets — automatisation du service client sur Discord.',
    tags: ['JavaScript', 'Discord.js', 'Node.js'],
    color: '#5865f2',
  },
  {
    id: 'resauxsocial',
    title: 'Réseaux Sociaux',
    description:
      'Application PHP de gestion et intégration des réseaux sociaux.',
    tags: ['PHP', 'MySQL', 'HTML'],
    video: media('resauc.mp4'),
    color: '#0ea5e9',
  },
  {
    id: 'dataviz',
    title: 'DataViz',
    description:
      'Projet collectif de visualisation de données — tableaux de bord interactifs et graphiques dynamiques.',
    tags: ['JavaScript', 'D3.js', 'HTML'],
    image: media('dataviz.png'),
    color: '#10b981',
  },
  {
    id: 'extension-nav',
    title: 'Extension Navigateur',
    description:
      'Extension de navigateur développée en équipe — fonctionnalités custom intégrées au quotidien.',
    tags: ['JavaScript', 'Chrome API', 'HTML'],
    image: media('extensionnav.jpg'),
    color: '#f59e0b',
  },
  {
    id: 'meubles',
    title: 'Plateforme Meubles',
    description:
      'Marketplace e-commerce de vente de meubles — catalogue, panier et gestion des commandes.',
    tags: ['JavaScript', 'Node.js', 'MongoDB'],
    image: media('platformemeuble.jpg'),
    color: '#ef4444',
  },
  {
    id: 'pico8',
    title: 'Pico-8',
    description:
      'Jeu rétro développé sur la console fantasy Pico-8 — game design et programmation Lua.',
    tags: ['Lua', 'Pico-8', 'Game Dev'],
    image: media('pico8.jpg'),
    color: '#ec4899',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
