import { useState } from "react";

interface GalleryImage {
  url: string;
  type: "image" | "video";
  selected?: boolean;
  selectedIndex?: number;
}

// Mock gallery images for demonstration
const mockImages: GalleryImage[] = [
  {
    url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&h=500&fit=crop",
    type: "image",
    selected: true,
    selectedIndex: 1,
  },
  {
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop",
    type: "image",
  },
  {
    url: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=500&h=500&fit=crop",
    type: "video",
  },
  {
    url: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=500&h=500&fit=crop",
    type: "image",
  },
  {
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&h=500&fit=crop",
    type: "video",
  },
  {
    url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop",
    type: "image",
  },
  {
    url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=500&h=500&fit=crop",
    type: "image",
  },
  {
    url: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=500&h=500&fit=crop",
    type: "video",
  },
  {
    url: "https://images.unsplash.com/photo-1552083375-1447ce886485?w=500&h=500&fit=crop",
    type: "image",
  },
];

export function useGalleryImages() {
  const [images] = useState<GalleryImage[]>(mockImages);

  return { images };
}
