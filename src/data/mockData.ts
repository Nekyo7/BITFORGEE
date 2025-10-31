export interface User {
  id: string;
  name: string;
  avatar: string;
  location: string;
  helpOffered: number;
  helpReceived: number;
}

export interface SeekerPost {
  id: string;
  title: string;
  description: string;
  category: string;
  urgency: 'low' | 'medium' | 'high';
  user: User;
  createdAt: string;
  responses: number;
  coordinates?: { lat: number; lng: number };
}

export interface GiverPost {
  id: string;
  title: string;
  description: string;
  category: string;
  availability: string;
  user: User;
  createdAt: string;
  interested: number;
  coordinates?: { lat: number; lng: number };
}

export const categories = [
  { id: 'all', name: 'All', icon: '🌟' },
  { id: 'skills', name: 'Skills & Teaching', icon: '📚' },
  { id: 'resources', name: 'Resources', icon: '🎁' },
  { id: 'time', name: 'Time & Labor', icon: '⏰' },
  { id: 'transport', name: 'Transport', icon: '🚗' },
  { id: 'food', name: 'Food & Meals', icon: '🍲' },
  { id: 'care', name: 'Childcare & Eldercare', icon: '👶' },
  { id: 'tech', name: 'Tech Support', icon: '💻' },
  { id: 'other', name: 'Other', icon: '✨' },
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    location: 'Seattle, WA',
    helpOffered: 12,
    helpReceived: 5,
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    location: 'Portland, OR',
    helpOffered: 8,
    helpReceived: 3,
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    location: 'San Francisco, CA',
    helpOffered: 15,
    helpReceived: 7,
  },
  {
    id: '4',
    name: 'David Kim',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    location: 'Oakland, CA',
    helpOffered: 6,
    helpReceived: 4,
  },
  {
    id: '5',
    name: 'Amara Okafor',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    location: 'Berkeley, CA',
    helpOffered: 10,
    helpReceived: 2,
  },
];

export const mockSeekerPosts: SeekerPost[] = [
  {
    id: '1',
    title: 'Need help moving furniture this weekend',
    description: 'Moving to a new apartment and could use 2-3 people to help with heavy furniture. Pizza and drinks provided!',
    category: 'time',
    urgency: 'medium',
    user: mockUsers[0],
    createdAt: '2 hours ago',
    responses: 3,
    coordinates: { lat: 47.6062, lng: -122.3321 },
  },
  {
    id: '2',
    title: 'Looking for tutoring in Spanish',
    description: 'Beginner level, would love to practice conversation once or twice a week.',
    category: 'skills',
    urgency: 'low',
    user: mockUsers[1],
    createdAt: '5 hours ago',
    responses: 7,
    coordinates: { lat: 45.5152, lng: -122.6784 },
  },
  {
    id: '3',
    title: 'Need laptop for online classes',
    description: 'Starting online courses next week but my laptop died. Looking to borrow or get a donation of a working laptop.',
    category: 'resources',
    urgency: 'high',
    user: mockUsers[2],
    createdAt: '1 day ago',
    responses: 2,
    coordinates: { lat: 37.7749, lng: -122.4194 },
  },
  {
    id: '4',
    title: 'Ride to medical appointment',
    description: 'Need transportation to doctor\'s appointment on Thursday morning. About 20 minutes each way.',
    category: 'transport',
    urgency: 'high',
    user: mockUsers[3],
    createdAt: '3 hours ago',
    responses: 5,
    coordinates: { lat: 37.8044, lng: -122.2712 },
  },
  {
    id: '5',
    title: 'Help fixing leaky faucet',
    description: 'Kitchen faucet has been leaking for a week. Not sure how to fix it and would appreciate some guidance.',
    category: 'skills',
    urgency: 'medium',
    user: mockUsers[4],
    createdAt: '6 hours ago',
    responses: 4,
    coordinates: { lat: 37.8716, lng: -122.2727 },
  },
  {
    id: '6',
    title: 'After-school care for my daughter',
    description: 'Looking for someone to watch my 8-year-old daughter from 3-6pm on Tuesdays and Thursdays.',
    category: 'care',
    urgency: 'medium',
    user: mockUsers[0],
    createdAt: '2 days ago',
    responses: 8,
    coordinates: { lat: 47.6205, lng: -122.3493 },
  },
];

export const mockGiverPosts: GiverPost[] = [
  {
    id: '1',
    title: 'Offering web development tutoring',
    description: 'Professional web developer offering free tutoring in HTML, CSS, JavaScript, and React. Happy to help beginners!',
    category: 'skills',
    availability: 'Weekends',
    user: mockUsers[2],
    createdAt: '1 day ago',
    interested: 12,
    coordinates: { lat: 37.7849, lng: -122.4094 },
  },
  {
    id: '2',
    title: 'Free garden vegetables',
    description: 'Have an abundance of tomatoes, zucchini, and cucumbers from my garden. Come pick what you need!',
    category: 'food',
    availability: 'Anytime',
    user: mockUsers[1],
    createdAt: '3 hours ago',
    interested: 8,
    coordinates: { lat: 45.5231, lng: -122.6765 },
  },
  {
    id: '3',
    title: 'Car rides to grocery store',
    description: 'Going to the grocery store every Saturday morning, happy to give rides to neighbors.',
    category: 'transport',
    availability: 'Saturdays 9-11am',
    user: mockUsers[3],
    createdAt: '2 days ago',
    interested: 5,
    coordinates: { lat: 37.8144, lng: -122.2812 },
  },
  {
    id: '4',
    title: 'Computer repair and troubleshooting',
    description: 'IT professional offering free tech support for basic computer issues, virus removal, and software installation.',
    category: 'tech',
    availability: 'Evenings & weekends',
    user: mockUsers[4],
    createdAt: '4 hours ago',
    interested: 15,
    coordinates: { lat: 37.8616, lng: -122.2627 },
  },
  {
    id: '5',
    title: 'Home-cooked meals for elderly',
    description: 'Love cooking and happy to prepare healthy meals for elderly neighbors who need assistance.',
    category: 'food',
    availability: 'Weekdays',
    user: mockUsers[0],
    createdAt: '1 day ago',
    interested: 6,
    coordinates: { lat: 47.6162, lng: -122.3421 },
  },
  {
    id: '6',
    title: 'Yoga classes in the park',
    description: 'Certified yoga instructor offering free community classes every Sunday morning. All levels welcome!',
    category: 'skills',
    availability: 'Sundays 8am',
    user: mockUsers[2],
    createdAt: '5 days ago',
    interested: 23,
    coordinates: { lat: 37.7649, lng: -122.4294 },
  },
];

export const communityStats = {
  totalMembers: 1247,
  connectionsCreated: 856,
  activeGivers: 143,
  hoursContributed: 3421,
};
