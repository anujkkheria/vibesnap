import { Post } from "../types";

export const mockPosts: Post[] = [
  {
    id: "1",
    user: {
      id: "1",
      name: "Aarav",
      avatar:
        "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=150&h=150&fit=crop",
    },
    content:
      "Just arrived in New York City! Excited to explore the sights, sounds, and energy of this amazing place. 🗽",
    timestamp: "2 hours ago",
    likes: 67,
    images: [
      "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop",
    ],
    hashtags: ["NYC", "Travel"],
  },
  {
    id: "2",
    user: {
      id: "2",
      name: "Sneha",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    content:
      "Taking a moment to slow down, breathe, and focus on myself. 🌿✨ Self-care isn't selfish – it's necessary. 💕",
    timestamp: "1 day ago",
    likes: 89,
    images: [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop",
    ],
    hashtags: ["SelfCare", "MeTime", "Wellness"],
  },
];
