import type { ImageMetadata } from 'astro';

import heroCranes from '../assets/placeholders/hero-cranes.jpg';
import siteTeam from '../assets/placeholders/site-team.jpg';
import drawings from '../assets/placeholders/drawings.jpg';
import planning from '../assets/placeholders/planning.jpg';
import rebarDeck from '../assets/placeholders/rebar-deck.jpg';
import rebarInspection from '../assets/placeholders/rebar-inspection.jpg';
import structure from '../assets/placeholders/structure.jpg';
import concretePour from '../assets/placeholders/concrete-pour.jpg';
import buildingFrame from '../assets/placeholders/building-frame.jpg';
import towerCranes from '../assets/placeholders/tower-cranes.jpg';
import highrise from '../assets/placeholders/highrise.jpg';
import towers from '../assets/placeholders/towers.jpg';
import earthworks from '../assets/placeholders/earthworks.jpg';

// All copy, contact details and images below are placeholders.
// Swap them for the client's final content after the layout review.

export const company = {
  name: 'Falcon Vision Engineering LLC',
  shortName: 'Falcon Vision',
  tagline: 'Rebar Detailing, BBS & Shop Drawings',
  description:
    'Falcon Vision Engineering LLC provides rebar detailing, bar bending schedules, shop drawings and quantity estimation for contractors, fabricators and engineers on residential, commercial and infrastructure projects.',
  email: 'falconvisionengineeringllc@gmail.com',
  phone: '+971 56 701 7409',
  address: 'Sharjah Media City, Sharjah, UAE',
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  image: heroCranes,
  imageAlt: 'Tower cranes above a building under construction',
};

// Capabilities rather than invented numbers; swap in real figures (years, projects, tonnage) once the client confirms them.
export const highlights = [
  { value: 'ACI · BS · IS', label: 'International design codes' },
  { value: 'BBS-ready', label: 'Fabrication-ready schedules' },
  { value: '2D & 3D', label: 'CAD and BIM deliverables' },
  { value: 'Fast', label: 'Turnaround for tenders' },
];

export const about = {
  image: siteTeam,
  imageAlt: 'Engineering team reviewing a large construction site',
  secondaryImage: drawings,
  secondaryImageAlt: 'Detailer marking up reinforcement drawings',
  points: [
    'Code-compliant to ACI, BS, AS/NZS & IS',
    'Less material waste on site',
    'Clear, fabrication-ready drawings',
    'Fewer revisions, faster approvals',
  ],
};

export type Service = {
  icon: 'rebar' | 'schedule' | 'shop' | 'estimate' | 'layers' | 'cube';
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: 'rebar',
    title: 'Rebar Detailing',
    description:
      'Accurate reinforcement drawings for foundations, columns, beams, slabs, walls and piles, prepared to your project specifications and local codes.',
  },
  {
    icon: 'schedule',
    title: 'Bar Bending Schedules',
    description:
      'Clear BBS with bar marks, shapes, cutting lengths and weights, ready for fabrication yards to cut and bend without guesswork.',
  },
  {
    icon: 'shop',
    title: 'Shop Drawings',
    description:
      'Coordinated shop drawings that resolve clashes before they reach site, reducing rework, delays and RFIs.',
  },
  {
    icon: 'estimate',
    title: 'Estimation & Take-offs',
    description:
      'Reliable reinforcement quantity take-offs to support tender pricing, procurement planning and cost control.',
  },
  {
    icon: 'layers',
    title: 'GA & Coordination Drawings',
    description:
      'General arrangement and coordination drawings that bring architectural, structural and MEP information together.',
  },
  {
    icon: 'cube',
    title: 'CAD & 3D Drafting',
    description:
      '2D construction drafting and 3D models that help teams visualise complex reinforcement and approve designs faster.',
  },
];

export const whyUs = {
  image: rebarInspection,
  imageAlt: 'Engineers inspecting a reinforcement mat on site',
  points: [
    {
      title: 'Built-in quality checks',
      description: 'Every drawing and schedule passes a multi-stage review for accuracy before it leaves our desk.',
    },
    {
      title: 'Competitive pricing',
      description: 'Efficient, standardised workflows keep our rates sharp without cutting corners.',
    },
    {
      title: 'Client-first service',
      description: 'Deliverables tailored to your formats and standards, with open communication at every stage.',
    },
    {
      title: 'Experienced detailers',
      description: 'Engineers and detailers who know what fabricators and site teams need, so revisions stay few.',
    },
  ],
};

export type GalleryItem = {
  image: ImageMetadata;
  alt: string;
  title: string;
  category: string;
};

// Placeholder photos stand in for the client's sample drawings and BBS sheets.
export const gallery: GalleryItem[] = [
  { image: rebarDeck, alt: 'Rebar fixers working on a slab reinforcement deck', title: 'Podium Slab Reinforcement', category: 'Slabs' },
  { image: structure, alt: 'Reinforcement cages for concrete columns', title: 'Column Cages', category: 'Columns' },
  { image: drawings, alt: 'Detailer marking up reinforcement drawings', title: 'Shop Drawing Review', category: 'Shop Drawings' },
  { image: rebarInspection, alt: 'Engineers inspecting a raft foundation rebar mat', title: 'Raft Foundation', category: 'Foundations' },
  { image: highrise, alt: 'High-rise towers under construction', title: 'Residential Towers', category: 'Core Walls' },
  { image: planning, alt: 'Engineer preparing schedules at a desk', title: 'Bar Bending Schedule', category: 'BBS' },
  { image: concretePour, alt: 'Concrete being poured over reinforcement', title: 'Transfer Beams', category: 'Beams' },
  { image: earthworks, alt: 'Excavators preparing ground for piling', title: 'Piles & Pile Caps', category: 'Piling' },
  { image: buildingFrame, alt: 'Multi-storey building frame under construction', title: 'Commercial Building', category: 'Commercial' },
  { image: towerCranes, alt: 'Tower cranes beside a high-rise structure', title: 'Mixed-Use Development', category: 'Infrastructure' },
  { image: siteTeam, alt: 'Site team standing over a large reinforced foundation', title: 'Site Coordination', category: 'Coordination' },
  { image: towers, alt: 'Glass office towers seen from below', title: 'Business District Towers', category: 'Commercial' },
];
