const media = (file) => `${process.env.PUBLIC_URL}/img/${file}`;

export const AGENCY = 'LyCloud Agency';

export const projects = [
  {
    id: 'fruity',
    title: 'Fruity',
    description:
      'Site de présentation pour la marque Fruity — slider JavaScript, produits frais et univers vibrant. Projet LyCloud Agency.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    video: media('fruity.mp4'),
    featured: true,
    color: '#E8435A',
  },
  {
    id: 'lycloud-agency',
    title: 'Nimbus Voyages',
    description:
      'Site vitrine pour une agence de voyage — recherche de destinations, design premium. Projet LyCloud Agency.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    video: media('lycloud-agency.mp4'),
    featured: true,
    color: '#79c5ff',
  },
  {
    id: 'lycloudnews',
    title: 'LyCloud News',
    description:
      'Magazine digital aux actualités tech et web — thème éditorial moderne. Projet LyCloud Agency.',
    tags: ['HTML', 'SCSS', 'JavaScript'],
    video: media('lycloudnews.mp4'),
    featured: true,
    color: '#c27cff',
  },
  {
    id: 'podcastlycloud',
    title: 'Podcast LyCloud',
    description:
      'Plateforme podcast Code Intime — lecteur vidéo intégré et présentation des épisodes. Projet LyCloud Agency.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    video: media('podcastlycloud.mp4'),
    color: '#a855f7',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description:
      'Portfolio personnel React — présentation des réalisations LyCloud Agency et compétences.',
    tags: ['React', 'JavaScript', 'CSS'],
    image: media('portfolio.png'),
    featured: true,
    color: '#6366f1',
  },
  {
    id: 'bizlio',
    title: 'Bizlio lec',
    description:
      'Site vitrine pour une entreprise de petits travaux électriques. Projet client LyCloud Agency.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    video: media('bizlio.mp4'),
    color: '#2563eb',
  },
  {
    id: 'ly-ticket',
    title: 'Ly Ticket',
    description:
      'Bot Discord de support et gestion de tickets — automatisation du service client. Projet LyCloud Agency.',
    tags: ['JavaScript', 'Discord.js', 'Node.js'],
    color: '#5865f2',
  },
  {
    id: 'resauxsocial',
    title: 'Réseaux Sociaux',
    description:
      'Application PHP de gestion et intégration des réseaux sociaux. Projet LyCloud Agency.',
    tags: ['PHP', 'MySQL', 'HTML'],
    video: media('resauc.mp4'),
    color: '#0ea5e9',
  },
  {
    id: 'dataviz',
    title: 'DataViz',
    description:
      'Visualisation de données interactive — tableaux de bord et graphiques dynamiques. Projet LyCloud Agency.',
    tags: ['JavaScript', 'D3.js', 'HTML'],
    image: media('dataviz.png'),
    color: '#10b981',
  },
  {
    id: 'extension-nav',
    title: 'Extension Navigateur',
    description:
      'Extension de navigateur avec fonctionnalités custom intégrées au quotidien. Projet LyCloud Agency.',
    tags: ['JavaScript', 'Chrome API', 'HTML'],
    image: media('extensionnav.jpg'),
    color: '#f59e0b',
  },
  {
    id: 'meubles',
    title: 'Plateforme Meubles',
    description:
      'Marketplace e-commerce de meubles — catalogue, panier et commandes. Projet LyCloud Agency.',
    tags: ['JavaScript', 'Node.js', 'MongoDB'],
    image: media('platformemeuble.jpg'),
    color: '#ef4444',
  },
  {
    id: 'pico8',
    title: 'Pico-8',
    description:
      'Jeu rétro sur console Pico-8 — game design et programmation Lua. Projet LyCloud Agency.',
    tags: ['Lua', 'Pico-8', 'Game Dev'],
    image: media('pico8.jpg'),
    color: '#ec4899',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
