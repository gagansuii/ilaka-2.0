import type { EventSummary } from './types';

export type EventCategoryKey = 'running' | 'arts' | 'skills' | 'community' | 'wellness';

type EventLike = Pick<EventSummary, 'title' | 'description'> | { title: string; description?: string | null };

export type EventCategoryTheme = {
  key: EventCategoryKey;
  label: string;
  shortLabel: string;
  accent: string;
  accentSoft: string;
  accentStrong: string;
  markerGlow: string;
  hint: string;
  previewLine: string;
  storyBeats: [string, string, string];
};

const THEMES: Record<EventCategoryKey, EventCategoryTheme> = {
  running: {
    key: 'running',
    label: 'Running',
    shortLabel: 'Move',
    accent: '#64856d',
    accentSoft: 'rgba(100,133,109,0.14)',
    accentStrong: '#4c6a55',
    markerGlow: 'rgba(100,133,109,0.32)',
    hint: 'Run clubs, rides, active meetups',
    previewLine: 'A social route through the neighborhood.',
    storyBeats: [
      'Show up in gear you can move in comfortably.',
      'Expect an easy social warm-up before things get rolling.',
      'Great for meeting people through shared momentum instead of small talk.'
    ]
  },
  arts: {
    key: 'arts',
    label: 'Arts',
    shortLabel: 'Create',
    accent: '#b86f4f',
    accentSoft: 'rgba(184,111,79,0.15)',
    accentStrong: '#92543a',
    markerGlow: 'rgba(184,111,79,0.3)',
    hint: 'Workshops, films, craft circles',
    previewLine: 'A hands-on gathering with a little room for surprise.',
    storyBeats: [
      'Bring curiosity first; materials or prompts usually do the rest.',
      'The pace tends to be conversational, tactile, and easy to enter.',
      'You will likely leave with a small artifact, idea, or new collaborator.'
    ]
  },
  skills: {
    key: 'skills',
    label: 'Skills',
    shortLabel: 'Learn',
    accent: '#5e7f96',
    accentSoft: 'rgba(94,127,150,0.14)',
    accentStrong: '#476374',
    markerGlow: 'rgba(94,127,150,0.28)',
    hint: 'Learning sessions and practical skillshares',
    previewLine: 'A practical session built around sharing what people know.',
    storyBeats: [
      'Come ready to ask questions, not just observe.',
      'This kind of session usually mixes demos with hands-on moments.',
      'The value is often the people in the room as much as the topic itself.'
    ]
  },
  community: {
    key: 'community',
    label: 'Community',
    shortLabel: 'Gather',
    accent: '#8f6f58',
    accentSoft: 'rgba(143,111,88,0.14)',
    accentStrong: '#6e5240',
    markerGlow: 'rgba(143,111,88,0.28)',
    hint: 'Meetups, local socials, neighborhood hangs',
    previewLine: 'A local gathering designed to feel easy to join.',
    storyBeats: [
      'The first few minutes are about settling in and finding your people.',
      'This is the category most likely to feel like a neighborhood bulletin board come alive.',
      'Even a short visit can turn into a recurring local connection.'
    ]
  },
  wellness: {
    key: 'wellness',
    label: 'Wellness',
    shortLabel: 'Reset',
    accent: '#6a887b',
    accentSoft: 'rgba(106,136,123,0.14)',
    accentStrong: '#526a5f',
    markerGlow: 'rgba(106,136,123,0.3)',
    hint: 'Yoga, breathwork, gentle reset sessions',
    previewLine: 'A slower, grounding event with space to exhale.',
    storyBeats: [
      'Plan for a softer arrival and a calmer tone.',
      'These sessions usually reward showing up a few minutes early.',
      'People often come for the activity and stay for how it changes their evening.'
    ]
  }
};

const MATCHERS: Record<EventCategoryKey, string[]> = {
  running: ['run', 'running', 'ride', 'cycle', 'jog', 'walk', 'trek', 'fitness', 'trail', 'marathon'],
  arts: ['art', 'paint', 'music', 'film', 'photo', 'ceramic', 'craft', 'poetry', 'design', 'dance'],
  skills: ['workshop', 'class', 'lesson', 'learn', 'coding', 'language', 'study', 'skill', 'session', 'masterclass'],
  community: ['community', 'meetup', 'social', 'neighbors', 'neighbourhood', 'board game', 'hangout', 'market', 'club'],
  wellness: ['yoga', 'wellness', 'meditation', 'healing', 'breath', 'mindful', 'pilates', 'sound bath', 'therapy']
};

export const SEARCH_PROMPTS = [
  'Run clubs before sunrise',
  'Art workshops with room to talk',
  'Skillshares that feel low-pressure',
  'Neighborhood meetups after work',
  'Wellness sessions close to home'
] as const;

export const EVENT_CATEGORY_OPTIONS = Object.values(THEMES);

const EVENT_LOCALE = 'en-IN';
const EVENT_TIME_ZONE = 'Asia/Kolkata';

const dayFormatter = new Intl.DateTimeFormat(EVENT_LOCALE, {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
  timeZone: EVENT_TIME_ZONE
});

const clockFormatter = new Intl.DateTimeFormat(EVENT_LOCALE, {
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
  timeZone: EVENT_TIME_ZONE
});

function extractText(source: EventLike | string) {
  if (typeof source === 'string') return source.toLowerCase();
  return `${source.title} ${source.description ?? ''}`.toLowerCase();
}

export function inferEventCategory(source: EventLike | string): EventCategoryKey {
  const text = extractText(source);

  for (const category of Object.keys(MATCHERS) as EventCategoryKey[]) {
    if (MATCHERS[category].some((keyword) => text.includes(keyword))) {
      return category;
    }
  }

  return 'community';
}

export function getEventTheme(source: EventLike | string): EventCategoryTheme {
  return THEMES[inferEventCategory(source)];
}

export function formatEventDay(value: string | Date) {
  // Keep event formatting deterministic across SSR and hydration.
  return dayFormatter.format(new Date(value));
}

export function formatEventClock(value: string | Date) {
  return clockFormatter.format(new Date(value));
}

export function formatEventRange(start: string | Date, end?: string | Date | null) {
  const startLabel = formatEventClock(start);
  if (!end) return startLabel;
  return `${startLabel} - ${formatEventClock(end)}`;
}
