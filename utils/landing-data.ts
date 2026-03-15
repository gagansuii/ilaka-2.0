export type LandingEventCard = {
  title: string;
  label: string;
  description: string;
  time: string;
  accent: string;
};

export type CommunityTrack = {
  title: string;
  description: string;
  accent: string;
};

export type CreatorStep = {
  title: string;
  description: string;
  kicker: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const demoEvents: LandingEventCard[] = [
  {
    title: 'Morning Run Club',
    label: 'Running',
    description: 'A social sunrise loop with people who live just a few lanes away.',
    time: '6:30 AM',
    accent: '#64856d'
  },
  {
    title: 'Street Food Walk',
    label: 'Community',
    description: 'A guided tasting route through vendors you pass every day but rarely stop for.',
    time: '7:00 PM',
    accent: '#8f6f58'
  },
  {
    title: 'Terrace Painting Workshop',
    label: 'Arts',
    description: 'Open-air sketching with music, chai, and a patient local host.',
    time: '5:00 PM',
    accent: '#b86f4f'
  },
  {
    title: 'Night Campfire Stories',
    label: 'Wellness',
    description: 'A slower evening gathering built around conversation and gentle pause.',
    time: '8:00 PM',
    accent: '#6a887b'
  }
];

export const communityTracks: CommunityTrack[] = [
  {
    title: 'Guitar on the terrace',
    description: 'Local teachers turning ordinary buildings into after-hours classrooms.',
    accent: '#c8663f'
  },
  {
    title: 'Painting in the lane',
    description: 'Creative energy that makes the neighborhood feel softer and more alive.',
    accent: '#b86f4f'
  },
  {
    title: 'Yoga in the park',
    description: 'Wellness happening in public, familiar places instead of distant studios.',
    accent: '#6a887b'
  },
  {
    title: 'Coding over coffee',
    description: 'Skillshare sessions run by people who already live in your social radius.',
    accent: '#5e7f96'
  }
];

export const creatorSteps: CreatorStep[] = [
  {
    kicker: 'Step 01',
    title: 'Create a local invitation',
    description: 'Give the moment a title, a visual tone, and a reason people should care.'
  },
  {
    kicker: 'Step 02',
    title: 'Upload the banner',
    description: 'Shape the first impression with imagery that feels human and immediate.'
  },
  {
    kicker: 'Step 03',
    title: 'Share the location',
    description: 'Pin the event exactly where people should orient themselves.'
  },
  {
    kicker: 'Step 04',
    title: 'Watch the neighborhood respond',
    description: 'RSVPs, word of mouth, and repeat hosts turn one event into a community loop.'
  }
];

export const socialStats = [
  { value: '18k+', label: 'people rediscovering local life' },
  { value: '420+', label: 'hosts putting moments on the map' },
  { value: '7', label: 'cities already building neighborhood rituals' },
  { value: '2.4k+', label: 'activities shared across communities' }
] as const;

export const testimonials: Testimonial[] = [
  {
    quote: 'I hosted one tiny sketch meetup and ended up meeting half the creative block around me.',
    name: 'Megha P.',
    role: 'Organizer, terrace art circles'
  },
  {
    quote: 'It feels less like a social app and more like the neighborhood finally started talking.',
    name: 'Arjun S.',
    role: 'Runner, morning club host'
  },
  {
    quote: 'People came for one coding session and then started hosting their own skillshares.',
    name: 'Nabila R.',
    role: 'Community builder'
  }
] as const;

export const growthNodes = [
  { id: 'host', label: '1 host', x: '8%', y: '44%' },
  { id: 'join-a', label: '5 join', x: '24%', y: '22%' },
  { id: 'join-b', label: '5 join', x: '24%', y: '66%' },
  { id: 'skillshare', label: 'workshop', x: '46%', y: '16%' },
  { id: 'run-club', label: 'run club', x: '50%', y: '52%' },
  { id: 'art-night', label: 'art night', x: '44%', y: '80%' },
  { id: 'circle-a', label: 'community', x: '73%', y: '10%' },
  { id: 'circle-b', label: 'community', x: '81%', y: '36%' },
  { id: 'circle-c', label: 'community', x: '78%', y: '66%' },
  { id: 'circle-d', label: 'community', x: '70%', y: '88%' }
] as const;
